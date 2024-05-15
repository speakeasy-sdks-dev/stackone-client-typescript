/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type StackoneDeleteAccountRequest = {
    id: string;
};

export type StackoneDeleteAccountResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The account with the given identifier was deleted.
     */
    linkedAccount?: shared.LinkedAccount | undefined;
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
export namespace StackoneDeleteAccountRequest$ {
    export const inboundSchema: z.ZodType<StackoneDeleteAccountRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneDeleteAccountRequest> = z
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
export namespace StackoneDeleteAccountResponse$ {
    export const inboundSchema: z.ZodType<StackoneDeleteAccountResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            LinkedAccount: shared.LinkedAccount$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.LinkedAccount === undefined ? null : { linkedAccount: v.LinkedAccount }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        LinkedAccount?: shared.LinkedAccount$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneDeleteAccountResponse> =
        z
            .object({
                contentType: z.string(),
                linkedAccount: shared.LinkedAccount$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.linkedAccount === undefined ? null : { LinkedAccount: v.linkedAccount }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
