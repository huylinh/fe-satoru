import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./proposal.css";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { getproposeWorkspace } from "../../Services/districtService";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  const { isLoading, data: proposeWorkspace } = useQuery({
    queryKey: ["propose"],
    queryFn: () => getproposeWorkspace(),
  });

  if (isLoading || !proposeWorkspace) {
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
        {proposeWorkspace.map((card, id) => {
          return (
            <div
              key={id}
              className="singleDestination"
              onClick={() => navigate(`/workspaces/${card.id}`)}
            >
              <div className="imageDiv">
                <img src={card.workspace_images[0].image_url} alt={card.name} />
              </div>

              <div className="cardInfo">
                <h3 className="destTitle">{card.name}</h3>
                <span className="continent flex">
                  <span>{card.address}</span>
                </span>

                <div className="fees flex"></div>

                <div className="flex items-baseline space-x-2">
                  <Rating
                    name="text-feedback"
                    value={card.average_rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div className="text-xl">{card.average_rating}</div>
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
