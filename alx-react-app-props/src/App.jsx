﻿import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'
import UserContext from './UserContext'
import ProfilePage from './components/ProfilePage'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }

  return (
    <UserContext.Provider value={userData}>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Header />
        
        <div style={{ padding: '20px' }}>
          <WelcomeMessage />

          <ProfilePage />
          
          <Counter />
          
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <UserProfile name="Bob" age="30" bio="Passionate about coding and music" />
          <UserProfile name="Charlie" age="22" bio="Travel enthusiast and food lover" />
          
          <MainContent />
          
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
