/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ATSLocation, ATSLocation$ } from "./atslocation";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type ATSLocationResult = {
    data: ATSLocation;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ATSLocationResult$ {
    export const inboundSchema: z.ZodType<ATSLocationResult, z.ZodTypeDef, unknown> = z
        .object({
            data: ATSLocation$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: ATSLocation$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ATSLocationResult> = z
        .object({
            data: ATSLocation$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
