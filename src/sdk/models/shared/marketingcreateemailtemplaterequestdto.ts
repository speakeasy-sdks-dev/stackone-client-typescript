/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EmailMessages, EmailMessages$ } from "./emailmessages";
import * as z from "zod";

export type MarketingCreateEmailTemplateRequestDto = {
    id?: string | null | undefined;
    messages?: Array<EmailMessages> | null | undefined;
    name?: string | null | undefined;
    tags?: Array<string> | null | undefined;
};

/** @internal */
export namespace MarketingCreateEmailTemplateRequestDto$ {
    export type Inbound = {
        id?: string | null | undefined;
        messages?: Array<EmailMessages$.Inbound> | null | undefined;
        name?: string | null | undefined;
        tags?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        MarketingCreateEmailTemplateRequestDto,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            messages: z.nullable(z.array(EmailMessages$.inboundSchema)).optional(),
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
        messages?: Array<EmailMessages$.Outbound> | null | undefined;
        name?: string | null | undefined;
        tags?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreateEmailTemplateRequestDto
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            messages: z.nullable(z.array(EmailMessages$.outboundSchema)).optional(),
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
