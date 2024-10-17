import * as React from "react";
import Image from "next/image";
import { getMangaTop } from "~/lib/fetch-data";
import { MangaApiProps } from "~/types/api-props";

export default async function Page() {
  const manga = await getMangaTop();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 md:gap-4">
      {manga.data.map((manga: MangaApiProps) => {
        return (
          <div key={manga.mal_id}>
            <div className="mt-8 ">
              <div>
                <Image
                  src={manga.images.jpg.image_url}
                  alt="imageManga"
                  width={800}
                  height={800}
                  className="aspect-square rounded-md"
                />
              </div>
              <div className="font-bold text-[12px] md:text-[14px] lg:text-md text-center justify-center">
                <h1>{manga.title}</h1>
                <h1>⭐{manga.score}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
