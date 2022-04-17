import Head from 'next/head';
import { useRouter } from 'next/router'
import { type } from 'os';
import React from 'react'
import NewAnimeForm from '../../components/animes/NewAnimeForm'

type animeData = {
  title:string,
  image:string,
  genre:string,
 //description: enteredDescription,
};

const NewAnimePage = () => {
  const router = useRouter();

    const addAnimeHandler= async (enteredAnimeData:animeData) => {
      const res = await fetch('/api/new-anime', {
        method: 'POST',
        body: JSON.stringify(enteredAnimeData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json();

      console.log(data)

      router.push('/')
    }

  return (
    <>
    <Head>
         <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your favorite anime to the list."
        />
      </Head>
    <NewAnimeForm onAddAnime={addAnimeHandler} />
    </>
  )
}

export default NewAnimePage