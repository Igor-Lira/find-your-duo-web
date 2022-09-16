import "./styles/main.css";
import logoImage from "./assets/logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAtBanner } from "./components/CreateAtBanner";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
  bannerUlr: string;
  _count: {
    ads: number;
  };
}
function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20 w-[280] h-[160]">
      <img src={logoImage} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          console.log (game)
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUlr}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <CreateAtBanner />
    </div>
  );
}

export default App;
