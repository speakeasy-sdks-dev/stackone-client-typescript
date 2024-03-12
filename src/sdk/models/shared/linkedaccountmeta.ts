/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum LinkedAccountMetaCategory {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Iam = "iam",
    Marketing = "marketing",
    Stackone = "stackone",
}

export type LinkedAccountMeta = {
    category: LinkedAccountMetaCategory;
    models: Record<string, any>;
    provider: string;
};

/** @internal */
export const LinkedAccountMetaCategory$ = z.nativeEnum(LinkedAccountMetaCategory);

/** @internal */
export namespace LinkedAccountMeta$ {
    export type Inbound = {
        category: LinkedAccountMetaCategory;
        models: Record<string, any>;
        provider: string;
    };

    export const inboundSchema: z.ZodType<LinkedAccountMeta, z.ZodTypeDef, Inbound> = z
        .object({
            category: LinkedAccountMetaCategory$,
            models: z.record(z.any()),
            provider: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                models: v.models,
                provider: v.provider,
            };
        });

    export type Outbound = {
        category: LinkedAccountMetaCategory;
        models: Record<string, any>;
        provider: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedAccountMeta> = z
        .object({
            category: LinkedAccountMetaCategory$,
            models: z.record(z.any()),
            provider: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                models: v.models,
                provider: v.provider,
            };
        });
}
