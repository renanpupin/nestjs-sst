import {ApiHandler} from "sst/node/api";
import {Time} from "@nestjs-sst/core/time";

export const handler = ApiHandler(async (_evt) => {
    return {
        statusCode: 200,
        body: `Hi from SST ${Time.now()}`,
    };
});
