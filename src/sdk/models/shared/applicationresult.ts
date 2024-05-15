/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Application, Application$ } from "./application";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type ApplicationResult = {
    data: Application;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ApplicationResult$ {
    export const inboundSchema: z.ZodType<ApplicationResult, z.ZodTypeDef, unknown> = z
        .object({
            data: Application$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Application$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationResult> = z
        .object({
            data: Application$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
