import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { getAnimeTop } from "~/lib/fetch-data";
import { AnimeApiProps } from "~/types/api-props";

export default async function TopAnime() {
  const animeData = await getAnimeTop();

  return (
    <Carousel>
      <CarouselContent>
        {animeData.data.map((anime: AnimeApiProps) => (
          <CarouselItem
            key={anime.mal_id}
            className="basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="flex justify-center">
              <Image
                src={anime.images.jpg.image_url}
                alt={anime.title}
                width={250}
                height={250}
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
              <h1>{anime.title}</h1>
              <h1>⭐{anime.score}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
