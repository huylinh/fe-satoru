import { useMemo } from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";

const useQueryString = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = useMemo(() => {
    const searchParamsObject = {};
    [...searchParams].forEach(([key, value]) => {
      if (searchParamsObject[key]) {
        if (Array.isArray(searchParamsObject[key])) {
          searchParamsObject[key].push(value);
        } else {
          searchParamsObject[key] = [searchParamsObject[key], value];
        }
        return;
      }

      if (key === "area" || key === "status" || key === "service" || key ==="categories") {
        searchParamsObject[key] = [value];
      } else {
        searchParamsObject[key] = value;
      }
    });
    return searchParamsObject;
  }, [searchParams]);

  const parseQueryString = (queryString) => {
    const searchParams = createSearchParams(queryString);
    return searchParams;
  };

  return {
    queryString: { ...searchParamsObject },
    setQueryString: (params) => {
      setSearchParams(params);
    },
    parseQueryString,
  };
};

export default useQueryString;
