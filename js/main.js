let mapManager;
let resultsManager;

document.addEventListener('DOMContentLoaded', function () {

    mapManager = new MapManager();
    resultsManager = new ResultsManager(mapManager);

    initSearchableDropdowns();

    bindEvents();

    initMobileSidebar();

    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});


function initSearchableDropdowns() {
    setupSearchableDropdown(
        'startStationInput',
        'startStation',
        'startStationList',
        'startStationDropdown'
    );

    setupSearchableDropdown(
        'endStationInput',
        'endStation',
        'endStationList',
        'endStationDropdown'
    );
}

function setupSearchableDropdown(inputId, hiddenId, listId, containerId) {
    const input = document.getElementById(inputId);
    const hidden = document.getElementById(hiddenId);
    const list = document.getElementById(listId);
    const container = document.getElementById(containerId);

    function populateList(filter = '') {
        list.innerHTML = '';
        const filterLower = filter.toLowerCase();

        let hasResults = false;
        for (let id in stations) {
            const name = stations[id].name;
            if (filterLower === '' || name.toLowerCase().includes(filterLower)) {
                hasResults = true;
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.dataset.value = id;
                item.textContent = name;

                if (hidden.value === id) {
                    item.classList.add('selected');
                }

                item.addEventListener('click', function () {
                    selectItem(id, name);
                });

                list.appendChild(item);
            }
        }

        if (!hasResults) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results-dropdown';
            noResults.textContent = 'Không tìm thấy trạm phù hợp';
            list.appendChild(noResults);
        }
    }

    function selectItem(id, name) {
        hidden.value = id;
        input.value = name;
        hideDropdown();
    }

    function showDropdown() {
        populateList(input.value);
        list.classList.add('show');
    }

    function hideDropdown() {
        list.classList.remove('show');
    }

    input.addEventListener('focus', function () {
        showDropdown();
    });

    input.addEventListener('input', function () {
        hidden.value = '';
        populateList(input.value);
        list.classList.add('show');
    });
    document.addEventListener('click', function (e) {
        if (!container.contains(e.target)) {
            hideDropdown();
        }
    });

    input.addEventListener('keydown', function (e) {
        const items = list.querySelectorAll('.dropdown-item');
        let highlighted = list.querySelector('.dropdown-item.highlighted');
        let index = Array.from(items).indexOf(highlighted);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (index < items.length - 1) {
                if (highlighted) highlighted.classList.remove('highlighted');
                items[index + 1].classList.add('highlighted');
                items[index + 1].scrollIntoView({ block: 'nearest' });
            } else if (index === -1 && items.length > 0) {
                items[0].classList.add('highlighted');
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (index > 0) {
                if (highlighted) highlighted.classList.remove('highlighted');
                items[index - 1].classList.add('highlighted');
                items[index - 1].scrollIntoView({ block: 'nearest' });
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlighted) {
                const id = highlighted.dataset.value;
                const name = highlighted.textContent;
                selectItem(id, name);
            }
        } else if (e.key === 'Escape') {
            hideDropdown();
        }
    });
}


function bindEvents() {
    const findBtn = document.getElementById('findRoutesBtn');
    findBtn.addEventListener('click', handleFindRoutes);
}


function handleFindRoutes() {
    const startHidden = document.getElementById('startStation');
    const endHidden = document.getElementById('endStation');

    const start = startHidden.value;
    const end = endHidden.value;


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

function initMobileSidebar() {
    const toggleBtn = document.getElementById('mobileToggleBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (!toggleBtn || !sidebar || !overlay) return;

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        toggleBtn.classList.add('sidebar-open');
        toggleBtn.innerHTML = '<i data-feather="x"></i>';
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        toggleBtn.classList.remove('sidebar-open');
        toggleBtn.innerHTML = '<i data-feather="menu"></i>';
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    function toggleSidebar() {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    toggleBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            toggleBtn.classList.remove('sidebar-open');
            toggleBtn.innerHTML = '<i data-feather="menu"></i>';
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }
    });
}