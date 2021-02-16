import React, { useState, useEffect } from 'react'
import { Layout } from '@/presentation/components/layout'
import { MovieContext, MovieError, ShowMovies } from '@/presentation/components'
import { LoadMovies } from '@/domain/usecases'
import { Item, Movie } from '@/domain/models/movies-result-models'
import { useErrorHandler } from '@/presentation/hooks'
import { Row } from 'antd'

type Props = {
  loadMovies: LoadMovies
}

const HomePage: React.FC<Props> = ({ loadMovies }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState({ ...state, error: error.message })
  })
  const [state, setState] = useState({
    items: [] as Item[],
    movies: [] as Movie[],
    error: '',
    reload: false
  })

  useEffect(() => {
    loadMovies
      .load()
      .then((movieResultModel) =>
        setState({
          ...state,
          movies: movieResultModel[2].movies,
          items: movieResultModel[0].items
        })
      )
      .catch(handleError)
  }, [state.reload])

  return (
    <Layout>
      <Row>
        <MovieContext.Provider value={{ state, setState }}>
          {state.error ? <MovieError /> : <ShowMovies />}
        </MovieContext.Provider>
      </Row>
    </Layout>
  )
}

export default HomePage
