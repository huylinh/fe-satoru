import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Utils/common";
import "./listworkspace.css";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { getDistrict } from "../../Services/districtService";
import image from "../../assets/workspace1.jpg";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";

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
  const navigate = useNavigate();

  const { isLoading, data: District } = useQuery({
    queryKey: ["district"],
    queryFn: () => getDistrict(),
  });

  if (isLoading || !District) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          {/* <span className="orangeText">List Project</span> */}
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {District.filter((card) => card.workspaces_count > 0).map(
            (card, i) => (
              <SwiperSlide key={i}
                onClick={() => navigate(`/result?page=1&limit=5&area=${card.id}`)}
              >
                <div className="flexColStart r-card">
                  <img className="r-image" src={image} alt="home" />
                  <span className="r-name">{card.name}</span>
                  <span className="secondaryText r-quantity">
                    <span className="r-count">
                      {card.workspaces_count} workspace{" "}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ListWorkspace;
