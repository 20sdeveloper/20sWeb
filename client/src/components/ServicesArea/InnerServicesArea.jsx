import React from "react";
import InnerServicesAreaItem from "./InnerServicesAreaItem";

const InnerServicesArea = () => {
  const inner_services = [
    {
      src: "/img/icon/inner_services_icon01.png",
      url: "/services-details",
      title: "Business Growth Solutions",
      desc: "Accelerate your business with strategies that drive success and expansion.",
    },
    {
      src: "/img/icon/inner_services_icon02.png",
      url: "/services-details",
      title: "Website & Mobile App Development",
      desc: "Create high-quality, performance-driven websites and mobile applications.",
    },
    {
      src: "/img/icon/inner_services_icon03.png",
      url: "/services-details",
      title: "AI & Machine Learning Models",
      desc: "Transform Your Business Operations.",
    },
    {
      src: "/img/icon/inner_services_icon04.png",
      url: "/services-details",
      title: "ERP & Management Software",
      desc: "Streamline Your Business Processes with Tailored Solutions.",
    },
    {
      src: "/img/icon/inner_services_icon05.png",
      url: "/services-details",
      title: "Customizable Desktop Software",
      desc: "Tailored Applications for Your Busines.",
    },
    {
      src: "/img/icon/inner_services_icon06.png",
      url: "/services-details",
      title: "Marketing and Branding",
      desc: "Stand Out with Impactful Campaigns.",
    },
    {
      src: "/img/icon/inner_services_icon07.png",
      url: "/services-details",
      title: "E-commerce Development",
      desc: "Robust Online Stores for Maximum Engagement and Sales.",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Personal Portfolio Websites",
      desc: "Showcase Your Work with Sleek, Professional Designs.",
    },
  ];
  

  return (
    <section className="inner-services-area pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Our Services</span>
              <h2 className="title">Innovators. Creators. Game Changers.</h2>
            </div>
          </div>
        </div>

        <div className="inner-services-item-wrap">
          <div className="row justify-content-center">
            {inner_services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8 same-height">
                <InnerServicesAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesArea;
