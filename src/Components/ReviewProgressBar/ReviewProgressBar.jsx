const convertToProgressBar = (star) => {
  const progressWidth = Math.round((star / 5) * 320);
  return progressWidth;
};

function ReviewProgressBar({ workspaceAvgRating, reviews }) {
  console.log(reviews);
  const wifi_total_rating = reviews.reduce(
    (acc, item) => acc + Number(item.wifi_rating),
    0
  );

  const space_total_rating = reviews.reduce(
    (acc, item) => acc + Number(item.space_rating),
    0
  );

  // const price_total_rating = reviews.reduce(
  //   (acc, item) => acc + Number(item.price_rating),
  //   0
  // );
  // workspace details rating average
  const wifi_average_rating = (wifi_total_rating / reviews.length).toFixed(1);

  const space_average_rating = (space_total_rating / reviews.length).toFixed(1);
  const newAvgRating = (
    (Number(wifi_average_rating) + Number(space_average_rating)) /
    2
  ).toFixed(1); // bug of VTK
  // const price_average_rating = (price_total_rating / reviews.length).toFixed(1);

  const spaceReviewClassName = convertToProgressBar(space_average_rating);
  const wifiReviewClassName = convertToProgressBar(wifi_average_rating);

  // const priceReviewClassName = convertToProgressBar(price_average_rating);

  return (
    <>
      {/* Review card*/}
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-24 h-24 rounded-lg bg-cyan-500 mr-2">
          <span className="text-white text-6xl font-semibold">
            {workspaceAvgRating}
          </span>
        </div>
        <div className="flex flex-col h-24 justify-evenly">
          <div className="font-bold text-2xl">Tốt</div>
          <div className="text-lg">/5 (5 stars)</div>
        </div>
      </div>
      {/* progress bar */}
      <div className="mt-5 py-4 flex items-center gap-4">
        <span className="w-24 font-medium text-base">Không gian</span>
        <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
          <div
            className="  bg-satoru-blue h-5 rounded-lg"
            style={{ width: `${spaceReviewClassName}px` }}
          ></div>
        </div>
        <div>
          <span className="font-medium text-base">
            {space_average_rating}/5
          </span>
        </div>
      </div>

      <div className="py-4 flex items-center gap-4">
        <span className="w-24 font-medium text-base">Wifi</span>
        <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
          <div
            className="  bg-satoru-blue h-5 rounded-lg"
            style={{ width: `${wifiReviewClassName}px` }}
          ></div>
        </div>
        <div>
          <span className="font-medium text-base">{wifi_average_rating}/5</span>
        </div>
      </div>
      {/* 
      <div className="py-4 flex items-center gap-4">
        <span className="w-24 font-medium text-base">Giá</span>
        <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
          <div
            className="  bg-satoru-blue h-5 rounded-lg"
            style={{ width: `${priceReviewClassName}px` }}
          ></div>
        </div>
        <div>
          <span className="font-medium text-base">
            {price_average_rating}/5
          </span>
        </div>
      </div> */}
    </>
  );
}

export default ReviewProgressBar;
