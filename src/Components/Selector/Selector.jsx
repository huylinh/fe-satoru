import React from "react";
import "./selector.css";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Selector = ({ label, value, onChange, options }) => {
    return (
        <div className="selector">
            <div className="selector__label">
                <label htmlFor="">Sắp xếp theo</label>
            </div>
            <FormControl className="selector__form-control">
                <InputLabel id="select-label">{label}</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default Selector;