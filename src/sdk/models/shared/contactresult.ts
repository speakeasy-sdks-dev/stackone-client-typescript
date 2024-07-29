/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Contact,
    Contact$inboundSchema,
    Contact$Outbound,
    Contact$outboundSchema,
} from "./contact.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type ContactResult = {
    data: Contact;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const ContactResult$inboundSchema: z.ZodType<ContactResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Contact$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type ContactResult$Outbound = {
    data: Contact$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const ContactResult$outboundSchema: z.ZodType<
    ContactResult$Outbound,
    z.ZodTypeDef,
    ContactResult
> = z.object({
    data: Contact$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactResult$ {
    /** @deprecated use `ContactResult$inboundSchema` instead. */
    export const inboundSchema = ContactResult$inboundSchema;
    /** @deprecated use `ContactResult$outboundSchema` instead. */
    export const outboundSchema = ContactResult$outboundSchema;
    /** @deprecated use `ContactResult$Outbound` instead. */
    export type Outbound = ContactResult$Outbound;
}
