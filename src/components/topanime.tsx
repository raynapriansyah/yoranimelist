import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Image from "next/image";

export default async function TopAnime() {
  async function getAnimeTop() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/top/anime`
    );
    const data = await response.json();
    return data;
  }

  const anime = await getAnimeTop();

  return (
    <div>
      <Carousel>
        <CarouselContent className="p-2">
          {anime.data.map((data: any) => {
            return (
              <CarouselItem
                key={data.mal_id}
                className="basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={data.images.jpg.image_url}
                    alt="imageAnime"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
                  <h1>{data.title}</h1>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
