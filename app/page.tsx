

const App: React.FC = () => {
    return (
        <div className="homepage">
 
          
            <header className="header">
                <div className="logo">
                    <img src="/logo.png" alt="Jammer Dash Logo" />
                </div>
                <nav className="nav"> 
                  <ul>
                    <li><a href="#features">features</a></li>
                    <li><a href="./levels" className="disabled">levels</a></li>
                    <li><a href="./leaderboard" className="disabled">triumph</a></li>
                    <li><a href="https://jammerdash.fandom.com">wiki</a></li>
                    <li><a href="#community" className="disabled">community</a></li>
                    <li><a href="https://shop.jammerdash.com">store</a></li> 
                    <li><a href="./featured_artists">music artists</a></li>
                    <li><a href="./info/game">info</a></li> 
                </ul>
                </nav>
            </header>
            
            <section className="hero">
                
                <div className="hero-content">
                  <div className="hero-logo">
                    <img src="/logo.png" alt="Jammer Dash Logo" />
                </div>
                    <h1 className="title">Jammer Dash</h1>
                    <p className="subtitle">Destroy objects to the beat in this free 2D rhythm game!</p>
                    <div className="download-buttons">
                        <a href="https://github.com/Pricklety/Jammer-Dash/releases/latest" className="button windows">Download (Windows and Linux)</a>
                    </div>
                    <p className="subtitle">Note: Linux requires Proton GE 9.22</p>
                </div>

                
            </section>

            <section id="features" className="features">
                <h2>Features</h2>
                <div className="feature-list">
                    <div className="feature">
                        <h3>Rhythm-Based Gameplay</h3>
                        <p>Move and destroy objects on the beat to rack up points!</p>
                    </div>
                    <div className="feature">
                        <h3>Vibrant Art Style</h3>
                        <p>Inspired by games like Muse Dash, Geometry Dash, and osu!, with anime-style visuals.</p>
                    </div>
                    <div className="feature">
                        <h3>Customizable Tracks</h3>
                        <p>Play with your own music tracks or explore new ones!</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="social-media">
                    <a href="https://twitter.com/JammerDash" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://discord.gg/CCQKHtQefy" target="_blank" rel="noopener noreferrer">Discord</a>
                </div>
                <p>© 2024 Jammer Dash. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
