/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AtsUpdateApplicationRequestDto4 = {};

/**
 * The source value of the application status.
 */
export type AtsUpdateApplicationRequestDtoSourceValue =
    | AtsUpdateApplicationRequestDto4
    | string
    | number
    | boolean;

/**
 * The status of the application.
 */
export enum AtsUpdateApplicationRequestDtoValue {
    Active = "active",
    Assessment = "assessment",
    BackgroundCheck = "background_check",
    Converted = "converted",
    DeclinedByCandidate = "declined_by_candidate",
    Hired = "hired",
    Interview = "interview",
    Lead = "lead",
    Offer = "offer",
    ReferenceCheck = "reference_check",
    Rejected = "rejected",
    Review = "review",
    Screen = "screen",
    New = "new",
    Onboarding = "onboarding",
    Created = "created",
    Accepted = "accepted",
    ShortList = "short_list",
    Approved = "approved",
    UnmappedValue = "unmapped_value",
}

export type AtsUpdateApplicationRequestDtoApplicationStatus = {
    /**
     * The source value of the application status.
     */
    sourceValue?: AtsUpdateApplicationRequestDto4 | string | number | boolean | null | undefined;
    /**
     * The status of the application.
     */
    value?: AtsUpdateApplicationRequestDtoValue | null | undefined;
};

export type AtsUpdateApplicationRequestDto = {
    applicationStatus?: AtsUpdateApplicationRequestDtoApplicationStatus | null | undefined;
    /**
     * Unique identifier of the interview stage
     */
    interviewStageId?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: Record<string, any> | null | undefined;
    /**
     * Unique identifier of the rejection reason, used only for write operations
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    rejectedReasonId?: string | null | undefined;
    /**
     * Source of the application
     */
    source?: string | null | undefined;
};

/** @internal */
export namespace AtsUpdateApplicationRequestDto4$ {
    export const inboundSchema: z.ZodType<AtsUpdateApplicationRequestDto4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsUpdateApplicationRequestDto4
    > = z.object({});
}

/** @internal */
export namespace AtsUpdateApplicationRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        AtsUpdateApplicationRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => AtsUpdateApplicationRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = AtsUpdateApplicationRequestDto4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsUpdateApplicationRequestDtoSourceValue
    > = z.union([
        z.lazy(() => AtsUpdateApplicationRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace AtsUpdateApplicationRequestDtoValue$ {
    export const inboundSchema = z.nativeEnum(AtsUpdateApplicationRequestDtoValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AtsUpdateApplicationRequestDtoApplicationStatus$ {
    export const inboundSchema: z.ZodType<
        AtsUpdateApplicationRequestDtoApplicationStatus,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsUpdateApplicationRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsUpdateApplicationRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AtsUpdateApplicationRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsUpdateApplicationRequestDtoApplicationStatus
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsUpdateApplicationRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsUpdateApplicationRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AtsUpdateApplicationRequestDto$ {
    export const inboundSchema: z.ZodType<AtsUpdateApplicationRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            application_status: z
                .nullable(
                    z.lazy(() => AtsUpdateApplicationRequestDtoApplicationStatus$.inboundSchema)
                )
                .optional(),
            interview_stage_id: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            rejected_reason_id: z.nullable(z.string()).optional(),
            source: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.application_status === undefined
                    ? null
                    : { applicationStatus: v.application_status }),
                ...(v.interview_stage_id === undefined
                    ? null
                    : { interviewStageId: v.interview_stage_id }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.rejected_reason_id === undefined
                    ? null
                    : { rejectedReasonId: v.rejected_reason_id }),
                ...(v.source === undefined ? null : { source: v.source }),
            };
        });

    export type Outbound = {
        application_status?:
            | AtsUpdateApplicationRequestDtoApplicationStatus$.Outbound
            | null
            | undefined;
        interview_stage_id?: string | null | undefined;
        passthrough?: Record<string, any> | null | undefined;
        rejected_reason_id?: string | null | undefined;
        source?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsUpdateApplicationRequestDto> =
        z
            .object({
                applicationStatus: z
                    .nullable(
                        z.lazy(
                            () => AtsUpdateApplicationRequestDtoApplicationStatus$.outboundSchema
                        )
                    )
                    .optional(),
                interviewStageId: z.nullable(z.string()).optional(),
                passthrough: z.nullable(z.record(z.any())).optional(),
                rejectedReasonId: z.nullable(z.string()).optional(),
                source: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.applicationStatus === undefined
                        ? null
                        : { application_status: v.applicationStatus }),
                    ...(v.interviewStageId === undefined
                        ? null
                        : { interview_stage_id: v.interviewStageId }),
                    ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                    ...(v.rejectedReasonId === undefined
                        ? null
                        : { rejected_reason_id: v.rejectedReasonId }),
                    ...(v.source === undefined ? null : { source: v.source }),
                };
            });
}
