export const types = ["Quán cafe", "Thư viện", "Workspace"];

 export const topAreas = [
  { area: 'Quận Ba Đình', type: 1 },
  { area: 'Quận Hoàn Kiếm', type: 2 },
  { area: 'Quận Tây Hồ', type: 3 },
  { area: 'Quận Long Biên', type: 4 },
  { area: 'Quận Cầu Giấy', type: 5 },
  { area: "Quận Đống Đa", type: 6 },
  { area: 'Quận Hai Bà Trưng', type: 7 },
     { area: 'Quận Hoàng Mai', type: 8 },
     { area: 'Quận Thanh Xuân', type: 9 },
     { area: 'Quận Hà Đông', type: 10 },
     { area: 'Quận Bắc Từ Liêm', type: 11 },
     { area: 'Quận Nam Từ Liêm', type: 12 },
     { area: 'Thị Xã Sơn Tây', type: 13 },
     { area: 'Huyện Chương Mỹ', type: 14},
     { area: 'Huyện Đan Phượng', type: 16},
     { area: 'Huyện Đông Anh', type: 17},
     { area: 'Huyện Gia Lâm', type: 18},
     { area: 'Huyện Hoài Đức', type: 19},
     { area: 'Huyện Mê Linh', type: 20},
     { area: 'Huyện Mỹ Đức', type: 21},
     { area: 'Huyện Phú Xuyên', type: 22},
     { area: 'Huyện Phúc Thọ', type: 23},
     { area: 'Huyện Quốc Oai', type: 24},
     { area: 'Huyện Sóc Sơn', type: 25},
     { area: 'Huyện Thạch Thất', type: 26},
     { area: 'Huyện Thanh Oai', type: 27},
     { area: 'Huyện Thanh Trì', type: 28},
     { area: 'Huyện Thường Tín', type: 29},
     { area: 'Huyện Ứng Hòa', type: 30},
]

export const services = ["Phòng họp ", "Wifi miễn phí"];
export const statuses = ["Đang Đông đúc", "Bình thường", "Đang Vắng vẻ"];

export const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const options = [
  { value: 1, label: "Đánh giá" },
  { value: 2, label: "Khoảng cách" },
];

export const orders = [
  { value: 1, label: "Giảm dần" },
  { value: 2, label: "Tăng dần" },
];

export const reviewsOptions = [
  { value: 1, label: "Gần đây" },
  { value: 2, label: "Cũ nhất" },
];

export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
