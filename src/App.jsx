import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import GitHubComponent from './components/GitHubComponent'
import Goals from './components/Goals'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      {/* div that holds all components for the site */}
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Goals />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
