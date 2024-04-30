import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // TODO: Add icons to toggle canvas and dark mode
    <nav
      id='navbar'
      className={`sticky top-0 left-0 px-5 py-1 w-full hidden md:flex justify-between font-sans font-bold text-2xl  z-50 ${
        isScrolled ? 'bg-back2 rounded h-20 text-4xl' : 'bg-transparent'
      }`}
    >
      <section className='flex flex-row gap-x-5'>
        <a href='/' className='navlink text-neonp motion-safe:animate-pulse'>
          <Icon icon='mdi:pound' />
        </a>
        <a href='/#work' className='navlink'>
          Work
        </a>
        <a href='/#about' className='navlink'>
          About
        </a>
        <a href='/blog' className='navlink'>
          Blog
        </a>
        {/* <a href='/if' className='navlink'>
          Fiction
        </a> */}
        <a
          href='/MicheleMariaSerrapica-CV.pdf'
          target='blank'
          type='application/pdf'
          className='navlink'
        >
          CV
        </a>
      </section>
      <section className='flex flex-row gap-x-5'>
        {/* <p className={navlink}>moon</p>
        <p className={navlink}>code</p> */}
      </section>
    </nav>
  );
}
