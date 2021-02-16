import React from 'react'
import { Item } from '@/domain/models/movies-result-models'

type Props = {
  item: Item
}

const MovieItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <>
      <img
        data-testid="movie-item-image-url"
        src={item.images[0].url}
        style={{ width: '100px', height: '100px', display: 'inline-block' }}
      ></img>
    </>
  )
}

export default MovieItem
