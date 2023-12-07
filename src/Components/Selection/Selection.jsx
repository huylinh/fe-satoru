import React from 'react';
import "./selection.css";
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Selection = ({ label, value, onChange, options }) => {
    return (
        <>
            <div className="flex">
                <FormControl fullWidth>
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

        </>

    );
};

export default Selection;

