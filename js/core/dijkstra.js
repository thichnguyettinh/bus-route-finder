function dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const unvisited = new Set();

        // Khởi tạo
        for (let station in stations) {
            distances[station] = Infinity;
            previous[station] = null;
            unvisited.add(station);
        }
        distances[start] = 0;

        while (unvisited.size > 0) {
            // Tìm trạm chưa thăm có khoảng cách nhỏ nhất
            let current = null;
            let minDist = Infinity;
            for (let station of unvisited) {
                if (distances[station] < minDist) {
                    minDist = distances[station];
                    current = station;
                }
            }

            if (current === null || current === end) break;
            unvisited.delete(current);

            // Cập nhật khoảng cách đến các trạm láng giềng
            const neighbors = edges.filter(e => 
                e.from === current || e.to === current
            );

            for (let edge of neighbors) {
                const neighbor = edge.from === current ? edge.to : edge.from;
                if (!unvisited.has(neighbor)) continue;

                const newDist = distances[current] + edge.distance;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    previous[neighbor] = current;
                }
            }
        }

        // Truy vết đường đi
        const path = [];
        let current = end;
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }

        return {
            distance: distances[end],
            path: path[0] === start ? path : []
        };
    }