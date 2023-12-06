import React from "react";
import "./workspace.css";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import SellIcon from '@mui/icons-material/Sell';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Workspace = () => {
    return(
        <div className="wrap">
            <div className="flex" style={{'gap':'16px'}}>
                <img src="./src/assets/workspace.jpg" className="" alt=""/>
                <div className="flex flex-col items-start space-y-4">
                    <div className="font-semibold text-2xl ">
                        Hello world
                    </div>
                    <div className="flex items-start flex-col space-y-1">
                        <span className="font-normal  text-l ">
                            30 đánh giá
                        </span>
                        <div className="flex items-baseline space-x-2">
                            <Rating
                                name="text-feedback"
                                value={3.5}
                                readOnly
                                precision={0.5}
                                size="small"
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <div className="text-xl  ">
                                3.5
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <div className="flex gap-x-3 items-end">
                            <div>
                                <GroupIcon></GroupIcon>
                            </div>
                            <span className="font-normal text-l ">
                                Trạng thái : Đông đúc
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <SellIcon></SellIcon>
                            </div>
                            <span>
                               Giá : <strong>50000VND/Ngày</strong>
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <PlaceIcon></PlaceIcon>
                            </div>
                            <span className="font-normal  text-l">
                                2 Dinh Liet Hoan Kiem
                            </span>
                        </div>
                        <div className="flex gap-x-3">
                            <div>
                                <AccessTimeIcon></AccessTimeIcon>
                            </div>
                            <span className="font-normal text-l">
                                08:00 - 23;00 - <strong>Opening</strong>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )};

export default Workspace;
