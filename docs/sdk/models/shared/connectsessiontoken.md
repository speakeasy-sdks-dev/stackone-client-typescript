# ConnectSessionToken

## Example Usage

```typescript
import { ConnectSessionToken, ConnectSessionTokenCategories } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ConnectSessionToken = {
  categories: [
    ConnectSessionTokenCategories.Ats,
    ConnectSessionTokenCategories.Hris,
    ConnectSessionTokenCategories.Stackone,
    ConnectSessionTokenCategories.Crm,
    ConnectSessionTokenCategories.Iam,
    ConnectSessionTokenCategories.Marketing,
    ConnectSessionTokenCategories.Lms,
    ConnectSessionTokenCategories.Marketing,
  ],
  createdAt: new Date("2024-02-06T18:51:30.654Z"),
  id: 3277.20,
  organizationId: 7567.79,
  originOwnerId: "<value>",
  originOwnerName: "<value>",
  projectId: "<value>",
  token: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `categories`                                                                                          | [shared.ConnectSessionTokenCategories](../../../sdk/models/shared/connectsessiontokencategories.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | [<br/>"ats",<br/>"hris",<br/>"hrisLegacy",<br/>"crm",<br/>"iam",<br/>"marketing",<br/>"lms",<br/>"stackOne"<br/>] |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `id`                                                                                                  | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `label`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `organizationId`                                                                                      | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originOwnerId`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originOwnerName`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `originUsername`                                                                                      | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `projectId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `provider`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `token`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |