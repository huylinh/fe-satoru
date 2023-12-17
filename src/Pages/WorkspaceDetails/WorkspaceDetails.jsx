import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  getWorkspaceDetailsService,
  getWorkspaceReviewsService,
} from "../../Services/workspaceDetailsService";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import iconSet from "../../assets/icon/iconSet";
import StandardImageList from "../../Components/StandardImageList/StandardImageList";

import ReviewProgressBar from "../../Components/ReviewProgressBar/ReviewProgressBar";
import Reviews from "../../Components/Reviews/Reviews";

function WorkspaceDetails() {
  const [reviewSortOpt, setReviewSortOpt] = useState(0); // 0: latest, oldest
  const [isPopupPhotoGallery, setIsPopupPhotoGallery] = useState(false);

  const workspaceParams = useParams();

  const { isLoading: workspaceDetailsLoading, data: workspaceDetailsData } =
    useQuery({
      queryKey: ["workspaceDetails"],
      queryFn: () => getWorkspaceDetailsService(workspaceParams.id),
    });

  const { isLoading: workspaceReviewsLoading, data: workspaceReviewsData } =
    useQuery({
      queryKey: ["workspaceReviews"],
      queryFn: () => getWorkspaceReviewsService(workspaceParams.id),
    });

  if (workspaceDetailsLoading || workspaceReviewsLoading) {
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

  const slicedImage = workspaceDetailsData.data.workspace_images.slice(
    0,
    Math.min(3, workspaceDetailsData.data.workspace_images.length)
  );

  // see more photos
  const handleClose = () => {
    setIsPopupPhotoGallery(false);
  };
  const handleOpen = () => {
    setIsPopupPhotoGallery(true);
  };

  const handleChange = (e) => {
    setReviewSortOpt(e.target.value);
  };

  return (
    <div className="text-gray-950">
      <Navbar />
      {/* Workspace detail */}
      <div className="mt-20 mx-10">
        <div className="flex gap-4 flex-col">
          <h1 className="text-left font-bold text-4xl">
            {workspaceDetailsData.data.name}
          </h1>
          <h2 className="text-left ml-4 text-xl">
            {workspaceDetailsData.data.address}
          </h2>
          <div className="flex gap-2">
            {slicedImage.map((img, index) => (
              <img
                key={index}
                className="w-72 h-72 rounded-2xl"
                src={`${img.image_url}`}
                alt="Workspace image"
              />
            ))}
            {workspaceDetailsData.data.workspace_images.length > 3 ? (
              <div
                className="w-72 h-72 rounded-2xl flex justify-center items-center p-4 gap-3 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer"
                onClick={handleOpen}
              >
                <p className="font-bold text-xl">Xem thêm</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Review and  in4 */}
        <div className="mt-8 flex gap-4 text-left">
          {/* Review card*/}
          <div className="w-[599px] h-[362px] p-6 rounded-2xl drop-shadow-sm border-2 border-satoru-blue">
            <h3 className="text-satoru-blue font-bold">Đánh giá</h3>
            <div className="border-[1px] border-gray-700 w-14"></div>
            {workspaceReviewsData.data.length == 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <div className="font-md text-lg w-3/4 h-3/4  rounded flex justify-center items-center  ">
                  <span>Chưa có đánh giá</span>
                </div>
              </div>
            ) : (
              <ReviewProgressBar
                workspaceAvgRating={workspaceDetailsData.data.average_rating}
                reviews={workspaceReviewsData.data}
              />
            )}
          </div>
          {/* Info card */}
          <div className="w-[599px] h-[362px] p-6 rounded-2xl border-2 drop-shadow-sm border-satoru-blue text-lg">
            <h3 className="text-satoru-blue font-bold">Thông tin</h3>
            <div className="border-[1px] border-gray-700 w-24"></div>
            <div className="flex gap-2 mt-3 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10.75 8.75C10.25 8.625 9.75 8.375 9.375 8C9 7.875 8.875 7.5 8.875 7.25C8.875 7 9 6.625 9.25 6.5C9.625 6.25 10 6 10.375 6.125C11.125 6.125 11.75 6.5 12.125 7L13.25 5.5C12.875 5.125 12.5 4.875 12.125 4.625C11.75 4.375 11.25 4.25 10.75 4.25V2.5H9.25V4.25C8.625 4.375 8 4.75 7.5 5.25C7 5.875 6.625 6.625 6.75 7.375C6.75 8.125 7 8.875 7.5 9.375C8.125 10 9 10.375 9.75 10.75C10.125 10.875 10.625 11.125 11 11.375C11.25 11.625 11.375 12 11.375 12.375C11.375 12.75 11.25 13.125 11 13.5C10.625 13.875 10.125 14 9.75 14C9.25 14 8.625 13.875 8.25 13.5C7.875 13.25 7.5 12.875 7.25 12.5L6 13.875C6.375 14.375 6.75 14.75 7.25 15.125C7.875 15.5 8.625 15.875 9.375 15.875V17.5H10.75V15.625C11.5 15.5 12.125 15.125 12.625 14.625C13.25 14 13.625 13 13.625 12.125C13.625 11.375 13.375 10.5 12.75 10C12.125 9.375 11.5 9 10.75 8.75ZM10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18.625C5.25 18.625 1.375 14.75 1.375 10C1.375 5.25 5.25 1.375 10 1.375C14.75 1.375 18.625 5.25 18.625 10C18.625 14.75 14.75 18.625 10 18.625Z"
                  fill="black"
                />
              </svg>
              <div>
                <span>Giá</span>
              </div>
            </div>
            <ul className="list-disc px-12">
              <li>{workspaceDetailsData.data.price}</li>
            </ul>

            <div className="flex gap-2 mt-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.29 3.25012L5.16 6.72012L4 5.34012L8.14 1.87012L9.29 3.25012ZM22 5.35012L20.84 6.73012L16.7 3.25012L17.86 1.87012L22 5.35012ZM13 4.00012C15.1217 4.00012 17.1566 4.84297 18.6569 6.34326C20.1571 7.84355 21 9.87839 21 12.0001C21 14.1218 20.1571 16.1567 18.6569 17.657C17.1566 19.1573 15.1217 20.0001 13 20.0001C10.8783 20.0001 8.84344 19.1573 7.34315 17.657C5.84285 16.1567 5 14.1218 5 12.0001C5 9.87839 5.84285 7.84355 7.34315 6.34326C8.84344 4.84297 10.8783 4.00012 13 4.00012ZM13 6.00012C11.4087 6.00012 9.88258 6.63226 8.75736 7.75748C7.63214 8.8827 7 10.4088 7 12.0001C7 13.5914 7.63214 15.1175 8.75736 16.2428C9.88258 17.368 11.4087 18.0001 13 18.0001C14.5913 18.0001 16.1174 17.368 17.2426 16.2428C18.3679 15.1175 19 13.5914 19 12.0001C19 10.4088 18.3679 8.8827 17.2426 7.75748C16.1174 6.63226 14.5913 6.00012 13 6.00012ZM12 7.50012H13.5V12.0301L16.72 13.5001L16.1 14.8601L12 13.0001V7.50012ZM1 14.0001C1 11.5001 2.13 9.30012 3.91 7.83012C3.30936 9.13818 2.99892 10.5607 3 12.0001L3.06 13.1301L3 14.0001C3 16.2801 4.27 18.2601 6.14 19.2801C7.44 20.5001 9.07 21.3901 10.89 21.7801C10.28 21.9201 9.65 22.0001 9 22.0001C6.87827 22.0001 4.84344 21.1573 3.34315 19.657C1.84285 18.1567 1 16.1218 1 14.0001Z"
                  fill="black"
                />
              </svg>
              <div>
                <span>
                  {`${workspaceDetailsData.data.opening_hour} - ${workspaceDetailsData.data.closing_hour}`}
                </span>
              </div>
            </div>

            <div className="flex gap-2 mt-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="black"
                />
              </svg>
              <div>
                <span>{workspaceDetailsData.data.phone_number}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                  fill="black"
                />
              </svg>
              <div>
                <span>
                  {workspaceDetailsData.data.status === "0"
                    ? "Đông đúc"
                    : workspaceDetailsData.data.status === "1"
                    ? "Bình thường"
                    : "Vắng vẻ"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Button and Addictional in4 */}
        <div className="mt-2 text-right">
          <button className="font-sans rounded-lg h-12 text-lg font-bold text-white px-12 bg-satoru-blue">
            Đặt chỗ
          </button>
        </div>
        {/* Service */}
        <div className="flex justify-center items-center w-full gap-28 mt-4">
          {workspaceDetailsData.data.services.map((item) => {
            switch (item.service_name) {
              case "Điều hoà":
                return (
                  <div>
                    <div className="flex justify-center w-full">
                      {iconSet["airConditioner"]}
                    </div>
                    <span>Điều hòa</span>
                  </div>
                );

              case "Phòng riêng":
                return (
                  <div>
                    <div className="flex justify-center w-full">
                      {iconSet["privateRoom"]}
                    </div>
                    <span>Phòng riêng</span>
                  </div>
                );
              case "Chỗ để xe":
                return (
                  <div>
                    <div className="flex justify-center w-full">
                      {iconSet["parking"]}
                    </div>
                    <span>Chỗ để xe</span>
                  </div>
                );
            }
          })}
        </div>

        {/* Reivew  title*/}
        <div className="flex justify-between items-center mt-12">
          <h2 className="text-lg text-satoru-blue font-bold">Bình luận</h2>
          <div className="flex gap-4 items-center">
            <span>Sắp xếp</span>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                sx={{ width: 200, paddingLeft: 2, paddingRight: 8 }}
                defaultValue={0}
                value={reviewSortOpt}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={0}>Gần đây</MenuItem>
                <MenuItem value={1}>Cũ nhất</MenuItem>
              </Select>
            </FormControl>
            <button className="font-sans rounded-lg font-bold text-white px-6 py-4 bg-satoru-blue">
              <span className="p-3">+</span>
              <span>Viết bình luận</span>
            </button>
          </div>
        </div>
        {/* Review content*/}
        {workspaceReviewsData.data.length == 0 ? (
          <div>Chưa có đánh giá</div>
        ) : (
          <Reviews
            workspaceReviewsData={workspaceReviewsData}
            reviewSortOpt={reviewSortOpt}
          />
        )}
        <div>
          <Dialog
            open={isPopupPhotoGallery}
            onClose={handleClose}
            maxWidth={"md"}
            className="flex justify-center"
          >
            <DialogContent>
              <StandardImageList
                itemData={workspaceDetailsData.data.workspace_images}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDetails;
