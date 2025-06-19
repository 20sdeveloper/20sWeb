import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    // autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      title: "Miss Sarah T.",
      designation: "Co Founder, The Cover House.",
      desc: `Working with 20sDevelopers was an absolute pleasure. They took the time to understand my project and delivered exactly what I needed—on time and beyond expectations.`,
      src: 2,
    },
    {
      title: "Mr. Jordan K.",
      designation: "Freelance Consultant",
      desc: `Super responsive and professional throughout the entire process. The website they built for me is fast, modern, and exactly what I envisioned. "`,
      src: 3,
    },
    {
      title: "Lena M.",
      designation: " Graphic Designer.",
      desc: `I hired 20sDevelopers for a complete redesign of my portfolio site. Not only does it look amazing, but it's also SEO-optimized and mobile-friendly. Highly recommend! “`,
      src: 4,
    },
    {
      title: "Andre W.",
      designation: "Startup Founder ",
      desc: `From the initial consultation to launch day, the team was clear, efficient, and genuinely invested in my success. I’ll definitely be coming back for future projects. “`,
      src: 1,
    },
    {
      title: "Maya R.",
      designation: "Online Store Owner.",
      desc: `They brought my e-commerce idea to life in record time. Clean design, great UX, and flawless functionality. “`,
      src: 2,
    },
    {
      title: "Ethan J.",
      designation: "Digital Marketer.",
      desc: `What impressed me most was their attention to detail. The final product exceeded what I thought was possible with my budget. “`,
      src: 3,
    },
    {
      title: "Clara H.",
      designation: "Operations Manager.",
      desc: `20sDevelopers helped us scale fast with a custom web app tailored to our workflow. Game changer! “`,
      src: 4,
    },
    {
      title: "Omar B.",
      designation: "Tech Entrepreneur.",
      desc: `Professional, talented, and easy to communicate with. It’s rare to find developers who get both the technical and business side. “`,
      src: 1,
    },
    {
      title: "Rebecca S.",
      designation: "Nonprofit Director.",
      desc: `They were flexible with changes, provided valuable input, and delivered results that speak for themselves. Fantastic experience! “`,
      src: 4,
    },
    {
      title: "Lucas N.",
      designation: "Personal Trainer.",
      desc: `The site looks great, performs perfectly, and I’m already seeing more engagement. Couldn’t be happier with the outcome. “`,
      src: 3,
    },
    
  ];

  return (
    <section className="testimonial-area pt-110 pb-120">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Client Testimonials</span>
              <h2 className="title" >Real Stories from Satisfied Clients</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap " >
          <div className="row testimonial-active  ">
            <SlickSlider settings={slick_settings }>
              {slider_items.map((x, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3 testimonial-same-height",
                    index % 2 === 0 && "testimonial-item-wrap-item-even  "
                  )}
                >
                  <TestimonialAreaItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
