import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-background bg-opacity-10'>
      <div className='flex flex-col gap-6 pt-6 pb-6 mx-auto 2xl:max-w-screen-2xl xl:max-w-7xl xl:px-0 px-7 h-fit'>
        <div className='flex items-start items-center justify-between h-full gap-3'>
          <section className='flex flex-col items-center justify-between'>
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img src="/images/logo.png" className="ml-12 h-16 mr-3" alt="..." />
              <span className="hidden md:block text-primary text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline">
                BUTANE
              </span>
            </Link>
          </section>
          <ul className='flex text-primary gap-5 items-center opacity-50 text-2xl'>
            <li>
              <a href="#" className="text-primary hover:text-gray-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M 20.222 0 c 1.406 0 2.54 1.137 2.607 2.475 V 24 l -2.677 -2.273 l -1.47 -1.338 l -1.604 -1.398 l 0.67 2.205 H 3.71 c -1.402 0 -2.54 -1.065 -2.54 -2.476 V 2.48 C 1.17 1.142 2.31 0.003 3.715 0.003 h 16.5 L 20.222 0 Z m -6.118 5.683 h -0.03 l -0.202 0.2 c 2.073 0.6 3.076 1.537 3.076 1.537 c -1.336 -0.668 -2.54 -1.002 -3.744 -1.137 c -0.87 -0.135 -1.74 -0.064 -2.475 0 h -0.2 c -0.47 0 -1.47 0.2 -2.81 0.735 c -0.467 0.203 -0.735 0.336 -0.735 0.336 s 1.002 -1.002 3.21 -1.537 l -0.135 -0.135 s -1.672 -0.064 -3.477 1.27 c 0 0 -1.805 3.144 -1.805 7.02 c 0 0 1 1.74 3.743 1.806 c 0 0 0.4 -0.533 0.805 -1.002 c -1.54 -0.468 -2.14 -1.404 -2.14 -1.404 s 0.134 0.066 0.335 0.2 h 0.06 c 0.03 0 0.044 0.015 0.06 0.03 v 0.006 c 0.016 0.016 0.03 0.03 0.06 0.03 c 0.33 0.136 0.66 0.27 0.93 0.4 c 0.466 0.202 1.065 0.403 1.8 0.536 c 0.93 0.135 1.996 0.2 3.21 0 c 0.6 -0.135 1.2 -0.267 1.8 -0.535 c 0.39 -0.2 0.87 -0.4 1.397 -0.737 c 0 0 -0.6 0.936 -2.205 1.404 c 0.33 0.466 0.795 1 0.795 1 c 2.744 -0.06 3.81 -1.8 3.87 -1.726 c 0 -3.87 -1.815 -7.02 -1.815 -7.02 c -1.635 -1.214 -3.165 -1.26 -3.435 -1.26 l 0.056 -0.02 Z m 0.168 4.413 c 0.703 0 1.27 0.6 1.27 1.335 c 0 0.74 -0.57 1.34 -1.27 1.34 c -0.7 0 -1.27 -0.6 -1.27 -1.334 c 0.002 -0.74 0.573 -1.338 1.27 -1.338 Z m -4.543 0 c 0.7 0 1.266 0.6 1.266 1.335 c 0 0.74 -0.57 1.34 -1.27 1.34 c -0.7 0 -1.27 -0.6 -1.27 -1.334 c 0 -0.74 0.57 -1.338 1.27 -1.338 Z" clipRule="evenodd" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-primary hover:text-gray-100">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full p-[23px] bg-accent flex items-center justify-center bg-opacity-10'>
        <span className='font-normal text-primary text-opacity-50'>© {new Date().getFullYear()} BUTANE</span>
      </div>
    </footer>
  )
}

export default Footer;
