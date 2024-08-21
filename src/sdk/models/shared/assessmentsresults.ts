/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type AssessmentsResults4 = {};

/**
 * The source value of the content type.
 */
export type AssessmentsResultsSourceValue =
    | AssessmentsResults4
    | string
    | number
    | boolean
    | Array<any>;

/**
 * The content type of the attachment.
 */
export enum AssessmentsResultsValue {
    Text = "text",
    UnmappedValue = "unmapped_value",
}
/**
 * The content type of the attachment.
 */
export type AssessmentsResultsValueOpen = OpenEnum<typeof AssessmentsResultsValue>;

export type AssessmentsResultsContentType = {
    /**
     * The source value of the content type.
     */
    sourceValue?: AssessmentsResults4 | string | number | boolean | Array<any> | null | undefined;
    /**
     * The content type of the attachment.
     */
    value?: AssessmentsResultsValueOpen | null | undefined;
};

export type Attachments = {
    contentType?: AssessmentsResultsContentType | null | undefined;
    /**
     * The URL of the attachment.
     */
    url?: string | null | undefined;
};

export type AssessmentsResultsCandidate = {
    /**
     * Candidates Assessments result url
     */
    resultUrl?: string | null | undefined;
};

export type Score = {
    /**
     * The label of the score
     */
    label?: string | null | undefined;
    /**
     * The maximum value of the score
     */
    max?: string | null | undefined;
    /**
     * The minimum value of the score
     */
    min?: string | null | undefined;
    /**
     * The value is the actual score
     */
    value?: string | null | undefined;
};

/**
 * The status of the candidates assessment.
 */
export enum Status {
    InProgress = "in_progress",
    Pending = "pending",
    Completed = "completed",
    Rejected = "rejected",
    Expired = "expired",
}
/**
 * The status of the candidates assessment.
 */
export type StatusOpen = OpenEnum<typeof Status>;

export type AssessmentsResults = {
    /**
     * The start date of the candidate assessment
     */
    assessmentDate?: Date | null | undefined;
    /**
     * The id of the candidate assessment
     */
    assessmentId?: string | null | undefined;
    attachments?: Attachments | null | undefined;
    candidate?: AssessmentsResultsCandidate | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The final result to candidate whether pass or fail
     */
    result?: string | null | undefined;
    score?: Score | null | undefined;
    /**
     * The status of the candidates assessment.
     */
    status?: StatusOpen | null | undefined;
    /**
     * The submission date of the candidate assessment
     */
    submissionDate?: Date | null | undefined;
    /**
     * The summary about the result of the assessments
     */
    summary?: string | null | undefined;
};

/** @internal */
export const AssessmentsResults4$inboundSchema: z.ZodType<
    AssessmentsResults4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type AssessmentsResults4$Outbound = {};

/** @internal */
export const AssessmentsResults4$outboundSchema: z.ZodType<
    AssessmentsResults4$Outbound,
    z.ZodTypeDef,
    AssessmentsResults4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsResults4$ {
    /** @deprecated use `AssessmentsResults4$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResults4$inboundSchema;
    /** @deprecated use `AssessmentsResults4$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResults4$outboundSchema;
    /** @deprecated use `AssessmentsResults4$Outbound` instead. */
    export type Outbound = AssessmentsResults4$Outbound;
}

/** @internal */
export const AssessmentsResultsSourceValue$inboundSchema: z.ZodType<
    AssessmentsResultsSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => AssessmentsResults4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
]);

/** @internal */
export type AssessmentsResultsSourceValue$Outbound =
    | AssessmentsResults4$Outbound
    | string
    | number
    | boolean
    | Array<any>;

/** @internal */
export const AssessmentsResultsSourceValue$outboundSchema: z.ZodType<
    AssessmentsResultsSourceValue$Outbound,
    z.ZodTypeDef,
    AssessmentsResultsSourceValue
> = z.union([
    z.lazy(() => AssessmentsResults4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsResultsSourceValue$ {
    /** @deprecated use `AssessmentsResultsSourceValue$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResultsSourceValue$inboundSchema;
    /** @deprecated use `AssessmentsResultsSourceValue$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResultsSourceValue$outboundSchema;
    /** @deprecated use `AssessmentsResultsSourceValue$Outbound` instead. */
    export type Outbound = AssessmentsResultsSourceValue$Outbound;
}

/** @internal */
export const AssessmentsResultsValue$inboundSchema: z.ZodType<
    AssessmentsResultsValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(AssessmentsResultsValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const AssessmentsResultsValue$outboundSchema: z.ZodType<
    AssessmentsResultsValueOpen,
    z.ZodTypeDef,
    AssessmentsResultsValueOpen
> = z.union([
    z.nativeEnum(AssessmentsResultsValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsResultsValue$ {
    /** @deprecated use `AssessmentsResultsValue$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResultsValue$inboundSchema;
    /** @deprecated use `AssessmentsResultsValue$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResultsValue$outboundSchema;
}

/** @internal */
export const AssessmentsResultsContentType$inboundSchema: z.ZodType<
    AssessmentsResultsContentType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => AssessmentsResults4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                    z.array(z.any()),
                ])
            )
            .optional(),
        value: z.nullable(AssessmentsResultsValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type AssessmentsResultsContentType$Outbound = {
    source_value?:
        | AssessmentsResults4$Outbound
        | string
        | number
        | boolean
        | Array<any>
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const AssessmentsResultsContentType$outboundSchema: z.ZodType<
    AssessmentsResultsContentType$Outbound,
    z.ZodTypeDef,
    AssessmentsResultsContentType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => AssessmentsResults4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                    z.array(z.any()),
                ])
            )
            .optional(),
        value: z.nullable(AssessmentsResultsValue$outboundSchema).optional(),
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
export namespace AssessmentsResultsContentType$ {
    /** @deprecated use `AssessmentsResultsContentType$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResultsContentType$inboundSchema;
    /** @deprecated use `AssessmentsResultsContentType$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResultsContentType$outboundSchema;
    /** @deprecated use `AssessmentsResultsContentType$Outbound` instead. */
    export type Outbound = AssessmentsResultsContentType$Outbound;
}

/** @internal */
export const Attachments$inboundSchema: z.ZodType<Attachments, z.ZodTypeDef, unknown> = z
    .object({
        content_type: z
            .nullable(z.lazy(() => AssessmentsResultsContentType$inboundSchema))
            .optional(),
        url: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            content_type: "contentType",
        });
    });

/** @internal */
export type Attachments$Outbound = {
    content_type?: AssessmentsResultsContentType$Outbound | null | undefined;
    url?: string | null | undefined;
};

/** @internal */
export const Attachments$outboundSchema: z.ZodType<
    Attachments$Outbound,
    z.ZodTypeDef,
    Attachments
> = z
    .object({
        contentType: z
            .nullable(z.lazy(() => AssessmentsResultsContentType$outboundSchema))
            .optional(),
        url: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "content_type",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attachments$ {
    /** @deprecated use `Attachments$inboundSchema` instead. */
    export const inboundSchema = Attachments$inboundSchema;
    /** @deprecated use `Attachments$outboundSchema` instead. */
    export const outboundSchema = Attachments$outboundSchema;
    /** @deprecated use `Attachments$Outbound` instead. */
    export type Outbound = Attachments$Outbound;
}

/** @internal */
export const AssessmentsResultsCandidate$inboundSchema: z.ZodType<
    AssessmentsResultsCandidate,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        result_url: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            result_url: "resultUrl",
        });
    });

/** @internal */
export type AssessmentsResultsCandidate$Outbound = {
    result_url?: string | null | undefined;
};

/** @internal */
export const AssessmentsResultsCandidate$outboundSchema: z.ZodType<
    AssessmentsResultsCandidate$Outbound,
    z.ZodTypeDef,
    AssessmentsResultsCandidate
> = z
    .object({
        resultUrl: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            resultUrl: "result_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsResultsCandidate$ {
    /** @deprecated use `AssessmentsResultsCandidate$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResultsCandidate$inboundSchema;
    /** @deprecated use `AssessmentsResultsCandidate$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResultsCandidate$outboundSchema;
    /** @deprecated use `AssessmentsResultsCandidate$Outbound` instead. */
    export type Outbound = AssessmentsResultsCandidate$Outbound;
}

/** @internal */
export const Score$inboundSchema: z.ZodType<Score, z.ZodTypeDef, unknown> = z.object({
    label: z.nullable(z.string()).optional(),
    max: z.nullable(z.string()).optional(),
    min: z.nullable(z.string()).optional(),
    value: z.nullable(z.string()).optional(),
});

/** @internal */
export type Score$Outbound = {
    label?: string | null | undefined;
    max?: string | null | undefined;
    min?: string | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const Score$outboundSchema: z.ZodType<Score$Outbound, z.ZodTypeDef, Score> = z.object({
    label: z.nullable(z.string()).optional(),
    max: z.nullable(z.string()).optional(),
    min: z.nullable(z.string()).optional(),
    value: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Score$ {
    /** @deprecated use `Score$inboundSchema` instead. */
    export const inboundSchema = Score$inboundSchema;
    /** @deprecated use `Score$outboundSchema` instead. */
    export const outboundSchema = Score$outboundSchema;
    /** @deprecated use `Score$Outbound` instead. */
    export type Outbound = Score$Outbound;
}

/** @internal */
export const Status$inboundSchema: z.ZodType<StatusOpen, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(Status),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const Status$outboundSchema: z.ZodType<StatusOpen, z.ZodTypeDef, StatusOpen> = z.union([
    z.nativeEnum(Status),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    export const inboundSchema = Status$inboundSchema;
    /** @deprecated use `Status$outboundSchema` instead. */
    export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const AssessmentsResults$inboundSchema: z.ZodType<
    AssessmentsResults,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        assessment_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        assessment_id: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.lazy(() => Attachments$inboundSchema)).optional(),
        candidate: z.nullable(z.lazy(() => AssessmentsResultsCandidate$inboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        result: z.nullable(z.string()).optional(),
        score: z.nullable(z.lazy(() => Score$inboundSchema)).optional(),
        status: z.nullable(Status$inboundSchema).optional(),
        submission_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        summary: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            assessment_date: "assessmentDate",
            assessment_id: "assessmentId",
            remote_id: "remoteId",
            submission_date: "submissionDate",
        });
    });

/** @internal */
export type AssessmentsResults$Outbound = {
    assessment_date?: string | null | undefined;
    assessment_id?: string | null | undefined;
    attachments?: Attachments$Outbound | null | undefined;
    candidate?: AssessmentsResultsCandidate$Outbound | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    result?: string | null | undefined;
    score?: Score$Outbound | null | undefined;
    status?: string | null | undefined;
    submission_date?: string | null | undefined;
    summary?: string | null | undefined;
};

/** @internal */
export const AssessmentsResults$outboundSchema: z.ZodType<
    AssessmentsResults$Outbound,
    z.ZodTypeDef,
    AssessmentsResults
> = z
    .object({
        assessmentDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        assessmentId: z.nullable(z.string()).optional(),
        attachments: z.nullable(z.lazy(() => Attachments$outboundSchema)).optional(),
        candidate: z.nullable(z.lazy(() => AssessmentsResultsCandidate$outboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        result: z.nullable(z.string()).optional(),
        score: z.nullable(z.lazy(() => Score$outboundSchema)).optional(),
        status: z.nullable(Status$outboundSchema).optional(),
        submissionDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        summary: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            assessmentDate: "assessment_date",
            assessmentId: "assessment_id",
            remoteId: "remote_id",
            submissionDate: "submission_date",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsResults$ {
    /** @deprecated use `AssessmentsResults$inboundSchema` instead. */
    export const inboundSchema = AssessmentsResults$inboundSchema;
    /** @deprecated use `AssessmentsResults$outboundSchema` instead. */
    export const outboundSchema = AssessmentsResults$outboundSchema;
    /** @deprecated use `AssessmentsResults$Outbound` instead. */
    export type Outbound = AssessmentsResults$Outbound;
}
