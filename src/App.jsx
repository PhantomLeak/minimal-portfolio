import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Timeline from "./components/Timeline";
import Bookshelf from "./components/Bookshelf";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

// Create a custom theme for Mantine components
const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: [
      '#eef2ff',
      '#dbeafe',
      '#bfdbfe',
      '#93c5fd',
      '#60a5fa',
      '#3b82f6',
      '#2563eb',
      '#1d4ed8',
      '#1e40af',
      '#1e3a8a',
    ],
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Textarea: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});

function App() {
  // Add scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MantineProvider theme={theme}>
      {/* Scroll progress indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-light to-accent-dark z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="light-bg text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto py-8">
          <div className="space-y-24">
            <section className="animate-fade-in">
              <Intro />
            </section>
            
            <section className="animate-fade-in">
              <Projects />
            </section>
            
            <section className="animate-fade-in">
              <Goals />
            </section>
            
            <section className="animate-fade-in">
              <Timeline />
            </section>
            
            <section className="animate-fade-in">
              <Bookshelf />
            </section>
            
            <section className="animate-fade-in">
              <Contact />
            </section>
            
            <Footer />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
