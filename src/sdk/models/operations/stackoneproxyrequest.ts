/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type StackoneProxyRequestRequest = {
    /**
     * The request body
     */
    proxyRequestBody: shared.ProxyRequestBody;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type StackoneProxyRequestResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace StackoneProxyRequestRequest$ {
    export type Inbound = {
        ProxyRequestBody: shared.ProxyRequestBody$.Inbound;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<StackoneProxyRequestRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ProxyRequestBody: shared.ProxyRequestBody$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                proxyRequestBody: v.ProxyRequestBody,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        ProxyRequestBody: shared.ProxyRequestBody$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneProxyRequestRequest> = z
        .object({
            proxyRequestBody: shared.ProxyRequestBody$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ProxyRequestBody: v.proxyRequestBody,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace StackoneProxyRequestResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StackoneProxyRequestResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneProxyRequestResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
