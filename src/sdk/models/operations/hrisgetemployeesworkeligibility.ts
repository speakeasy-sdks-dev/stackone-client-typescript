/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
 */
export type HrisGetEmployeesWorkEligibilityQueryParamProxy = {};

export type HrisGetEmployeesWorkEligibilityRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * The unified cursor
     */
    next?: string | null | undefined;
    /**
     * The page number of the results to fetch
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    page?: string | null | undefined;
    /**
     * The number of results per page
     */
    pageSize?: string | null | undefined;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: HrisGetEmployeesWorkEligibilityQueryParamProxy | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    subResourceId: string;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
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
export namespace HrisGetEmployeesWorkEligibilityQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        HrisGetEmployeesWorkEligibilityQueryParamProxy,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeesWorkEligibilityQueryParamProxy
    > = z.object({});
}

/** @internal */
export namespace HrisGetEmployeesWorkEligibilityRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: HrisGetEmployeesWorkEligibilityQueryParamProxy$.Inbound | null | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        HrisGetEmployeesWorkEligibilityRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z
                .nullable(
                    z.lazy(() => HrisGetEmployeesWorkEligibilityQueryParamProxy$.inboundSchema)
                )
                .optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                pageSize: v.page_size,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                subResourceId: v.subResourceId,
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: HrisGetEmployeesWorkEligibilityQueryParamProxy$.Outbound | null | undefined;
        raw: boolean | null;
        subResourceId: string;
        updated_after?: string | null | undefined;
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
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            pageSize: z.nullable(z.string().default("25")),
            proxy: z
                .nullable(
                    z.lazy(() => HrisGetEmployeesWorkEligibilityQueryParamProxy$.outboundSchema)
                )
                .optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            updatedAfter: z.nullable(z.string()).optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                page_size: v.pageSize,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                subResourceId: v.subResourceId,
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisGetEmployeesWorkEligibilityResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        WorkEligibilityResult?: shared.WorkEligibilityResult$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        HrisGetEmployeesWorkEligibilityResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WorkEligibilityResult: shared.WorkEligibilityResult$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.WorkEligibilityResult === undefined
                    ? null
                    : { workEligibilityResult: v.WorkEligibilityResult }),
            };
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
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.workEligibilityResult === undefined
                    ? null
                    : { WorkEligibilityResult: v.workEligibilityResult }),
            };
        });
}
