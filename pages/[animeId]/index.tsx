// domain.com/anime

import Image from 'next/image'
import AnimeDetails from '../../components/animes/AnimeDetails'
import {List} from '../../models/Types'


const AnimeDetail:React.FC<{ image:string, title:string, genre:string}>= (props) => {
  return (
     <>
    <AnimeDetails image={props.image}
    title={props.title}
    genre={props.genre}
    />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
         params: {
        animeId: 'a1',
         }
      },
      { 
        params: {
        animeId: 'a2',
      }
    },
      { 
        params: {
        animeId: 'a3',
      }
    }
    ]
  }
}

export async function getStaticProps(context:any){
  //fetch data for a single anime
  const animeId = context.params.animeId;

  return {
    props: {
      animeData:{
        id: 'a1',
        title: 'Attack on Titans',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1837557.jpg&f=1&nofb=1',
        genre: 'action',

      }
    } 
  }
}

export default AnimeDetail