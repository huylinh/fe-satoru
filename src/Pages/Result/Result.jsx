import {useEffect, useState} from "react";
import "./result.css";
import dayjs from "dayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import Checkbox from "@mui/material/Checkbox";
import Workspace from "../../Components/Workspace/Workspace.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Selector from "../../Components/Selector/Selector.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Autocomplete,
    Button,
    LinearProgress,
    Pagination,
    Slider,
    TextField,
} from "@mui/material";
import {
    formatNumber,
    label,
    options,
    orders,
    services,
    statuses,
    topAreas,
    types,
} from "../../Utils/constant.js";
import useListWorkspaces from "./useListWorkspaces.js";
import {useNavigate} from "react-router";

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
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [defaultAreas, setDefaultAreas] = useState([]);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const formatTime = (time) => {
        return time.format("hh:mm A");
    };

    const [selection, setSelection] = useState();
    const [order, setOrder] = useState();
    const [nameString, setNameString] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const convertedFilter = {...queryString};
        if (convertedFilter.service) {
            convertedFilter.service = queryString.service.map((item) =>
                parseInt(item, 10)
            );
        }
        if (convertedFilter.status) {
            convertedFilter.status = queryString.status.map((item) =>
                parseInt(item, 10)
            );
        }
        if (convertedFilter.area) {
            convertedFilter.area = queryString.area.map((item) => parseInt(item, 10));
        }
        if (convertedFilter.categories) {
            convertedFilter.categories = queryString.categories.map((item) =>
                parseInt(item, 10)
            );
        }

        setFilter({...convertedFilter});
        setSelectedAreas({...convertedFilter.area});

        if (convertedFilter.area) {
            const defaultValues = getDefaultValues(
                {...convertedFilter.area}, topAreas);
            setDefaultAreas(defaultValues);
        }
        
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        }

        const successCallback = (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);

            console.log("Longitude is " + latitude + " Latitude is " + longitude);
        }

        const errorCallback = (error) => {
            console.error(`Error getting user location: ${error.message}`);
        }

        getUserLocation();
    }, []);

    useEffect(() => {
        handleSubmit();
    }, [selection, order]);

    useEffect(() => {
        handleSubmit();
    }, [latitude, longitude]);

    const handleChange = (key, value) => {
        setFilter({...filter, [key]: value});
        setPrice(value);
    };
    const handleClock = (key, value) => {
        setFilter({...filter, [key]: value});
    };
    const handleCheckboxChange = (key, value) => {
        setFilter((prevFilter) => {
            const isKeyPresent = Object.prototype.hasOwnProperty.call(
                prevFilter,
                key
            );
            if (!isKeyPresent) {
                prevFilter[key] = [];
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
            ...filter,
            ...(nameString.length > 0 ? {name: nameString} : {}),
            ...(selection === 1 && order === 1 ? { sort_rating: 1} : {}),
            ...(selection === 1 && order === 2 ? { sort_rating: 0 } : {}),
            ...(selection === 2 && order === 1 ? { sort_distance: 1, lat: latitude, long: longitude } : {}),
            ...(selection === 2 && order === 2 ? { sort_distance: 0, lat: latitude, long: longitude } : {}),
        };
        if (
            !Object.prototype.hasOwnProperty.call(filter, "area") &&
            Object.prototype.hasOwnProperty.call(queryString, "area")
        ) {
            delete params.area;
        }
        if (
            !Object.prototype.hasOwnProperty.call(filter, "categories") &&
            Object.prototype.hasOwnProperty.call(queryString, "categories")
        ) {
            delete params.categories;
        }
        if (
            !Object.prototype.hasOwnProperty.call(filter, "service") &&
            Object.prototype.hasOwnProperty.call(queryString, "service")
        ) {
            delete params.service;
        }
        if (
            !Object.prototype.hasOwnProperty.call(filter, "status") &&
            Object.prototype.hasOwnProperty.call(queryString, "status")
        ) {
            delete params.status;
        }
        if (!(nameString.length > 0)) {
            delete params.name;
        }
        if (selection !== 1) {
            delete params.sort_rating;
        }
        if (selection !== 2) {
            delete params.lat;
            delete params.long;
            delete params.sort_distance;
        }
        setQueryString(params);
        window.scrollTo(0, 0);
    };

    const handleSelectionChange = (event) => {
        setSelection(event.target.value);
    };
    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };

    const handleSearchChange = (value) => {
        setNameString(value);
    };
    const handle = (e, newValue) => {

        if (newValue.length === 1 && selectedAreas.length === 0) {
            handleCheckboxChange("area", newValue[0].type);
            setSelectedAreas(newValue);
        } else {
            const findChangedItem = (prevValue, newValue) => {
                if (prevValue !== Object(prevValue) && !Array.isArray(prevValue)) {
                    return null;
                }
                if (Array.isArray(prevValue)) {
                    for (const newItem of newValue) {
                        if (!prevValue.includes(newItem)) {
                            return newItem;
                        }
                    }
                    for (const oldItem of prevValue) {
                        if (!newValue.includes(oldItem)) {
                            return oldItem;
                        }
                    }
                } else {
                    if (newValue.length === 0) {
                        return topAreas.find((area) => area.type === selectedAreas[0]);
                    }

                    const diff = newValue
                        .filter(item => !Object.values(prevValue).includes(item.type))
                        .map(item => item.type);

                    if (diff[0]) {
                        return diff[0]
                    } else {
                        return Object.values(prevValue).filter(value => !newValue.some(item => item.type === value))[0]
                    }
                }
            };
            const changedItem = findChangedItem(selectedAreas, newValue);
            console.log('abc', changedItem);
            if (changedItem === Object(changedItem)) {
                handleCheckboxChange("area", changedItem.type);
            } else {
                handleCheckboxChange("area", changedItem);
            }
            setSelectedAreas(newValue);
        }
    };
    const getDefaultValues = (filter, topAreas) => {
        const df = topAreas.filter((option) =>
            Object.values(filter).includes(option.type)
        );
        return df;
    };
    const navigate = useNavigate();

    return (
        <>
            <div className="">
                <div className="">
                    <Navbar
                        onSearchChange={handleSearchChange}
                        handleSearchSubmit={handleSubmit}
                    ></Navbar>
                </div>
                <div
                    className="d-inline-flex w-full mt-5 mb-12"
                    style={{display: "inline-flex", justifyContent: "space-between"}}
                >
                    <Button
                        variant="contained"
                        sx={{mt: 2, ml: 2}}
                        style={{
                            backgroundColor: "#113437",
                            color: "white",
                            fontSize: "14px",
                        }}
                        onClick={() => navigate("/")}
                    >
                        Trở lại
                    </Button>
                    <div
                        className="d-inline-flex"
                        style={{
                            display: "inline-flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            width: "50%",
                        }}
                    >
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
                    <div
                        className=" "
                        style={{"min-width": "1336px", "min-height": "1070px"}}
                    >
                        <div className="flex gap-10">
                            <div className="filter-wrap py-11 px-8 flex flex-col space-y-4 text-left">
                                <div className="text-2xl font-semibold leading-7 ">Lọc</div>
                                <div className="border-b-2 border-black"></div>
                                <div className="font-bold texl-l">Thời gian</div>
                                <div className="flex gap-4">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={["TimePicker"]}>
                                            <TimePicker
                                                defaultValue={dayjs("2023-12-6T07:30")}
                                                components={{
                                                    OpenPickerIcon: () => (
                                                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                                    ),
                                                }}
                                                onChange={(newValue) =>
                                                    handleClock("opening_hour", formatTime(newValue))
                                                }
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={["TimePicker"]}>
                                            <TimePicker
                                                defaultValue={dayjs("2023-12-6T22:00")}
                                                components={{
                                                    OpenPickerIcon: () => (
                                                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                                    ),
                                                }}
                                                onChange={(newValue) =>
                                                    handleClock("closing_hour", formatTime(newValue))
                                                }
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>

                                <div>
                                    <div className="font-bold texl-l mb-2">Khu vực</div>
                                    <div className="space-y-1">
                                        <Autocomplete
                                            multiple
                                            id="size-small-outlined-multi"
                                            size="small"
                                            classes=".MuiAutocomplete-hasPopupIcon"
                                            options={topAreas}
                                            getOptionLabel={(option) => option.area}
                                            defaultValue={defaultAreas}
                                            key={defaultAreas}
                                            renderInput={(params) => (
                                                <TextField {...params} sx={{outline: "red"}}/>
                                            )}
                                            onChange={handle}
                                        />
                                    </div>
                                </div>

                                <div className="border-b-2 border-black"></div>
                                <div>
                                    <div className="font-bold texl-l mb-2">Tiện ích</div>
                                    <div className="space-y-1">
                                        <div className="space-y-1">
                                            {services.map((service, index) => (
                                                <div key={index} className="flex gap-1 items-center">
                                                    <Checkbox
                                                        {...label}
                                                        value={index + 1}
                                                        checked={
                                                            (filter.service &&
                                                                filter.service.includes(index + 1)) ||
                                                            false
                                                        }
                                                        onChange={() =>
                                                            handleCheckboxChange("service", index + 1)
                                                        }
                                                        style={{color: "#44ADB4", padding: "0"}}
                                                        size="small"
                                                    />
                                                    <div>{service}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-b-2 border-black"></div>
                                <div className="font-bold texl-l">Giá</div>
                                <p
                                    style={{
                                        color: "#44ADB4",
                                        "font-size": "16px",
                                        "font-weight": "400",
                                        margin: "10px 0px -5px 0",
                                    }}
                                >
                                    {parseInt(filter?.price)
                                        ? formatNumber(parseInt(filter?.price)) + " VND"
                                        : "Miễn phí"}
                                </p>

                                <Slider
                                    defaultValue={filter.price ? parseInt(filter.price) : 0}
                                    step={1000}
                                    max={max}
                                    style={{
                                        color: "#44ADB4",
                                        padding: "0",
                                        "margin-left": "8px",
                                    }}
                                    onChange={(event) =>
                                        handleChange("price", event.target.value)
                                    }
                                    valueLabelDisplay="auto"
                                />

                                <div className="border-b-2 border-black"></div>
                                <div>
                                    <div className="font-bold texl-l mb-2">Kiểu địa điểm</div>
                                    <div className="space-y-1">
                                        {types.map((type, index) => (
                                            <div key={index} className="flex gap-1 items-center">
                                                <Checkbox
                                                    {...label}
                                                    value={index}
                                                    checked={
                                                        (filter.categories &&
                                                            filter.categories.includes(index + 1)) ||
                                                        false
                                                    }
                                                    onChange={() =>
                                                        handleCheckboxChange("categories", index + 1)
                                                    }
                                                    style={{color: "#44ADB4", padding: "0"}}
                                                    size="small"
                                                />
                                                <div>{type} </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-b-2 border-black"></div>
                                <div className="font-bold texl-l mb-2">Tình trạng</div>
                                <div className="space-y-1">
                                    {statuses.map((status, index) => (
                                        <div key={index} className="flex gap-1 items-center">
                                            <Checkbox
                                                {...label}
                                                value={index}
                                                checked={
                                                    (filter.status && filter.status.includes(index)) ||
                                                    false
                                                }
                                                onChange={() => handleCheckboxChange("status", index)}
                                                style={{color: "#44ADB4", padding: "0"}}
                                                size="small"
                                            />
                                            <div>{status}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 pb-0">
                                    <button
                                        className="rounded-lg w-full h-12 focus:outline-none hover:outline-none "
                                        onClick={handleSubmit}
                                        style={{"background-color": "#44ADB4", color: "white"}}
                                    >
                                        Lọc
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="font-bold text-xl leading-7 text-left">
                                    Kết quả
                                </div>
                                <div className="font-normal text-xl text-left">
                                    {total > 0
                                        ? `Có ${total} địa điểm được tìm thấy`
                                        : "Không có kết quả nào phù hợp"}
                                </div>
                                {isLoading && (
                                    <>
                                        <div className="w-100">
                                            <LinearProgress
                                                className="mt-4 ml-10 progress-bar"
                                                style={{width: "300%", "margin-top": "50px"}}
                                            />
                                        </div>
                                    </>
                                )}
                                {isSuccess &&
                                    listWorkspaces.map((item, index) => (
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
                                    justifyContent: "center",
                                    display: "flex",
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Result;
