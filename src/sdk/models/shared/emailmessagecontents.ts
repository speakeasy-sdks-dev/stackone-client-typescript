/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EmailMessageContents extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body: string;

    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from: string;

    @SpeakeasyMetadata()
    @Expose({ name: "preheader" })
    preheader?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reply-to" })
    replyTo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject: string;
}
