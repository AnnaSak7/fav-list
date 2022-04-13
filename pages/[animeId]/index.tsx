// domain.com/anime

import Image from 'next/image'
import AnimeDetails from '../../components/animes/AnimeDetails'

const AnimeDetail= () => {
  return (
     <>
    <AnimeDetails image='https://wallpaperwaifu.com/wp-content/uploads/2019/10/pillars-kimetsu-no-yaiba-thumb-1500x844.jpg'
    title="Kimetsu"
    genre="action"
    description="Tanjiro fights vampire like demons to find a cure to save sister" 
    />
    </>
  )
}

export default AnimeDetail