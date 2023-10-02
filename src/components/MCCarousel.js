import React from 'react'
import Slider from 'react-slick'
import mc1 from '../assets/metalcoat/mc1.jpeg'
import mc2 from '../assets/metalcoat/mc2.jpeg'
import mc3 from '../assets/metalcoat/mc3.jpeg'
import mc4 from '../assets/metalcoat/mc4.jpg'
import mc5 from '../assets/metalcoat/mc5.jpg'
import mc6 from '../assets/metalcoat/mc6.png'

export default function MCCarousel({ pColor }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: false,
  }
  return (
    <Slider className='mc-carousel' {...settings}>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc1}
          alt="there is alt text here!"
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc2}
          alt="there is alt text here!"
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc3}
          alt="there is alt text here!"
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc4}
          alt="there is alt text here!"
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc5}
          alt="there is alt text here!"
        />
      </div>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={mc6}
          alt="there is alt text here!"
        />
      </div>
    </Slider>
  )
}
