import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MoviesPlace from '../MoviesPlace/MoviesPlace'
import Menu from '../Menu/Menu'
const Movies = ({ cardCount, handleSaveFilm, handleDeleteFilm, savedMovies }) => {
  return (
    <>
      <Header homePageBtnCondition={'disable'} />
      <Menu activeLinkMovies={'menu__active-link'} />
      <MoviesPlace
        isSaved={false}
        cardCount={cardCount}
        handleSaveFilm={handleSaveFilm}
        handleDeleteFilm={handleDeleteFilm}
        savedMovies={savedMovies}
      />
      <Footer />
    </>
  )
}
export default Movies
