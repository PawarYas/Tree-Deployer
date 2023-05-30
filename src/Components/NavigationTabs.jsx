import React from 'react'
import { Link } from 'react-router-dom'

const NavigationTabs = () => {

    return (
        <>
            <div className='sticky top-[4.5rem] fixing-query'>
                <ul
                    className="mb-5 flex list-none flex-row flex-wrap border-b-0 p-5 pt-4 shadow-md bg-white sm:pt-5 "
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation" className="flex-auto text-center fixing-tab ">
                        <Link
                            to={"/"}
                            className="p-5 border-b-2 border-green-700 border-opacity-0 hover:border-opacity-100 hover:text-green-700 
                        cursor-pointer uppercase font-semibold ease-in-out duration-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-home01"
                            data-te-nav-active
                            role="tab"
                            aria-controls="tabs-home01"
                            aria-selected="true">Our Story</ Link>
                    </li>
                    <li role="presentation" className="flex-auto text-center fixing-tab ">
                        <Link
                            to={"/how-it-works"}
                            className="p-5 border-b-2 border-green-700 border-opacity-0 hover:border-opacity-100 hover:text-green-700 
                        cursor-pointer uppercase font-semibold ease-in-out duration-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-profile01"
                            role="tab"
                            aria-controls="tabs-profile01"
                            aria-selected="false">
                            How it Works</Link>
                    </li>
                    <li role="presentation" className="flex-auto text-center fixing-tab">
                        <Link
                            to={"/planting-locations"}
                            className="p-5 border-b-2 border-green-700 border-opacity-0 hover:border-opacity-100 hover:text-green-700 
                        cursor-pointer uppercase font-semibold ease-in-out duration-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-messages01"
                            role="tab"
                            aria-controls="tabs-messages01"
                            aria-selected="false">Our Planting Locations</Link>
                    </li>
                    <li role="presentation" className="flex-auto text-center fixing-tab">
                        <Link
                            to={"/gift-tree"}
                            className="p-5 border-b-2 border-green-700 border-opacity-0 hover:border-opacity-100 hover:text-green-700 
                        cursor-pointer uppercase font-semibold ease-in-out duration-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-messages01"
                            role="tab"
                            aria-controls="tabs-messages01"
                            aria-selected="false">
                            Gift A Tree
                        </Link >
                    </li>
                </ul >
            </div>

            {/* <div className="mb-6">
                <div
                    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-home01"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab01"
                    data-te-tab-active>
                    Tab 1 content
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-profile01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    Tab 2 content
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-messages01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    Tab 3 content
                </div>
                <div
                    className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-contact01"
                    role="tabpanel"
                    aria-labelledby="tabs-contact-tab01">
                    Tab 4 content
                </div>
            </div> */}
        </>
    )
}

export default NavigationTabs