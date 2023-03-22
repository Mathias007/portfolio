// Before build CRA change server url from localhost to env var with proper path

const config = {
    SERVER_URL: process.env.REACT_APP_SERVER_URL,
    GITHUB_URL: process.env.REACT_APP_GITHUB_URL,
    GITHUB_API: process.env.REACT_APP_GITHUB_API,
    PROJECTS_ROOT_URL: process.env.REACT_APP_PROJECTS_ROOT_URL,
    EMAIL_SERVICE_ID: process.env.REACT_APP_EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    EMAIL_USER_ID: process.env.REACT_APP_EMAIL_USER_ID,
    EMAIL_ACCESS_TOKEN: process.env.REACT_APP_EMAIL_ACCESS_TOKEN,
};

export default config;
