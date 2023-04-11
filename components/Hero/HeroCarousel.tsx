import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  {
    id: 1,
    url: 'https://i.ibb.co/DtKbdGK/Default-space-3-29a13993-3b2e-4754-a9cc-3b2a9590b8e0-1.jpg',
    text: 'sadAlien Clear',
    subText: ''
  },
];

const HeroCarousel = () => {
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
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full lg:h-[960px] md:h-[930px] h-[550px] w-full m-auto pt-4 pb-8  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      >
        <div>
          <div className=' bg-black bg-opacity-60 backdrop-blur-lg lg:mx-[40rem] md:mx-[15rem]'>
            <div className="  py-[1rem]">
              <p id={slides[currentIndex].url} className="text-center lg:text-5xl md:text-2xl text-base uppercase  text-slate-100 shadow-current font-semibold tracking-tighter"> {slides[currentIndex].text}</p>
            </div>
            <div className="lg:pb-[1rem] md:py-[1rem] py-[0.5rem] mx-4 ">
              <p id={slides[currentIndex].url} className="text-justify lg:text-xs md:text-xs text-xs   text-slate-100"> {slides[currentIndex].subText}</p>
            </div>
          </div>
        </div>

      </div>
      {slides.map((slide, slideIndex) => (
        <div key={slide.id}>
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >

          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroCarousel
