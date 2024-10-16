"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type MangaApi = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score: number;
};

export default function TopMangaSlide() {
  const [manga, setManga] = useState<MangaApi[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/manga?limit=8`)
      .then((res) => res.json())
      .then((data) => {
        setManga(data.data);
      });
  }, []);

  if (!manga) return <p></p>;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {manga.map((manga: MangaApi) => {
          return (
            <CarouselItem
              key={manga.mal_id}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={manga.images.jpg.image_url}
                  alt="imageAnimeTop"
                  width={250}
                  height={250}
                  className="aspect-square"
                />
              </div>
              <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
                <h1>{manga.title}</h1>
                <h1>⭐{manga.score}</h1>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
