import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { getMangaTop } from "~/api/route";

import { MangaApiProps } from "~/lib/type";

export default async function TopManga() {
  const mangaData = await getMangaTop();

  return (
    <Carousel>
      <CarouselContent>
        {mangaData.data.map((manga: MangaApiProps) => (
          <CarouselItem
            key={manga.mal_id}
            className="basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={manga.images.jpg.image_url}
                alt={manga.title}
                width={250}
                height={250}
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
              <h1>{manga.title}</h1>
              <h1>⭐{manga.score}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
