import { Collapse } from "flowbite";


export const Navbar = () => {

const $targetEl = document.getElementById('navbar-solid-bg');
const $triggerEl = document.getElementById('triggerEl');
const options = {
  onToggle: () => {
      console.log('element has been toggled')
  }
};

new Collapse($targetEl, $triggerEl, options);



  return (
  
<nav className="border-gray-200 bg-gray-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-black whitespace-nowrap dark:text-white"><span className="text-grey">KV</span><span className="text-cyan">PLAST</span></span>
    </a>
    <button id="triggerEl" data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg" >
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        {/* <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-cyan rounded md:bg-transparent md:text-cyan md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li> */}
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-grey rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan md:p-0 ">Nosotros</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-grey rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan md:p-0 ">Casos de exitos</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-grey rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan md:p-0 ">Contactanos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
