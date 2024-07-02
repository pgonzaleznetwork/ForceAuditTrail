// parseSetupAuditTrail.ts

import { SetupAuditTrailEntry } from './types';

function parseSetupAuditTrail(entry: SetupAuditTrailEntry): void {
  // Perform your analysis here
  console.log(`Action: ${entry.Action}`);
  console.log(`Display: ${entry.Display}`);
  console.log(`Created Date: ${entry.CreatedDate}`);
  console.log(`Created By: ${entry.CreatedBy.Username}`);
}

// Example usage
const exampleEntry: SetupAuditTrailEntry = {
  "attributes": {
    "type": "SetupAuditTrail",
    "url": "/services/data/v60.0/sobjects/SetupAuditTrail/0YmKY00000100d20AA"
  },
  "Id": "0YmKY00000100d20AA",
  "CreatedBy": {
    "attributes": {
      "type": "User",
      "url": "/services/data/v60.0/sobjects/User/0053h000002JF4cAAG"
    },
    "Username": "pgonzaleznetwork@brave-raccoon-mm7crl.com"
  },

  "Display": "Created custom formula field: MyNewField (Checkbox)"
};

parseSetupAuditTrail(exampleEntry);
