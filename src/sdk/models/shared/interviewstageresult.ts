/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  InterviewStage,
  InterviewStage$inboundSchema,
  InterviewStage$Outbound,
  InterviewStage$outboundSchema,
} from "./interviewstage.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type InterviewStageResult = {
  data: InterviewStage;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InterviewStageResult$inboundSchema: z.ZodType<
  InterviewStageResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: InterviewStage$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type InterviewStageResult$Outbound = {
  data: InterviewStage$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InterviewStageResult$outboundSchema: z.ZodType<
  InterviewStageResult$Outbound,
  z.ZodTypeDef,
  InterviewStageResult
> = z.object({
  data: InterviewStage$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewStageResult$ {
  /** @deprecated use `InterviewStageResult$inboundSchema` instead. */
  export const inboundSchema = InterviewStageResult$inboundSchema;
  /** @deprecated use `InterviewStageResult$outboundSchema` instead. */
  export const outboundSchema = InterviewStageResult$outboundSchema;
  /** @deprecated use `InterviewStageResult$Outbound` instead. */
  export type Outbound = InterviewStageResult$Outbound;
}
