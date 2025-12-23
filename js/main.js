let mapManager;
let resultsManager;

document.addEventListener('DOMContentLoaded', function() {
  
    mapManager = new MapManager();
    resultsManager = new ResultsManager(mapManager);
    
    initDropdowns();
    
    bindEvents();
    
    console.log('✅ Ứng dụng đã khởi động thành công!');
});


function initDropdowns() {
    const startSelect = document.getElementById('startStation');
    const endSelect = document.getElementById('endStation');

    for (let id in stations) {
        const option1 = document.createElement('option');
        option1.value = id;
        option1.textContent = stations[id].name;
        startSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = id;
        option2.textContent = stations[id].name;
        endSelect.appendChild(option2);
    }
}


function bindEvents() {
    const findBtn = document.getElementById('findRoutesBtn');
    findBtn.addEventListener('click', handleFindRoutes);
}


function handleFindRoutes() {
    const startSelect = document.getElementById('startStation');
    const endSelect = document.getElementById('endStation');
    
    const start = startSelect.value;
    const end = endSelect.value;


    if (!start || !end) {
        alert('Vui lòng chọn điểm đi và điểm đến!');
        return;
    }

    if (start === end) {
        alert('Điểm đi và điểm đến không được trùng nhau!');
        return;
    }


    const routeOptions = findBusRoutes(start, end);
    
   
    if (routeOptions.length === 0) {
        const startName = stations[start].name;
        const endName = stations[end].name;
        resultsManager.showNoResults(
            `Không tìm thấy tuyến đường từ ${startName} đến ${endName}. Vui lòng chọn điểm khác!`
        );
    } else {
        resultsManager.displayResults(routeOptions);
    }
}


window.resultsManager = null;
window.addEventListener('load', () => {
    window.resultsManager = resultsManager;
});