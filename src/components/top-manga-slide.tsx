// "use client";

// import Image from "next/image";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// type MangaApi = {
//   mal_id: number;
//   title: string;
//   score: number;
//   images: {
//     jpg: {
//       image_url: string;
//     };
//   };
// };

// export default function TopMangaSlide() {
//   const [manga, setManga] = useState<MangaApi[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/manga?limit=8`)
//       .then((res) => res.json())
//       .then((data) => {
//         setManga(data.data);
//       });
//   }, []);

//   if (!manga) return <p>no data manga</p>;

//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//     >
//       <CarouselContent>
//         {manga.map((manga: MangaApi) => {
//           return (
//             <CarouselItem
//               key={manga.mal_id}
//               className="basis-1/3 md:basis-1/4 lg:basis-1/6"
//             >
//               <div className="mb-4 flex justify-center">
//                 <Image
//                   src={manga.images.jpg.image_url}
//                   alt="imageMangaTop"
//                   width={250}
//                   height={250}
//                   className="aspect-square"
//                 />
//               </div>
//               <div className="font-bold text-[12px] md:text-[14px] lg:text-lg text-center justify-center">
//                 <h1>{manga.title}</h1>
//                 <h1>⭐{manga.score}</h1>
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

type MangaApi = {
  mal_id: number;
  title: string;
  score: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export default function TopMangaSlide() {
  const [manga, setManga] = useState<MangaApi[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    async function fetchManga() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/manga`);
        if (!res.ok) {
          throw new Error("Failed to fetch manga data");
        }
        const data = await res.json();

        // Validate if the response data has the correct structure
        if (data && data.data) {
          setManga(data.data);
        } else {
          throw new Error("Invalid manga data structure");
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setIsLoading(false); // Data fetched or error handled
      }
    }

    fetchManga();
  }, []);

  // Loading state
  if (isLoading) return <p>Loading manga...</p>;

  // Error state
  if (error) return <p>Error: {error}</p>;

  // No manga data
  if (manga.length === 0) return <p>No manga data available</p>;

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {manga.map((manga: MangaApi) => (
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
                className="aspect-square object-cover"
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
