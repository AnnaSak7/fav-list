import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/WatchList.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.aniapi.com/v1/random/anime/10/true");
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
            <div className={styles.watchlistCard}>
              <div className={styles.imageContainer}>
                <img
                  src={anime.cover_image}
                  alt={anime.titles.en || anime.titles.js}
                />
              </div>
              <div className={styles.description}>
                <Link
                  href={`./animes/${anime.anilist_id}`}
                  key={anime.anilist_id}
                >
                  <a>
                    <h3>{anime.titles.en || anime.titles.jp}</h3>
                  </a>
                </Link>
                <p>{anime.anilist_id}</p>
                <p>
                  Genre: {anime.genres[0]} {anime.genres[1]}
                </p>
                <p>Episodes: {anime.episodes_count}</p>
                <p>Year: {anime.season_year}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default WatchList;
