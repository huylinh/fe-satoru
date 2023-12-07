import React, { useState } from "react";
import "./result.css"
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

import Workspace from "../../Components/Workspace/Workspace.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Slider } from "@mui/material";

const Result = () => {
    const max = 500000;

    return (
        <>
            <div className=" ">
                <div className="">
                    <Navbar></Navbar>
                </div>
                <div className="flex gap-10">
                    <div className="filter-wrap py-11 px-8 flex flex-col space-y-4 text-left">
                        <div className="text-2xl font-semibold leading-7 ">Lọc</div>
                        <div className="border-b-2 border-black"></div>
                        <div className="font-bold texl-l">Thời gian mở</div>
                        <div className="flex ">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']}>
                                    <TimePicker
                                        style={{ 'min-width': '40px' }}
                                        defaultValue={dayjs('2023-12-6T07:30')}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['TimePicker']}>
                                    <TimePicker
                                        defaultValue={dayjs('2023-12-6T22:30')}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="border-b-2 border-black"></div>
                        <div>
                            <div className="font-bold texl-l mb-2">Khu vực</div>
                            <div className="space-y-1">
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Ba Đình</div>
                                </div>
                                <div className="flex gap-20">
                                    <div className="flex gap-1 items-center">
                                        <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                            size="small" />
                                        <div>Cầu Giấy</div>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                            size="small" />
                                        <div>Hoàn Kiếm</div>
                                    </div>
                                </div>

                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Hai Bà Trưng</div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b-2 border-black"></div>
                        <div>
                            <div className="font-bold texl-l mb-2">Dịch vụ</div>
                            <div className="space-y-1">
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Phòng họp riêng</div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Điều hòa</div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Bãi đỗ xe</div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b-2 border-black"></div>
                        <div className="font-bold texl-l">Giá</div>
                        <Slider
                            defaultValue={30}
                            step={1000}
                            max={max}
                            style={{ 'color': '#44ADB4', 'padding': '0', 'margin-left': '8px' }}
                            // onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                        <div>
                            <div className="font-bold texl-l mb-2">Tình trạng</div>
                            <div className="space-y-1">
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Đông đúc</div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Bình thường</div>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Checkbox {...label} defaultChecked style={{ 'color': '#44ADB4', 'padding': '0' }}
                                        size="small" />
                                    <div>Vắng vẻ</div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4">
                            <button className="rounded-lg w-full h-12 "
                                style={{ 'background-color': '#44ADB4', 'color': 'white' }}>
                                Lọc
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="font-bold text-xl leading-7 text-left">Kết quả</div>
                        <div className="font-normal text-xl text-left">Có 2 địa điểm được tìm thấy</div>
                        <Workspace></Workspace>
                        <Workspace></Workspace>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Result;
