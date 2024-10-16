/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type CostCenters = {
  distributionPercentage?: number | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CostCenters$inboundSchema: z.ZodType<
  CostCenters,
  z.ZodTypeDef,
  unknown
> = z.object({
  distribution_percentage: z.nullable(z.number()).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "distribution_percentage": "distributionPercentage",
  });
});

/** @internal */
export type CostCenters$Outbound = {
  distribution_percentage?: number | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CostCenters$outboundSchema: z.ZodType<
  CostCenters$Outbound,
  z.ZodTypeDef,
  CostCenters
> = z.object({
  distributionPercentage: z.nullable(z.number()).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    distributionPercentage: "distribution_percentage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CostCenters$ {
  /** @deprecated use `CostCenters$inboundSchema` instead. */
  export const inboundSchema = CostCenters$inboundSchema;
  /** @deprecated use `CostCenters$outboundSchema` instead. */
  export const outboundSchema = CostCenters$outboundSchema;
  /** @deprecated use `CostCenters$Outbound` instead. */
  export type Outbound = CostCenters$Outbound;
}
