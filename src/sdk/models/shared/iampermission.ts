/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { IamResource, IamResource$ } from "./iamresource";
import * as z from "zod";

export type IamPermission4 = {};

export type IamPermissionSourceValue = IamPermission4 | string | number | boolean;

/**
 * The type of the permission, e.g. read, read_write, delete, etc.
 */
export enum IamPermissionValue {
    Read = "read",
    ReadWrite = "read_write",
    Approve = "approve",
    Delete = "delete",
    Use = "use",
    Export = "export",
    UnmappedValue = "unmapped_value",
}

export type IamPermissionType = {
    sourceValue?: IamPermission4 | string | number | boolean | null | undefined;
    /**
     * The type of the permission, e.g. read, read_write, delete, etc.
     */
    value?: IamPermissionValue | null | undefined;
};

export type IamPermission = {
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    id?: string | null | undefined;
    /**
     * The name of the permission.
     */
    name?: string | null | undefined;
    /**
     * The resources that the permission applies to.
     */
    resources?: Array<IamResource> | null | undefined;
    type?: IamPermissionType | null | undefined;
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace IamPermission4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<IamPermission4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPermission4> = z.object({});
}

/** @internal */
export namespace IamPermissionSourceValue$ {
    export type Inbound = IamPermission4$.Inbound | string | number | boolean;

    export type Outbound = IamPermission4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<IamPermissionSourceValue, z.ZodTypeDef, Inbound> =
        z.union([z.lazy(() => IamPermission4$.inboundSchema), z.string(), z.number(), z.boolean()]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPermissionSourceValue> =
        z.union([
            z.lazy(() => IamPermission4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export const IamPermissionValue$ = z.nativeEnum(IamPermissionValue);

/** @internal */
export namespace IamPermissionType$ {
    export type Inbound = {
        source_value?: IamPermission4$.Inbound | string | number | boolean | null | undefined;
        value?: IamPermissionValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamPermissionType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => IamPermission4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamPermissionValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: IamPermission4$.Outbound | string | number | boolean | null | undefined;
        value?: IamPermissionValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPermissionType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => IamPermission4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamPermissionValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace IamPermission$ {
    export type Inbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        resources?: Array<IamResource$.Inbound> | null | undefined;
        type?: IamPermissionType$.Inbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamPermission, z.ZodTypeDef, Inbound> = z
        .object({
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            resources: z.nullable(z.array(IamResource$.inboundSchema)).optional(),
            type: z.nullable(z.lazy(() => IamPermissionType$.inboundSchema)).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.resources === undefined ? null : { resources: v.resources }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        resources?: Array<IamResource$.Outbound> | null | undefined;
        type?: IamPermissionType$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPermission> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            resources: z.nullable(z.array(IamResource$.outboundSchema)).optional(),
            type: z.nullable(z.lazy(() => IamPermissionType$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.resources === undefined ? null : { resources: v.resources }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
