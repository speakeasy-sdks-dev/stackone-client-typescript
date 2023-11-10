/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationAttachment } from "./applicationattachment";
import { ApplicationCandidate } from "./applicationcandidate";
import { ApplicationStatusEnum } from "./applicationstatusenum";
import { Questionnaire } from "./questionnaire";
import { Expose, Type } from "class-transformer";

export class AtsCreateApplicationRequestDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_status" })
    @Type(() => ApplicationStatusEnum)
    applicationStatus: ApplicationStatusEnum;

    @SpeakeasyMetadata({ elemType: ApplicationAttachment })
    @Expose({ name: "attachments" })
    @Type(() => ApplicationAttachment)
    attachments?: ApplicationAttachment[];

    @SpeakeasyMetadata()
    @Expose({ name: "candidate" })
    @Type(() => ApplicationCandidate)
    candidate: ApplicationCandidate;

    @SpeakeasyMetadata()
    @Expose({ name: "candidate_id" })
    candidateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "job_id" })
    jobId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "location_ids" })
    locationIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "questionnaire" })
    @Type(() => Questionnaire)
    questionnaire: Questionnaire;
}
