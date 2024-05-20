/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Message, Message$ } from "./message";
import * as z from "zod";

export type MarketingCreateTemplateRequestDto = {
    messages?: Array<Message> | null | undefined;
    name?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    tags?: Array<string> | null | undefined;
};

/** @internal */
export namespace MarketingCreateTemplateRequestDto$ {
    export const inboundSchema: z.ZodType<
        MarketingCreateTemplateRequestDto,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            messages: z.nullable(z.array(Message$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });

    export type Outbound = {
        messages?: Array<Message$.Outbound> | null | undefined;
        name?: string | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        tags?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreateTemplateRequestDto
    > = z
        .object({
            messages: z.nullable(z.array(Message$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });
}
