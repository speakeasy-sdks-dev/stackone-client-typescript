/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushMessages, PushMessages$ } from "./pushmessages";
import * as z from "zod";

export type MarketingCreatePushTemplateRequestDto = {
    id?: string | null | undefined;
    messages?: Array<PushMessages> | null | undefined;
    name?: string | null | undefined;
    tags?: Array<string> | null | undefined;
};

/** @internal */
export namespace MarketingCreatePushTemplateRequestDto$ {
    export type Inbound = {
        id?: string | null | undefined;
        messages?: Array<PushMessages$.Inbound> | null | undefined;
        name?: string | null | undefined;
        tags?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        MarketingCreatePushTemplateRequestDto,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            messages: z.nullable(z.array(PushMessages$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        messages?: Array<PushMessages$.Outbound> | null | undefined;
        name?: string | null | undefined;
        tags?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreatePushTemplateRequestDto
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            messages: z.nullable(z.array(PushMessages$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });
}
