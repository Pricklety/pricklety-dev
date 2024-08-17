
export default function Home() {
  return (
    <main>
      
      <header className="flex flex-col justify-center items-center h-auto py-10">
        <h1 className="text-4xl mb-2">Pricklety&apos;s about page</h1>
        <h1 className="mb-4">(written by prick himself)</h1>
        <img
          src={"https://media1.tenor.com/m/--6HY8Fev9cAAAAC/oke-yamada-ryo.gif"}
          alt="Loading..."
          className="max-w-full h-auto"
        />
      </header>
      <div className="flex flex-col items-center justify-center">
        <h1>I&apos;m a 17y/o game developer from Austria!</h1>
        <h1>
          I made{" "}
          <a
            href="https://jammerdash.com"
            className="text-blue-400 underline"
            target="_blank"
          >
            Jammer Dash
          </a>
        </h1>
        <h1 className="py-12">
          I also play a LOT of{" "}
          <a
            href="https://osu.ppy.sh/users/31770885"
            className="text-purple-400 underline"
            target="_blank"
          >
            osu!
          </a>{" "}
          and stream on{" "}
          <a
            href="https://twitch.tv/prickletylive"
            className="text-purple-800 underline"
            target="_blank"
          >
            Twitch
          </a>
        </h1>

        <h1 className="py-8 text-xl">Links:</h1>
        <h2>
          <a
            href="https://youtube.com/@Pricklety"
            className="text-red-600 underline"
            target="_blank"
          >
            YouTube
          </a>
        </h2>
        <h2>
          <a
            href="https://discord.gg/CCQKHtQefy"
            className="text-blue-400 underline"
            target="_blank"
          >
            Discord - Game
          </a>
        </h2>
        <h2>
          <a
            href="https://discord.gg/CkMz7SYUX9"
            className="text-blue-400 underline"
            target="_blank"
          >
            Discord - private
          </a>
        </h2>
        <h2>
          <a
            href="https://twitch.tv/prickletylive"
            className="text-purple-800 underline"
            target="_blank"
          >
            Twitch
          </a>
        </h2>
        <h2>
          <a
            href="https://x.com/pricklety"
            className="text-cyan-300 underline"
            target="_blank"
          >
            Twitter
          </a>
        </h2>
        <h2>
          <a
            href="https://osu.ppy.sh/users/31770885"
            className="text-purple-400 underline"
            target="_blank"
          >
            osu!
          </a>
        </h2>
        <h2>
          <a
            href="https://instagram.com/pricklety"
            className="text-pink-500 underline"
            target="_blank"
          >
            Instagram
          </a>
        </h2>
      </div>
      
    </main>
  );
}
