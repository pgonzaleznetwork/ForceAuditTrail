import { parseEntry } from "../../src";
import { newValidationRule } from "../../lib/mockTrailEntries/ValidationRule/newValidation";

describe('SetupAuditTrail', () => {
    test('should validate the Action field and return the correct metadata type', () => {
        const result = parseEntry(newValidationRule);
        expect(result.metadataType).toBe('ValidationRule');
    });
});
