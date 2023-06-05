import {StackContext, Api, Queue} from "sst/constructs";

export function API({stack}: StackContext) {
    const queue = new Queue(stack, "TestQueue", {
        consumer: "packages/functions/src/consumer.main",
    });

    const api = new Api(stack, "api", {
        defaults: {
            function: {
                // Bind the queue to our API
                bind: [queue],
            },
        },
        routes: {
            "GET /": "packages/functions/src/lambda.handler",
        },
    });
    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}
