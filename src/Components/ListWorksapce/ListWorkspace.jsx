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

// const data = [
//   {
//     name: "InFact coffee",
//     quantity: "21 địa điểm",
//     image:
//       "https://cdn.tgdd.vn/Files/2021/12/14/1404397/10-quan-cafe-yen-tinh-o-ha-noi-de-hoc-va-lam-viec-tot-nhat-202112142135375656.jpg",
//   },
//   {
//     name: "Tranquil Books & Coffee",
//     quantity: "17 địa điểm",
//     image: "https://toplist.vn/images/800px/the-cuppa-coffee-873616.jpg",
//   },
//   {
//     name: "Xofa Café & Bistro",
//     quantity: "18 địa điểm",
//     image:
//       "https://znews-photo.zadn.vn/w1024/Uploaded/sgogtn/2020_02_03/IMG_3012_1.JPG",
//   },
//   {
//     name: "Cuppa Coffee",
//     quantity: "26 địa điểm",
//     image: "https://kenh14cdn.com/2020/6/27/img7661-1593231971489991996472.jpg",
//   },
//   {
//     name: "BEYOU Tea & Coffee",
//     quantity: "23 địa điểm",
//     image:
//       "https://cdn.tgdd.vn/Files/2021/12/14/1404397/10-quan-cafe-yen-tinh-o-ha-noi-de-hoc-va-lam-viec-tot-nhat-202112142206017800.jpg",
//   },
// ];

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
              <SwiperSlide key={i}>
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
