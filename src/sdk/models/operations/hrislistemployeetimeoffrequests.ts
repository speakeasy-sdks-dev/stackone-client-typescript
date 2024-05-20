/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type HrisListEmployeeTimeOffRequestsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type HrisListEmployeeTimeOffRequestsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: HrisListEmployeeTimeOffRequestsQueryParamFilter | null | undefined;
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
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisListEmployeeTimeOffRequestsResponse = {
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
     * The time off requests related to the employee with the given identifier were retrieved.
     */
    timeOffPaginated?: shared.TimeOffPaginated | undefined;
};

/** @internal */
export namespace HrisListEmployeeTimeOffRequestsQueryParamFilter$ {
    export const inboundSchema: z.ZodType<
        HrisListEmployeeTimeOffRequestsQueryParamFilter,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            updated_after: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
            };
        });

    export type Outbound = {
        updated_after?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisListEmployeeTimeOffRequestsQueryParamFilter
    > = z
        .object({
            updatedAfter: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
            };
        });
}

/** @internal */
export namespace HrisListEmployeeTimeOffRequestsRequest$ {
    export const inboundSchema: z.ZodType<
        HrisListEmployeeTimeOffRequestsRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            filter: z
                .nullable(
                    z.lazy(() => HrisListEmployeeTimeOffRequestsQueryParamFilter$.inboundSchema)
                )
                .optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                id: v.id,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                pageSize: v.page_size,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        filter?: HrisListEmployeeTimeOffRequestsQueryParamFilter$.Outbound | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisListEmployeeTimeOffRequestsRequest
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            filter: z
                .nullable(
                    z.lazy(() => HrisListEmployeeTimeOffRequestsQueryParamFilter$.outboundSchema)
                )
                .optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            pageSize: z.nullable(z.string().default("25")),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            updatedAfter: z.nullable(z.string()).optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                id: v.id,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                page_size: v.pageSize,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisListEmployeeTimeOffRequestsResponse$ {
    export const inboundSchema: z.ZodType<
        HrisListEmployeeTimeOffRequestsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TimeOffPaginated: shared.TimeOffPaginated$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TimeOffPaginated === undefined
                    ? null
                    : { timeOffPaginated: v.TimeOffPaginated }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TimeOffPaginated?: shared.TimeOffPaginated$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisListEmployeeTimeOffRequestsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            timeOffPaginated: shared.TimeOffPaginated$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.timeOffPaginated === undefined
                    ? null
                    : { TimeOffPaginated: v.timeOffPaginated }),
            };
        });
}
