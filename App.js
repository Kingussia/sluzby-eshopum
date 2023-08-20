import React, { useState, useEffect } from 'react';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Načtení dat z API
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ backgroundColor: 'grey', height: '100vh', padding: '20px' }}>
      <h1>Seznam objednávek</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button>Tlačítko 1</button>
        <button>Tlačítko 2</button>
        <button>Tlačítko 3</button>
        <button>Tlačítko 4</button>
      </div>
      <div>
        {orders.map(order => (
          <div key={order.number} style={{ marginBottom: '10px' }}>
            <input type="checkbox" />
            <button style={{ marginLeft: '10px' }}>
              {order.number} - {order.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
