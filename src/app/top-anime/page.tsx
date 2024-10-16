import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2 md:gap-4">
      {anime.data.map((data: any) => {
        return (
          <Card key={data.mal_id}>
            <CardContent className="mt-8 ">
              <div>
                <Image
                  src={data.images.jpg.image_url}
                  alt="imageAnime"
                  width={800}
                  height={800}
                  className="aspect-square"
                />
              </div>
              <div className="font-bold text-[12px] md:text-[14px] lg:text-md text-center justify-center">
                <h1>{data.title}</h1>
                <h1>⭐{data.score}</h1>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
