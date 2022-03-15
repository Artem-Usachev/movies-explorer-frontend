import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MoviesPlace from '../MoviesPlace/MoviesPlace'
import Menu from '../Menu/Menu'
const SaveMovies = ({ cardCount, handleDeleteFilm, savedMovies }) => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <Menu activeLinkSavedMovies={'menu__active-link'} />
      <MoviesPlace isSaved cardCount={cardCount} handleDeleteFilm={handleDeleteFilm} savedMovies={savedMovies} />
      <Footer />
    </>
  )
}
export default SaveMovies
