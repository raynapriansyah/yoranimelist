import Link from "next/link";
import TopAnimeSlide from "~/components/top-anime-slide";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-between mt-8 mb-4 px-4">
        <h1 className="*:hover:scale-100">
          TOP ANIME
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </h1>
        <Link href="/top-anime" className="*:hover:scale-100">
          See All
          <div className="h-1 mt-1 transition duration-300 ease-out rounded-md scale-x-0 bg-cyan-800" />
        </Link>
      </div>
      <TopAnimeSlide />
    </div>
  );
}
