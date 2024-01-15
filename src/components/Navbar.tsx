import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log('useEffect called');
    const handleScroll = () => {
      console.log('Scrolling');
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
      className={`sticky top-0 left-0 mt-5 ml-5 w-1/3 flex justify-between font-matrix font-bold text-2xl text-white ${
        isScrolled ? 'bg-back' : 'bg-transparent'
      }`}
    >
      <a href='/' className='navlink text-malach motion-safe:animate-pulse'>
        _
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
      <a href='/if' className='navlink'>
        IF
      </a>
    </nav>
  );
}
