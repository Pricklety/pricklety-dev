import Image from 'next/image';
import './about.css';
export default function Home() {
  return (
    <main className="relative h-full w-full flex">
        {/* Main Content */}
        <div className="flex-grow absolute z-10 flex flex-col items-center text-white p-3 space-y-4 max-w-3xl mx-auto">
          {/* Header Section */}
          <header className="bg-black bg-opacity-60 rounded-lg p-8 shadow-lg flex items-center w-xl">
            {/* Profile Picture */}
            <div className="relative w-24 h-24">
              <Image
                src="/profile-pic.png" 
                alt="Profile Picture"
                className="rounded-lg border-2 border-black shadow-full"
                width={64} // Adjusted width for the profile picture
                height={64} // Adjusted height for the profile picture
              />
            </div>
            {/* Text Section */}
            <div>
              <h1 className="text-3xl mb-4 font-bold">Pricklety&apos;s About Page</h1>
              <h2 className="text-lg mb-4 italic w-35">(written by prick himself)</h2>
            </div>
          </header>

          {/* Bio Section */}
          <div className="bg-black bg-opacity-40 rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl mb-4 font-semibold">About Me</h1>
            <p>I&apos;m a 17-year-old game developer from{" "}
            <a
                href="https://en.wikipedia.org/wiki/Croatia"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >Croatia!</a> I made{" "}
              <a
                href="https://jammerdash.com"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jammer Dash
              </a>{" "}
              and I also occasionally stream on{" "}
              <a
                href="https://twitch.tv/prickletyy"
                className="text-purple-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitch
              </a>
              
              <p className="mt-4">I was born on the 15th of September, 2007 in Zagreb, Croatia, and I&apos;ve since been doing absolutely nothing.</p>
              <p className='mt-4'>I love Ryo Yamada from Bocchi the Rock, and I love Frieren, Azumanga, languages, geography etc etc</p>
              <p className='mt-4'>I currently live in Sankt Veit an der Glan, Austria; but I plan to move to Tokyo, Japan in the future (atleast by 2035)</p>
              <p className="mt-4">My favorite food is Lasagna (and Sushi) and my favorite drink is Cedevita (you must have this)</p>
              <p className="mt-2 text-xs/3">pronouns: any/all, sexuality: straight</p>
            </p>
          </div>

          {/* Links Section */}
          <div className="bg-black bg-opacity-40 rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Links</h1>
            <div className="grid grid-cols-2 gap-2">
              <a href="https://youtube.com/@Pricklety" className="text-red-500 underline hover:text-red-300" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href="https://discord.gg/CCQKHtQefy" className="text-blue-400 underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                Discord - Jammer Dash
              </a>
              <a href="https://twitch.tv/prickletyy" className="text-purple-500 underline hover:text-purple-600" target="_blank" rel="noopener noreferrer">
                Twitch
              </a>
              <a href="https://x.com/pricklety" className="text-cyan-300 underline hover:text-cyan-100" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://bsky.app/profile/jammerdash.com" className="text-cyan-200 underline hover:text-cyan-100" target="_blank" rel="noopener noreferrer">
              Bluesky
              </a>
              <a>My Discord: @pricklety</a>
            </div>
          </div>

          {/* Favorites Section */}
          <div className="bg-black bg-opacity-40 rounded-lg p-6 shadow-lg space-y-4">
            <h1 className="text-2xl font-semibold mb-4">Favorites & Hobbies</h1>
            <p><span className="font-bold">Favorite anime:{" "}</span><a href="https://en.wikipedia.org/wiki/Bocchi_the_Rock!" className="text-pink-400 underline" target="_blank" rel="noopener noreferrer">Bocchi the Rock!</a></p>
            <p><span className="font-bold">Favorite music genre:{" "}</span><a href="https://en.wikipedia.org/wiki/J-pop" className="text-red-300 underline" target="_blank" rel="noopener noreferrer">J-Pop</a></p>
            <p><span className="font-bold">Free time:{" "}</span>Playing instruments, playing games and learning <a href="https://en.wikipedia.org/wiki/Japanese_language" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">Japanese</a></p>
            <p><span className="font-bold">Work:{" "}</span> Game developer</p>
          </div>
          <div className="bg-black bg-opacity-40 rounded-lg p-6 shadow-lg space-y-4">
            <h1 className="text-2xl font-semibold mb-4">Friends (their discord @) (i love you guys)</h1>
            <p>monpipi (mon)</p>
            <p>d_i_m_i (dimi)</p>
            <p>froggo4369 (frog)</p>
            <p>glitchedsg (glitch)</p>
            <p>ameameame (defframe)</p>
            <p>nlkku (konro)</p>
            <p>emajakobitch (ema)</p>
            <p>randomdev06 (random)</p>
            </div>
        </div>
    </main>
  );
}
