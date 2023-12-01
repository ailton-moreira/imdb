import axios from "axios";
import Results from "@/app/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  /* const { data } = await axios({
    method: 'GET',
    url: `${process.env.BASE_URL}/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    headers: {
      'Content-Type': 'application/json', 
    },
  })*/

  const res = await fetch(
    `${process.env.BASE_URL}/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  const { results } = await res.json();
  


  return (
    <div className="flex">
      <Results results={results}/>
    </div>
  );
}
