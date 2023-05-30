import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md fixed z-50 w-full top-0 left-0 border-b border-gray-300 pr-6 pl-6">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center">
                        <span className="self-center text-2xl whitespace-nowrap text-green-700 font-bold tracking-wide">TreeDeployer</span>
                    </Link>
                    <div className="flex md:order-2">
                        <BiSearch className='text-3xl mt-2 mr-2 text-gray-500 cursor-pointer hover:text-green-700 ease-in-out duration-200' />

                        <button type="button" className="text-white px-5 py-2 bg-green-700 hover:bg-black ease-in-out duration-300
                       font-bold text-lg  text-center mr-3 md:mr-0">Donate</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pt-5" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link to={"/"} className="block py-2 pl-3 pr-4 rounded md:bg-transparent font-bold hover:text-green-700 ease-out duration-300 md:p-0 uppercase">What we Do</Link>
                            </li>
                            <li>
                                <Link to={"/"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent font-bold hover:text-green-700 ease-out duration-300 md:p-0 uppercase">About Us</Link>
                            </li>
                            <li>
                                <Link to={"/"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent font-bold hover:text-green-700 ease-out duration-300 md:p-0 uppercase">Get Involved</Link>
                            </li>
                            <li>
                                <Link to={"/"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent font-bold hover:text-green-700 ease-out duration-300 md:p-0 uppercase">Membership & Giving</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar