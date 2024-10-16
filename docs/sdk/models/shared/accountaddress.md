# AccountAddress

## Example Usage

```typescript
import { AccountAddress, AccountAddressSchemasValue, AccountAddressValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AccountAddress = {
  country: {
    sourceValue: true,
    value: AccountAddressSchemasValue.Gb,
  },
  locationType: {
    sourceValue: {},
    value: AccountAddressValue.Home,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `city`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `country`                                                         | [shared.Country](../../../sdk/models/shared/country.md)           | :heavy_minus_sign:                                                | The country code                                                  |
| `locationType`                                                    | [shared.LocationType](../../../sdk/models/shared/locationtype.md) | :heavy_minus_sign:                                                | The location type                                                 |
| `state`                                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `street1`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `street2`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `zipCode`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |