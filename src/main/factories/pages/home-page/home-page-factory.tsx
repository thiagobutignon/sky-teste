import React from 'react'
import { Home } from '@/presentation/pages'
import { makeRemoteLoadMovies } from '@/main/factories/usecases'

export const makeHome: React.FC = () => {
  return <Home loadMovies={makeRemoteLoadMovies()} />
}
