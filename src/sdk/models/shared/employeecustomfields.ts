/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type EmployeeCustomFields4 = {};

export type EmployeeCustomFieldsOptions = EmployeeCustomFields4 | string | number | boolean;

export type EmployeeCustomFieldsSchemasType4 = {};

export type EmployeeCustomFieldsSourceValue =
    | EmployeeCustomFieldsSchemasType4
    | string
    | number
    | boolean;

export enum EmployeeCustomFieldsSchemasValue {
    Date = "date",
    Float = "float",
    Integer = "integer",
    List = "list",
    Text = "text",
    UnmappedValue = "unmapped_value",
}
export type EmployeeCustomFieldsSchemasValueOpen = OpenEnum<
    typeof EmployeeCustomFieldsSchemasValue
>;

/**
 * The type of the custom field.
 */
export type EmployeeCustomFieldsType = {
    sourceValue?: EmployeeCustomFieldsSchemasType4 | string | number | boolean | null | undefined;
    value?: EmployeeCustomFieldsSchemasValueOpen | null | undefined;
};

export type EmployeeCustomFieldsSchemas4 = {};

/**
 * The value associated with the custom field.
 */
export type EmployeeCustomFieldsValue = EmployeeCustomFieldsSchemas4 | string | number | boolean;

export type EmployeeCustomFields = {
    /**
     * The description of the custom field.
     */
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the custom field.
     */
    name?: string | null | undefined;
    /**
     * An array of possible options for the custom field.
     */
    options?: Array<EmployeeCustomFields4 | string | number | boolean> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's unique identifier for the value of the custom field.
     */
    remoteValueId?: string | null | undefined;
    /**
     * The type of the custom field.
     */
    type?: EmployeeCustomFieldsType | null | undefined;
    /**
     * The value associated with the custom field.
     */
    value?: EmployeeCustomFieldsSchemas4 | string | number | boolean | null | undefined;
    /**
     * The unique identifier for the value of the custom field.
     */
    valueId?: string | null | undefined;
};

/** @internal */
export namespace EmployeeCustomFields4$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFields4, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFields4> =
        z.object({});
}

/** @internal */
export namespace EmployeeCustomFieldsOptions$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsOptions, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => EmployeeCustomFields4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = EmployeeCustomFields4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFieldsOptions> =
        z.union([
            z.lazy(() => EmployeeCustomFields4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace EmployeeCustomFieldsSchemasType4$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsSchemasType4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EmployeeCustomFieldsSchemasType4
    > = z.object({});
}

/** @internal */
export namespace EmployeeCustomFieldsSourceValue$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => EmployeeCustomFieldsSchemasType4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = EmployeeCustomFieldsSchemasType4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EmployeeCustomFieldsSourceValue
    > = z.union([
        z.lazy(() => EmployeeCustomFieldsSchemasType4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace EmployeeCustomFieldsSchemasValue$ {
    export const inboundSchema: z.ZodType<
        EmployeeCustomFieldsSchemasValueOpen,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.nativeEnum(EmployeeCustomFieldsSchemasValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema: z.ZodType<
        EmployeeCustomFieldsSchemasValueOpen,
        z.ZodTypeDef,
        EmployeeCustomFieldsSchemasValueOpen
    > = z.union([
        z.nativeEnum(EmployeeCustomFieldsSchemasValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace EmployeeCustomFieldsType$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => EmployeeCustomFieldsSchemasType4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(EmployeeCustomFieldsSchemasValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?:
            | EmployeeCustomFieldsSchemasType4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFieldsType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => EmployeeCustomFieldsSchemasType4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(EmployeeCustomFieldsSchemasValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace EmployeeCustomFieldsSchemas4$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsSchemas4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFieldsSchemas4> =
        z.object({});
}

/** @internal */
export namespace EmployeeCustomFieldsValue$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFieldsValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => EmployeeCustomFieldsSchemas4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = EmployeeCustomFieldsSchemas4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFieldsValue> =
        z.union([
            z.lazy(() => EmployeeCustomFieldsSchemas4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace EmployeeCustomFields$ {
    export const inboundSchema: z.ZodType<EmployeeCustomFields, z.ZodTypeDef, unknown> = z
        .object({
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            options: z
                .nullable(
                    z.array(
                        z.union([
                            z.lazy(() => EmployeeCustomFields4$.inboundSchema),
                            z.string(),
                            z.number(),
                            z.boolean(),
                        ])
                    )
                )
                .optional(),
            remote_id: z.nullable(z.string()).optional(),
            remote_value_id: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => EmployeeCustomFieldsType$.inboundSchema)).optional(),
            value: z
                .nullable(
                    z.union([
                        z.lazy(() => EmployeeCustomFieldsSchemas4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value_id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_id: "remoteId",
                remote_value_id: "remoteValueId",
                value_id: "valueId",
            });
        });

    export type Outbound = {
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        options?:
            | Array<EmployeeCustomFields4$.Outbound | string | number | boolean>
            | null
            | undefined;
        remote_id?: string | null | undefined;
        remote_value_id?: string | null | undefined;
        type?: EmployeeCustomFieldsType$.Outbound | null | undefined;
        value?:
            | EmployeeCustomFieldsSchemas4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value_id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeCustomFields> = z
        .object({
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            options: z
                .nullable(
                    z.array(
                        z.union([
                            z.lazy(() => EmployeeCustomFields4$.outboundSchema),
                            z.string(),
                            z.number(),
                            z.boolean(),
                        ])
                    )
                )
                .optional(),
            remoteId: z.nullable(z.string()).optional(),
            remoteValueId: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => EmployeeCustomFieldsType$.outboundSchema)).optional(),
            value: z
                .nullable(
                    z.union([
                        z.lazy(() => EmployeeCustomFieldsSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            valueId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remoteId: "remote_id",
                remoteValueId: "remote_value_id",
                valueId: "value_id",
            });
        });
}
