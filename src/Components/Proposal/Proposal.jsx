import React from "react";
import imageWorkspace from "../../assets/workspace.jpg";
import "./proposal.css";
const Data = [
  {
    id: 1,
    imgSrc: imageWorkspace,
    name: "Work Space",
    description: "CUL TURAL RELAX",
    location: "Hai Ba Trung",
    start: "50",
  },
  {
    id: 2,
    imgSrc: imageWorkspace,
    name: "Work Space",
    description: "CUL TURAL RELAX",
    location: "Hai Ba Trung",
    start: "50",
  },
  {
    id: 3,
    imgSrc: imageWorkspace,
    name: "Work Space",
    description: "CUL TURAL RELAX",
    location: "Hai Ba Trung",
    start: "50",
  },
  {
    id: 4,
    imgSrc: imageWorkspace,
    name: "Work Space",
    description: "CUL TURAL RELAX",
    location: "Hai Ba Trung",
    start: "50",
  },
  {
    id: 5,
    imgSrc: imageWorkspace,
    name: "Work Space",
    description: "CUL TURAL RELAX",
    location: "Hai Ba Trung",
    star: "50",
  },
];

const List = () => {
  return (
    <section className="list container section">
      <div className="secTitle">
        <h3 className="title">Đề xuất</h3>
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
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="star">
                    <h5>{star}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
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
