import React from "react";
import CounterAreaThreeItem from "./CounterAreaThreeItem";

const CounterAreaThree = () => {
  const counter_items = [
    {
      src: "/img/icon/inner_counter_icon01.png",
      titles: ["Satisfied", "Customers"],
    },
    {
      src: "/img/icon/inner_counter_icon02.png",
      titles: ["Project", "Finished"],
    },
    {
      src: "/img/icon/inner_counter_icon03.png",
      titles: ["Our", "Employees"],
    },
    {
      src: "/img/icon/inner_counter_icon04.png",
      titles: ["International", "Awards"],
    },
  ];

  return (
    <section className="counter-area-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="counter-item-wrap-three">
              <ul className="list-wrap">
              <li>
              <CounterAreaThreeItem
                item={{
                  src: "/img/icons/project.png",
                  titles: ["Projects", "Delivered"],
                }}
                amount={20}
              />
              </li>

              <li>           
              <CounterAreaThreeItem
                item={{
                  src: "/img/icons/clients.png",
                  titles: ["Satisfied", "Clients"],
                }}
                amount={35}
              />
              </li>

              <li>
                <CounterAreaThreeItem
                  item={{
                    src: "/img/icons/solutions.png",
                    titles: ["Custom", "Solutions"],
                  }}                
                  amount={50}
                />
              </li>

              <li>            
              <CounterAreaThreeItem
                item={{
                        src: "/img/icons/products.png",
                        titles: ["Innovative", "Products"],
                      }}
                amount={15}
              />
              </li>
            </ul>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="counter-content-three">
              <div className="section-title title-style-two mb-30">
                <h2 className="title">
                  Transforming Ideas into Reality with 20s Developers.
                </h2>
              </div>
              <p>
              At 20s Developers, we’re a team of passionate innovators, problem solvers, and visionaries. Each member brings unique expertise, from AI to full-stack development, ensuring every project exceeds expectations. Together, we shape digital solutions that drive growth and transform ideas into reality.
              </p>
              
              <div className="content-bottom">
                <h4 className="title-two">Siddarth Gadge & Aadarsh Mane</h4>
                <span>Directors of Company</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
/*img sign */ 
export default CounterAreaThree;
