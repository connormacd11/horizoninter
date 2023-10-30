import React, { useCallback, useEffect } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Footer from '../components/Footer';



// Import your "horbg1" image
import horinter11 from '../public/horinter11.png'; // Adjust the path accordingly

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: You can add custom logic after particles are loaded if needed
  }, []);

  useEffect(() => {
    // Optional: You can perform additional setup or actions here
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${horinter11})`, // Set your background image here
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional: Fixed background
        width: '100%',
        height: '100vh',
      }}
    >
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-start xl:-mt-32 xl:pt-48 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Your Compass In<br /> The{' '}
            <span className='text-accent'>Digital Universe</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            With expert guidance in branding, design, advertising, and web & app development, we illuminate your path, helping you avoid pitfalls and capitalize on opportunities. Think of us as your steadfast partner, providing clarity, direction, and innovative solutions tailored to your unique needs in the digital realm. Your vision, our expertise—let’s explore the possibilities together.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full lg:block md:hidden sl:hidden'
        >
          
          <Avatar />
        
        </motion.div>
      </div>
      <Footer />
      </div>

  );
};

export default Home;


