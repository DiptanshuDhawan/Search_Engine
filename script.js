const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchHistoryDiv = document.getElementById('searchHistory');


const loadSearchHistory = () => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.forEach(item => {
        addHistoryItem(item);
    });
};


const addHistoryItem = (item) => {
    const historyItem = document.createElement('div');
    historyItem.textContent = item;
    historyItem.onclick = () => {
        searchInput.value = item;
        performSearch(item);
    };
    searchHistoryDiv.appendChild(historyItem);
};


const performSearch = (query) => {
    alert(`Searching for: ${query}`);
 
};


searchButton.onclick = () => {
    const query = searchInput.value.trim();
    if (query) {
      
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(query)) {
            history.push(query);
            localStorage.setItem('searchHistory', JSON.stringify(history));
            addHistoryItem(query);
        }
        performSearch(query);
        searchInput.value = '';
    }
};


window.onload = loadSearchHistory;
