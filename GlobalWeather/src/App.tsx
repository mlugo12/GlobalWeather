function App() {


  return (
    <>
      <header>
        <a href="/">
          <img src="/public/logo.svg" width="197" height="40" alt="Global Weather logo" />
        </a>
        
        <div className="dropdown">
          <button id="dropdown-button" className="dropdown-button"> Units</button>
          <div id="dropdown-menu" className="dropdown-content">
            <a href="#">Metric</a>
            <a href="#">Imperial</a>
          </div>
        </div>

      </header>
      <main>

        <h1>How's the sky looking today?</h1>
        <input type="text" name="search" id="search" />
        <button type="submit">Search</button>
  



      </main>
      <footer>
        <p>&copy; 2024 Global Weather. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
