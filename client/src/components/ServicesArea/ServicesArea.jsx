import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_area_list = [
    {
      title: "Business Growth Solutions",
      desc: "Empowering Your Business Journey.",
      url: "/services-details",
      delay_time: 2,
    },
    {
      title: "Custom Product Development Services",
      desc: "Tailored Solutions for Your Unique Business Needs.",
      url: "/services-details",
      delay_time: 4,
    },
    {
      title: "High-Quality UI & Mobile App Development",
      desc: "Exceptional Design and Seamless Functionality.",
      url: "/services-details",
      delay_time: 6,
    },
    {
      title: "Advanced AI & ML Models & NLP Solutions",
      desc: "Innovating with Intelligence for Your Business.",
      url: "/services-details",
      delay_time: 8,
    },
  ];

  return (
    <section className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {services_area_list.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
