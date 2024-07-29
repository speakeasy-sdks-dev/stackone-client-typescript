/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Category,
    Category$inboundSchema,
    Category$Outbound,
    Category$outboundSchema,
} from "./category.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type CategoryResult = {
    data: Category;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CategoryResult$inboundSchema: z.ZodType<CategoryResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Category$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type CategoryResult$Outbound = {
    data: Category$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CategoryResult$outboundSchema: z.ZodType<
    CategoryResult$Outbound,
    z.ZodTypeDef,
    CategoryResult
> = z.object({
    data: Category$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoryResult$ {
    /** @deprecated use `CategoryResult$inboundSchema` instead. */
    export const inboundSchema = CategoryResult$inboundSchema;
    /** @deprecated use `CategoryResult$outboundSchema` instead. */
    export const outboundSchema = CategoryResult$outboundSchema;
    /** @deprecated use `CategoryResult$Outbound` instead. */
    export type Outbound = CategoryResult$Outbound;
}
