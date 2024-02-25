import React, { useEffect, useState } from "react";
// import Header from './components/Header'
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Timeline from "./components/Timeline";
import Bookshelf from "./components/Bookshelf";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className="light-bg text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Projects />
          <Goals />
          <Timeline />
          <Bookshelf />
          <Contact />
          <Footer />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
