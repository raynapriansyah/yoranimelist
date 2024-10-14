import Link from "next/link";
import TopAnimeSlide from "~/components/top-anime-slide";

export default async function Home() {
  return (
    <div>
      <div className="flex justify-between mt-8 mb-4 px-4">
        <h1 className="border-b-4 border-cyan-800">TOP ANIME</h1>
        <Link href="/top-anime" className="border-b-4 border-cyan-800">
          Lihat Semua
        </Link>
      </div>
      <TopAnimeSlide />
    </div>
  );
}
