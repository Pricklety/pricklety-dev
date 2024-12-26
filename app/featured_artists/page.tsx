'use client';
import React, { useState, useEffect } from 'react';
import './App.css';

const gridItems = [
    // Green FAs
    { 
      name: "Javiere Inniss", country: "United States", code: "US", tier: "green", dateAdded: "04-28-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1734055131476275200/bbiRoUOi_200x200.jpg", 
      links: [ 
        { url: "https://twitter.com/JaviereInniss", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/channel/UCq46YHdEUysXLzgznOuO9EA", icon: "icons/youtube.svg" } 
      ]
    },
    { 
      name: "NikoN1nja", country: "Russia", code: "RU", tier: "green", dateAdded: "02-17-2024", followerCount: 0, 
      image: "https://cdn.discordapp.com/avatars/660855661394919434/5e902f822b56bc0bd03b51e01c3903b7.png?size=1024", 
      links: [ { url: "https://www.youtube.com/@nikoninja6691", icon: "icons/youtube.svg" } ] 
    },
    { 
      name: "Hinkik", country: "Sweden", code: "SE", tier: "green", dateAdded: "02-17-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/816287685652443137/TjiODBDU_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/HinkikEDM", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/user/HinkikProductions", icon: "icons/youtube.svg" } 
      ]
    },
    { 
      name: "EbenAP", country: "United Kingdom", code: "GB", tier: "green", dateAdded: "06-19-2024", followerCount: 0, 
      image: "https://cdn.discordapp.com/avatars/616665872362242059/a_5465ee679ff931ae323126dd9952ca6c.gif?size=1024", 
      links: [ 
        { url: "https://discord.gg/ebenap", icon: "icons/discord.svg" }, 
        { url: "https://x.com/EbenAPSounds", icon: "icons/twitter.svg" }, 
        { url: "https://youtube.com/@ebenapsounds", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "DERREL", country: "Indonesia", code: "ID", tier: "green", dateAdded: "05-26-2024", followerCount: 0, 
      image: "https://cdn.discordapp.com/avatars/921733564742115358/d12d6ea69fb11862bbc821a36d1f20cb.png?size=1024", 
      links: [ 
        { url: "https://x.com/DERRELMusic", icon: "icons/twitter.svg" }, 
        { url: "https://youtube.com/@derrelmusic?si=EpLddTsqXEuS7AdO", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "Misticalkai", country: "United States", code: "US", tier: "green", dateAdded: "11-24-2024", followerCount: 0, 
      image: "https://cdn.discordapp.com/avatars/792702360778440734/3e555406a32af8c1048f560c2b4d748f.png?size=1024", 
      links: [ 
        { url: "https://discord.gg/gzyuFvXqH7", icon: "/icons/discord.svg" }, 
        { url: "https://twitter.com/Misticalkailol", icon: "/icons/twitter.svg" }, 
        { url: "https://www.youtube.com/@Misticalkai", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "Random", country: "United States", code: "US", tier: "green", dateAdded: "12-26-2024", followerCount: 0, 
      image: "https://cdn.discordapp.com/avatars/1259700525226790942/db6744f9df2f3f9c654f134e5f30cdc9.png?size=1024", 
      links: [ 
        { url: "https://discord.gg/avpPFwU23g", icon: "/icons/discord.svg" }, 
        { url: "https://x.com/randomdev06?s=21", icon: "/icons/twitter.svg" }, 
        { url: "https://youtube.com/@randomdev06?si=vAScuCMS4dMd176E", icon: "icons/youtube.svg" }
      ]
    },
  
    // Yellow FAs
    { 
      name: "F-777", country: "Canada", code: "CA", tier: "yellow", dateAdded: "12-20-2023", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1545206214782373889/HQa9VJ76_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/F777_official", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/@F-777", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "Waterflame", country: "Norway", code: "NO", tier: "yellow", dateAdded: "02-24-2024", followerCount: 0, 
      image: "https://static.wixstatic.com/media/f4c666_f4e0e1e3fa874e5d8f8bf75cbd8ff530~mv2.png/v1/fill/w_74,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f4c666_f4e0e1e3fa874e5d8f8bf75cbd8ff530~mv2.png", 
      links: [ 
        { url: "https://twitter.com/WaterflameMusic", icon: "icons/twitter.svg" }, 
        { url: "http://www.youtube.com/user/waterflame89", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "Creo", country: "Austria", code: "AT", tier: "yellow", dateAdded: "02-22-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1345880187154669568/J-I0EZ-5_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/creo_music", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/creomusic", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "ColBreakz", country: "Spain", code: "ES", tier: "yellow", dateAdded: "02-17-2024", followerCount: 0, 
      image: "https://yt3.googleusercontent.com/cwbUMv5a0pEqCh4EWO_a9vDQ1gd7IJccdM1N3NSnwfgthERzsLT2QqtgqUZip6N1nnHtxmywLA=s900-c-k-c0x00ffffff-no-rj", 
      links: [ 
        { url: "discord.com/invite/Mf3hEMbHcn", icon: "icons/discord.svg" }, 
        { url: "https://twitter.com/ColBreakz", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/user/ColBreakz", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "Astedroid", country: "Finland", code: "FI", tier: "yellow", dateAdded: "04-30-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1852415463206125568/M4Yr3uYq_400x400.jpg", 
      links: [ 
        { url: "https://discord.gg/QZBrZ94mBg", icon: "icons/discord.svg" }, 
        { url: "https://twitter.com/astedroid_", icon: "icons/twitter.svg" }, 
        { url: " https://youtube.com/@astedroidmusic", icon: "icons/youtube.svg" }
      ]
    },
  
    // Orange FAs
    { 
      name: "MYUKKE.", country: "Japan", code: "JP", tier: "orange", dateAdded: "06-28-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1222857948105338881/ZPeEUwUn_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/youtalkq69310", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/c/MYUKKE", icon: "icons/youtube.svg" }
      ]
    },
  
    // Red FAs
    { 
      name: "Xomu", country: "Australia", code: "AU", tier: "red", dateAdded: "12-20-2023", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1761302245138968576/jra50L5j_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/XomuEDM", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/c/XomuEDM", icon: "icons/youtube.svg" }
      ]
    },
    { 
      name: "BoomKitty", country: "United States", code: "US", tier: "red", dateAdded: "02-17-2024", followerCount: 0, 
      image: "https://pbs.twimg.com/profile_images/1843809709020852224/nsFb_ANT_400x400.jpg", 
      links: [ 
        { url: "https://twitter.com/BoomKittyMusic", icon: "icons/twitter.svg" }, 
        { url: "https://www.youtube.com/boomkitty", icon: "icons/youtube.svg" }
      ]
    },
  ];
  

const App: React.FC = () => {
  // Sorting states
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'followers' | 'tier'>('name'); // Default sort by name

  
  const tierDescriptions = {
    green: "Green FAs (or Highly-rated Featured Artists) are artists that allow 100% of their music in the game. You may use everything they made, including collabs.",
    yellow: "Yellow FAs (or Yellow-rated Featured Artists) are artists that allow more than 50% of their music in the game. This may mean either all their non-collab songs, and/or non-commercial songs.",
    orange: "Orange FAs (or Orange-rated Featured Artists) are artists that allow between 25-50% of their music in the game. Usually it's artists who have a selected few amount of songs that can be used everywhere and/or music made specifically for Jammer Dash.",
    red: "Red FAs (or Low-rated Featured Artists) are artists that allow only specific songs in Jammer Dash (Usually less than 25% of their total amount).",
  };
  
  const tierColors = {
    green: "#8BC34A", // Green
    yellow: "#FFC107", // Yellow
    orange: "#FF9800", // Orange
    red: "#F44336", // Red
  };

  const CountryFlag: React.FC<{ code: string; alt: string }> = ({ code, alt }) => {
    const [flagUrl, setFlagUrl] = React.useState<string | null>(null);
  
    React.useEffect(() => {
      const fetchFlag = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
          const data = await response.json();
          setFlagUrl(data[0].flags.svg);  // The flag URL
        } catch (error) {
          console.error('Error fetching flag:', error);
        }
      };
  
      fetchFlag();
    }, [code]);
  
    return (
      <img src={flagUrl || '/default-flag.svg'} alt={alt} className="flag" />
    );
  };
  // Get the sorted items based on the current sort criteria
  const sortItems = (items: typeof gridItems) => {
    switch (sortBy) {
      case 'name':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case 'date':
        return items.sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
      case 'followers':
        return items.sort((a, b) => b.followerCount - a.followerCount); // Highest first
      case 'tier':
        return items.sort((a, b) => a.tier.localeCompare(b.tier));
      default:
        return items;
    }
  };

  // Get the sorted items based on the current sort criteria
  const sortedItems = sortItems(gridItems);

  return (
    <div>
      <header>
        <h1>Featured Artists</h1>
        <p> 
          There are 4 tiers on Featured Artists: Green, Yellow, Orange, and Red.
        </p>
        <ul>
          {Object.entries(tierDescriptions).map(([tier, description]) => (
            <li key={tier} style={{ color: tierColors[tier as keyof typeof tierColors] }}>
              {description}
            </li>
          ))}
        </ul>
        {/* Sorting Controls */}
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
            <option value="name">Alphabetically</option>
            <option value="date">Date Added</option>
            <option value="followers">Follower Count</option>
            <option value="tier">Tier</option>
          </select>
        </div>
      </header>
      <div className="grid-container">
        {sortedItems.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ borderColor: tierColors[item.tier as keyof typeof tierColors] }}
          >
            <div className="profile-pic header">
              {/* Profile Image */}
              <img
                src={item.image || '/default-profile.jpg'} // Fallback to a default profile image if not provided
                alt={`${item.name}'s profile`}
                className="profile-image"
              />
              <CountryFlag code={item.code} alt={`${item.country} flag`} />
              <h3 className="name" style={{ color: tierColors[item.tier as keyof typeof tierColors] }}>
                {item.name}
              </h3>
              <h3 className="date">
                Featured since {item.dateAdded}
              </h3>
            </div>
            <div className="icon-container">
              {item.links.map((link, idx) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={idx}>
                  <img src={link.icon} alt={`icon-${idx}`} className="icon" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
