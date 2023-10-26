/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmployeeCustomFields } from "./employeecustomfields";
import { Employment } from "./employment";
import { HRISLocation } from "./hrislocation";
import { Expose, Type } from "class-transformer";

/**
 * The employee avatar
 */
export class EmployeeAvatar extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "base64" })
    base64?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

export enum EmployeeEmploymentContractTypeValue {
    FullTime = "full_time",
    Shifts = "shifts",
    PartTime = "part_time",
    UnmappedValue = "unmapped_value",
}

/**
 * The employment work schedule type (e.g., full-time, part-time)
 */
export class EmployeeEmploymentContractType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeEmploymentContractTypeValue;
}

export enum EmployeeEmploymentStatusValue {
    Active = "active",
    Pending = "pending",
    Terminated = "terminated",
    Leave = "leave",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee employment status
 */
export class EmployeeEmploymentStatus extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeEmploymentStatusValue;
}

export enum EmployeeEmploymentTypeValue {
    FullTime = "full_time",
    PartTime = "part_time",
    Contractor = "contractor",
    Intern = "intern",
    Permanent = "permanent",
    Apprentice = "apprentice",
    Freelance = "freelance",
    Terminated = "terminated",
    Temporary = "temporary",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    Probation = "probation",
    Internal = "internal",
    External = "external",
    EmployerOfRecord = "employer_of_record",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee employment type
 */
export class EmployeeEmploymentType extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeEmploymentTypeValue;
}

export enum EmployeeEthnicityValue {
    White = "white",
    BlackOrAfricanAmerican = "black_or_african_american",
    Asian = "asian",
    HispanicOrLatino = "hispanic_or_latino",
    AmericanIndianOrAlaskaNative = "american_indian_or_alaska_native",
    NativeHawaiianOrPacificIslander = "native_hawaiian_or_pacific_islander",
    TwoOrMoreRaces = "two_or_more_races",
    NotDisclosed = "not_disclosed",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee ethnicity
 */
export class EmployeeEthnicity extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeEthnicityValue;
}

export enum EmployeeGenderValue {
    Male = "male",
    Female = "female",
    NonBinary = "non_binary",
    Other = "other",
    NotDisclosed = "not_disclosed",
    Diverse = "diverse",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee gender
 */
export class EmployeeGender extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeGenderValue;
}

export enum EmployeeMaritalStatusValue {
    Single = "single",
    Married = "married",
    CommonLaw = "common_law",
    Divorced = "divorced",
    Widowed = "widowed",
    DomesticPartnership = "domestic_partnership",
    Separated = "separated",
    Other = "other",
    NotDisclosed = "not_disclosed",
    UnmappedValue = "unmapped_value",
}

/**
 * The employee marital status
 */
export class EmployeeMaritalStatus extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmployeeMaritalStatusValue;
}

export class Employee extends SpeakeasyBase {
    /**
     * The employee avatar
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar" })
    @Type(() => EmployeeAvatar)
    avatar?: EmployeeAvatar;

    /**
     * The employee avatar Url
     */
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_url" })
    avatarUrl?: string;

    /**
     * The employee birthday
     */
    @SpeakeasyMetadata()
    @Expose({ name: "birthday" })
    birthday?: string;

    /**
     * The employee company name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company_name" })
    companyName?: string;

    /**
     * The created_at date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    /**
     * The employee custom fields
     */
    @SpeakeasyMetadata({ elemType: EmployeeCustomFields })
    @Expose({ name: "custom_fields" })
    @Type(() => EmployeeCustomFields)
    customFields?: EmployeeCustomFields[];

    /**
     * The employee date_of_birth
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date_of_birth" })
    dateOfBirth?: string;

    /**
     * The employee department
     */
    @SpeakeasyMetadata()
    @Expose({ name: "department" })
    department?: string;

    /**
     * The employee display name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "display_name" })
    displayName?: string;

    /**
     * The employment work schedule type (e.g., full-time, part-time)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_contract_type" })
    @Type(() => EmployeeEmploymentContractType)
    employmentContractType?: EmployeeEmploymentContractType;

    /**
     * The employee employment status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_status" })
    @Type(() => EmployeeEmploymentStatus)
    employmentStatus?: EmployeeEmploymentStatus;

    /**
     * The employee employment type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "employment_type" })
    @Type(() => EmployeeEmploymentType)
    employmentType?: EmployeeEmploymentType;

    /**
     * The employee employments
     */
    @SpeakeasyMetadata({ elemType: Employment })
    @Expose({ name: "employments" })
    @Type(() => Employment)
    employments?: Employment[];

    /**
     * The employee ethnicity
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ethnicity" })
    @Type(() => EmployeeEthnicity)
    ethnicity?: EmployeeEthnicity;

    /**
     * The employee first name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The employee gender
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gender" })
    @Type(() => EmployeeGender)
    gender?: EmployeeGender;

    /**
     * The employee hire date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hire_date" })
    hireDate?: string;

    /**
     * The employee home location
     */
    @SpeakeasyMetadata()
    @Expose({ name: "home_location" })
    @Type(() => HRISLocation)
    homeLocation?: HRISLocation;

    /**
     * The employee ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The employee job title
     */
    @SpeakeasyMetadata()
    @Expose({ name: "job_title" })
    jobTitle?: string;

    /**
     * The employee last name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    /**
     * The employee manager ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manager_id" })
    managerId?: string;

    /**
     * The employee marital status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "marital_status" })
    @Type(() => EmployeeMaritalStatus)
    maritalStatus?: EmployeeMaritalStatus;

    /**
     * The employee name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The employee personal email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "personal_email" })
    personalEmail?: string;

    /**
     * The employee personal phone number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "personal_phone_number" })
    personalPhoneNumber?: string;

    /**
     * The employee start date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_date" })
    startDate?: string;

    /**
     * The employee tenure
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tenure" })
    tenure?: string;

    /**
     * The employee termination date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "termination_date" })
    terminationDate?: string;

    /**
     * The updated_at date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;

    /**
     * The employee work anniversary
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_anniversary" })
    workAnniversary?: string;

    /**
     * The employee work email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_email" })
    workEmail?: string;

    /**
     * The employee work location
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_location" })
    @Type(() => HRISLocation)
    workLocation?: HRISLocation;

    /**
     * The employee work phone number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "work_phone_number" })
    workPhoneNumber?: string;
}
