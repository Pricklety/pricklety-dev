'use client';
import React, { useState, useEffect } from "react";
import "./globals.css";

// Header Component
const Header = () => {
  return (
    <header className="header"> 
    <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
    <nav className="nav">
      <a href="/">
        
      </a>
      <ul className="nav-links">
        <li><a href="https://jammerdash.fandom.com">wiki</a></li>
        <li><a href="https://shop.jammerdash.com">store</a></li>
        <li><a href="#">triumph</a></li>
        <li><a href="#">levels</a></li>
        <li><a href="/featured_artists">musicians</a></li>
        <li><a href="#">forums</a></li>
        <li><a href="/info/game">info</a></li>
      </ul>
    </nav>
  </header>
  
  );
};

const UserStats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch('https://api.jammerdash.com/v1/account/users');
        const data = await response.json();
  
        // Ensure totalUsers is a valid number
        setStats({
          totalUsers: Array.isArray(data.users) ? data.users.length : 0
        });
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
  
    fetchUserStats();
  }, []);


  return (
    <div className="stats">
      <h3>User Stats</h3>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Multiplayer Games Online: 0</p>
      <p>Online Users: 0</p>
    </div>
  );
};

// Main Component
const Main = () => {
    return (
        <main>
          <div className="content">
            {/* Background Video */}
            <video className="background-video" src="video.mp4" autoPlay loop muted />
            
            <section className="news">
              <h2>News</h2>
              <div className="news-item">
                <h3>Welcome to Jammer Dash!</h3>
                <p>Hey there!</p>
              </div>
              <div className="news-item">
                <h3>nothing. really. that&apos;s it.</h3>
                <p>gg</p>
              </div>
            </section>
            <aside className="sidebar">
              {/* Add UserStats Component Here */}
              <UserStats />
              
              <div className="buttons">
                  <a href="https://github.com/Pricklety/Jammer-Dash/releases/latest"><button className="button windows">Download Jammer Dash</button></a>
                  <a href="https://shop.jammerdash.com"><button className="button linux">Support Jammer Dash</button></a>
              </div>
            </aside>
          </div>
        </main>
      );
    }      
// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Pricklety. All rights reserved.</p>
      <div className="social-media">
        <a href="https://twitter.com/JammerDash">Twitter</a>
        <a href="mailto:support@jammerdash.com">Support mail</a>
        <a href="https://discord.gg/CCQKHtQefy">Discord</a>
      </div>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
