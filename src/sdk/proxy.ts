/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { proxyProxyRequest } from "../funcs/proxyProxyRequest.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Proxy extends ClientSDK {
    /**
     * Proxy Request
     */
    async proxyRequest(
        request: operations.StackoneProxyRequestRequest,
        options?: RequestOptions
    ): Promise<operations.StackoneProxyRequestResponse> {
        return unwrapAsync(proxyProxyRequest(this, request, options));
    }
}
