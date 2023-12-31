import React from "react";
import "./navbar.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import Logo from "../../assets/logo.png"

const Navbar = ({ onSearchChange, handleSearchSubmit: handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onSearchChange) {
      onSearchChange(newValue);
    }
  };

  const handleInputSubmit = (event) => {
    handleSubmit()
  }

  const handleEnterInputSubmit = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      <div className="navbar flex">
        <div className="left-section">
          <div className="flex search-bar">
            <TextField
              focused={false}
              placeholder="Tìm kiếm"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleEnterInputSubmit}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={handleInputSubmit}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            >
            </TextField>
          </div>
        </div>
        <div className="center-section">
          <img className="header-logo" src={Logo} alt="Logo" />
        </div>
        <div className="right-section">
          <button className="register-btn">Đăng ký</button>
          <button className="login-btn">Đăng nhập</button>
        </div>
      </div>
    </>
  )
};

export default Navbar;
