/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type AtsCreateCandidateNoteRequest = {
    atsCreateNotesRequestDto: shared.AtsCreateNotesRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsCreateCandidateNoteResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record created successfully.
     */
    createCandidateNoteResult?: shared.CreateCandidateNoteResult | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace AtsCreateCandidateNoteRequest$ {
    export type Inbound = {
        AtsCreateNotesRequestDto: shared.AtsCreateNotesRequestDto$.Inbound;
        id: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsCreateCandidateNoteRequest, z.ZodTypeDef, Inbound> = z
        .object({
            AtsCreateNotesRequestDto: shared.AtsCreateNotesRequestDto$.inboundSchema,
            id: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                atsCreateNotesRequestDto: v.AtsCreateNotesRequestDto,
                id: v.id,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        AtsCreateNotesRequestDto: shared.AtsCreateNotesRequestDto$.Outbound;
        id: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateNoteRequest> =
        z
            .object({
                atsCreateNotesRequestDto: shared.AtsCreateNotesRequestDto$.outboundSchema,
                id: z.string(),
                xAccountId: z.string(),
            })
            .transform((v) => {
                return {
                    AtsCreateNotesRequestDto: v.atsCreateNotesRequestDto,
                    id: v.id,
                    "x-account-id": v.xAccountId,
                };
            });
}

/** @internal */
export namespace AtsCreateCandidateNoteResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateCandidateNoteResult?: shared.CreateCandidateNoteResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AtsCreateCandidateNoteResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateCandidateNoteResult: shared.CreateCandidateNoteResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateCandidateNoteResult === undefined
                    ? null
                    : { createCandidateNoteResult: v.CreateCandidateNoteResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateCandidateNoteResult?: shared.CreateCandidateNoteResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateNoteResponse> =
        z
            .object({
                contentType: z.string(),
                createCandidateNoteResult:
                    shared.CreateCandidateNoteResult$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.createCandidateNoteResult === undefined
                        ? null
                        : { CreateCandidateNoteResult: v.createCandidateNoteResult }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
