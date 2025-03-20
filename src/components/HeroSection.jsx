import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import path
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Pagination styles

export const HeroSection = ({ slides }) => {
  return (
    <div className="pt-20">
      <Swiper
        modules={[Autoplay, Pagination]} // Use the imported modules
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              </div>
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                    <h2 className="text-2xl text-gray-300 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                      {slide.description}
                    </p>
                    <button className="bg-coral-400 text-black px-8 py-3 text-lg font-semibold !rounded-button hover:bg-coral-500 transition-colors cursor-pointer whitespace-nowrap">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroSection;