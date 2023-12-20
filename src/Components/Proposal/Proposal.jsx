import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import imageWorkspace1 from "../../assets/workspace1.jpg";
import imageWorkspace2 from "../../assets/workspace2.jpg";
import imageWorkspace3 from "../../assets/workspace3.jpg";
import imageWorkspace4 from "../../assets/workspace4.jpg";
import imageWorkspace5 from "../../assets/workspace5.jpg";
import "./proposal.css";
import { useNavigate } from "react-router";
const Data = [
  {
    id: 1,
    imgSrc: imageWorkspace1,
    name: "Creative Haven",
    description: "CUL TURAL RELAX",
    location: "8 Trần Đại Nghĩa",
    star: "5",
  },
  {
    id: 2,
    imgSrc: imageWorkspace2,
    name: "Tranquil Workspace",
    description: "CUL TURAL RELAX",
    location: "4 Tạ Quang Bửu",
    star: "4.7",
  },
  {
    id: 3,
    imgSrc: imageWorkspace3,
    name: "Multitask Zone",
    description: "CUL TURAL RELAX",
    location: "10 Phạm Ngọc Thạch",
    star: "4.7",
  },
  {
    id: 4,
    imgSrc: imageWorkspace4,
    name: "New Energy Studio",
    description: "CUL TURAL RELAX",
    location: "18 Hai Ba Trung",
    star: "4.5",
  },
  {
    id: 5,
    imgSrc: imageWorkspace5,
    name: "Serene Studio",
    description: "CUL TURAL RELAX",
    location: "17 Nguyễn Chí Thanh",
    star: "4.5",
  },
];

const List = () => {
  return (
    <section className="list container section">
      <div className="secTitle">
        <h3
          className="title"
          style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}
        >
          Đề xuất
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(({ id, imgSrc, name, description, location, star }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={name} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{name}</h4>
                <span className="continent flex">
                  {/* <BiCurrentLocation className="icon" /> */}
                  <span>{location}</span>
                </span>

                <div className="fees flex">
                  {/* <div className="star">
                    <h5>{star}</h5>
                  </div> */}
                  <span>Quản lý</span>
                </div>

                {/* <div className="desc">
                  <p>{description}</p>
                </div> */}
                <div className="flex items-baseline space-x-2">
                  <Rating
                    name="text-feedback"
                    value={star}
                    readOnly
                    precision={0.5}
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div className="text-xl  ">{star}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;
