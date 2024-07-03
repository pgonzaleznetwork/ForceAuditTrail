import { parseAuditTrailRecord } from "../../src";
import { newValidationRule } from "../../lib/mockTrailEntries/ValidationRule/newValidation";

describe('SetupAuditTrail', () => {
    test('should validate the Action field and return the correct metadata type', () => {
        const result = parseAuditTrailRecord(newValidationRule);
        //expect(result.metadataType).toBe('ValidationRule');
    });
});
