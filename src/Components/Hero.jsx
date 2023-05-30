import React from 'react'
import { useState } from 'react';
import { BsChevronCompactRight } from 'react-icons/bs'
import { BsChevronCompactLeft } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import NavigationTabs from './NavigationTabs';
import { Route, Routes } from 'react-router';
import OurStory from '../Pages/OurStory';
import HowItWorks from '../Pages/HowItWorks';
import PlantingLocations from '../Pages/PlantingLocations';
import GiftTree from '../Pages/GiftTree';

const Hero = () => {

    const slides = [
        {
            textOne: "(1)Plant trees to make Dream come true",
            textTwo: "Planting trees to offset our carbon emissions can only help us curb the effects of climate change. It's going to be a big numbers, but we can do it with your help."
        },
        {
            textOne: "(2)Plant trees to make Dream come true",
            textTwo: "Planting trees to offset our carbon emissions can only help us curb the effects of climate change. It's going to be a big numbers, but we can do it with your help."
        },
        {
            textOne: "(3)Plant trees to make Dream come true",
            textTwo: "Planting trees to offset our carbon emissions can only help us curb the effects of climate change. It's going to be a big numbers, but we can do it with your help."
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <>
            <div>

                {/* 1st Section */}
                <div className="text-gray-800 lg:text-left pt-28 ">
                    <div className="container mx-auto xl:px-2 ">
                        <div className=" grid lg:grid-cols-2 gap-2 items-center">
                            <div className="z-40 xl:mt-10 md:mt-10 mb-10">
                                <h1 className="px-10 text-center text-4xl md:text-4xl xl:text-5xl text-gray-900 font-bold ">
                                    Plant trees to make Dream come true
                                </h1>
                            </div>
                            <img
                                src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/m/c/McMahonLakePreserve_BigfootMediaJasonWhalen_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0'
                                className="" alt="" />
                        </div>
                    </div>
                </div>



                {/* 2nd Section */}
                <div className='bg-green-700 '>
                    <div className=' w-full m-auto py-16 px-4 relative group'>
                        <h1 className="pt-5 text-center text-2xl md:text-3xl xl:text-4xl sm:text-4xl text-white font-bold">
                            {slides[currentIndex].textOne}
                        </h1>
                        <h6 className='px-10 text-white pt-5 text-lg text-center '>
                            {slides[currentIndex].textTwo}
                        </h6>

                        {/* Left Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>

                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
                        <div className='flex top-4 justify-center py-2 text-white'>
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'>
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-4 md:px-12 bg-green-100 pb-5">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className="my-1 pt-5 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <h1 className="md:text-2xl xl:text-2xl sm:text-2xl text-green-700 font-semibold tracking-wide uppercase">Virtual tree plantation
                            </h1>
                            <h4 className='text-gray-700 pt-5 text-lg'>Tree Deployer, an unique flagship volunteering initiative, is a virtual plantation drive by Appsdeployer under the Green theme which aims at encouraging employees,  their families and friends to adopt a tree, plant and nurture its survival by paying a small fees per tree.</h4>
                        </div>

                        <div className="my-1 w-full md:w-1/3 lg:px-4 lg:w-1/3  lg:pt-10  xl:pt-10 md:pt-10 pb-10">
                            <button type="button" className="shadow-sm text-green-700 px-5 py-4 mt-20 ml-10  hover:bg-green-700 border hover:text-white
                                 bg-white ease-in-out duration-300 focus:ring-4 focus:outline-none font-bold text-md  border-white text-center md:mr-0 uppercase">Donate to plant trees today</button>
                        </div>

                        <div className="my-1 pt-5 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 sm:pt-16">
                            <h1 className="md:text-2xl xl:text-2xl sm:text-2xl text-green-700  font-semibold tracking-wide uppercase">
                                Lets go together to plant
                            </h1>
                            <h4 className='text-gray-700 pt-5 md:text-lg xl:text-lg sm:text-lg sm:pt-5 '>Tree Physical Plantation is a drive where we will plant 1000+ trees before 15th August with an oath to take care for them lifetime with making a volunteering to see them every week by themselves and daily by someone designated. </h4>
                        </div>
                    </div>
                </div>

                <NavigationTabs />
                <Routes>
                    <Route exact path='/' element={<OurStory />} />
                    <Route exact path='/how-it-works' element={<HowItWorks />} />
                    <Route exact path='/planting-locations' element={<PlantingLocations/>} />
                    <Route exact path='/gift-tree' element={<GiftTree />} />
                </Routes>



                {/* 3rd Section */}


            </div>
        </>
    )
}

export default Hero