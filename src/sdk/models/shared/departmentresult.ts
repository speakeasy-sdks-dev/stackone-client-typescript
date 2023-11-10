/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Department } from "./department";
import { Expose, Type } from "class-transformer";

export class DepartmentResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Department)
    data: Department;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}
