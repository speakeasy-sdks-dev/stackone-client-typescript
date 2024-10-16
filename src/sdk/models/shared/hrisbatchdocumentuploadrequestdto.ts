/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  HrisDocumentsUploadRequestDto,
  HrisDocumentsUploadRequestDto$inboundSchema,
  HrisDocumentsUploadRequestDto$Outbound,
  HrisDocumentsUploadRequestDto$outboundSchema,
} from "./hrisdocumentsuploadrequestdto.js";

export type HrisBatchDocumentUploadRequestDto = {
  /**
   * The batch of items to create
   */
  items: Array<HrisDocumentsUploadRequestDto>;
};

/** @internal */
export const HrisBatchDocumentUploadRequestDto$inboundSchema: z.ZodType<
  HrisBatchDocumentUploadRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(HrisDocumentsUploadRequestDto$inboundSchema),
});

/** @internal */
export type HrisBatchDocumentUploadRequestDto$Outbound = {
  items: Array<HrisDocumentsUploadRequestDto$Outbound>;
};

/** @internal */
export const HrisBatchDocumentUploadRequestDto$outboundSchema: z.ZodType<
  HrisBatchDocumentUploadRequestDto$Outbound,
  z.ZodTypeDef,
  HrisBatchDocumentUploadRequestDto
> = z.object({
  items: z.array(HrisDocumentsUploadRequestDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisBatchDocumentUploadRequestDto$ {
  /** @deprecated use `HrisBatchDocumentUploadRequestDto$inboundSchema` instead. */
  export const inboundSchema = HrisBatchDocumentUploadRequestDto$inboundSchema;
  /** @deprecated use `HrisBatchDocumentUploadRequestDto$outboundSchema` instead. */
  export const outboundSchema =
    HrisBatchDocumentUploadRequestDto$outboundSchema;
  /** @deprecated use `HrisBatchDocumentUploadRequestDto$Outbound` instead. */
  export type Outbound = HrisBatchDocumentUploadRequestDto$Outbound;
}
