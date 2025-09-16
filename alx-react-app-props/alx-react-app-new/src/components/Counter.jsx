import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      border: '2px solid #4CAF50', 
      borderRadius: '10px', 
      margin: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#333' }}>Counter Application</h2>
      <p style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        color: '#2196F3'
      }}>
        Current Count: {count}
      </p>
      <div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#FF9800',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;