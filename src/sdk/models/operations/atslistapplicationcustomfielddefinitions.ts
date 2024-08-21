/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsListApplicationCustomFieldDefinitionsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type AtsListApplicationCustomFieldDefinitionsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: AtsListApplicationCustomFieldDefinitionsQueryParamFilter | null | undefined;
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
     * The sync token to select the only updated results
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    syncToken?: string | null | undefined;
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

export type AtsListApplicationCustomFieldDefinitionsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list of application custom field definitions was retrieved.
     */
    customFieldDefinitionsPaginated?: shared.CustomFieldDefinitionsPaginated | undefined;
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
export const AtsListApplicationCustomFieldDefinitionsQueryParamFilter$inboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsQueryParamFilter,
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
export type AtsListApplicationCustomFieldDefinitionsQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationCustomFieldDefinitionsQueryParamFilter$outboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationCustomFieldDefinitionsQueryParamFilter
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
export namespace AtsListApplicationCustomFieldDefinitionsQueryParamFilter$ {
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema =
        AtsListApplicationCustomFieldDefinitionsQueryParamFilter$inboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema =
        AtsListApplicationCustomFieldDefinitionsQueryParamFilter$outboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsQueryParamFilter$Outbound` instead. */
    export type Outbound = AtsListApplicationCustomFieldDefinitionsQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListApplicationCustomFieldDefinitionsRequest$inboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(
                z.lazy(() => AtsListApplicationCustomFieldDefinitionsQueryParamFilter$inboundSchema)
            )
            .optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean()),
        sync_token: z.nullable(z.string()).optional(),
        updated_after: z.nullable(z.string()).optional(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            page_size: "pageSize",
            sync_token: "syncToken",
            updated_after: "updatedAfter",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsListApplicationCustomFieldDefinitionsRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: AtsListApplicationCustomFieldDefinitionsQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    sync_token?: string | null | undefined;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const AtsListApplicationCustomFieldDefinitionsRequest$outboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsRequest$Outbound,
    z.ZodTypeDef,
    AtsListApplicationCustomFieldDefinitionsRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(
                z.lazy(
                    () => AtsListApplicationCustomFieldDefinitionsQueryParamFilter$outboundSchema
                )
            )
            .optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        pageSize: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        syncToken: z.nullable(z.string()).optional(),
        updatedAfter: z.nullable(z.string()).optional(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            pageSize: "page_size",
            syncToken: "sync_token",
            updatedAfter: "updated_after",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationCustomFieldDefinitionsRequest$ {
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsRequest$inboundSchema` instead. */
    export const inboundSchema = AtsListApplicationCustomFieldDefinitionsRequest$inboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsRequest$outboundSchema` instead. */
    export const outboundSchema = AtsListApplicationCustomFieldDefinitionsRequest$outboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsRequest$Outbound` instead. */
    export type Outbound = AtsListApplicationCustomFieldDefinitionsRequest$Outbound;
}

/** @internal */
export const AtsListApplicationCustomFieldDefinitionsResponse$inboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CustomFieldDefinitionsPaginated:
            shared.CustomFieldDefinitionsPaginated$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            CustomFieldDefinitionsPaginated: "customFieldDefinitionsPaginated",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsListApplicationCustomFieldDefinitionsResponse$Outbound = {
    ContentType: string;
    CustomFieldDefinitionsPaginated?: shared.CustomFieldDefinitionsPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsListApplicationCustomFieldDefinitionsResponse$outboundSchema: z.ZodType<
    AtsListApplicationCustomFieldDefinitionsResponse$Outbound,
    z.ZodTypeDef,
    AtsListApplicationCustomFieldDefinitionsResponse
> = z
    .object({
        contentType: z.string(),
        customFieldDefinitionsPaginated:
            shared.CustomFieldDefinitionsPaginated$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            customFieldDefinitionsPaginated: "CustomFieldDefinitionsPaginated",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationCustomFieldDefinitionsResponse$ {
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsResponse$inboundSchema` instead. */
    export const inboundSchema = AtsListApplicationCustomFieldDefinitionsResponse$inboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsResponse$outboundSchema` instead. */
    export const outboundSchema = AtsListApplicationCustomFieldDefinitionsResponse$outboundSchema;
    /** @deprecated use `AtsListApplicationCustomFieldDefinitionsResponse$Outbound` instead. */
    export type Outbound = AtsListApplicationCustomFieldDefinitionsResponse$Outbound;
}
