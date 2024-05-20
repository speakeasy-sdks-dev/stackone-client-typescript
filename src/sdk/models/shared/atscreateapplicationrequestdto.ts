/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Questionnaire, Questionnaire$ } from "./questionnaire";
import { SocialLink, SocialLink$ } from "./sociallink";
import * as z from "zod";

export type AtsCreateApplicationRequestDto4 = {};

/**
 * The source value of the application status.
 */
export type AtsCreateApplicationRequestDtoSourceValue =
    | AtsCreateApplicationRequestDto4
    | string
    | number
    | boolean;

/**
 * The status of the application.
 */
export enum AtsCreateApplicationRequestDtoValue {
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

export type AtsCreateApplicationRequestDtoApplicationStatus = {
    /**
     * The source value of the application status.
     */
    sourceValue?: AtsCreateApplicationRequestDto4 | string | number | boolean | null | undefined;
    /**
     * The status of the application.
     */
    value?: AtsCreateApplicationRequestDtoValue | null | undefined;
};

/**
 * Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application.
 */
export type AtsCreateApplicationRequestDtoCandidate = {
    /**
     * Candidate company
     */
    company?: string | null | undefined;
    /**
     * Candidate country
     */
    country?: string | null | undefined;
    /**
     * Candidate email
     */
    email?: string | null | undefined;
    /**
     * Candidate first name
     */
    firstName?: string | null | undefined;
    /**
     * Candidate hired date
     */
    hiredAt?: Date | null | undefined;
    /**
     * Candidate last name
     */
    lastName?: string | null | undefined;
    /**
     * Candidate name
     */
    name?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * The candidate personal phone number
     */
    phoneNumber?: string | null | undefined;
    /**
     * List of candidate social links
     */
    socialLinks?: Array<SocialLink> | null | undefined;
    /**
     * Candidate title
     */
    title?: string | null | undefined;
};

export type AtsCreateApplicationRequestDto = {
    applicationStatus?: AtsCreateApplicationRequestDtoApplicationStatus | null | undefined;
    /**
     * Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application.
     */
    candidate?: AtsCreateApplicationRequestDtoCandidate | null | undefined;
    /**
     * Unique identifier of the candidate. Provide this OR candidate, but not both.
     */
    candidateId?: string | null | undefined;
    /**
     * Unique identifier of the job
     */
    jobId?: string | null | undefined;
    /**
     * Unique identifier of the location
     */
    locationId?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * Questionnaires associated with the application
     */
    questionnaires?: Array<Questionnaire> | null | undefined;
    /**
     * Source of the application
     */
    source?: string | null | undefined;
};

/** @internal */
export namespace AtsCreateApplicationRequestDto4$ {
    export const inboundSchema: z.ZodType<AtsCreateApplicationRequestDto4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsCreateApplicationRequestDto4
    > = z.object({});
}

/** @internal */
export namespace AtsCreateApplicationRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        AtsCreateApplicationRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => AtsCreateApplicationRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = AtsCreateApplicationRequestDto4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsCreateApplicationRequestDtoSourceValue
    > = z.union([
        z.lazy(() => AtsCreateApplicationRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace AtsCreateApplicationRequestDtoValue$ {
    export const inboundSchema = z.nativeEnum(AtsCreateApplicationRequestDtoValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AtsCreateApplicationRequestDtoApplicationStatus$ {
    export const inboundSchema: z.ZodType<
        AtsCreateApplicationRequestDtoApplicationStatus,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateApplicationRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateApplicationRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AtsCreateApplicationRequestDto4$.Outbound
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
        AtsCreateApplicationRequestDtoApplicationStatus
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateApplicationRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateApplicationRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AtsCreateApplicationRequestDtoCandidate$ {
    export const inboundSchema: z.ZodType<
        AtsCreateApplicationRequestDtoCandidate,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            first_name: z.nullable(z.string()).optional(),
            hired_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            last_name: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            phone_number: z.nullable(z.string()).optional(),
            social_links: z.nullable(z.array(SocialLink$.inboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.hired_at === undefined ? null : { hiredAt: v.hired_at }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.phone_number === undefined ? null : { phoneNumber: v.phone_number }),
                ...(v.social_links === undefined ? null : { socialLinks: v.social_links }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        company?: string | null | undefined;
        country?: string | null | undefined;
        email?: string | null | undefined;
        first_name?: string | null | undefined;
        hired_at?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        phone_number?: string | null | undefined;
        social_links?: Array<SocialLink$.Outbound> | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsCreateApplicationRequestDtoCandidate
    > = z
        .object({
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            firstName: z.nullable(z.string()).optional(),
            hiredAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            phoneNumber: z.nullable(z.string()).optional(),
            socialLinks: z.nullable(z.array(SocialLink$.outboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.hiredAt === undefined ? null : { hired_at: v.hiredAt }),
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.phoneNumber === undefined ? null : { phone_number: v.phoneNumber }),
                ...(v.socialLinks === undefined ? null : { social_links: v.socialLinks }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace AtsCreateApplicationRequestDto$ {
    export const inboundSchema: z.ZodType<AtsCreateApplicationRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            application_status: z
                .nullable(
                    z.lazy(() => AtsCreateApplicationRequestDtoApplicationStatus$.inboundSchema)
                )
                .optional(),
            candidate: z
                .nullable(z.lazy(() => AtsCreateApplicationRequestDtoCandidate$.inboundSchema))
                .optional(),
            candidate_id: z.nullable(z.string()).optional(),
            job_id: z.nullable(z.string()).optional(),
            location_id: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            questionnaires: z.nullable(z.array(Questionnaire$.inboundSchema)).optional(),
            source: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.application_status === undefined
                    ? null
                    : { applicationStatus: v.application_status }),
                ...(v.candidate === undefined ? null : { candidate: v.candidate }),
                ...(v.candidate_id === undefined ? null : { candidateId: v.candidate_id }),
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.location_id === undefined ? null : { locationId: v.location_id }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.questionnaires === undefined ? null : { questionnaires: v.questionnaires }),
                ...(v.source === undefined ? null : { source: v.source }),
            };
        });

    export type Outbound = {
        application_status?:
            | AtsCreateApplicationRequestDtoApplicationStatus$.Outbound
            | null
            | undefined;
        candidate?: AtsCreateApplicationRequestDtoCandidate$.Outbound | null | undefined;
        candidate_id?: string | null | undefined;
        job_id?: string | null | undefined;
        location_id?: string | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        questionnaires?: Array<Questionnaire$.Outbound> | null | undefined;
        source?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateApplicationRequestDto> =
        z
            .object({
                applicationStatus: z
                    .nullable(
                        z.lazy(
                            () => AtsCreateApplicationRequestDtoApplicationStatus$.outboundSchema
                        )
                    )
                    .optional(),
                candidate: z
                    .nullable(z.lazy(() => AtsCreateApplicationRequestDtoCandidate$.outboundSchema))
                    .optional(),
                candidateId: z.nullable(z.string()).optional(),
                jobId: z.nullable(z.string()).optional(),
                locationId: z.nullable(z.string()).optional(),
                passthrough: z.nullable(z.record(z.any())).optional(),
                questionnaires: z.nullable(z.array(Questionnaire$.outboundSchema)).optional(),
                source: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.applicationStatus === undefined
                        ? null
                        : { application_status: v.applicationStatus }),
                    ...(v.candidate === undefined ? null : { candidate: v.candidate }),
                    ...(v.candidateId === undefined ? null : { candidate_id: v.candidateId }),
                    ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                    ...(v.locationId === undefined ? null : { location_id: v.locationId }),
                    ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                    ...(v.questionnaires === undefined
                        ? null
                        : { questionnaires: v.questionnaires }),
                    ...(v.source === undefined ? null : { source: v.source }),
                };
            });
}
