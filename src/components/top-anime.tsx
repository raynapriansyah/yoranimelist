import Image from "next/image";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type AnimeApi = {
  mal_id: number;
  title: string;
  score: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export default async function TopAnimeSlide() {
  async function getAnimeTop() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }

  const animeData = await getAnimeTop();

  return (
    <Carousel>
      <CarouselContent>
        {animeData.data.map((anime: AnimeApi) => (
          <CarouselItem
            key={anime.mal_id}
            className="basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="mb-4 flex justify-center">
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
