import React from 'react'
import tecno from '../images/tecno.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/landing.css"

export const TestinonySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show on larger screens
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 500, // Adjust the breakpoint for smaller screens
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const testimonials = [
        { id: 1, text: 'Recovery has assisted me in saving my files and getting them back even after I have lost them in an attack or unplanned disaster. It also built to suit my taste through different plans that applies to me.', author: 'Ajani Lekan', img:tecno},
        { id: 2, text: 'Recovery has assisted me in saving my files and getting them back even after I have lost them in an attack or unplanned disaster. It also built to suit my taste through different plans that applies to me.', author: 'Ajani Lekan', img:tecno},
        { id: 3, text: 'Recovery has assisted me in saving my files and getting them back even after I have lost them in an attack or unplanned disaster. It also built to suit my taste through different plans that applies to me.', author: 'Ajani Lekan', img:tecno},
      ];
  return (
    <div className='land-sec-five'>
        <p className='ftur'>Testimonies</p>
        <p className='dmeasy dmeasy2 tes'>See some testimonies from our users all over the world</p>
        <p className='gsad tes'>Here are some reviews from people that used Eventy</p>
        <div className='test-slider'>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div className='test-box' key={testimonial.id}>
                    <div className='test-box-top'>
                    <div className='test-box-img'>
                        <img src={testimonial.img} alt={testimonial.author}/>
                    </div>
                    <p className='test-name'>{testimonial.author}</p>
                    </div>
                    <p className='test-word'>{testimonial.text}</p>
        
                </div>
                    // <div >
                    // <p>{testimonial.text}</p>
                    // <p>- {testimonial.author}</p>
                    // </div>
                ))}
            </Slider>
        </div>
        <div className='test-slider'>

        </div>
      </div>
  )
}
