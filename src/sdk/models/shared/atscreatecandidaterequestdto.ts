/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CandidateEmail } from "./candidateemail";
import { Expose, Type } from "class-transformer";

export class AtsCreateCandidateRequestDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_ids" })
    applicationIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata({ elemType: CandidateEmail })
    @Expose({ name: "emails" })
    @Type(() => CandidateEmail)
    emails: CandidateEmail[];

    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;
}
