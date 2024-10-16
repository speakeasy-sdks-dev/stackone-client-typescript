/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MarketingCreateContentBlocksRequestDto = {
  content?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreateContentBlocksRequestDto$inboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type MarketingCreateContentBlocksRequestDto$Outbound = {
  content?: string | null | undefined;
  name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreateContentBlocksRequestDto$outboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto$Outbound,
  z.ZodTypeDef,
  MarketingCreateContentBlocksRequestDto
> = z.object({
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDto$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDto$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDto$outboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$Outbound` instead. */
  export type Outbound = MarketingCreateContentBlocksRequestDto$Outbound;
}
