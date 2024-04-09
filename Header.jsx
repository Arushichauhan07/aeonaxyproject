import {useEffect ,useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/images/logo.jpg';
import logo2 from './assets/images/logo2.jpg';

const Header = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef(null);
 
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  return (
  <>
   <header className='header flex items-center' ref={headerRef}>
    <div className='container'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div>
          <img className= 'h-24 w-25'src={logo} alt='logo'/>
        </div>

        {/* menu */}
        <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
               dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/integrations"}>Integrations</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
                md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
               dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/help"}>Help <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></NavLink>
              </li>
              <span className='flex items-center gap-[0.5rem]'>
              <figure className='w-[30px] h-[30px] rounded-full mr-0.5 cursor-pointer border-4 border-slate-400'>
                      <img 
                        src={logo2}
                        className='w-[22px] h-[22px] rounded-full items-center' 
                        alt=""
                      />
              </figure>
              <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
              dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/help"}>Account <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></NavLink>
              </li>
              </span>
              </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
              <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
              dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/integrations"}>Integrations</NavLink>
          </li>
          <li>
              <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
               dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/help"}>Help <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></NavLink>
          </li>
          <span className='flex items-center gap-[0.5rem]'>
            <figure className='w-[30px] h-[30px] rounded-full mr-0.5 cursor-pointer border-4 border-slate-400'>
                      <img 
                        src={logo2}
                        className='w-[22px] h-[22px] rounded-full items-center' 
                        alt=""
                      />
            </figure>
            <li>
              <NavLink className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white
              dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" to={"/help"}>Account <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></NavLink>
            </li>
           </span>
        </ul>
      </nav>
      </div>
    </div>
  </header>
  <hr/>
   <div className='max-h-32 w-full pl-40 px-20 pt-2 pb-2 items-center'>
      <h1 className='text-[20px] mt-5' >Organization Settings</h1>
    </div>
  <hr className='mt-4'/>
  </>
   
  )
}

export default Header;
