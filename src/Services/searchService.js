import publicHttp from "./Http/publicHttp.config.js";

export const getWorkspaces = async (params) => {
    return publicHttp({
        method: 'GET',
        url: '/workspaces/search',
     params
    })
}
