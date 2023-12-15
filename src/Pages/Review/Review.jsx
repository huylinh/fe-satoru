import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function Review() {
  const [reviewSortOpt, setReviewSortOpt] = useState();

  const handleChange = (event) => {
    setReviewSortOpt(event.target.value);
  };

  const convertToProgressBar = (star) => {
    const progressWidth = Math.round((star / 5) * 320);
    return progressWidth;
  };

  const spaceReviewClassName = convertToProgressBar(4.8);
  const wifiReviewClassName = convertToProgressBar(4);
  const priceReviewClassName = convertToProgressBar(3);
  return (
    <div className="text-gray-950">
      <Navbar />
      {/* Workspace detail */}
      <div className="mt-20 mx-10">
        <div className="flex gap-4 flex-col">
          <h1 className="text-left font-bold text-4xl">HDC Workspace 3</h1>
          <h2 className="text-left ml-4 text-xl">So 2 Dinh Liet, Hoan Kiem</h2>
          <div className="flex gap-2">
            <img
              className="w-72 h-72 rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/15bc/ba33/9de2c0ba4f15cb59b136fc2c98de59d0?Expires=1703462400&Signature=Kx2TotN8vrTxdCRFElnES390DgkW5Piruv3XMYH4Une-KngeXmXWvQogHcdXecRdhKegVDUR5XmJn255JYZyUj6aqPWE7HM31UnQqfkfyqN57dncMlL~GiG8WtWKc9z~ojaVTUQnLP9P8Mk7D5HV2NRef2DlPBcqnRSYVzAWSm1TZzahxudPUdeVuKUqovpRfS-4lQEH1717CHt0HfGrXaLSMDITCSzK98759cdbQqMwfR8VKHRw1Vv0FhDu-z4KKkl8OEb767VKI6RGadR051BZOpR5nWBAgKb11xFLw5YBl2lwe-23qm60WDo1infTdqFs6smtxZF4u~TOf~c7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Workspace inside"
            />
            <img
              className="w-72 h-72 rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/15bc/ba33/9de2c0ba4f15cb59b136fc2c98de59d0?Expires=1703462400&Signature=Kx2TotN8vrTxdCRFElnES390DgkW5Piruv3XMYH4Une-KngeXmXWvQogHcdXecRdhKegVDUR5XmJn255JYZyUj6aqPWE7HM31UnQqfkfyqN57dncMlL~GiG8WtWKc9z~ojaVTUQnLP9P8Mk7D5HV2NRef2DlPBcqnRSYVzAWSm1TZzahxudPUdeVuKUqovpRfS-4lQEH1717CHt0HfGrXaLSMDITCSzK98759cdbQqMwfR8VKHRw1Vv0FhDu-z4KKkl8OEb767VKI6RGadR051BZOpR5nWBAgKb11xFLw5YBl2lwe-23qm60WDo1infTdqFs6smtxZF4u~TOf~c7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Workspace inside"
            />
            <img
              className="w-72 h-72 rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/15bc/ba33/9de2c0ba4f15cb59b136fc2c98de59d0?Expires=1703462400&Signature=Kx2TotN8vrTxdCRFElnES390DgkW5Piruv3XMYH4Une-KngeXmXWvQogHcdXecRdhKegVDUR5XmJn255JYZyUj6aqPWE7HM31UnQqfkfyqN57dncMlL~GiG8WtWKc9z~ojaVTUQnLP9P8Mk7D5HV2NRef2DlPBcqnRSYVzAWSm1TZzahxudPUdeVuKUqovpRfS-4lQEH1717CHt0HfGrXaLSMDITCSzK98759cdbQqMwfR8VKHRw1Vv0FhDu-z4KKkl8OEb767VKI6RGadR051BZOpR5nWBAgKb11xFLw5YBl2lwe-23qm60WDo1infTdqFs6smtxZF4u~TOf~c7uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Workspace inside"
            />
            <div className="w-72 h-72 rounded-2xl flex justify-center items-center p-4 gap-3 bg-slate-200 hover:bg-slate-300 hover:cursor-pointer">
              <p className="font-bold text-xl">Xem thêm</p>
            </div>
          </div>
        </div>

        {/* Review and  in4 */}
        <div className="mt-8 flex gap-4 text-left">
          {/* Review card*/}
          <div className="w-[599px] h-[362px] p-6 rounded-2xl drop-shadow-sm border-2 border-satoru-blue">
            <h3 className="text-satoru-blue font-bold">Đánh giá</h3>
            <div className="border-[1px] border-gray-700 w-14"></div>
            <div className="flex justify-center">
              <div className="flex justify-center items-center w-24 h-24 rounded-lg bg-cyan-500 mr-2">
                <span className="text-white text-6xl font-semibold">4.6</span>
              </div>
              <div className="flex flex-col h-24 justify-evenly">
                <div className="font-bold text-2xl">Tốt</div>
                <div className="text-lg">/5 (5 stars)</div>
              </div>
            </div>
            {/* progress bar */}
            <div className="p-4 flex items-center gap-4">
              <span className="w-24 font-medium text-base">Không gian</span>
              <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
                <div
                  className="  bg-satoru-blue h-5 rounded-lg"
                  style={{ width: `${spaceReviewClassName}px` }}
                ></div>
              </div>
              <div>
                <span className="font-medium text-base">4.8/5</span>
              </div>
            </div>

            <div className="p-4 flex items-center gap-4">
              <span className="w-24 font-medium text-base">Wifi</span>
              <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
                <div
                  className="  bg-satoru-blue h-5 rounded-lg"
                  style={{ width: `${wifiReviewClassName}px` }}
                ></div>
              </div>
              <div>
                <span className="font-medium text-base">4/5</span>
              </div>
            </div>

            <div className="p-4 flex items-center gap-4">
              <span className="w-24 font-medium text-base">Giá</span>
              <div className="inline-block w-80 h-5 bg-slate-200 rounded-lg">
                <div
                  className="  bg-satoru-blue h-5 rounded-lg"
                  style={{ width: `${priceReviewClassName}px` }}
                ></div>
              </div>
              <div>
                <span className="font-medium text-base">3/5</span>
              </div>
            </div>
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
              <li>1.500.000/tháng (linh hoạt)</li>
              <li>2.000.000/tháng (dành riêng)</li>
              <li>100.000/ngày</li>
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
                <span>8:00 - 23:00</span>
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
                <span>0912 345 678</span>
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
                <span>Đông đúc</span>
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
          <div>
            <div className="flex justify-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M30.0781 28.9843V6.01553H24.0625V0.888916L6.01562 4.00043V28.9843H1.09375V31.1718H7.03418L24.0625 33.5205V8.20303H27.8906V31.1718H33.9062V28.9843H30.0781ZM21.875 31.0106L8.20312 29.1248V5.84312L21.875 3.48623V31.0106Z"
                  fill="#44ADB4"
                />
                <path
                  d="M17.5 15.8594H19.6875V20.2344H17.5V15.8594Z"
                  fill="#44ADB4"
                />
              </svg>
            </div>
            <span>Phòng riêng</span>
          </div>

          <div>
            <div className="flex justify-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
              >
                <path
                  d="M19.7869 16.0417H15.1202V10.2083H19.7869C20.5604 10.2083 21.3023 10.5156 21.8493 11.0626C22.3962 11.6096 22.7035 12.3515 22.7035 13.125C22.7035 13.8985 22.3962 14.6404 21.8493 15.1874C21.3023 15.7344 20.5604 16.0417 19.7869 16.0417ZM19.4952 4.375H9.28687V30.625H15.1202V21.875H19.4952C21.8158 21.875 24.0414 20.9531 25.6824 19.3122C27.3233 17.6712 28.2452 15.4456 28.2452 13.125C28.2452 8.28333 24.3223 4.375 19.4952 4.375Z"
                  fill="#44ADB4"
                />
              </svg>
            </div>

            <span>Chỗ để xe</span>
          </div>
          <div>
            <div className="flex justify-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="35"
                viewBox="0 0 36 35"
                fill="none"
              >
                <path
                  d="M29.605 4.375H12.105C11.8149 4.375 11.5367 4.49023 11.3316 4.69535C11.1265 4.90047 11.0112 5.17867 11.0112 5.46875V10.9375H5.54248C5.2524 10.9375 4.9742 11.0527 4.76908 11.2579C4.56396 11.463 4.44873 11.7412 4.44873 12.0312V29.5312C4.44873 29.8213 4.56396 30.0995 4.76908 30.3046C4.9742 30.5098 5.2524 30.625 5.54248 30.625H23.0425C23.3326 30.625 23.6108 30.5098 23.8159 30.3046C24.021 30.0995 24.1362 29.8213 24.1362 29.5312V24.0625H29.605C29.8951 24.0625 30.1733 23.9473 30.3784 23.7421C30.5835 23.537 30.6987 23.2588 30.6987 22.9688V5.46875C30.6987 5.17867 30.5835 4.90047 30.3784 4.69535C30.1733 4.49023 29.8951 4.375 29.605 4.375ZM21.9487 28.4375H6.63623V13.125H21.9487V28.4375ZM28.5112 21.875H24.1362V12.0312C24.1362 11.7412 24.021 11.463 23.8159 11.2579C23.6108 11.0527 23.3326 10.9375 23.0425 10.9375H13.1987V6.5625H28.5112V21.875Z"
                  fill="#44ADB4"
                />
              </svg>
            </div>
            <span>Điều hòa</span>
          </div>
        </div>

        {/* Reivew  title*/}
        <div className="flex justify-between items-center mt-12">
          <h2 className="text-lg text-satoru-blue font-bold">Bình luận</h2>
          <div className="flex gap-4 items-center">
            <span>Sắp xếp</span>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                sx={{ width: 200, paddingLeft: 2, paddingRight: 8 }}
                defaultValue={10}
                value={reviewSortOpt}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>Gần đây</MenuItem>
                <MenuItem value={20}>Cũ nhất</MenuItem>
              </Select>
            </FormControl>
            <button className="font-sans rounded-lg font-bold text-white px-6 py-4 bg-satoru-blue">
              <span className="p-3">+</span>
              <span>Viết bình luận</span>
            </button>
          </div>
        </div>
        {/* Review content*/}
        <div className="flex text-left gap-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M11 39C14 37 18 36 20 34C22 32 16 32 16 22C16 12 24 12 24 12C24 12 32 12 32 22C32 32 26 32 28 34C30 36 34 37 37 39"
                stroke="#44ADB4"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                stroke="#44ADB4"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-bold">Uong Hong Minh</h4>
              <h5>17/10/2023</h5>
            </div>
            <div className="flex items-center gap-4">
              <Rating name="read-only" value="3" readOnly />
              <span>3.0</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              cumque cum rem natus optio porro magni, animi repellat officiis
              ipsam aliquid sapiente laboriosam corrupti dolore quo sit,
              corporis minima? Natus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
