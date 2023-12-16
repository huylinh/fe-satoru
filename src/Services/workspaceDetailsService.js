import publicHttp from "./Http/publicHttp.config.js";

export const getWorkspaceDetailsService = async (workspaceId) => {
  const res = await publicHttp({
    method: "GET",
    url: `/workspaces/${workspaceId}`,
  });
  return res.data;
};

export const getWorkspaceReviewsService = async (workspaceId) => {
  const res = await publicHttp({
    method: "GET",
    url: `/reviews/workspaces/${workspaceId}`,
  });
  return res.data;
};
