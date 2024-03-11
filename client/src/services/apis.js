const BASE_URL = "http://localhost:4000/api/v1";
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendOtp",
  SIGNUP_API: BASE_URL + "/auth/register",
  LOGIN_API: BASE_URL + "/auth/login",
};

export const settingsEndpoints = {
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changePassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  HANDLE_SEARCH_API: BASE_URL + "/profile/handleSearch",
  BLOCK_USER_API: BASE_URL + "/profile/blockUser",
  UNBLOCK_USER_API: BASE_URL + "/profile/unblockUser",
};

export const blogEndpoints = {
  CREATE_BLOG_API: BASE_URL + "/blog/create",
  GET_ALL_BLOGS_API: BASE_URL + "/blog/getallBlogs",
  GET_ALL_MY_BLOGS_API: BASE_URL + "/blog/getmyBlogs",
  GET_BLOG_API: BASE_URL + "/blog/getBlog",
  UPVOTE_BLOG: BASE_URL + "/blog/upvoteBlog",
  DOWNVOTE_BLOG: BASE_URL + "/blog/downvoteBlog",
  GET_BLOG_COMMENTS: BASE_URL + "/blog/getBlogComments",
  ADD_BLOG_COMMENT: BASE_URL + "/blog/addBlogComment",
  GET_ALL_UPVOTED_BLOGS: BASE_URL + "/blog/getAllUpvotedBlogs",
  GET_ALL_RECENT_BLOGS: BASE_URL + "/blog/getAllRecentBlogs",
  DELETE_BLOG: BASE_URL + "/blog/deleteBlog",
};