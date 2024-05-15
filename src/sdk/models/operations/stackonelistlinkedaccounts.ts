/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type StackoneListLinkedAccountsRequest = {
    /**
     * The providers list of the results to fetch
     */
    accountIds?: Array<string> | undefined;
    /**
     * The origin owner identifier of the results to fetch
     */
    originOwnerId?: string | null | undefined;
    /**
     * The page number of the results to fetch
     */
    page?: number | null | undefined;
    /**
     * The number of results per page
     */
    pageSize?: number | null | undefined;
    /**
     * The provider of the results to fetch
     */
    provider?: string | null | undefined;
    /**
     * The providers list of the results to fetch
     */
    providers?: Array<string> | undefined;
};

export type StackoneListLinkedAccountsResponse = {
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
     * The list of accounts was retrieved.
     */
    classes?: Array<shared.LinkedAccount> | undefined;
};

/** @internal */
export namespace StackoneListLinkedAccountsRequest$ {
    export const inboundSchema: z.ZodType<
        StackoneListLinkedAccountsRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            account_ids: z.array(z.string()).optional(),
            origin_owner_id: z.nullable(z.string()).optional(),
            page: z.nullable(z.number()).optional(),
            page_size: z.nullable(z.number().default(25)),
            provider: z.nullable(z.string()).optional(),
            providers: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.account_ids === undefined ? null : { accountIds: v.account_ids }),
                ...(v.origin_owner_id === undefined ? null : { originOwnerId: v.origin_owner_id }),
                ...(v.page === undefined ? null : { page: v.page }),
                pageSize: v.page_size,
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.providers === undefined ? null : { providers: v.providers }),
            };
        });

    export type Outbound = {
        account_ids?: Array<string> | undefined;
        origin_owner_id?: string | null | undefined;
        page?: number | null | undefined;
        page_size: number | null;
        provider?: string | null | undefined;
        providers?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListLinkedAccountsRequest
    > = z
        .object({
            accountIds: z.array(z.string()).optional(),
            originOwnerId: z.nullable(z.string()).optional(),
            page: z.nullable(z.number()).optional(),
            pageSize: z.nullable(z.number().default(25)),
            provider: z.nullable(z.string()).optional(),
            providers: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountIds === undefined ? null : { account_ids: v.accountIds }),
                ...(v.originOwnerId === undefined ? null : { origin_owner_id: v.originOwnerId }),
                ...(v.page === undefined ? null : { page: v.page }),
                page_size: v.pageSize,
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.providers === undefined ? null : { providers: v.providers }),
            };
        });
}

/** @internal */
export namespace StackoneListLinkedAccountsResponse$ {
    export const inboundSchema: z.ZodType<
        StackoneListLinkedAccountsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.LinkedAccount$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<shared.LinkedAccount$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListLinkedAccountsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.LinkedAccount$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
