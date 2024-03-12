/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { IamGroup, IamGroup$ } from "./iamgroup";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type IamGroupResult = {
    data: IamGroup;
    raw: Array<RawResponse>;
};

/** @internal */
export namespace IamGroupResult$ {
    export type Inbound = {
        data: IamGroup$.Inbound;
        raw: Array<RawResponse$.Inbound>;
    };

    export const inboundSchema: z.ZodType<IamGroupResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: IamGroup$.inboundSchema,
            raw: z.array(RawResponse$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
                raw: v.raw,
            };
        });

    export type Outbound = {
        data: IamGroup$.Outbound;
        raw: Array<RawResponse$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamGroupResult> = z
        .object({
            data: IamGroup$.outboundSchema,
            raw: z.array(RawResponse$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
                raw: v.raw,
            };
        });
}
