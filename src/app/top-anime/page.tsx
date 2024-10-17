import * as React from "react";
import Image from "next/image";
import { getAnimeTop } from "~/lib/fetch-data";
import { AnimeApiProps } from "~/types/api-props";

export default async function Page() {
  const anime = await getAnimeTop();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 md:gap-4">
      {anime.data.map((anime: AnimeApiProps) => {
        return (
          <div key={anime.mal_id}>
            <div className="mt-8 ">
              <div>
                <Image
                  src={anime.images.jpg.image_url}
                  alt="imageAnime"
                  width={800}
                  height={800}
                  className="aspect-square rounded-md"
                />
              </div>
              <div className="font-bold text-[12px] md:text-[14px] lg:text-md text-center justify-center">
                <h1>{anime.title}</h1>
                <h1>⭐{anime.score}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
