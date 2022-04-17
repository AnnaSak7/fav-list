import { type } from 'os'
import React from 'react'
import AnimeList from '../components/animes/AnimeList'
import {List} from '../models/Types'
import { MongoClient } from 'mongodb'




// const DUMMY_LIST = [
//   {
//     id: 'a1',
//     title: 'Attack on Titans',
//     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1837557.jpg&f=1&nofb=1',
//     genre: 'action',
//   },
//   {
//     id: 'a2',
//     title: 'Demon Slayer',
//     image: 'https://media.nichegamer.com/wp-content/uploads/2021/06/24114131/Demon-Slayer-Kimetsu-no-Yaiba-The-Hinokami-Chronicles-06-24-21-1-768x432.jpg',
//     genre: 'action',
//   },
//   {
//     id: 'a3',
//     title: 'Another',
//     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F707160-anime-series-characters-misaki-mei-sakakibara-kouichi-another-1.jpg&f=1&nofb=1',
//     genre: 'horror',
//   },
//   {
//     id: 'a4',
//     title: 'SAMURAI CHAMPLOO',
//     image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd1%2Fa5%2F30%2Fd1a530522bd877eac9e1fa05b43e1e8e--art-school-samurai.jpg&f=1&nofb=1',
//     genre: 'Adventure, Comedy, Samurai'
//   }
// ]

const HomePage:React.FC<{animes: List}> = (props) => {
  return (
  
      <AnimeList animes={props.animes}/>

  )
}

export default HomePage


const MONGO_URI_1:any = process.env.MONGO_URI_1

export async function getStaticProps(){
  // fetch data from an API
  const client = await MongoClient.connect(MONGO_URI_1);
  const db = client.db()
  const animeCollection = db.collection('animes')

  const animes = await animeCollection.find().toArray()

  client.close()

  return{
    props: {
      animes: animes.map(anime => ({
        id: anime._id.toString(),
        title: anime.title,
        image: anime.image,
        genre: anime.genre
      }))
    },
    //pre-generated on the server every 10 seconds
     revalidate: 10,
  }

} 

