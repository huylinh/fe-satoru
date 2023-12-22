import publicHttp from "./Http/publicHttp.config.js";

export const getDistrict = async () => {
  try {
    const res = await publicHttp({
      method: "GET",
      url: `/districts`,
    });

    return res.data.data;
  } catch (error) {
    console.error("Error fetching district data:", error);
    throw error;
  }
};
