import { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";
import styles from "./Carousel.module.css";

export function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
    },5000)

    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner} style={{transform: `translateX(${-currentSlide * 100}%)`}}>
        {slides.map((slide, index) => {
          return <CarouselItem slide={slide} key={index} />;
        })}
      </div>
    </div>
  );
}
