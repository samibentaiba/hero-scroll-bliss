import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const slides = [
  {
    id: 1,
    title: "Level Up with ITC",
    subtitle: "Join our vibrant community and explore the future of tech.",
    buttonText: "Get Involved",
    image: "/images/itc-stairs.png",
  },
  {
    id: 2,
    title: "Tech Talks & Innovation",
    subtitle: "Learn from industry leaders and student pioneers at USDB.",
    buttonText: "Discover More",
    image: "/images/itc-talks-5th.png",
  },
  {
    id: 3,
    title: "Ideas Worth Sharing",
    subtitle: "Collaborate, brainstorm, and bring your vision to life.",
    buttonText: "Join the Conversation",
    image: "/images/sharing-ideas.png",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  const slide = slides[currentSlide];
  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black z-[1]"
      style={{
        backgroundImage: `url('${slides[currentSlide].image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-[-2]" />
      {/* Slide content */}
      {/* Navigation arrows */}
      <div className="z-10 text-start flex max-w-[1920px] w-full justify-between items-center px-4 translate-x-[0%] ">
        <div className="flex justify-between items-center w-[40rem] space-y-4">
          <button
            onClick={prevSlide}
            className="rounded-full bg-black/50 p-4 text-white transition hover:bg-black/75"
          >
            <ChevronLeft size={50} />
          </button>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-4xl font-bold text-white w-[30rem] sm:text-6xl">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">{slide.subtitle}</p>
            <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
              {slide.buttonText}
            </button>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="rounded-full bg-black/50 p-4 text-white transition hover:bg-black/75"
        >
          <ChevronRight size={50} />
        </button>
      </div>

      {/* Pagination dots */}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-10">
        <button
          className={cn(
            "h-2 w-8 rounded-full transition-colors",
            currentSlide === 0 ? "bg-white" : "bg-white/50"
          )}
          onClick={() => setCurrentSlide(0)}
        />
        <button
          className={cn(
            "h-2 w-8 rounded-full transition-colors",
            currentSlide === 1 ? "bg-white" : "bg-white/50"
          )}
          onClick={() => setCurrentSlide(1)}
        />
        <button
          className={cn(
            "h-2 w-8 rounded-full transition-colors",
            currentSlide === 2 ? "bg-white" : "bg-white/50"
          )}
          onClick={() => setCurrentSlide(2)}
        />
      </div>
    </div>
  );
};

export default HeroSlider;
