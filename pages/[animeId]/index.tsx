// domain.com/anime

import {MongoClient, ObjectId} from 'mongodb'
import Head from 'next/head'
import Image from 'next/image'
import AnimeDetails from '../../components/animes/AnimeDetails'
import {List} from '../../models/Types'


const AnimeDetail= (props:any) => {
  return (
     <>
     <Head>
       <title>{props.animeData.title}</title>
       <meta name='description' content={props.animeData.genre} />
     </Head>
    <AnimeDetails image={props.animeData.image}
    title={props.animeData.title}
    genre={props.animeData.genre}
    />
    </>
  )
}

const MONGO_URI_1:any = process.env.MONGO_URI_1

export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGO_URI_1);
  const db = client.db();
  const animeCollection = db.collection('animes');
  const animes = await animeCollection.find({}, { _id: 1 }).toArray()
  client.close()

  return {
    fallback: false,
    paths: animes.map(anime => ({params: {animeId: anime._id.toString()}}))
  }
}

export async function getStaticProps(context:any){
  //fetch data for a single anime
  const animeId:any = context.params.animeId;

  const client = await MongoClient.connect(MONGO_URI_1);
  const db = client.db();
  const animeCollection = db.collection('animes');
  const selectedAnime:any = await animeCollection.findOne({_id: ObjectId(animeId)})
  return {
    props: {
      animeData:{
        id: selectedAnime._id.toString(),
        title: selectedAnime.title,
        image: selectedAnime.image,
        genre: selectedAnime.genre
      }
    } 
  }
}

export default AnimeDetail