/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AccountAddressSchemas4 = {};

/**
 * The source value of the ISO 3166-1 alpha-2 code of the country.
 */
export type AccountAddressSchemasSourceValue = AccountAddressSchemas4 | string | number | boolean;

/**
 * The ISO 3166-1 alpha-2 code of the country.
 */
export enum AccountAddressSchemasValue {
    Af = "AF",
    Al = "AL",
    Dz = "DZ",
    As = "AS",
    Ad = "AD",
    Ao = "AO",
    Ai = "AI",
    Aq = "AQ",
    Ag = "AG",
    Ar = "AR",
    Am = "AM",
    Aw = "AW",
    Au = "AU",
    At = "AT",
    Az = "AZ",
    Bs = "BS",
    Bh = "BH",
    Bd = "BD",
    Bb = "BB",
    By = "BY",
    Be = "BE",
    Bz = "BZ",
    Bj = "BJ",
    Bm = "BM",
    Bt = "BT",
    Bo = "BO",
    Bq = "BQ",
    Ba = "BA",
    Bw = "BW",
    Bv = "BV",
    Br = "BR",
    Io = "IO",
    Bn = "BN",
    Bg = "BG",
    Bf = "BF",
    Bi = "BI",
    Kh = "KH",
    Cm = "CM",
    Ca = "CA",
    Cv = "CV",
    Ky = "KY",
    Cf = "CF",
    Td = "TD",
    Cl = "CL",
    Cn = "CN",
    Cx = "CX",
    Cc = "CC",
    Co = "CO",
    Km = "KM",
    Cg = "CG",
    Cd = "CD",
    Ck = "CK",
    Cr = "CR",
    Hr = "HR",
    Cu = "CU",
    Cw = "CW",
    Cy = "CY",
    Cz = "CZ",
    Ci = "CI",
    Dk = "DK",
    Dj = "DJ",
    Dm = "DM",
    Do = "DO",
    Ec = "EC",
    Eg = "EG",
    Sv = "SV",
    Gq = "GQ",
    Er = "ER",
    Ee = "EE",
    Et = "ET",
    Fk = "FK",
    Fo = "FO",
    Fj = "FJ",
    Fi = "FI",
    Fr = "FR",
    Gf = "GF",
    Pf = "PF",
    Tf = "TF",
    Ga = "GA",
    Gm = "GM",
    Ge = "GE",
    De = "DE",
    Gh = "GH",
    Gi = "GI",
    Gr = "GR",
    Gl = "GL",
    Gd = "GD",
    Gp = "GP",
    Gu = "GU",
    Gt = "GT",
    Gg = "GG",
    Gn = "GN",
    Gw = "GW",
    Gy = "GY",
    Ht = "HT",
    Hm = "HM",
    Va = "VA",
    Hn = "HN",
    Hk = "HK",
    Hu = "HU",
    Is = "IS",
    In = "IN",
    Id = "ID",
    Ir = "IR",
    Iq = "IQ",
    Ie = "IE",
    Im = "IM",
    Il = "IL",
    It = "IT",
    Jm = "JM",
    Jp = "JP",
    Je = "JE",
    Jo = "JO",
    Kz = "KZ",
    Ke = "KE",
    Ki = "KI",
    Kp = "KP",
    Kr = "KR",
    Kw = "KW",
    Kg = "KG",
    La = "LA",
    Lv = "LV",
    Lb = "LB",
    Ls = "LS",
    Lr = "LR",
    Ly = "LY",
    Li = "LI",
    Lt = "LT",
    Lu = "LU",
    Mo = "MO",
    Mk = "MK",
    Mg = "MG",
    Mw = "MW",
    My = "MY",
    Mv = "MV",
    Ml = "ML",
    Mt = "MT",
    Mh = "MH",
    Mq = "MQ",
    Mr = "MR",
    Mu = "MU",
    Yt = "YT",
    Mx = "MX",
    Fm = "FM",
    Md = "MD",
    Mc = "MC",
    Mn = "MN",
    Me = "ME",
    Ms = "MS",
    Ma = "MA",
    Mz = "MZ",
    Mm = "MM",
    Na = "NA",
    Nr = "NR",
    Np = "NP",
    Nl = "NL",
    Nc = "NC",
    Nz = "NZ",
    Ni = "NI",
    Ne = "NE",
    Ng = "NG",
    Nu = "NU",
    Nf = "NF",
    Mp = "MP",
    No = "NO",
    Om = "OM",
    Pk = "PK",
    Pw = "PW",
    Ps = "PS",
    Pa = "PA",
    Pg = "PG",
    Py = "PY",
    Pe = "PE",
    Ph = "PH",
    Pn = "PN",
    Pl = "PL",
    Pt = "PT",
    Pr = "PR",
    Qa = "QA",
    Ro = "RO",
    Ru = "RU",
    Rw = "RW",
    Re = "RE",
    Bl = "BL",
    Sh = "SH",
    Kn = "KN",
    Lc = "LC",
    Mf = "MF",
    Pm = "PM",
    Vc = "VC",
    Ws = "WS",
    Sm = "SM",
    St = "ST",
    Sa = "SA",
    Sn = "SN",
    Rs = "RS",
    Sc = "SC",
    Sl = "SL",
    Sg = "SG",
    Sx = "SX",
    Sk = "SK",
    Si = "SI",
    Sb = "SB",
    So = "SO",
    Za = "ZA",
    Gs = "GS",
    Ss = "SS",
    Es = "ES",
    Lk = "LK",
    Sd = "SD",
    Sr = "SR",
    Sj = "SJ",
    Sz = "SZ",
    Se = "SE",
    Ch = "CH",
    Sy = "SY",
    Tw = "TW",
    Tj = "TJ",
    Tz = "TZ",
    Th = "TH",
    Tl = "TL",
    Tg = "TG",
    Tk = "TK",
    To = "TO",
    Tt = "TT",
    Tn = "TN",
    Tr = "TR",
    Tm = "TM",
    Tc = "TC",
    Tv = "TV",
    Ug = "UG",
    Ua = "UA",
    Ae = "AE",
    Gb = "GB",
    Us = "US",
    Um = "UM",
    Uy = "UY",
    Uz = "UZ",
    Vu = "VU",
    Ve = "VE",
    Vn = "VN",
    Vg = "VG",
    Vi = "VI",
    Wf = "WF",
    Eh = "EH",
    Ye = "YE",
    Zm = "ZM",
    Zw = "ZW",
}

/**
 * The country code
 */
export type Country = {
    /**
     * The source value of the ISO 3166-1 alpha-2 code of the country.
     */
    sourceValue?: AccountAddressSchemas4 | string | number | boolean | null | undefined;
    /**
     * The ISO 3166-1 alpha-2 code of the country.
     */
    value?: AccountAddressSchemasValue | null | undefined;
};

export type AccountAddress4 = {};

/**
 * The source value of the location type.
 */
export type AccountAddressSourceValue = AccountAddress4 | string | number | boolean;

/**
 * The type of the location.
 */
export enum AccountAddressValue {
    Home = "home",
    Work = "work",
    UnmappedValue = "unmapped_value",
}

/**
 * The location type
 */
export type LocationType = {
    /**
     * The source value of the location type.
     */
    sourceValue?: AccountAddress4 | string | number | boolean | null | undefined;
    /**
     * The type of the location.
     */
    value?: AccountAddressValue | null | undefined;
};

export type AccountAddress = {
    city?: string | null | undefined;
    /**
     * The country code
     */
    country?: Country | null | undefined;
    /**
     * The location type
     */
    locationType?: LocationType | null | undefined;
    state?: string | null | undefined;
    street1?: string | null | undefined;
    street2?: string | null | undefined;
    zipCode?: string | null | undefined;
};

/** @internal */
export namespace AccountAddressSchemas4$ {
    export const inboundSchema: z.ZodType<AccountAddressSchemas4, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressSchemas4> =
        z.object({});
}

/** @internal */
export namespace AccountAddressSchemasSourceValue$ {
    export const inboundSchema: z.ZodType<AccountAddressSchemasSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => AccountAddressSchemas4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = AccountAddressSchemas4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AccountAddressSchemasSourceValue
    > = z.union([
        z.lazy(() => AccountAddressSchemas4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace AccountAddressSchemasValue$ {
    export const inboundSchema = z.nativeEnum(AccountAddressSchemasValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Country$ {
    export const inboundSchema: z.ZodType<Country, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AccountAddressSchemas4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AccountAddressSchemasValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AccountAddressSchemas4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Country> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AccountAddressSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AccountAddressSchemasValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AccountAddress4$ {
    export const inboundSchema: z.ZodType<AccountAddress4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddress4> = z.object({});
}

/** @internal */
export namespace AccountAddressSourceValue$ {
    export const inboundSchema: z.ZodType<AccountAddressSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => AccountAddress4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = AccountAddress4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddressSourceValue> =
        z.union([
            z.lazy(() => AccountAddress4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace AccountAddressValue$ {
    export const inboundSchema = z.nativeEnum(AccountAddressValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace LocationType$ {
    export const inboundSchema: z.ZodType<LocationType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AccountAddress4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AccountAddressValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: AccountAddress4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LocationType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AccountAddress4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AccountAddressValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AccountAddress$ {
    export const inboundSchema: z.ZodType<AccountAddress, z.ZodTypeDef, unknown> = z
        .object({
            city: z.nullable(z.string()).optional(),
            country: z.nullable(z.lazy(() => Country$.inboundSchema)).optional(),
            location_type: z.nullable(z.lazy(() => LocationType$.inboundSchema)).optional(),
            state: z.nullable(z.string()).optional(),
            street_1: z.nullable(z.string()).optional(),
            street_2: z.nullable(z.string()).optional(),
            zip_code: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.location_type === undefined ? null : { locationType: v.location_type }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.street_1 === undefined ? null : { street1: v.street_1 }),
                ...(v.street_2 === undefined ? null : { street2: v.street_2 }),
                ...(v.zip_code === undefined ? null : { zipCode: v.zip_code }),
            };
        });

    export type Outbound = {
        city?: string | null | undefined;
        country?: Country$.Outbound | null | undefined;
        location_type?: LocationType$.Outbound | null | undefined;
        state?: string | null | undefined;
        street_1?: string | null | undefined;
        street_2?: string | null | undefined;
        zip_code?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountAddress> = z
        .object({
            city: z.nullable(z.string()).optional(),
            country: z.nullable(z.lazy(() => Country$.outboundSchema)).optional(),
            locationType: z.nullable(z.lazy(() => LocationType$.outboundSchema)).optional(),
            state: z.nullable(z.string()).optional(),
            street1: z.nullable(z.string()).optional(),
            street2: z.nullable(z.string()).optional(),
            zipCode: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.locationType === undefined ? null : { location_type: v.locationType }),
                ...(v.state === undefined ? null : { state: v.state }),
                ...(v.street1 === undefined ? null : { street_1: v.street1 }),
                ...(v.street2 === undefined ? null : { street_2: v.street2 }),
                ...(v.zipCode === undefined ? null : { zip_code: v.zipCode }),
            };
        });
}
