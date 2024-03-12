/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateOfferResult = {
    message: string;
    statusCode: number;
    timestamp: Date;
};

/** @internal */
export namespace CreateOfferResult$ {
    export type Inbound = {
        message: string;
        statusCode: number;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CreateOfferResult, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string(),
            statusCode: z.number(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                message: v.message,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        message: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOfferResult> = z
        .object({
            message: z.string(),
            statusCode: z.number(),
            timestamp: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                message: v.message,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            };
        });
}
