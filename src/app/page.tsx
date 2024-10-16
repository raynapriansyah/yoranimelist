import TopAnimeSlide from "~/components/top-anime-slide";
import TopMangaSlide from "~/components/top-manga-slide";

export default async function Home() {
  return (
    <div>
      <TopAnimeSlide />
      <br />
      <br />
      <TopMangaSlide />
    </div>
  );
}
