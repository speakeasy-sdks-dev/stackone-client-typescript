/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisGetEmployeesWorkEligibilityRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetEmployeesWorkEligibilityResponse = {
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
    /**
     * The work eligibility of the employee with the given identifiers was retrieved.
     */
    workEligibilityResult?: shared.WorkEligibilityResult | undefined;
};

/** @internal */
export namespace HrisGetEmployeesWorkEligibilityRequest$ {
    export const inboundSchema: z.ZodType<
        HrisGetEmployeesWorkEligibilityRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        subResourceId: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeesWorkEligibilityRequest
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace HrisGetEmployeesWorkEligibilityResponse$ {
    export const inboundSchema: z.ZodType<
        HrisGetEmployeesWorkEligibilityResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WorkEligibilityResult: shared.WorkEligibilityResult$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                WorkEligibilityResult: "workEligibilityResult",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WorkEligibilityResult?: shared.WorkEligibilityResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeesWorkEligibilityResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            workEligibilityResult: shared.WorkEligibilityResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                workEligibilityResult: "WorkEligibilityResult",
            });
        });
}
