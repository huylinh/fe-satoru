import { Button } from "@mui/material";
import "./autocompletesearch.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useListWorkspaces from "../../Pages/Result/useListWorkspaces";

import { geolocated } from "react-geolocated";

const AutoCompleteSearch = () => {
  const options = ["Đề xuất địa chỉ gần nhất"];
  const { setQueryString } = useListWorkspaces();

  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleSuggestionClick = () => {
    navigate(`/result?page=1&limit=5&sort_distance=1&nearest=1&lat=${location.latitude}&long=${location.longitude}`);
    console.log(location);
    setShowSuggestions(false);
  };

  const handleSearchButtonClick = () => {
    navigate(`/result?page=1&limit=5&name=${value}`);
  };

  return (
    <div className="container">
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearchButtonClick();
            }
          }}
          placeholder="Tìm kiếm ....."
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && (
          <ul className="suggestions">
            {suggestions.map((suggestion) => (
              <li
                onClick={() => handleSuggestionClick(suggestion)}
                key={suggestion}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="r-button">
        <Button
          variant="contained"
          style={{ backgroundColor: "#44adb4", color: "white" }}
          onClick={handleSearchButtonClick}
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
