import { parseAuditTrailRecord } from "../src";
import { newValidationRule } from "./mockData/ValidationRule";

describe('SetupAuditTrail', () => {
    test('New validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(newValidationRule);
        expect(result.metadataType).toBe('ValidationRule');
        expect(result.operationType).toBe('CREATED');
        expect(result.fieldModified).toBe(null);
    });
});
