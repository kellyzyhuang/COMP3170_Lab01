function App() {
  return (
    <div className="app">
      <section id="content">
        <header>
          <h1>MyTunes</h1>
        </header>
          <main>
            <div className="image">
              <img src="https://kohai.com/wp-content/uploads/2023/04/wave-to-earth.jpg" alt="picture of band"/>
            </div>
            <div className="details">
              <h2>Wave To Earth's Albums</h2>
              <details>
                <summary>0.1 flaws and all</summary>
                  <ul className="list">
                    <li>1. "Bad"</li>
                    <li>2. "Sunny Days"</li>
                    <li>3. "Peach Eyes"</li>
                    <li>4. "Evening Glow"</li>
                    <li>5. "Pink Horizon"</li>
                  </ul>
              </details>
              <details>
                <summary>summer flows 0.02</summary>
                  <ul className="list">
                    <li>1. "Summer Flows"</li>
                    <li>2. "Ride"</li>
                    <li>3. "Seasons"</li>
                    <li>4. "Ocean Floor"</li>
                    <li>5. "Wave."</li>
                  </ul>
              </details>
            </div>
        </main>
      </section>
    </div>
  )
}

export default App
