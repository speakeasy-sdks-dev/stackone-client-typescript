/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Department, Department$ } from "./department";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type DepartmentsPaginated = {
    data: Array<Department>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace DepartmentsPaginated$ {
    export const inboundSchema: z.ZodType<DepartmentsPaginated, z.ZodTypeDef, unknown> = z
        .object({
            data: z.array(Department$.inboundSchema),
            next: z.nullable(z.string()).optional(),
            next_page: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.next_page === undefined ? null : { nextPage: v.next_page }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Array<Department$.Outbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DepartmentsPaginated> = z
        .object({
            data: z.array(Department$.outboundSchema),
            next: z.nullable(z.string()).optional(),
            nextPage: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.nextPage === undefined ? null : { next_page: v.nextPage }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
