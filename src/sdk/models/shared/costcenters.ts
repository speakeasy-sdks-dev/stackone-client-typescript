/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type CostCenters = {
    distributionPercentage?: number | null | undefined;
    name?: string | null | undefined;
};

/** @internal */
export namespace CostCenters$ {
    export const inboundSchema: z.ZodType<CostCenters, z.ZodTypeDef, unknown> = z
        .object({
            distribution_percentage: z.nullable(z.number()).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                distribution_percentage: "distributionPercentage",
            });
        });

    export type Outbound = {
        distribution_percentage?: number | null | undefined;
        name?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CostCenters> = z
        .object({
            distributionPercentage: z.nullable(z.number()).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                distributionPercentage: "distribution_percentage",
            });
        });
}
