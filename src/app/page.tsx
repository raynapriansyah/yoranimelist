import Link from "next/link";
import TopAnimeSlide from "~/components/top-anime-slide";
import TopMangaSlide from "~/components/top-manga-slide";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Top Anime</h1>
        <Link href="/top-anime" className="*:hover:scale-100">
          See All
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </Link>
      </div>
      <TopAnimeSlide />
      <br />
      <br />
      <div className="flex justify-between">
        <h1>Top Manga</h1>
        <Link href="/top-manga" className="*:hover:scale-100">
          See All
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </Link>
      </div>
      <TopMangaSlide />
    </div>
  );
}
