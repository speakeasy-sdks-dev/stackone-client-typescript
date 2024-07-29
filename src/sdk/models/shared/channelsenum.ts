/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type ChannelsEnum4 = {};

/**
 * The source value of the Channels.
 */
export type SourceValue = ChannelsEnum4 | string | number | boolean;

/**
 * The Channels of the campaign.
 */
export enum ChannelsEnumValue {
    Email = "email",
    Sms = "sms",
    WebPush = "web_push",
    IosPush = "ios_push",
    AndroidPush = "android_push",
    Unknown = "unknown",
    UnmappedValue = "unmapped_value",
}
/**
 * The Channels of the campaign.
 */
export type ChannelsEnumValueOpen = OpenEnum<typeof ChannelsEnumValue>;

export type ChannelsEnum = {
    /**
     * The source value of the Channels.
     */
    sourceValue?: ChannelsEnum4 | string | number | boolean | null | undefined;
    /**
     * The Channels of the campaign.
     */
    value?: ChannelsEnumValueOpen | null | undefined;
};

/** @internal */
export const ChannelsEnum4$inboundSchema: z.ZodType<ChannelsEnum4, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type ChannelsEnum4$Outbound = {};

/** @internal */
export const ChannelsEnum4$outboundSchema: z.ZodType<
    ChannelsEnum4$Outbound,
    z.ZodTypeDef,
    ChannelsEnum4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelsEnum4$ {
    /** @deprecated use `ChannelsEnum4$inboundSchema` instead. */
    export const inboundSchema = ChannelsEnum4$inboundSchema;
    /** @deprecated use `ChannelsEnum4$outboundSchema` instead. */
    export const outboundSchema = ChannelsEnum4$outboundSchema;
    /** @deprecated use `ChannelsEnum4$Outbound` instead. */
    export type Outbound = ChannelsEnum4$Outbound;
}

/** @internal */
export const SourceValue$inboundSchema: z.ZodType<SourceValue, z.ZodTypeDef, unknown> = z.union([
    z.lazy(() => ChannelsEnum4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type SourceValue$Outbound = ChannelsEnum4$Outbound | string | number | boolean;

/** @internal */
export const SourceValue$outboundSchema: z.ZodType<
    SourceValue$Outbound,
    z.ZodTypeDef,
    SourceValue
> = z.union([z.lazy(() => ChannelsEnum4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceValue$ {
    /** @deprecated use `SourceValue$inboundSchema` instead. */
    export const inboundSchema = SourceValue$inboundSchema;
    /** @deprecated use `SourceValue$outboundSchema` instead. */
    export const outboundSchema = SourceValue$outboundSchema;
    /** @deprecated use `SourceValue$Outbound` instead. */
    export type Outbound = SourceValue$Outbound;
}

/** @internal */
export const ChannelsEnumValue$inboundSchema: z.ZodType<
    ChannelsEnumValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(ChannelsEnumValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const ChannelsEnumValue$outboundSchema: z.ZodType<
    ChannelsEnumValueOpen,
    z.ZodTypeDef,
    ChannelsEnumValueOpen
> = z.union([z.nativeEnum(ChannelsEnumValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelsEnumValue$ {
    /** @deprecated use `ChannelsEnumValue$inboundSchema` instead. */
    export const inboundSchema = ChannelsEnumValue$inboundSchema;
    /** @deprecated use `ChannelsEnumValue$outboundSchema` instead. */
    export const outboundSchema = ChannelsEnumValue$outboundSchema;
}

/** @internal */
export const ChannelsEnum$inboundSchema: z.ZodType<ChannelsEnum, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => ChannelsEnum4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(ChannelsEnumValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type ChannelsEnum$Outbound = {
    source_value?: ChannelsEnum4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const ChannelsEnum$outboundSchema: z.ZodType<
    ChannelsEnum$Outbound,
    z.ZodTypeDef,
    ChannelsEnum
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => ChannelsEnum4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(ChannelsEnumValue$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceValue: "source_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelsEnum$ {
    /** @deprecated use `ChannelsEnum$inboundSchema` instead. */
    export const inboundSchema = ChannelsEnum$inboundSchema;
    /** @deprecated use `ChannelsEnum$outboundSchema` instead. */
    export const outboundSchema = ChannelsEnum$outboundSchema;
    /** @deprecated use `ChannelsEnum$Outbound` instead. */
    export type Outbound = ChannelsEnum$Outbound;
}
