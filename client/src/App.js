useEffect(() => {
    // Načtení dat z API
    fetch('/api/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
        .catch(error => console.error('Error fetching data:', error));
}, []);
