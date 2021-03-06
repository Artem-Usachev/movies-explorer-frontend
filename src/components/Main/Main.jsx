import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Student from '../Student/Student'
import Portfolio from '../Portfolio/Portfolio'
import Technology from '../Technology/Technology'
import Project from '../Project/Project'
import InformationSheet from '../Information-sheet/Information-sheet'
const Main = ({ isAuth }) => {
  return (
    <>
      <Header isAuth={isAuth} />
      <InformationSheet />
      <Project />
      <Technology />
      <Student />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Main
