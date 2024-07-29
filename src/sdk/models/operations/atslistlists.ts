/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsListListsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type AtsListListsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: AtsListListsQueryParamFilter | null | undefined;
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

export type AtsListListsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The collection of lists was retrieved.
     */
    listsPaginated?: shared.ListsPaginated | undefined;
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
export const AtsListListsQueryParamFilter$inboundSchema: z.ZodType<
    AtsListListsQueryParamFilter,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        updated_after: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updated_after: "updatedAfter",
        });
    });

/** @internal */
export type AtsListListsQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListListsQueryParamFilter$outboundSchema: z.ZodType<
    AtsListListsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListListsQueryParamFilter
> = z
    .object({
        updatedAfter: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updatedAfter: "updated_after",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListListsQueryParamFilter$ {
    /** @deprecated use `AtsListListsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = AtsListListsQueryParamFilter$inboundSchema;
    /** @deprecated use `AtsListListsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = AtsListListsQueryParamFilter$outboundSchema;
    /** @deprecated use `AtsListListsQueryParamFilter$Outbound` instead. */
    export type Outbound = AtsListListsQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListListsRequest$inboundSchema: z.ZodType<
    AtsListListsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => AtsListListsQueryParamFilter$inboundSchema)).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updated_after: z.nullable(z.string()).optional(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            page_size: "pageSize",
            updated_after: "updatedAfter",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsListListsRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: AtsListListsQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const AtsListListsRequest$outboundSchema: z.ZodType<
    AtsListListsRequest$Outbound,
    z.ZodTypeDef,
    AtsListListsRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => AtsListListsQueryParamFilter$outboundSchema)).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        pageSize: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updatedAfter: z.nullable(z.string()).optional(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            pageSize: "page_size",
            updatedAfter: "updated_after",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListListsRequest$ {
    /** @deprecated use `AtsListListsRequest$inboundSchema` instead. */
    export const inboundSchema = AtsListListsRequest$inboundSchema;
    /** @deprecated use `AtsListListsRequest$outboundSchema` instead. */
    export const outboundSchema = AtsListListsRequest$outboundSchema;
    /** @deprecated use `AtsListListsRequest$Outbound` instead. */
    export type Outbound = AtsListListsRequest$Outbound;
}

/** @internal */
export const AtsListListsResponse$inboundSchema: z.ZodType<
    AtsListListsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ListsPaginated: shared.ListsPaginated$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            ListsPaginated: "listsPaginated",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsListListsResponse$Outbound = {
    ContentType: string;
    ListsPaginated?: shared.ListsPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsListListsResponse$outboundSchema: z.ZodType<
    AtsListListsResponse$Outbound,
    z.ZodTypeDef,
    AtsListListsResponse
> = z
    .object({
        contentType: z.string(),
        listsPaginated: shared.ListsPaginated$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            listsPaginated: "ListsPaginated",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListListsResponse$ {
    /** @deprecated use `AtsListListsResponse$inboundSchema` instead. */
    export const inboundSchema = AtsListListsResponse$inboundSchema;
    /** @deprecated use `AtsListListsResponse$outboundSchema` instead. */
    export const outboundSchema = AtsListListsResponse$outboundSchema;
    /** @deprecated use `AtsListListsResponse$Outbound` instead. */
    export type Outbound = AtsListListsResponse$Outbound;
}
