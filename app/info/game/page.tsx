
'use client';

const JammerDashInfo = () => {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to top, #FC4778, #3952F5)",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
          padding: "20px",
          borderRadius: "15px",
          background: "linear-gradient(to right, #4DC9E6, #210CAE)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Jammer Dash Info Page
        </h1>
      </header>

      {/* Panels Container */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Panel Component */}
        {panels.map((panel, index) => (
          <section
            key={index}
            style={{
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(5px)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = "translateY(-5px)";
              target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.75)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = "translateY(0)";
              target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
            }}
          >
            <h2 style={{ color: "#000000", marginBottom: "10px" }}>{panel.title}</h2>
            {panel.content.map((line, idx) => (
              <p key={idx} style={{ marginBottom: "10px" }}>
                {line}
              </p>
            ))}
          </section>
        ))}
      </main>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          borderRadius: "15px",
          background: "linear-gradient(to right, #4DC9E6, #210CAE)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p>
          &copy; 2024 Jammer Dash. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const panels = [
  {
    title: "How do you become staff?",
    content: [
      "Step 1: Get scouted. Be active and above Level 5 and be known in the community.",
      "Step 2: Staff Polls. You receive a \"Staff Candidate\" role, and polls check your eligibility.",
      "Step 3: Administrators will contact you for an interview if you're selected.",
      "Step 4: Application process. Prove yourself to join staff officially.",
    ],
  },
  {
    title: "Is getting a level approved hard?",
    content: [
      "Level standards are low, so most levels get approved.",
      "Decisions are made by JD Moderators and JD Admins.",
    ],
  },
  {
    title: "Why did you copy [game]?",
    content: [
      "I did not copy any game, but I was inspired by a few:",
      "- Gameplay inspired by Muse Dash",
      "- Editor inspired by Geometry Dash",
      "- UI inspired by osu!lazer",
    ],
  },
  {
    title: "What are the level stages?",
    content: [
      "- Uploaded: New levels.",
      "- Dead: No updates in 3 months.",
      "- WIP: Levels in progress.",
      "- Approved: Community-voted with leaderboards.",
      "- Rated: Staff-approved with online scores.",
      "- Great: Over-voted, no staff decision needed.",
    ],
  },
  {
    title: "How do I obtain \"JD Moderator?\"",
    content: [
      "Become a Community Staff (see How do you become staff on the top-left panel).",
      "Stay active for 2 months and create high-quality levels.",
      "Get at least 500 jams and provide helpful feedback.",
    ],
  },
  {
    title: "Stat Info",
    content: [
      'Jams: Unknown',
      <>
        SP: Skill-based. See our{" "}
        <a
          href="https://jammerdash.fandom.com/wiki/Skill_points"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          Fandom page
        </a>
        .
      </>,
      'Plays: Count of finished maps.',
    ],
  },  
  {
    title: "Release Information",
    content: ["Released: December 6, 2023.", "Created: June 28, 2023."],
  },
  {
    title: "What are the features of Jammer Dash supporter?",
    content: [
      "- Priority in level ranking.",
      "- Special Discord server access (soon).",
      "- Support priority.",
      "- Participate in dev tournaments.",
      "- Profile effects.",
      "- Enhanced chat visibility.",
    ],
  },
  {
    title: "Links",
    content: [
      <>
        <a
          href="https://github.com/Pricklety/Jammer-Dash"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          GitHub
        </a>
      </>,
      <>
        <a
          href="https://www.youtube.com/@Jammer_Dash"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          YouTube
        </a>
      </>,
      <>
        <a
          href="https://discord.gg/CCQKHtQefy" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          Discord
        </a>
      </>,
      <>
        <a
          href="https://twitter.com/@JammerDash"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          Twitter
        </a>
      </>,
      <>
        <a
          href="https://bsky.app/profile/jammerdash.com" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0000EE", textDecoration: "underline" }}
        >
          Bluesky
        </a>
      </>,
    ],
  },  
];

export default JammerDashInfo;
