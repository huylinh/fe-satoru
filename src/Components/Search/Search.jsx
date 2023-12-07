import React from "react";
import "./search.css";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <>
      <div className="flex search-bar">
        <TextField
          focused={false}
          placeholder="Tìm kiếm"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        >
        </TextField>
      </div>
    </>
  )
};

export default Search;
