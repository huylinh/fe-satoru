import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Rating from "@mui/material/Rating";
import { format, parseISO } from "date-fns";
import StarIcon from "@mui/icons-material/Star";
function Reviews({ workspaceReviewsData, reviewSortOpt }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (reviewSortOpt == 0) {
    workspaceReviewsData.data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  } else {
    workspaceReviewsData.data.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
  }

  // Pagination
  const paginationCount = Math.ceil(workspaceReviewsData.data.length / 10);
  console.log(paginationCount);
  const handlePaginationChange = (e, page) => {
    setCurrentPage(page - 1);
  };

  const currentReviews = workspaceReviewsData.data.slice(
    10 * currentPage,
    Math.min(10 * (currentPage + 1), workspaceReviewsData.data.length)
  );
  return (
    <>
      {currentReviews.map((review, index) => (
        <div className="flex text-left gap-6 my-4" key={index}>
          <div>
            <img
              src={review.user.avatar_url}
              alt="avatar"
              className="w-12 h-12 rounded-full mt-2"
            />
          </div>
          <div className="flex flex-col gap-3 w-11/12 bg-slate-100 rounded-lg p-6">
            <div>
              <h4 className="font-bold">{review.user.username}</h4>
              <h5>{format(parseISO(review.created_at), "dd-MM-yyyy")}</h5>
            </div>
            <div className="flex items-center gap-4 ">
              <Rating
                name="text-feedback"
                value={review.average_rating}
                readOnly
                precision={0.5}
                size="small"
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {/* <Rating name="read-only" value={review.average_rating} readOnly /> */}
              <span>{review.average_rating}</span>
            </div>
            <div>{review.comment}</div>
          </div>
        </div>
      ))}
      <Pagination
        className="flex justify-end"
        count={paginationCount}
        color="primary"
        onChange={handlePaginationChange}
      />
    </>
  );
}

export default Reviews;
