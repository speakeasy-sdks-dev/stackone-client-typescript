/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class HiringTeam extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    role?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: string;
}
