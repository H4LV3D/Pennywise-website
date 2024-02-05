import { useState, useEffect } from "react";
import data from "@/data/index.json";
import Image from "next/image";

const TestimonialsSection = () => {
  const { testimonials } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const rotateToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16">
      <div className="text-center">
        <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
          Testimonials
        </p>
        <h1 className="font-[800] text-[40px] sm:text-[46px] leading-[48px] w-[24rem] mx-auto text-brand-blue dark:text-brand-green ">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[40vh]">
        <div
          id="testimonial-images"
          className="md:flex justify-center items-center py-8 relative hidden  w-[500px] h-[500px]"
        >
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-brand-green border border-brand-white w-[160px] h-[160px] flex items-center justify-center rounded-[50%]">
              <Image
                src={`/assets/images/placeholders/Memoji-${
                  currentIndex + 1
                }.png`}
                alt="Icons"
                width={200}
                height={200}
              />
            </div>
          </div>
          {testimonials.map((item, index) => (
            <div
              className={`bg-brand-white h-20 w-20 border border-brand-blue rounded-[50%] absolute flex-shrink-0 ${
                index === 0
                  ? "top-28 left-20"
                  : index == 3
                  ? "bottom-28 right-20"
                  : index === 1
                  ? " top-20 right-28"
                  : "bottom-20 left-28"
              } `}
              key={index}
            >
              <Image
                src={`/assets/images/placeholders/Memoji-${index + 1}.png`}
                alt="Icons"
                width={160}
                height={160}
              />
            </div>
          ))}
        </div>
        <div id="testimonial-text" className="w-full">
          <div className="space-y-6 w-[24rem] mx-auto">
            <h5 className="font-[500] text-[1.3rem] dark:text-brand-white ">
              {testimonials[currentIndex].title}
            </h5>
            <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] ">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center space-x-3">
              {testimonials.map((item, index) => (
                <button
                  className={`bg-brand-white h-6 w-6 rounded-[50%] ${
                    index === currentIndex
                      ? "border-2 border-brand-green"
                      : "border border-transparent"
                  }`}
                  key={index}
                  onClick={() => rotateToTestimonial(index)}
                >
                  <Image
                    src={`/assets/images/placeholders/Memoji-${index + 1}.png`}
                    alt="Icons"
                    width={40}
                    height={40}
                  />
                </button>
              ))}
            </div>
            <p className="text-[.9375rem] font-[500] text-brand-green">
              {testimonials[currentIndex].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
