/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type StackoneGetAccountMetaInfoRequest = {
    id: string;
};

export type StackoneGetAccountMetaInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The meta information of the account was retrieved
     */
    linkedAccountMeta?: shared.LinkedAccountMeta | undefined;
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
export namespace StackoneGetAccountMetaInfoRequest$ {
    export const inboundSchema: z.ZodType<
        StackoneGetAccountMetaInfoRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneGetAccountMetaInfoRequest
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace StackoneGetAccountMetaInfoResponse$ {
    export const inboundSchema: z.ZodType<
        StackoneGetAccountMetaInfoResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            LinkedAccountMeta: shared.LinkedAccountMeta$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.LinkedAccountMeta === undefined
                    ? null
                    : { linkedAccountMeta: v.LinkedAccountMeta }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        LinkedAccountMeta?: shared.LinkedAccountMeta$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneGetAccountMetaInfoResponse
    > = z
        .object({
            contentType: z.string(),
            linkedAccountMeta: shared.LinkedAccountMeta$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.linkedAccountMeta === undefined
                    ? null
                    : { LinkedAccountMeta: v.linkedAccountMeta }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
