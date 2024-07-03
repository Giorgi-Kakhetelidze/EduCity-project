import React, { useRef } from 'react';
import Nav from './components/Nav';
import Section1 from './components/Section1'; 
import Section2 from './components/Section2';
import PopularCourses from './components/PopularCourses';
import Contanct from './components/Contanct';
import Reviews from './components/Reviews';
import Footer from './components/Footer';


export default function App() {
  const section1Ref = useRef(null);
  const contactRef = useRef(null);
  const navRef = useRef(null)

  function handleScroll(section) {
    if (section === 'section1') {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'nav') {
      navRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Nav handleScroll={handleScroll} />
      <Section1 navRef={navRef}/>
      <Section2 />
      <PopularCourses sectionRef={section1Ref} />
      <Contanct  contactRef={contactRef}/>
      <Reviews />
      <Footer />
    </>
  )
}