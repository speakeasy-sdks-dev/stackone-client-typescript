/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type MarketingCreateSmsTemplateRequest = {
  marketingCreateSmsTemplateRequestDto:
    shared.MarketingCreateSmsTemplateRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type MarketingCreateSmsTemplateResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Record created successfully.
   */
  createResult?: shared.CreateResult | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const MarketingCreateSmsTemplateRequest$inboundSchema: z.ZodType<
  MarketingCreateSmsTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingCreateSmsTemplateRequestDto:
    shared.MarketingCreateSmsTemplateRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "MarketingCreateSmsTemplateRequestDto":
      "marketingCreateSmsTemplateRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type MarketingCreateSmsTemplateRequest$Outbound = {
  MarketingCreateSmsTemplateRequestDto:
    shared.MarketingCreateSmsTemplateRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const MarketingCreateSmsTemplateRequest$outboundSchema: z.ZodType<
  MarketingCreateSmsTemplateRequest$Outbound,
  z.ZodTypeDef,
  MarketingCreateSmsTemplateRequest
> = z.object({
  marketingCreateSmsTemplateRequestDto:
    shared.MarketingCreateSmsTemplateRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    marketingCreateSmsTemplateRequestDto:
      "MarketingCreateSmsTemplateRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateSmsTemplateRequest$ {
  /** @deprecated use `MarketingCreateSmsTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = MarketingCreateSmsTemplateRequest$inboundSchema;
  /** @deprecated use `MarketingCreateSmsTemplateRequest$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateSmsTemplateRequest$outboundSchema;
  /** @deprecated use `MarketingCreateSmsTemplateRequest$Outbound` instead. */
  export type Outbound = MarketingCreateSmsTemplateRequest$Outbound;
}

/** @internal */
export const MarketingCreateSmsTemplateResponse$inboundSchema: z.ZodType<
  MarketingCreateSmsTemplateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CreateResult: shared.CreateResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CreateResult": "createResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type MarketingCreateSmsTemplateResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingCreateSmsTemplateResponse$outboundSchema: z.ZodType<
  MarketingCreateSmsTemplateResponse$Outbound,
  z.ZodTypeDef,
  MarketingCreateSmsTemplateResponse
> = z.object({
  contentType: z.string(),
  createResult: shared.CreateResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    createResult: "CreateResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateSmsTemplateResponse$ {
  /** @deprecated use `MarketingCreateSmsTemplateResponse$inboundSchema` instead. */
  export const inboundSchema = MarketingCreateSmsTemplateResponse$inboundSchema;
  /** @deprecated use `MarketingCreateSmsTemplateResponse$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateSmsTemplateResponse$outboundSchema;
  /** @deprecated use `MarketingCreateSmsTemplateResponse$Outbound` instead. */
  export type Outbound = MarketingCreateSmsTemplateResponse$Outbound;
}
