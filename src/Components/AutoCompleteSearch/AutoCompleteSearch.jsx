import { Button } from "@mui/material";
import "./autocompletesearch.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AutoCompleteSearch = () => {

  const options = ["Đề xuất địa chỉ gần nhất"];

  const navigate = useNavigate();

  const [value, setValue] = useState("");
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggetion) => {
    // setValue(suggetion);
    setShowSuggestions(false);
  };


  return (
    <div className="container">
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={handleChange}
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
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
