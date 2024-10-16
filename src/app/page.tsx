import Link from "next/link";
import TopAnime from "~/components/top-anime";
import TopManga from "~/components/top-manga";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-between mt-4 px-4 py-2">
        <h1 className="font-bold text-xl text-cyan-800">Top Anime</h1>
        <Link href="/top-anime" className="*:hover:scale-100">
          See All
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </Link>
      </div>
      <TopAnime />
      <div className="h-1 mt-1 rounded-md bg-cyan-800" />
      <div className="flex justify-between mt-4 px-4 py-2">
        <h1 className="font-bold text-xl text-cyan-800">Top Manga</h1>
        <Link href="/top-manga" className="*:hover:scale-100">
          See All
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </Link>
      </div>
      <TopManga />
      <div className="h-1 mt-1 rounded-md bg-cyan-800" />
    </div>
  );
}
