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

export type Category4 = {};

export type CategorySourceValue =
  | Category4
  | string
  | number
  | boolean
  | Array<any>;

export enum CategoryValue {
  Primary = "primary",
  Secondary = "secondary",
}
export type CategoryValueOpen = OpenEnum<typeof CategoryValue>;

/**
 * The hierarchal level of the category
 */
export type Level = {
  sourceValue?:
    | Category4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CategoryValueOpen | null | undefined;
};

export type Category = {
  /**
   * Whether the category is active and therefore available for use
   */
  active?: boolean | null | undefined;
  /**
   * The ID associated with this category
   */
  id?: string | null | undefined;
  /**
   * The hierarchal level of the category
   */
  level?: Level | null | undefined;
  /**
   * The name associated with this category
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Category4$inboundSchema: z.ZodType<
  Category4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Category4$Outbound = {};

/** @internal */
export const Category4$outboundSchema: z.ZodType<
  Category4$Outbound,
  z.ZodTypeDef,
  Category4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Category4$ {
  /** @deprecated use `Category4$inboundSchema` instead. */
  export const inboundSchema = Category4$inboundSchema;
  /** @deprecated use `Category4$outboundSchema` instead. */
  export const outboundSchema = Category4$outboundSchema;
  /** @deprecated use `Category4$Outbound` instead. */
  export type Outbound = Category4$Outbound;
}

/** @internal */
export const CategorySourceValue$inboundSchema: z.ZodType<
  CategorySourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Category4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CategorySourceValue$Outbound =
  | Category4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CategorySourceValue$outboundSchema: z.ZodType<
  CategorySourceValue$Outbound,
  z.ZodTypeDef,
  CategorySourceValue
> = z.union([
  z.lazy(() => Category4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategorySourceValue$ {
  /** @deprecated use `CategorySourceValue$inboundSchema` instead. */
  export const inboundSchema = CategorySourceValue$inboundSchema;
  /** @deprecated use `CategorySourceValue$outboundSchema` instead. */
  export const outboundSchema = CategorySourceValue$outboundSchema;
  /** @deprecated use `CategorySourceValue$Outbound` instead. */
  export type Outbound = CategorySourceValue$Outbound;
}

/** @internal */
export const CategoryValue$inboundSchema: z.ZodType<
  CategoryValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CategoryValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CategoryValue$outboundSchema: z.ZodType<
  CategoryValueOpen,
  z.ZodTypeDef,
  CategoryValueOpen
> = z.union([
  z.nativeEnum(CategoryValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoryValue$ {
  /** @deprecated use `CategoryValue$inboundSchema` instead. */
  export const inboundSchema = CategoryValue$inboundSchema;
  /** @deprecated use `CategoryValue$outboundSchema` instead. */
  export const outboundSchema = CategoryValue$outboundSchema;
}

/** @internal */
export const Level$inboundSchema: z.ZodType<Level, z.ZodTypeDef, unknown> = z
  .object({
    source_value: z.nullable(
      z.union([
        z.lazy(() => Category4$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(CategoryValue$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "source_value": "sourceValue",
    });
  });

/** @internal */
export type Level$Outbound = {
  source_value?:
    | Category4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const Level$outboundSchema: z.ZodType<
  Level$Outbound,
  z.ZodTypeDef,
  Level
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Category4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CategoryValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Level$ {
  /** @deprecated use `Level$inboundSchema` instead. */
  export const inboundSchema = Level$inboundSchema;
  /** @deprecated use `Level$outboundSchema` instead. */
  export const outboundSchema = Level$outboundSchema;
  /** @deprecated use `Level$Outbound` instead. */
  export type Outbound = Level$Outbound;
}

/** @internal */
export const Category$inboundSchema: z.ZodType<
  Category,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  id: z.nullable(z.string()).optional(),
  level: z.nullable(z.lazy(() => Level$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type Category$Outbound = {
  active?: boolean | null | undefined;
  id?: string | null | undefined;
  level?: Level$Outbound | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Category$outboundSchema: z.ZodType<
  Category$Outbound,
  z.ZodTypeDef,
  Category
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  id: z.nullable(z.string()).optional(),
  level: z.nullable(z.lazy(() => Level$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Category$ {
  /** @deprecated use `Category$inboundSchema` instead. */
  export const inboundSchema = Category$inboundSchema;
  /** @deprecated use `Category$outboundSchema` instead. */
  export const outboundSchema = Category$outboundSchema;
  /** @deprecated use `Category$Outbound` instead. */
  export type Outbound = Category$Outbound;
}
