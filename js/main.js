let mapManager;
let resultsManager;

document.addEventListener('DOMContentLoaded', function () {

    mapManager = new MapManager();
    resultsManager = new ResultsManager(mapManager);

    initSearchableDropdowns();
    initModal();

    bindEvents();

    initSidebarToggle();

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
        showModal('Vui lòng chọn điểm đi và điểm đến!');
        return;
    }

    if (start === end) {
        showModal('Điểm đi và điểm đến không được trùng nhau!');
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

function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (!toggleBtn || !sidebar || !overlay) return;

    if (window.innerWidth > 768) {
        toggleBtn.classList.add('sidebar-open');
        toggleBtn.innerHTML = '<i data-feather="x"></i>';
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    function openSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('open');
            overlay.classList.add('show');
        } else {
            sidebar.classList.remove('collapsed');
        }
        toggleBtn.classList.add('sidebar-open');
        toggleBtn.innerHTML = '<i data-feather="x"></i>';

        updateMapSize();

        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    function closeSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        } else {
            sidebar.classList.add('collapsed');
        }
        toggleBtn.classList.remove('sidebar-open');
        toggleBtn.innerHTML = '<i data-feather="menu"></i>';

        updateMapSize();

        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    function updateMapSize() {
        setTimeout(() => {
            if (mapManager && mapManager.map) {
                mapManager.map.invalidateSize();
            }
        }, 350);
    }

    function toggleSidebar() {
        const isMobile = window.innerWidth <= 768;
        const isOpen = isMobile ? sidebar.classList.contains('open') : !sidebar.classList.contains('collapsed');

        if (isOpen) {
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

            if (!sidebar.classList.contains('collapsed')) {
                toggleBtn.classList.add('sidebar-open');
                toggleBtn.innerHTML = '<i data-feather="x"></i>';
            } else {
                toggleBtn.classList.remove('sidebar-open');
                toggleBtn.innerHTML = '<i data-feather="menu"></i>';
            }
        } else {
            sidebar.classList.remove('collapsed');
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            toggleBtn.classList.remove('sidebar-open');
            toggleBtn.innerHTML = '<i data-feather="menu"></i>';
        }
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    });
}

let modalOverlay;
let modalMessage;

function initModal() {
    modalOverlay = document.getElementById('notificationModal');
    modalMessage = document.getElementById('modalMessage');
    const closeBtn = document.getElementById('closeModalBtn');
    const okBtn = document.getElementById('modalOkBtn');

    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('show');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (okBtn) okBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) closeModal();
        });
    }
}

function showModal(message) {
    if (modalMessage) modalMessage.textContent = message;
    if (modalOverlay) modalOverlay.classList.add('show');
}