import React from "react";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://api.aniapi.com/v1/random/anime/5/true");
  const data = await res.json();

  return { props: { animes: data } };
};

const WatchList: React.FC<{ animes: any }> = ({ animes }) => {
  console.log("animes is ", animes);
  return (
    <>
      <Head>
        <title>Anime Watch List</title>
      </Head>
      <div>
        <h1>Watch List</h1>
        {animes.data.map((anime: any) => (
          <>
            <Link href={`./animes/${anime.anilist_id}`} key={anime.anilist_id}>
              <a>
                <h3>{anime.titles.en ? anime.titles.en : anime.titles.jp}</h3>
              </a>
            </Link>
            <p>{anime.anilist_id}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default WatchList;
