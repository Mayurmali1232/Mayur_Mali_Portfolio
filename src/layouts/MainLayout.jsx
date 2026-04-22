import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Cursor from '../components/Cursor';
import ScrollProgress from '../components/ScrollProgress';
import ErrorBoundary from '../components/ErrorBoundary';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
//  import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import { initGSAPAnimations } from '../animations/gsapAnimations';

const MainLayout = () => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    console.log('MainLayout useEffect, loading=', loading);

    // global error handlers
    const handleError = (msg, url, line, col, error) => {
      // Extract proper error message from ErrorEvent
      let errorMessage = 'Unknown error occurred';
      
      if (typeof msg === 'string') {
        errorMessage = msg;
      } else if (msg && msg.message) {
        errorMessage = msg.message;
      } else if (error && error.message) {
        errorMessage = error.message;
      } else if (msg && msg.toString && msg.toString() !== '[object ErrorEvent]') {
        errorMessage = msg.toString();
      }
      
      setErrorMsg(errorMessage);
      console.error('Global error', msg, url, line, col, error);
    };
    
    const handleRejection = (e) => {
      let errorMessage = 'Unhandled promise rejection';
      
      if (e && e.reason) {
        if (typeof e.reason === 'string') {
          errorMessage = e.reason;
        } else if (e.reason && e.reason.message) {
          errorMessage = e.reason.message;
        } else if (e.reason && e.reason.toString) {
          errorMessage = e.reason.toString();
        }
      }
      
      setErrorMsg(errorMessage);
      console.error('Unhandled rejection', e);
    };
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      try {
        initGSAPAnimations();
      } catch (err) {
        console.error('GSAP init failed', err);
      }
    }
  }, [loading]);

  if (errorMsg) {
    return (
        <div>
          <h1 className="text-2xl font-bold mb-4">Runtime Error</h1>
          <pre className="whitespace-pre-wrap text-sm">{errorMsg}</pre>
        </div>
     
    );
  }

  return (
    <div>
          <div className="fixed inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/30 -z-10" />
    <ErrorBoundary>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="min-h-screen"
          style={{ opacity: 1 }}
        >
          <ScrollProgress />
          <Cursor />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            {/* <Testimonials /> */}
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </ErrorBoundary>
  </div>
    
  );
};

export default MainLayout;