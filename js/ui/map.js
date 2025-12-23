
class MapManager {
    constructor() {
        // Khởi tạo bản đồ
        this.map = L.map('map').setView([10.7769, 106.7009], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);

        this.stationMarkers = {};
        this.routePolylines = []; 
        this.routeLabels = []; 
        this.initStations();
    }

   
    initStations() {
        for (let id in stations) {
            const station = stations[id];
            const marker = L.circleMarker([station.lat, station.lng], {
                radius: 8,
                fillColor: '#42a5f5',
                color: 'white',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(this.map);
            
            marker.bindPopup(`<b>${station.name}</b>`);
            this.stationMarkers[id] = marker;
        }
        
        const hoangSaMarker = L.circleMarker([16.0, 112.0], {
            radius: 8,
            fillColor: '#42a5f5',
            color: 'white',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);
     
        hoangSaMarker.bindTooltip('Hoàng Sa<br>(Việt Nam)', {
            permanent: true,
            direction: 'right',
            className: 'island-label',
            offset: [10, 0]
        });
        hoangSaMarker.bindPopup('<b>Hoàng Sa (Việt Nam)</b>');
        
        const truongSaMarker = L.circleMarker([10.0, 114.0], {
            radius: 8,
            fillColor: '#42a5f5',
            color: 'white',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);
        
        truongSaMarker.bindTooltip('Trường Sa<br>(Việt Nam)', {
            permanent: true,
            direction: 'right',
            className: 'island-label',
            offset: [10, 0]
        });
        truongSaMarker.bindPopup('<b>Trường Sa (Việt Nam)</b>');
    }

  
    clearRoutes() {
        this.routePolylines.forEach(p => this.map.removeLayer(p));
        this.routePolylines.length = 0;
        
        
        this.routeLabels.forEach(label => this.map.removeLayer(label));
        this.routeLabels.length = 0;
        
        // Reset màu trạm 
        for (let id in this.stationMarkers) {
            this.stationMarkers[id].setStyle({
                fillColor: '#42a5f5',
                radius: 8
            });
        }
    }

    
    async showRoute(option, isBest) {
        this.clearRoutes();
        
        
        const colors = isBest ? 
            ['#66bb6a', '#42a5f5', '#ab47bc', '#66bb6a', '#42a5f5'] : // Xanh lá, xanh dương, tím lặp lại
            ['#ff9800', '#ff9800', '#ff9800', '#ff9800', '#ff9800']; // Màu cam cho các tuyến khác
        
        // Đổi màu đỏ 
        option.fullPath.forEach(stationId => {
            if (this.stationMarkers[stationId]) {
                this.stationMarkers[stationId].setStyle({
                    fillColor: '#f44336',
                    radius: 10
                });
            }
        });
        
        // Vẽ từng đoạn đường với màu khác nhau
        for (let i = 0; i < option.segments.length; i++) {
            const segment = option.segments[i];
            const color = colors[i % colors.length];
            const weight = isBest ? 5 : 4;
            const opacity = isBest ? 0.8 : 0.7; 
            try {
                const coordinates = segment.map(id => 
                    `${stations[id].lng},${stations[id].lat}`
                ).join(';');

                const response = await fetch(
                    `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`
                );
                
                if (!response.ok) throw new Error('OSRM error');

                const data = await response.json();
                
                if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
                    const routeCoordinates = data.routes[0].geometry.coordinates.map(
                        coord => [coord[1], coord[0]]
                    );

                    const polyline = L.polyline(routeCoordinates, {
                        color: color,
                        weight: weight,
                        opacity: opacity
                    }).addTo(this.map);

                    // Thêm label cho tuyến
                    if (isBest) {
                        const midPoint = routeCoordinates[Math.floor(routeCoordinates.length / 2)];
                        const label = L.marker(midPoint, {
                            icon: L.divIcon({
                                className: 'route-label',
                                html: `<div style="background:${color};color:white;padding:2px 6px;border-radius:3px;font-size:11px;font-weight:bold;">${busRoutes[option.routes[i]].name}</div>`,
                                iconSize: [60, 20]
                            })
                        }).addTo(this.map);
                        
                        this.routeLabels.push(label);
                    }

                    this.routePolylines.push(polyline);
                } else {
                    this.drawStraightLine(segment, color, weight, opacity);
                }
            } catch (error) {
                console.error('Lỗi OSRM:', error);
                this.drawStraightLine(segment, color, weight, opacity);
            }
        }

        // Thu phóng bản đồ
        if (this.routePolylines.length > 0) {
            const group = L.featureGroup(this.routePolylines);
            this.map.fitBounds(group.getBounds(), { padding: [50, 50] });
        }
    }

  
    drawStraightLine(segment, color, weight, opacity) {
        const coordinates = segment.map(id => [stations[id].lat, stations[id].lng]);
        const polyline = L.polyline(coordinates, {
            color: color,
            weight: weight,
            opacity: opacity
        }).addTo(this.map);
        this.routePolylines.push(polyline);
    }
}