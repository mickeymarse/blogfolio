import { useState } from 'react';
// FIXME: Add type properly
export default function Sidebar({ homeIcon }: any) {
  const navlink =
    'rounded border-4 border-transparent place-self-center hover:bg-neonp hover:text-back2';

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <aside className='flex md:hidden'>
      <nav
        id='navbar'
        className={`sticky top-0 left-0 px-5 py-1 w-full flex justify-between font-sans font-bold text-2xl  z-50`}
      >
        <section className='flex flex-row gap-x-5'>
          <a href='/' className={`${navlink} text-neonp motion-safe:animate-pulse`}>
            {homeIcon}
          </a>
          <a href='/#work' className={navlink}>
            Work
          </a>
          <a href='/#about' className={navlink}>
            About
          </a>
          <a href='/blog' className={navlink}>
            Blog
          </a>
          <a href='/if' className={navlink}>
            Fiction
          </a>
          <a
            href='/MicheleMariaSerrapica_CV.pdf'
            target='blank'
            type='application/pdf'
            className={navlink}
          >
            CV
          </a>
        </section>
        <section className='flex flex-row gap-x-5'>
          {/* <p className={navlink}>moon</p>
    <p className={navlink}>code</p> */}
        </section>
      </nav>
      <section className='flex flex-row gap-x-5'>
        <button onClick={toggleSidebar}>Menu</button>
      </section>
      {showSidebar && (
        <div className='sidebar'>
          <a href='/#work' className={navlink}>
            Work
          </a>
          <a href='/#about' className={navlink}>
            About
          </a>
          <a href='/blog' className={navlink}>
            Blog
          </a>
          <a href='/if' className={navlink}>
            Fiction
          </a>
          <a
            href='/MicheleMariaSerrapica_CV.pdf'
            target='blank'
            type='application/pdf'
            className={navlink}
          >
            CV
          </a>
        </div>
      )}
    </aside>
  );
}
