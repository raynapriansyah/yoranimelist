"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TopAnimeSlide() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  if (!data) return <p></p>;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((anime: any) => {
          return (
            <CarouselItem
              key={anime.mal_id}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={anime.images.jpg.image_url}
                  alt="imageAnimeTop"
                  width={250}
                  height={250}
                  className="aspect-square"
                />
              </div>
              <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
                <h1>{anime.title}</h1>
                <h1>⭐{anime.score}</h1>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
