/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { IamUser, IamUser$ } from "./iamuser";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type IamUserResult = {
    data: IamUser;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace IamUserResult$ {
    export const inboundSchema: z.ZodType<IamUserResult, z.ZodTypeDef, unknown> = z
        .object({
            data: IamUser$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: IamUser$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUserResult> = z
        .object({
            data: IamUser$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
