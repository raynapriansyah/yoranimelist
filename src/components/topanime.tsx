import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";

export default async function TopAnime() {
  async function getAnimeTop() {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();
    return data;
  }

  const animes = await getAnimeTop();

  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1 gap-4">
                {animes.data.map((data: any) => {
                  return (
                    <Card key={data.mal_id}>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={data.images.jpg.image_url}
                          alt="image"
                          width={1280}
                          height={720}
                        />
                      </CardContent>
                      <div className="text-center">
                        <h1>{data.title}</h1>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
