
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
                <div style="margin-top: 8px; color: #666; font-size: 12px;">
                    🔄 ${transferText}
                </div>
                ${isBest ? '<div style="margin-top:8px;color:#2e7d32;font-weight:600;font-size:12px;">⭐ Tuyến ngắn nhất</div>' : ''}
            </div>
        `;
    }

    showNoResults(message) {
        const defaultMessage = 'Chọn điểm đi và điểm đến để tìm tuyến xe buýt phù hợp';
        this.resultsDiv.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>${message || defaultMessage}</p>
            </div>
        `;
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