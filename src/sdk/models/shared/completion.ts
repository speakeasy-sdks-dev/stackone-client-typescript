/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export type Completion4 = {};

export type CompletionSourceValue =
  | Completion4
  | string
  | number
  | boolean
  | Array<any>;

export enum CompletionValue {
  Pass = "Pass",
  Fail = "Fail",
}
export type CompletionValueOpen = OpenEnum<typeof CompletionValue>;

/**
 * The result of the completion
 */
export type CompletionSchemasResult = {
  sourceValue?:
    | Completion4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CompletionValueOpen | null | undefined;
};

export type Completion = {
  /**
   * The date the content was completed
   */
  completedAt?: string | null | undefined;
  /**
   * The external ID associated with this content
   */
  contentExternalReference?: string | null | undefined;
  /**
   * The content ID associated with this completion
   */
  contentId?: string | null | undefined;
  /**
   * The created date of the completion
   */
  createdAt?: string | null | undefined;
  /**
   * The external ID associated with this completion
   */
  externalId?: string | null | undefined;
  /**
   * The ID associated with this completion
   */
  id?: string | null | undefined;
  /**
   * Provider's unique identifier of the completion
   */
  remoteContentId?: string | null | undefined;
  /**
   * Provider's unique identifier of the content
   */
  remoteExternalId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Provider's unique identifier of the user related to the completion
   */
  remoteUserId?: string | null | undefined;
  /**
   * The result of the completion
   */
  result?: CompletionSchemasResult | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The updated date of the completion
   */
  updatedAt?: string | null | undefined;
  /**
   * The user ID associated with this completion
   */
  userId?: string | null | undefined;
};

/** @internal */
export const Completion4$inboundSchema: z.ZodType<
  Completion4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Completion4$Outbound = {};

/** @internal */
export const Completion4$outboundSchema: z.ZodType<
  Completion4$Outbound,
  z.ZodTypeDef,
  Completion4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Completion4$ {
  /** @deprecated use `Completion4$inboundSchema` instead. */
  export const inboundSchema = Completion4$inboundSchema;
  /** @deprecated use `Completion4$outboundSchema` instead. */
  export const outboundSchema = Completion4$outboundSchema;
  /** @deprecated use `Completion4$Outbound` instead. */
  export type Outbound = Completion4$Outbound;
}

/** @internal */
export const CompletionSourceValue$inboundSchema: z.ZodType<
  CompletionSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Completion4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CompletionSourceValue$Outbound =
  | Completion4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CompletionSourceValue$outboundSchema: z.ZodType<
  CompletionSourceValue$Outbound,
  z.ZodTypeDef,
  CompletionSourceValue
> = z.union([
  z.lazy(() => Completion4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSourceValue$ {
  /** @deprecated use `CompletionSourceValue$inboundSchema` instead. */
  export const inboundSchema = CompletionSourceValue$inboundSchema;
  /** @deprecated use `CompletionSourceValue$outboundSchema` instead. */
  export const outboundSchema = CompletionSourceValue$outboundSchema;
  /** @deprecated use `CompletionSourceValue$Outbound` instead. */
  export type Outbound = CompletionSourceValue$Outbound;
}

/** @internal */
export const CompletionValue$inboundSchema: z.ZodType<
  CompletionValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CompletionValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CompletionValue$outboundSchema: z.ZodType<
  CompletionValueOpen,
  z.ZodTypeDef,
  CompletionValueOpen
> = z.union([
  z.nativeEnum(CompletionValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionValue$ {
  /** @deprecated use `CompletionValue$inboundSchema` instead. */
  export const inboundSchema = CompletionValue$inboundSchema;
  /** @deprecated use `CompletionValue$outboundSchema` instead. */
  export const outboundSchema = CompletionValue$outboundSchema;
}

/** @internal */
export const CompletionSchemasResult$inboundSchema: z.ZodType<
  CompletionSchemasResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Completion4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CompletionSchemasResult$Outbound = {
  source_value?:
    | Completion4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CompletionSchemasResult$outboundSchema: z.ZodType<
  CompletionSchemasResult$Outbound,
  z.ZodTypeDef,
  CompletionSchemasResult
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Completion4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSchemasResult$ {
  /** @deprecated use `CompletionSchemasResult$inboundSchema` instead. */
  export const inboundSchema = CompletionSchemasResult$inboundSchema;
  /** @deprecated use `CompletionSchemasResult$outboundSchema` instead. */
  export const outboundSchema = CompletionSchemasResult$outboundSchema;
  /** @deprecated use `CompletionSchemasResult$Outbound` instead. */
  export type Outbound = CompletionSchemasResult$Outbound;
}

/** @internal */
export const Completion$inboundSchema: z.ZodType<
  Completion,
  z.ZodTypeDef,
  unknown
> = z.object({
  completed_at: z.nullable(z.string()).optional(),
  content_external_reference: z.nullable(z.string()).optional(),
  content_id: z.nullable(z.string()).optional(),
  created_at: z.nullable(z.string()).optional(),
  external_id: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remote_content_id: z.nullable(z.string()).optional(),
  remote_external_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_user_id: z.nullable(z.string()).optional(),
  result: z.nullable(z.lazy(() => CompletionSchemasResult$inboundSchema))
    .optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "completed_at": "completedAt",
    "content_external_reference": "contentExternalReference",
    "content_id": "contentId",
    "created_at": "createdAt",
    "external_id": "externalId",
    "remote_content_id": "remoteContentId",
    "remote_external_id": "remoteExternalId",
    "remote_id": "remoteId",
    "remote_user_id": "remoteUserId",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type Completion$Outbound = {
  completed_at?: string | null | undefined;
  content_external_reference?: string | null | undefined;
  content_id?: string | null | undefined;
  created_at?: string | null | undefined;
  external_id?: string | null | undefined;
  id?: string | null | undefined;
  remote_content_id?: string | null | undefined;
  remote_external_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_user_id?: string | null | undefined;
  result?: CompletionSchemasResult$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const Completion$outboundSchema: z.ZodType<
  Completion$Outbound,
  z.ZodTypeDef,
  Completion
> = z.object({
  completedAt: z.nullable(z.string()).optional(),
  contentExternalReference: z.nullable(z.string()).optional(),
  contentId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remoteContentId: z.nullable(z.string()).optional(),
  remoteExternalId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteUserId: z.nullable(z.string()).optional(),
  result: z.nullable(z.lazy(() => CompletionSchemasResult$outboundSchema))
    .optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    completedAt: "completed_at",
    contentExternalReference: "content_external_reference",
    contentId: "content_id",
    createdAt: "created_at",
    externalId: "external_id",
    remoteContentId: "remote_content_id",
    remoteExternalId: "remote_external_id",
    remoteId: "remote_id",
    remoteUserId: "remote_user_id",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Completion$ {
  /** @deprecated use `Completion$inboundSchema` instead. */
  export const inboundSchema = Completion$inboundSchema;
  /** @deprecated use `Completion$outboundSchema` instead. */
  export const outboundSchema = Completion$outboundSchema;
  /** @deprecated use `Completion$Outbound` instead. */
  export type Outbound = Completion$Outbound;
}
