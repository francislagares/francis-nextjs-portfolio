import { useState } from 'react';

import Head from 'next/head';

import { NextSeo } from 'next-seo';

import Email from '@/components/ui/Email';
import Loader from '@/components/ui/Loader';
import SocialIcons from '@/components/ui/SocialIcons';

import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className='app'>
      <NextSeo
        title='Francis Lagares - Full Stack Engineer'
        description='Fullstack developer with over a decade of experience in the IT industry.
        Passionate about crafting web applications that seamlessly blend functionality and aesthetics. 
        Specializing in the MERN stack - MongoDB, Express.js, React, and Node.js - with a comprehensive grasp of their interplay. 
        Proficient in a variety of front-end and back-end technologies including HTML, CSS, JavaScript, RESTful APIs, GraphQL, and Git.'
        canonical='https://francislagares.vercel.app'
      />
      <Head>
        <meta
          name='keywords'
          content='Francis Lagares, Full Stack Developer, Web Developer, Software Engineer, 
          Frontend Development, Backend Development, JavaScript, HTML, CSS, React, Node.js, Portfolio'
        />
        <meta name='author' content='Francis Lagares' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
};

export default Index;
