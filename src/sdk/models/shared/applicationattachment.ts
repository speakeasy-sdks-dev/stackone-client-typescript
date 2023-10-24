/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttachmentType } from "./attachmenttype";
import { Expose, Type } from "class-transformer";

export class ApplicationAttachment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "file_name" })
    fileName?: string;

    @SpeakeasyMetadata({ elemType: AttachmentType })
    @Expose({ name: "type" })
    @Type(() => AttachmentType)
    type?: AttachmentType[];

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
