import { useState } from "react"

export const Navbar = () => { 

const [expand, setExpand] = useState(false)

const onToggleBar =()=>{ 
 if(expand) {
  setExpand(false)
 } else{
  setExpand(true)
 }
}

const handleInit= ()=>{
  setExpand(false)
}
 
  return (
  
<nav className="border-gray-200 bg-gray-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <span className="self-center text-4xl font-black whitespace-nowrap "><span className="text-gray-700">KV</span><span className="text-gray-500">PLAST</span></span>
    </a>
    <button onClick={onToggleBar} id="triggerEl" data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-solid-bg" aria-expanded={`${expand}`}>
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${!expand && 'hidden'} w-full md:block md:w-auto`} id="navbar-solid-bg" >
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#nuestro-equipo" onClick={handleInit} className="transition ease-in-out duration-300 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Nuestro equipo</a>
        </li>
        <li>
          <a href="#casos-exitos" onClick={handleInit} className="transition ease-in-out duration-300 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Casos de éxitos</a>
        </li>
        <li>
          <a href="#productos" onClick={handleInit} className="transition ease-in-out duration-300 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Productos</a>
        </li>
        <li>
          <a href="#contactenos" onClick={handleInit} className="transition ease-in-out duration-300 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 ">Contáctenos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
