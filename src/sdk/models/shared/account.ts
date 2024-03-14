/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountAddress, AccountAddress$ } from "./accountaddress";
import * as z from "zod";

export type Account = {
    addresses?: Array<AccountAddress> | null | undefined;
    annualRevenue?: string | null | undefined;
    /**
     * Timestamp when the account was created
     */
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    id: string;
    /**
     * Values of the industries
     */
    industries?: Array<string> | null | undefined;
    name?: string | null | undefined;
    ownerId?: string | null | undefined;
    /**
     * List of account phone numbers
     */
    phoneNumbers?: Array<string> | null | undefined;
    /**
     * Timestamp when the account was last updated
     */
    updatedAt?: Date | null | undefined;
    website?: string | null | undefined;
};

/** @internal */
export namespace Account$ {
    export type Inbound = {
        addresses?: Array<AccountAddress$.Inbound> | null | undefined;
        annual_revenue?: string | null | undefined;
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id: string;
        industries?: Array<string> | null | undefined;
        name?: string | null | undefined;
        owner_id?: string | null | undefined;
        phone_numbers?: Array<string> | null | undefined;
        updated_at?: string | null | undefined;
        website?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Account, z.ZodTypeDef, Inbound> = z
        .object({
            addresses: z.nullable(z.array(AccountAddress$.inboundSchema)).optional(),
            annual_revenue: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            industries: z.nullable(z.array(z.string())).optional(),
            name: z.nullable(z.string()).optional(),
            owner_id: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(z.string())).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            website: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.annual_revenue === undefined ? null : { annualRevenue: v.annual_revenue }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.industries === undefined ? null : { industries: v.industries }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.owner_id === undefined ? null : { ownerId: v.owner_id }),
                ...(v.phone_numbers === undefined ? null : { phoneNumbers: v.phone_numbers }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
                ...(v.website === undefined ? null : { website: v.website }),
            };
        });

    export type Outbound = {
        addresses?: Array<AccountAddress$.Outbound> | null | undefined;
        annual_revenue?: string | null | undefined;
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id: string;
        industries?: Array<string> | null | undefined;
        name?: string | null | undefined;
        owner_id?: string | null | undefined;
        phone_numbers?: Array<string> | null | undefined;
        updated_at?: string | null | undefined;
        website?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Account> = z
        .object({
            addresses: z.nullable(z.array(AccountAddress$.outboundSchema)).optional(),
            annualRevenue: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            industries: z.nullable(z.array(z.string())).optional(),
            name: z.nullable(z.string()).optional(),
            ownerId: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(z.string())).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            website: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.addresses === undefined ? null : { addresses: v.addresses }),
                ...(v.annualRevenue === undefined ? null : { annual_revenue: v.annualRevenue }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.industries === undefined ? null : { industries: v.industries }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.ownerId === undefined ? null : { owner_id: v.ownerId }),
                ...(v.phoneNumbers === undefined ? null : { phone_numbers: v.phoneNumbers }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
                ...(v.website === undefined ? null : { website: v.website }),
            };
        });
}
