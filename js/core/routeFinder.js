/**
 * Kiểm tra xem một đoạn đường có thể đi bằng một tuyến xe buýt không
 * 
 * @param {string[]} routeStations - Danh sách trạm của tuyến xe
 * @param {string[]} segment - Đoạn đường cần kiểm tra
 * @returns {boolean}
 */
function canTravelByRoute(routeStations, segment) {
    for (let i = 0; i < segment.length - 1; i++) {
        const idx1 = routeStations.indexOf(segment[i]);
        const idx2 = routeStations.indexOf(segment[i + 1]);
        
        // Phải có cả 2 trạm và phải liên tiếp nhau
        if (idx1 === -1 || idx2 === -1 || Math.abs(idx1 - idx2) !== 1) {
            return false;
        }
    }
    return true;
}

function findAllRouteCombinations(path) {
    const n = path.length;
    const MAX_TRANSFERS = 2;
    
    // dp[i] = mảng các cách để đến trạm thứ i
    const dp = Array(n).fill(null).map(() => []);
    
    // Khởi tạo
    dp[0] = [{ 
        segments: [], 
        routes: [], 
        transfers: 0,
        distance: 0 
    }];
    
    for (let i = 0; i < n; i++) {
        if (dp[i].length === 0) continue;
        
        // Thử mở rộng từ trạm i đến các trạm j > i
        for (let j = i + 1; j < n; j++) {
            const segment = path.slice(i, j + 1);
            
            // Tính khoảng cách của đoạn này
            let segmentDistance = 0;
            for (let k = 0; k < segment.length - 1; k++) {
                const from = segment[k];
                const to = segment[k + 1];
                
                const edge = edges.find(e => 
                    (e.from === from && e.to === to) ||
                    (e.from === to && e.to === from)
                );
                
                if (edge) {
                    segmentDistance += edge.distance;
                } else {
                    segmentDistance = Infinity;
                    break;
                }
            }
            
            if (segmentDistance === Infinity) continue;
            
            // Tìm các tuyến xe có thể đi đoạn này
            const validRoutes = [];
            for (let routeId in busRoutes) {
                if (canTravelByRoute(busRoutes[routeId].stations, segment)) {
                    validRoutes.push(routeId);
                }
            }
            
            if (validRoutes.length > 0) {
                for (let prevState of dp[i]) {
                    for (let routeId of validRoutes) {
                        const lastRoute = prevState.routes.length > 0 ? 
                            prevState.routes[prevState.routes.length - 1] : null;
                        
                        // Bỏ qua tuyến trùng lặp
                        if (lastRoute === routeId) {
                            continue;
                        }
                        
                        // Tính số lần chuyển tuyến
                        const newTransfers = prevState.routes.length === 0 ? 
                            0 : prevState.transfers + 1;
                        
                        if (newTransfers <= MAX_TRANSFERS) {
                            dp[j].push({
                                segments: [...prevState.segments, segment],
                                routes: [...prevState.routes, routeId],
                                transfers: newTransfers,
                                distance: prevState.distance + segmentDistance
                            });
                        }
                    }
                }
            }
        }
    }
    
    return dp[n - 1] || [];
}

/*
 Tính điểm ưu tiên cho một phương án (càng nhỏ càng tốt)
 Công thức: khoảng_cách + (số_lần_chuyển_tuyến * 2)
 */
function calculatePriority(distance, transfers) {
    return distance + (transfers * 2);
}


function findBusRoutes(start, end) {
    // Bước 1: Tìm đường đi vật lý ngắn nhất
    const result = dijkstra(start, end);
    
    if (result.path.length === 0) {
        return [];
    }

    // Bước 2: Tìm tất cả cách kết hợp tuyến xe buýt
    const combinations = findAllRouteCombinations(result.path);
    
    if (combinations.length === 0) {
        return [];
    }

    // Bước 3: Tính điểm ưu tiên và sắp xếp
    const routeOptions = combinations.map(combo => {
        const priority = calculatePriority(result.distance, combo.transfers);
        return {
            routes: combo.routes,
            segments: combo.segments,
            transfers: combo.transfers,
            distance: result.distance,
            priority: priority,
            fullPath: result.path
        };
    });

    // Sắp xếp theo độ ưu tiên
    routeOptions.sort((a, b) => {
        if (a.transfers !== b.transfers) {
            return a.transfers - b.transfers;
        }
        return a.distance - b.distance;
    });

    return routeOptions;
}