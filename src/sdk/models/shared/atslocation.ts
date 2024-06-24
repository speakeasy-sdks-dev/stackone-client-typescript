/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type ATSLocation = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export namespace ATSLocation$ {
    export const inboundSchema: z.ZodType<ATSLocation, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_id: "remoteId",
            });
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ATSLocation> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remoteId: "remote_id",
            });
        });
}
