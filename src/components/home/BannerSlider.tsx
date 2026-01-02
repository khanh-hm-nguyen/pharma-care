"use client";

import { useState } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { MAIN_SLIDES } from "@/data";

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === MAIN_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? MAIN_SLIDES.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl">
      {/* Slides Container */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {MAIN_SLIDES.map((slide) => (
          <div
            key={slide.id}
            className={`flex h-full w-full min-w-full flex-col justify-center px-8 md:px-16 ${slide.bgColor} text-white`}
          >
            <span className="mb-2 text-sm font-bold uppercase tracking-wider opacity-90">
              FEATURED
            </span>
            <h2 className="mb-4 max-w-lg text-3xl font-bold md:text-5xl">
              {slide.title}
            </h2>
            <p className="mb-8 max-w-md text-lg opacity-90">{slide.subtitle}</p>
            <button className="w-fit rounded-full bg-white px-6 py-3 text-sm font-bold text-gray-900 transition-transform hover:scale-105">
              {slide.ctaText}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/40"
      >
        <ArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/40"
      >
        <ArrowForward />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {MAIN_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              current === idx ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
