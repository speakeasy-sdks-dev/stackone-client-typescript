/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class Credentials extends SpeakeasyBase {}

export class LinkedAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "credentials" })
    @Type(() => Credentials)
    credentials?: Credentials;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origin_owner_id" })
    originOwnerId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origin_owner_name" })
    originOwnerName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origin_username" })
    originUsername: string;

    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt: Date;
}
