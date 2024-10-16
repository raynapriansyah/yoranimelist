// "use client";

// import Image from "next/image";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// type AnimeApi = {
//   mal_id: number;
//   title: string;
//   score: number;
//   images: {
//     jpg: {
//       image_url: string;
//     };
//   };
// };

// export default function TopAnimeSlide() {
//   const [anime, setAnime] = useState<AnimeApi[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAnime(data.data);
//       });
//   }, []);

//   if (!anime) return <p>no data anime</p>;

//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//     >
//       <CarouselContent>
//         {anime.map((anime: AnimeApi) => {
//           return (
//             <CarouselItem
//               key={anime.mal_id}
//               className="basis-1/3 md:basis-1/4 lg:basis-1/6"
//             >
//               <div className="mb-4 flex justify-center">
//                 <Image
//                   src={anime.images.jpg.image_url}
//                   alt="imageAnimeTop"
//                   width={250}
//                   height={250}
//                   className="aspect-square image-cover"
//                 />
//               </div>
//               <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
//                 <h1>{anime.title}</h1>
//                 <h1>⭐{anime.score}</h1>
//               </div>
//             </CarouselItem>
//           );
//         })}
//       </CarouselContent>
//     </Carousel>
//   );
// }
"use client";

import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

export default function TopAnimeSlide() {
  const [anime, setAnime] = useState<AnimeApi[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    async function fetchAnime() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        // Check if data is valid
        if (data && data.data) {
          setAnime(data.data);
        } else {
          throw new Error("No anime data found");
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setIsLoading(false); // Data fetched or error handled
      }
    }

    fetchAnime();
  }, []);

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>{error}</p>;

  // No anime data
  if (anime.length === 0) return <p>No anime found</p>;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {anime.map((anime: AnimeApi) => (
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
                className="aspect-square object-cover"
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
