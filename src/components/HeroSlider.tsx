
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: "O melhor fone",
    subtitle: "Não perca essa oportunidade",
    buttonText: "Colocar no carrinho",
    image: "/lovable-uploads/869f1c63-d7d9-4fb7-bd7f-cc50fc3217e8.png",
  },
  {
    id: 2,
    title: "Um belo celular",
    subtitle: "Tenha mais destaque com a melhor tecnologia",
    buttonText: "Quero saber mais",
    image: "/lovable-uploads/f56c8d47-db11-457c-92ec-daa6131f8d29.png",
  },
  {
    id: 3,
    title: "Bater papo",
    subtitle: "Vamos para uma sala top!",
    buttonText: "Bater um papo agora",
    image: "/lovable-uploads/a4a8799d-1636-44d9-a22f-9ddc97c5b45d.png",
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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 sm:px-16">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold text-white sm:text-6xl">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-200 sm:text-xl">
                  {slide.subtitle}
                </p>
                <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-8 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
