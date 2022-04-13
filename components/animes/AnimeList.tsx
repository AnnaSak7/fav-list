import React from 'react'
import AnimeItem from './AnimeItem'
import {List} from '../../models/Types'

const AnimeList: React.FC<{animes: List}> = (props) => {
  return (
    <ul>
        {props.animes.map((anime: any)=> (
          <AnimeItem 
            key={anime.id}
            id={anime.id}
          image={anime.image}
          title={anime.title}
          genre={anime.genre}
          />
        ))}
    </ul>
  )
}

export default AnimeList