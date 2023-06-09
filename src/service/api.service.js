import axios from "axios";

const commonConfig = {
    headers: {
        "Context-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseUrl) => {
    return axios.create({
        baseUrl,
        ...commonConfig,
    });
};