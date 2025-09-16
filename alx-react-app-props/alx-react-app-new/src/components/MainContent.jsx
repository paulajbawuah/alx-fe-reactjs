const MainContent = () => {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      minHeight: '400px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '20px 0'
    }}>
      <h2 style={{ color: 'darkgreen', textAlign: 'center' }}>
        Welcome to Our Travel Community
      </h2>
      <p style={{ 
        fontSize: '18px',
        lineHeight: '1.6',
        textAlign: 'center'
      }}>
        Discover amazing cities and connect with fellow travelers around the world.
      </p>
    </main>
  );
};

export default MainContent;
