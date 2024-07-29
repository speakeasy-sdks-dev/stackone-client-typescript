/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisUpdateEmployeeRequest = {
    hrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisUpdateEmployeeResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record updated successfully
     */
    createResult?: shared.CreateResult | undefined;
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
export const HrisUpdateEmployeeRequest$inboundSchema: z.ZodType<
    HrisUpdateEmployeeRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$inboundSchema,
        id: z.string(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            HrisCreateEmployeeRequestDto: "hrisCreateEmployeeRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type HrisUpdateEmployeeRequest$Outbound = {
    HrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$Outbound;
    id: string;
    "x-account-id": string;
};

/** @internal */
export const HrisUpdateEmployeeRequest$outboundSchema: z.ZodType<
    HrisUpdateEmployeeRequest$Outbound,
    z.ZodTypeDef,
    HrisUpdateEmployeeRequest
> = z
    .object({
        hrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$outboundSchema,
        id: z.string(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            hrisCreateEmployeeRequestDto: "HrisCreateEmployeeRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeRequest$ {
    /** @deprecated use `HrisUpdateEmployeeRequest$inboundSchema` instead. */
    export const inboundSchema = HrisUpdateEmployeeRequest$inboundSchema;
    /** @deprecated use `HrisUpdateEmployeeRequest$outboundSchema` instead. */
    export const outboundSchema = HrisUpdateEmployeeRequest$outboundSchema;
    /** @deprecated use `HrisUpdateEmployeeRequest$Outbound` instead. */
    export type Outbound = HrisUpdateEmployeeRequest$Outbound;
}

/** @internal */
export const HrisUpdateEmployeeResponse$inboundSchema: z.ZodType<
    HrisUpdateEmployeeResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CreateResult: shared.CreateResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            CreateResult: "createResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type HrisUpdateEmployeeResponse$Outbound = {
    ContentType: string;
    CreateResult?: shared.CreateResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const HrisUpdateEmployeeResponse$outboundSchema: z.ZodType<
    HrisUpdateEmployeeResponse$Outbound,
    z.ZodTypeDef,
    HrisUpdateEmployeeResponse
> = z
    .object({
        contentType: z.string(),
        createResult: shared.CreateResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            createResult: "CreateResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeResponse$ {
    /** @deprecated use `HrisUpdateEmployeeResponse$inboundSchema` instead. */
    export const inboundSchema = HrisUpdateEmployeeResponse$inboundSchema;
    /** @deprecated use `HrisUpdateEmployeeResponse$outboundSchema` instead. */
    export const outboundSchema = HrisUpdateEmployeeResponse$outboundSchema;
    /** @deprecated use `HrisUpdateEmployeeResponse$Outbound` instead. */
    export type Outbound = HrisUpdateEmployeeResponse$Outbound;
}
