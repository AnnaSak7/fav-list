import React from 'react'
import NewAnimeForm from '../../components/animes/NewAnimeForm'

const NewAnimePage: React.FC<{onAddAnime:any }> = (prop) => {
    const addAnimeHandler= () => {

    }

  return (
    <NewAnimeForm onAddAnime={addAnimeHandler} />
  )
}

export default NewAnimePage