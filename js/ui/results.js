
class ResultsManager {
    constructor(mapManager) {
        this.mapManager = mapManager;
        this.resultsDiv = document.getElementById('results');
        this.currentOptions = [];
    }

    displayResults(routeOptions) {
        this.currentOptions = routeOptions;
        
        if (routeOptions.length === 0) {
            this.showNoResults();
            return;
        }
        
        let html = '';
        routeOptions.forEach((option, index) => {
            html += this.createResultItem(option, index);
        });

        this.resultsDiv.innerHTML = html;
        
        // Khởi tạo Feather Icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Tự động hiển thị tuyến tốt nhất
        this.showRouteOnMap(0);
    }

 
    createResultItem(option, index) {
        const isBest = index === 0;
        const routeNames = option.routes.map(id => busRoutes[id].name).join(' → ');
        
        // Tạo mô tả chi tiết các đoạn đường
        const segmentDescriptions = option.segments.map((segment, i) => {
            const routeName = busRoutes[option.routes[i]].name;
            const stationNames = segment.map(id => stations[id].name);
            return `${routeName}: ${stationNames[0]} → ${stationNames[stationNames.length - 1]}`;
        }).join('<br>');
        
        const transferText = option.transfers === 0 ? 
            'Không cần chuyển tuyến' : 
            `${option.transfers} lần chuyển tuyến`;
        
        return `
            <div class="result-item ${isBest ? 'best' : ''}" onclick="resultsManager.showRouteOnMap(${index})">
                <div class="route-header">
                    <span class="route-badge">${routeNames}</span>
                    <span class="route-distance">${option.distance.toFixed(1)} km</span>
                </div>
                <div class="route-path" style="font-size: 12px; margin-top: 8px;">
                    ${segmentDescriptions}
                </div>
                <div class="transfer-info">
                    <i data-feather="repeat" class="info-icon"></i> ${transferText}
                </div>
                ${isBest ? '<div class="best-route-badge"><i data-feather="award" class="info-icon"></i> Tuyến ngắn nhất</div>' : ''}
            </div>
        `;
    }

    showNoResults(message) {
        const defaultMessage = 'Chọn điểm đi và điểm đến để tìm tuyến xe buýt phù hợp';
        this.resultsDiv.innerHTML = `
            <div class="no-results">
                <i data-feather="map" class="no-results-icon"></i>
                <p>${message || defaultMessage}</p>
            </div>
        `;
        
        // Khởi tạo Feather Icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

  
    async showRouteOnMap(optionIndex) {
        // Cập nhật trạng thái active
        document.querySelectorAll('.result-item').forEach((item, i) => {
            if (i === optionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const option = this.currentOptions[optionIndex];
        const isBest = optionIndex === 0;
        
        await this.mapManager.showRoute(option, isBest);
    }
}