export async function getAnimeTop() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime`);
  const data = await response.json();
  return data;
}

export async function getMangaTop() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/manga`);
  const data = await response.json();
  return data;
}
