import { CarouselItem } from "./CarouselItem"
import uuid4 from "uuid4"

export function Carousel({ slides }) {
  return (
    <div className="carousel">
          <div className="caroulsel-inner">
            {slides.map((slide, index)=> {
              return (
                <CarouselItem slide={slide} key={index}/>
              )
            })}
          </div>
        </div>
  )
}
