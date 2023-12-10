import "./workspace.css";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {  formatNumber } from "../../Utils/constant.js";


const Workspace = ({data}) => {

    return (
        <div className="wrap">
            <div className="flex" style={{'gap': '16px'}}>

                <div className="image-container">
                    <img src={data.image} className="image" alt=""/>
                </div>
                <div className="flex flex-col items-start space-y-4">
                    <div className="font-semibold text-2xl ">
                        {data.name}
                    </div>
                    <div className="flex items-start flex-col space-y-1">
                        <span className="font-normal  text-l ">
                            {data.rating_count} đánh giá
                        </span>
                        <div className="flex items-baseline space-x-2">
                            <Rating
                                name="text-feedback"
                                value={data.rating}
                                readOnly
                                precision={0.5}
                                size="small"
                                emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                            />
                            <div className="text-xl  ">
                                {data.rating}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <div className="flex gap-x-3 items-end">
                            <div>
                                <GroupIcon></GroupIcon>
                            </div>
                            <span className="font-normal text-l ">
                                Trạng thái: {data.status === '0' ? "Đông đúc" : data.status === '1' ? "Bình thường" : "Vắng vẻ"}
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <SellIcon></SellIcon>
                            </div>
                            <span>
                               Giá : <strong> {formatNumber(data.price)} VND/Ngày</strong>
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <PlaceIcon></PlaceIcon>
                            </div>
                            <span className="font-normal  text-l">
                                {data?.address}
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <AccessTimeIcon></AccessTimeIcon>
                            </div>
                            <span className="font-normal text-l">
                                {data?.opening_hour} - {data?.closing_hour} - <strong>Opening</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Workspace;
