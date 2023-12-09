import {useState, useEffect} from 'react';
import "./result.css"
import dayjs from 'dayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Checkbox from '@mui/material/Checkbox';
import Workspace from "../../Components/Workspace/Workspace.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Selector from "../../Components/Selector/Selector.jsx";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {LinearProgress, Pagination, Slider} from "@mui/material";
import {areas, statuses, services, label, options, orders} from "../../Utils/constant.js";
import useListWorkspaces from "./useListWorkspaces.js";


const Result = () => {
    const max = 500000;
    const {
        listWorkspaces,
        isSuccess,
        isLoading,
        page,
        total,
        totalPage,
        handlePageChange,
        queryString,
        setQueryString,
    } = useListWorkspaces();
    const [filter, setFilter] = useState({});

    const formatTime = (time) => {
        return time.format('hh:mm A');
    };

    useEffect(() => {
        const convertedFilter = {...queryString};
        if (convertedFilter.service) {
            convertedFilter.service = queryString.service.map(item => parseInt(item, 10));
        }
        if (convertedFilter.status) {
            convertedFilter.status = queryString.status.map(item => parseInt(item, 10));
        }
        if (convertedFilter.area) {
            convertedFilter.area = queryString.area.map(item => parseInt(item, 10));
        }

        setFilter({...convertedFilter});
    }, []);

    const handleChange = (key, value) => {
        setFilter({...filter, [key]: value});
    }

    const handleClock = (key, value) => {
        console.log(value)
        setFilter({...filter, [key]: value});
    }

    const handleCheckboxChange = (key, value) => {
        setFilter((prevFilter) => {

            const isKeyPresent = Object.prototype.hasOwnProperty.call(prevFilter, key);

            if (!isKeyPresent) {
                prevFilter[key] = []
                console.log('alo', prevFilter[key])
                return {
                    ...prevFilter,
                    [key]: prevFilter.push(value),
                };
            }

            const updatedArray = prevFilter[key]?.includes(value)
                ? prevFilter[key].filter((item) => item !== value)
                : [...prevFilter[key], value];

            const updatedFilter = {...prevFilter};
            if (updatedArray.length === 0) {
                delete updatedFilter[key];
            } else {
                updatedFilter[key] = updatedArray;
            }
            return updatedFilter;
        });
    };

    const handleSubmit = () => {
        const params = {
            ...queryString,
            ...filter
        };
        if (!Object.prototype.hasOwnProperty.call(filter, 'area') && Object.prototype.hasOwnProperty.call(queryString, 'area')) {
            delete params.area;
        }
        if (!Object.prototype.hasOwnProperty.call(filter, 'service') && Object.prototype.hasOwnProperty.call(queryString, 'service')) {
            delete params.service;
        }
        if (!Object.prototype.hasOwnProperty.call(filter, 'status') && Object.prototype.hasOwnProperty.call(queryString, 'status')) {
            delete params.status;
        }

        setQueryString(params);
    };

    const [selection, setSelection] = useState();
    const [order, setOrder] = useState();

    const handleSelectionChange = (event) => {
        setSelection(event.target.value);
    };

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    }


    return (
        <>
            <div className="">
                <div className="">
                    <Navbar></Navbar>
                </div>
                <div className="d-inline-flex w-full mt-5 mb-12"
                     style={{display: "inline-flex", justifyContent: "space-between"}}>
                    <button className="rounded-lg h-12 "
                            style={{'background-color': '#113437', 'color': 'white'}}>
                        Trở lại
                    </button>
                    <div className="d-inline-flex" style={{
                        display: "inline-flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "50%"
                    }}>
                        <p>Sắp xếp theo</p>
                        <Selector
                            label={selection ? options[selection - 1].label : "Sắp xếp theo"}
                            value={selection}
                            onChange={handleSelectionChange}
                            options={options}
                        ></Selector>
                        <Selector
                            label={order ? orders[order - 1].label : "Thứ tự"}
                            value={order}
                            onChange={handleOrderChange}
                            options={orders}
                        ></Selector>
                    </div>
                </div>

                <div>
                    <div className=" " style={{'min-width': '1336px', 'min-height': '1070px'}}>
                        <div className="flex gap-10">
                            <div className="filter-wrap py-11 px-8 flex flex-col space-y-4 text-left">
                                <div className="text-2xl font-semibold leading-7 ">Lọc</div>
                                <div className="border-b-2 border-black"></div>
                                <div className="font-bold texl-l">Thời gian mở</div>
                                <div className="flex gap-4">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                            <TimePicker
                                                defaultValue={dayjs('2023-12-6T07:30')}
                                                components={{
                                                    OpenPickerIcon: () =>
                                                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                                }}
                                                onChange={(newValue) => handleClock('opening_hour', formatTime(newValue))}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker']}>
                                            <TimePicker
                                                defaultValue={dayjs('2023-12-6T22:00')}
                                                components={{
                                                    OpenPickerIcon: () =>
                                                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                                }}
                                                onChange={(newValue) => handleClock('closing_hour', formatTime(newValue))}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>

                                <div className="border-b-2 border-black"></div>
                                <div>
                                    <div className="font-bold texl-l mb-2">Khu vực</div>
                                    <div className="space-y-1">
                                        {areas.map((area, index) => (
                                            <div key={index} className="flex gap-1 items-center">
                                                <Checkbox {...label}
                                                          value={(index)}
                                                          checked={(filter.area && filter.area.includes(index + 1)) || false}
                                                          onChange={() => handleCheckboxChange("area", (index + 1))}
                                                          style={{'color': '#44ADB4', 'padding': '0'}}
                                                          size="small"/>
                                                <div>{area} </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-b-2 border-black"></div>
                                <div>
                                    <div className="font-bold texl-l mb-2">Dịch vụ</div>
                                    <div className="space-y-1">
                                        <div className="space-y-1">
                                            {services.map((service, index) => (
                                                <div key={index} className="flex gap-1 items-center">
                                                    <Checkbox {...label}
                                                              value={index + 1}
                                                              checked={(filter.service && filter.service.includes(index + 1)) || false}
                                                              onChange={() => handleCheckboxChange("service", index + 1)}
                                                              style={{'color': '#44ADB4', 'padding': '0'}}
                                                              size="small"/>
                                                    <div>{service}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b-2 border-black"></div>
                                <div className="font-bold texl-l">Giá</div>
                                <Slider
                                    defaultValue={0}
                                    step={1000}
                                    max={max}
                                    style={{'color': '#44ADB4', 'padding': '0', 'margin-left': '8px'}}
                                    onChange={(event) => handleChange('price', event.target.value)}
                                    valueLabelDisplay="auto"
                                />

                                <div className="font-bold texl-l mb-2">Tình trạng</div>
                                <div className="space-y-1">
                                    {statuses.map((status, index) => (
                                        <div key={index} className="flex gap-1 items-center">
                                            <Checkbox {...label}
                                                      value={index}
                                                      checked={(filter.status && filter.status.includes(index)) || false}
                                                      onChange={() => handleCheckboxChange("status", index)}
                                                      style={{'color': '#44ADB4', 'padding': '0'}}
                                                      size="small"/>
                                            <div>{status}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="py-4">
                                    <button className="rounded-lg w-full h-12 "
                                            onClick={handleSubmit}
                                            style={{'background-color': '#44ADB4', 'color': 'white'}}>
                                        Lọc
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="font-bold text-xl leading-7 text-left">Kết quả</div>
                                <div className="font-normal text-xl text-left">Có {total} địa điểm được tìm thấy</div>
                                {isLoading && <>
                                    <div className="w-50">
                                        <LinearProgress className='mt-4 ml-10 progress-bar'/>
                                    </div>
                                </>}
                                {isSuccess && listWorkspaces.map((item, index) => (
                                    <Workspace key={index} data={item}/>
                                ))}
                            </div>
                        </div>


                    </div>
                    <div className="mt-5 ">
                        {totalPage && page && (
                            <Pagination
                                count={totalPage}
                                page={page}
                                onChange={handlePageChange}
                                shape="rounded"
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Result;

