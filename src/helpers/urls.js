// base url of API
const API_ROOT = 'https://corner-tree-frontend-assignmen.herokuapp.com/api/v1';

// generating different url with base url for different use
export const APIUrls = {
  createJobPost: () => `${API_ROOT}/jobs/create-job`,
  search: (key) => `${API_ROOT}/search/${key}`,
  getJobList: () => `${API_ROOT}/jobs`,
};
