import {ApiHandler} from "sst/node/api";
import {Time} from "@nestjs-sst/core/time";

import AWS from "aws-sdk";
import { Queue } from "sst/node/queue";
const sqs = new AWS.SQS();


export const handler = ApiHandler(async (_evt) => {
    // Send a message to queue
    await sqs
        .sendMessage({
            // Get the queue url from the environment variable
            QueueUrl: Queue.TestQueue.queueUrl,
            MessageBody: JSON.stringify({ ordered: true }),
        })
        .promise();

    console.log("Message queued!");

    return {
        statusCode: 200,
        body: `Hi from SST ${Time.now()}`,
    };
});
