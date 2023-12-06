import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Utils/common";
import "./listworkspace.css";
const data = [
  {
    name: "Aliva Priva Jardin",
    quantity: "47",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    quantity: "47",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    quantity: "47",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    quantity: "47",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    quantity: "47",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
];

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const ListWorkspace = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          {/* <span className="orangeText">List Project</span> */}
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img className="r-image" src={card.image} alt="home" />

                <span className="secondaryText r-quantity">
                  {/* <span style={{ color: "orange" }}></span> */}
                  <span>{card.quantity}</span>
                </span>

                <span className="primaryText">{card.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ListWorkspace;
