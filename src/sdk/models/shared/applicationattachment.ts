/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ApplicationAttachment4 = {};

/**
 * The source value of the content type.
 */
export type ApplicationAttachmentSourceValue = ApplicationAttachment4 | string | number | boolean;

/**
 * The content type of the attachment.
 */
export enum ApplicationAttachmentValue {
    Text = "text",
    UnmappedValue = "unmapped_value",
}

export type ContentType = {
    /**
     * The source value of the content type.
     */
    sourceValue?: ApplicationAttachment4 | string | number | boolean | null | undefined;
    /**
     * The content type of the attachment.
     */
    value?: ApplicationAttachmentValue | null | undefined;
};

export type ApplicationAttachment = {
    /**
     * The content of the attachment.
     */
    content?: string | null | undefined;
    contentType?: ContentType | null | undefined;
    /**
     * The file name of the attachment.
     */
    fileName?: string | null | undefined;
    /**
     * The URL of the attachment.
     */
    url?: string | null | undefined;
};

/** @internal */
export namespace ApplicationAttachment4$ {
    export const inboundSchema: z.ZodType<ApplicationAttachment4, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationAttachment4> =
        z.object({});
}

/** @internal */
export namespace ApplicationAttachmentSourceValue$ {
    export const inboundSchema: z.ZodType<ApplicationAttachmentSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => ApplicationAttachment4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = ApplicationAttachment4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ApplicationAttachmentSourceValue
    > = z.union([
        z.lazy(() => ApplicationAttachment4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace ApplicationAttachmentValue$ {
    export const inboundSchema = z.nativeEnum(ApplicationAttachmentValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ContentType$ {
    export const inboundSchema: z.ZodType<ContentType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => ApplicationAttachment4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(ApplicationAttachmentValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | ApplicationAttachment4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => ApplicationAttachment4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(ApplicationAttachmentValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace ApplicationAttachment$ {
    export const inboundSchema: z.ZodType<ApplicationAttachment, z.ZodTypeDef, unknown> = z
        .object({
            content: z.nullable(z.string()).optional(),
            content_type: z.nullable(z.lazy(() => ContentType$.inboundSchema)).optional(),
            file_name: z.nullable(z.string()).optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.content_type === undefined ? null : { contentType: v.content_type }),
                ...(v.file_name === undefined ? null : { fileName: v.file_name }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        content?: string | null | undefined;
        content_type?: ContentType$.Outbound | null | undefined;
        file_name?: string | null | undefined;
        url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationAttachment> = z
        .object({
            content: z.nullable(z.string()).optional(),
            contentType: z.nullable(z.lazy(() => ContentType$.outboundSchema)).optional(),
            fileName: z.nullable(z.string()).optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.contentType === undefined ? null : { content_type: v.contentType }),
                ...(v.fileName === undefined ? null : { file_name: v.fileName }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}
