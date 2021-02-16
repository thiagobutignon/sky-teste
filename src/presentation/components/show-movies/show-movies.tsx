import { Item } from '@/domain/models/movies-result-models'
import React, { useContext } from 'react'
import { MovieContext, MovieItem, MovieError } from '@/presentation/components'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const ShowMovies: React.FC = () => {
  const { state } = useContext(MovieContext)

  return (
    <>
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          }
        ]}
      >
        <ul data-testid="movies-list">
          {state.items.length ? (
            state.items.map((item: Item) => (
              <MovieItem key={item.hashKey} item={item} />
            ))
          ) : (
            <MovieError />
          )}
        </ul>
      </Carousel>
      <h2>Filmes</h2>
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          }
        ]}
      >
        <ul>
          {state.items.length ? (
            state.items.map((item: Item) => (
              <MovieItem key={item.hashKey} item={item} />
            ))
          ) : (
            <MovieError />
          )}
        </ul>
      </Carousel>
    </>
  )
}

export default ShowMovies
