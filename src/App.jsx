import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import CodingPlatforms from './components/CodingPlatform'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className='relative min-h-screen w-full bg-slate-950 overflow-x-hidden  selection:bg-cyan-500 selection:text-cyan-900'>
      <div className='flixed top-0 -z-10 h-full w-full'>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full 
        bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
        bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,0.15),rgba(255,255,255,0))]"></div>
        
        </div>
        <div className='container mx-auto px-8'>

      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <CodingPlatforms/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
