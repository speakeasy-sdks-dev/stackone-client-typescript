/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
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
    createEmployeeResult?: shared.CreateEmployeeResult | undefined;
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
export namespace HrisUpdateEmployeeRequest$ {
    export type Inbound = {
        HrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$.Inbound;
        id: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<HrisUpdateEmployeeRequest, z.ZodTypeDef, Inbound> = z
        .object({
            HrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$.inboundSchema,
            id: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                hrisCreateEmployeeRequestDto: v.HrisCreateEmployeeRequestDto,
                id: v.id,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        HrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$.Outbound;
        id: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisUpdateEmployeeRequest> = z
        .object({
            hrisCreateEmployeeRequestDto: shared.HrisCreateEmployeeRequestDto$.outboundSchema,
            id: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                HrisCreateEmployeeRequestDto: v.hrisCreateEmployeeRequestDto,
                id: v.id,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisUpdateEmployeeResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateEmployeeResult?: shared.CreateEmployeeResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<HrisUpdateEmployeeResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateEmployeeResult: shared.CreateEmployeeResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateEmployeeResult === undefined
                    ? null
                    : { createEmployeeResult: v.CreateEmployeeResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateEmployeeResult?: shared.CreateEmployeeResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisUpdateEmployeeResponse> = z
        .object({
            contentType: z.string(),
            createEmployeeResult: shared.CreateEmployeeResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createEmployeeResult === undefined
                    ? null
                    : { CreateEmployeeResult: v.createEmployeeResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
