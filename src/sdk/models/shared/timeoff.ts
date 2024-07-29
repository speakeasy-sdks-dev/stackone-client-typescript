/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export enum TimeOff2 {
    True = "true",
    False = "false",
}

/**
 * True if the end of the time off request ends half way through the day
 */
export type TimeOffEndHalfDay = boolean | TimeOff2;

export enum TimeOffSchemas2 {
    True = "true",
    False = "false",
}

/**
 * True if the start of the time off request begins half way through the day
 */
export type TimeOffStartHalfDay = boolean | TimeOffSchemas2;

export type TimeOff4 = {};

export type TimeOffSourceValue = TimeOff4 | string | number | boolean;

export enum TimeOffValue {
    Approved = "approved",
    Cancelled = "cancelled",
    Rejected = "rejected",
    Pending = "pending",
    UnmappedValue = "unmapped_value",
}
export type TimeOffValueOpen = OpenEnum<typeof TimeOffValue>;

/**
 * The status of the time off request
 */
export type TimeOffStatus = {
    sourceValue?: TimeOff4 | string | number | boolean | null | undefined;
    value?: TimeOffValueOpen | null | undefined;
};

export type TimeOffSchemas4 = {};

export type TimeOffSchemasSourceValue = TimeOffSchemas4 | string | number | boolean;

export enum TimeOffSchemasValue {
    Sick = "sick",
    UnmappedValue = "unmapped_value",
    Vacation = "vacation",
    LongTermDisability = "long_term_disability",
    ShortTermDisability = "short_term_disability",
    Absent = "absent",
    CompTime = "comp_time",
    Training = "training",
    AnnualLeave = "annual_leave",
    LeaveOfAbsence = "leave_of_absence",
    Break = "break",
    ChildCareLeave = "child_care_leave",
}
export type TimeOffSchemasValueOpen = OpenEnum<typeof TimeOffSchemasValue>;

/**
 * The type of the time off request
 */
export type TimeOffType = {
    sourceValue?: TimeOffSchemas4 | string | number | boolean | null | undefined;
    value?: TimeOffSchemasValueOpen | null | undefined;
};

export type TimeOff = {
    /**
     * The approver ID
     */
    approverId?: string | null | undefined;
    /**
     * The created date of the time off request
     */
    createdDate?: Date | null | undefined;
    /**
     * The duration of the time off request
     */
    duration?: string | null | undefined;
    /**
     * The employee ID
     */
    employeeId?: string | null | undefined;
    /**
     * The end date of the time off request
     */
    endDate?: Date | null | undefined;
    /**
     * True if the end of the time off request ends half way through the day
     */
    endHalfDay?: boolean | TimeOff2 | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Provider's unique identifier of the approver
     */
    remoteApproverId?: string | null | undefined;
    /**
     * Provider's unique identifier of the employee
     */
    remoteEmployeeId?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The start date of the time off request
     */
    startDate?: Date | null | undefined;
    /**
     * True if the start of the time off request begins half way through the day
     */
    startHalfDay?: boolean | TimeOffSchemas2 | null | undefined;
    /**
     * The status of the time off request
     */
    status?: TimeOffStatus | null | undefined;
    /**
     * The type of the time off request
     */
    type?: TimeOffType | null | undefined;
    /**
     * The updated date of the time off request
     */
    updatedDate?: Date | null | undefined;
};

/** @internal */
export const TimeOff2$inboundSchema: z.ZodNativeEnum<typeof TimeOff2> = z.nativeEnum(TimeOff2);

/** @internal */
export const TimeOff2$outboundSchema: z.ZodNativeEnum<typeof TimeOff2> = TimeOff2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOff2$ {
    /** @deprecated use `TimeOff2$inboundSchema` instead. */
    export const inboundSchema = TimeOff2$inboundSchema;
    /** @deprecated use `TimeOff2$outboundSchema` instead. */
    export const outboundSchema = TimeOff2$outboundSchema;
}

/** @internal */
export const TimeOffEndHalfDay$inboundSchema: z.ZodType<TimeOffEndHalfDay, z.ZodTypeDef, unknown> =
    z.union([z.boolean(), TimeOff2$inboundSchema]);

/** @internal */
export type TimeOffEndHalfDay$Outbound = boolean | string;

/** @internal */
export const TimeOffEndHalfDay$outboundSchema: z.ZodType<
    TimeOffEndHalfDay$Outbound,
    z.ZodTypeDef,
    TimeOffEndHalfDay
> = z.union([z.boolean(), TimeOff2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffEndHalfDay$ {
    /** @deprecated use `TimeOffEndHalfDay$inboundSchema` instead. */
    export const inboundSchema = TimeOffEndHalfDay$inboundSchema;
    /** @deprecated use `TimeOffEndHalfDay$outboundSchema` instead. */
    export const outboundSchema = TimeOffEndHalfDay$outboundSchema;
    /** @deprecated use `TimeOffEndHalfDay$Outbound` instead. */
    export type Outbound = TimeOffEndHalfDay$Outbound;
}

/** @internal */
export const TimeOffSchemas2$inboundSchema: z.ZodNativeEnum<typeof TimeOffSchemas2> =
    z.nativeEnum(TimeOffSchemas2);

/** @internal */
export const TimeOffSchemas2$outboundSchema: z.ZodNativeEnum<typeof TimeOffSchemas2> =
    TimeOffSchemas2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffSchemas2$ {
    /** @deprecated use `TimeOffSchemas2$inboundSchema` instead. */
    export const inboundSchema = TimeOffSchemas2$inboundSchema;
    /** @deprecated use `TimeOffSchemas2$outboundSchema` instead. */
    export const outboundSchema = TimeOffSchemas2$outboundSchema;
}

/** @internal */
export const TimeOffStartHalfDay$inboundSchema: z.ZodType<
    TimeOffStartHalfDay,
    z.ZodTypeDef,
    unknown
> = z.union([z.boolean(), TimeOffSchemas2$inboundSchema]);

/** @internal */
export type TimeOffStartHalfDay$Outbound = boolean | string;

/** @internal */
export const TimeOffStartHalfDay$outboundSchema: z.ZodType<
    TimeOffStartHalfDay$Outbound,
    z.ZodTypeDef,
    TimeOffStartHalfDay
> = z.union([z.boolean(), TimeOffSchemas2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffStartHalfDay$ {
    /** @deprecated use `TimeOffStartHalfDay$inboundSchema` instead. */
    export const inboundSchema = TimeOffStartHalfDay$inboundSchema;
    /** @deprecated use `TimeOffStartHalfDay$outboundSchema` instead. */
    export const outboundSchema = TimeOffStartHalfDay$outboundSchema;
    /** @deprecated use `TimeOffStartHalfDay$Outbound` instead. */
    export type Outbound = TimeOffStartHalfDay$Outbound;
}

/** @internal */
export const TimeOff4$inboundSchema: z.ZodType<TimeOff4, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type TimeOff4$Outbound = {};

/** @internal */
export const TimeOff4$outboundSchema: z.ZodType<TimeOff4$Outbound, z.ZodTypeDef, TimeOff4> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOff4$ {
    /** @deprecated use `TimeOff4$inboundSchema` instead. */
    export const inboundSchema = TimeOff4$inboundSchema;
    /** @deprecated use `TimeOff4$outboundSchema` instead. */
    export const outboundSchema = TimeOff4$outboundSchema;
    /** @deprecated use `TimeOff4$Outbound` instead. */
    export type Outbound = TimeOff4$Outbound;
}

/** @internal */
export const TimeOffSourceValue$inboundSchema: z.ZodType<
    TimeOffSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => TimeOff4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type TimeOffSourceValue$Outbound = TimeOff4$Outbound | string | number | boolean;

/** @internal */
export const TimeOffSourceValue$outboundSchema: z.ZodType<
    TimeOffSourceValue$Outbound,
    z.ZodTypeDef,
    TimeOffSourceValue
> = z.union([z.lazy(() => TimeOff4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffSourceValue$ {
    /** @deprecated use `TimeOffSourceValue$inboundSchema` instead. */
    export const inboundSchema = TimeOffSourceValue$inboundSchema;
    /** @deprecated use `TimeOffSourceValue$outboundSchema` instead. */
    export const outboundSchema = TimeOffSourceValue$outboundSchema;
    /** @deprecated use `TimeOffSourceValue$Outbound` instead. */
    export type Outbound = TimeOffSourceValue$Outbound;
}

/** @internal */
export const TimeOffValue$inboundSchema: z.ZodType<TimeOffValueOpen, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(TimeOffValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const TimeOffValue$outboundSchema: z.ZodType<
    TimeOffValueOpen,
    z.ZodTypeDef,
    TimeOffValueOpen
> = z.union([z.nativeEnum(TimeOffValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffValue$ {
    /** @deprecated use `TimeOffValue$inboundSchema` instead. */
    export const inboundSchema = TimeOffValue$inboundSchema;
    /** @deprecated use `TimeOffValue$outboundSchema` instead. */
    export const outboundSchema = TimeOffValue$outboundSchema;
}

/** @internal */
export const TimeOffStatus$inboundSchema: z.ZodType<TimeOffStatus, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([z.lazy(() => TimeOff4$inboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(TimeOffValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type TimeOffStatus$Outbound = {
    source_value?: TimeOff4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const TimeOffStatus$outboundSchema: z.ZodType<
    TimeOffStatus$Outbound,
    z.ZodTypeDef,
    TimeOffStatus
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => TimeOff4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(TimeOffValue$outboundSchema).optional(),
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
export namespace TimeOffStatus$ {
    /** @deprecated use `TimeOffStatus$inboundSchema` instead. */
    export const inboundSchema = TimeOffStatus$inboundSchema;
    /** @deprecated use `TimeOffStatus$outboundSchema` instead. */
    export const outboundSchema = TimeOffStatus$outboundSchema;
    /** @deprecated use `TimeOffStatus$Outbound` instead. */
    export type Outbound = TimeOffStatus$Outbound;
}

/** @internal */
export const TimeOffSchemas4$inboundSchema: z.ZodType<TimeOffSchemas4, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type TimeOffSchemas4$Outbound = {};

/** @internal */
export const TimeOffSchemas4$outboundSchema: z.ZodType<
    TimeOffSchemas4$Outbound,
    z.ZodTypeDef,
    TimeOffSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffSchemas4$ {
    /** @deprecated use `TimeOffSchemas4$inboundSchema` instead. */
    export const inboundSchema = TimeOffSchemas4$inboundSchema;
    /** @deprecated use `TimeOffSchemas4$outboundSchema` instead. */
    export const outboundSchema = TimeOffSchemas4$outboundSchema;
    /** @deprecated use `TimeOffSchemas4$Outbound` instead. */
    export type Outbound = TimeOffSchemas4$Outbound;
}

/** @internal */
export const TimeOffSchemasSourceValue$inboundSchema: z.ZodType<
    TimeOffSchemasSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => TimeOffSchemas4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type TimeOffSchemasSourceValue$Outbound =
    | TimeOffSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const TimeOffSchemasSourceValue$outboundSchema: z.ZodType<
    TimeOffSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    TimeOffSchemasSourceValue
> = z.union([z.lazy(() => TimeOffSchemas4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffSchemasSourceValue$ {
    /** @deprecated use `TimeOffSchemasSourceValue$inboundSchema` instead. */
    export const inboundSchema = TimeOffSchemasSourceValue$inboundSchema;
    /** @deprecated use `TimeOffSchemasSourceValue$outboundSchema` instead. */
    export const outboundSchema = TimeOffSchemasSourceValue$outboundSchema;
    /** @deprecated use `TimeOffSchemasSourceValue$Outbound` instead. */
    export type Outbound = TimeOffSchemasSourceValue$Outbound;
}

/** @internal */
export const TimeOffSchemasValue$inboundSchema: z.ZodType<
    TimeOffSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(TimeOffSchemasValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const TimeOffSchemasValue$outboundSchema: z.ZodType<
    TimeOffSchemasValueOpen,
    z.ZodTypeDef,
    TimeOffSchemasValueOpen
> = z.union([z.nativeEnum(TimeOffSchemasValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffSchemasValue$ {
    /** @deprecated use `TimeOffSchemasValue$inboundSchema` instead. */
    export const inboundSchema = TimeOffSchemasValue$inboundSchema;
    /** @deprecated use `TimeOffSchemasValue$outboundSchema` instead. */
    export const outboundSchema = TimeOffSchemasValue$outboundSchema;
}

/** @internal */
export const TimeOffType$inboundSchema: z.ZodType<TimeOffType, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => TimeOffSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(TimeOffSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type TimeOffType$Outbound = {
    source_value?: TimeOffSchemas4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const TimeOffType$outboundSchema: z.ZodType<
    TimeOffType$Outbound,
    z.ZodTypeDef,
    TimeOffType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => TimeOffSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(TimeOffSchemasValue$outboundSchema).optional(),
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
export namespace TimeOffType$ {
    /** @deprecated use `TimeOffType$inboundSchema` instead. */
    export const inboundSchema = TimeOffType$inboundSchema;
    /** @deprecated use `TimeOffType$outboundSchema` instead. */
    export const outboundSchema = TimeOffType$outboundSchema;
    /** @deprecated use `TimeOffType$Outbound` instead. */
    export type Outbound = TimeOffType$Outbound;
}

/** @internal */
export const TimeOff$inboundSchema: z.ZodType<TimeOff, z.ZodTypeDef, unknown> = z
    .object({
        approver_id: z.nullable(z.string()).optional(),
        created_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        duration: z.nullable(z.string()).optional(),
        employee_id: z.nullable(z.string()).optional(),
        end_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        end_half_day: z.nullable(z.union([z.boolean(), TimeOff2$inboundSchema])).optional(),
        id: z.nullable(z.string()).optional(),
        remote_approver_id: z.nullable(z.string()).optional(),
        remote_employee_id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        start_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        start_half_day: z
            .nullable(z.union([z.boolean(), TimeOffSchemas2$inboundSchema]))
            .optional(),
        status: z.nullable(z.lazy(() => TimeOffStatus$inboundSchema)).optional(),
        type: z.nullable(z.lazy(() => TimeOffType$inboundSchema)).optional(),
        updated_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            approver_id: "approverId",
            created_date: "createdDate",
            employee_id: "employeeId",
            end_date: "endDate",
            end_half_day: "endHalfDay",
            remote_approver_id: "remoteApproverId",
            remote_employee_id: "remoteEmployeeId",
            remote_id: "remoteId",
            start_date: "startDate",
            start_half_day: "startHalfDay",
            updated_date: "updatedDate",
        });
    });

/** @internal */
export type TimeOff$Outbound = {
    approver_id?: string | null | undefined;
    created_date?: string | null | undefined;
    duration?: string | null | undefined;
    employee_id?: string | null | undefined;
    end_date?: string | null | undefined;
    end_half_day?: boolean | string | null | undefined;
    id?: string | null | undefined;
    remote_approver_id?: string | null | undefined;
    remote_employee_id?: string | null | undefined;
    remote_id?: string | null | undefined;
    start_date?: string | null | undefined;
    start_half_day?: boolean | string | null | undefined;
    status?: TimeOffStatus$Outbound | null | undefined;
    type?: TimeOffType$Outbound | null | undefined;
    updated_date?: string | null | undefined;
};

/** @internal */
export const TimeOff$outboundSchema: z.ZodType<TimeOff$Outbound, z.ZodTypeDef, TimeOff> = z
    .object({
        approverId: z.nullable(z.string()).optional(),
        createdDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        duration: z.nullable(z.string()).optional(),
        employeeId: z.nullable(z.string()).optional(),
        endDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        endHalfDay: z.nullable(z.union([z.boolean(), TimeOff2$outboundSchema])).optional(),
        id: z.nullable(z.string()).optional(),
        remoteApproverId: z.nullable(z.string()).optional(),
        remoteEmployeeId: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        startHalfDay: z.nullable(z.union([z.boolean(), TimeOffSchemas2$outboundSchema])).optional(),
        status: z.nullable(z.lazy(() => TimeOffStatus$outboundSchema)).optional(),
        type: z.nullable(z.lazy(() => TimeOffType$outboundSchema)).optional(),
        updatedDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            approverId: "approver_id",
            createdDate: "created_date",
            employeeId: "employee_id",
            endDate: "end_date",
            endHalfDay: "end_half_day",
            remoteApproverId: "remote_approver_id",
            remoteEmployeeId: "remote_employee_id",
            remoteId: "remote_id",
            startDate: "start_date",
            startHalfDay: "start_half_day",
            updatedDate: "updated_date",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOff$ {
    /** @deprecated use `TimeOff$inboundSchema` instead. */
    export const inboundSchema = TimeOff$inboundSchema;
    /** @deprecated use `TimeOff$outboundSchema` instead. */
    export const outboundSchema = TimeOff$outboundSchema;
    /** @deprecated use `TimeOff$Outbound` instead. */
    export type Outbound = TimeOff$Outbound;
}
