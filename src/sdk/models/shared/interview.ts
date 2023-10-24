/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Interviewer } from "./interviewer";
import { InterviewPart } from "./interviewpart";
import { InterviewStage } from "./interviewstage";
import { InterviewStatusEnum } from "./interviewstatusenum";
import { Expose, Transform, Type } from "class-transformer";

export class Interview extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "application_id" })
    applicationId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "end_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata({ elemType: InterviewPart })
    @Expose({ name: "interview_parts" })
    @Type(() => InterviewPart)
    interviewParts?: InterviewPart[];

    @SpeakeasyMetadata({ elemType: InterviewStage })
    @Expose({ name: "interview_stage" })
    @Type(() => InterviewStage)
    interviewStage?: InterviewStage[];

    @SpeakeasyMetadata()
    @Expose({ name: "interview_stage_id" })
    interviewStageId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "interview_status" })
    @Type(() => InterviewStatusEnum)
    interviewStatus: InterviewStatusEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "interviewer_ids" })
    interviewerIds: string[];

    @SpeakeasyMetadata({ elemType: Interviewer })
    @Expose({ name: "interviewers" })
    @Type(() => Interviewer)
    interviewers?: Interviewer[];

    @SpeakeasyMetadata()
    @Expose({ name: "meeting_url" })
    meetingUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "start_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
