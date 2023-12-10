export const areas = ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng", "Cầu Giấy"];
export const services = ["Phòng họp riêng", "Điều hòa", "Bãi đỗ xe"];
export const statuses = ["Đông đúc", "Bình thường", "Vắng vẻ"];


export const label = {inputProps: {'aria-label': 'Checkbox demo'}};

export const options = [
    {value: 1, label: 'Giá'},
    {value: 2, label: 'Đánh giá'},
    {value: 3, label: 'Khoảng cách'},
];

export const orders = [
    {value: 1, label: "Giảm dần"},
    {value: 2, label: "Tăng dần"},
];

export const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
