import { parseAuditTrailRecord } from "../src";
import { newValidation, changedValidationMessage, removedValidation } from "./mockData/ValidationRule";

describe('ValidationRule Tests', () => {

    test('New validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(newValidation);
        expect(result.metadataType).toBe('ValidationRule');
        expect(result.operationType).toBe('CREATED');
        expect(result.fieldModified).toBe(null);
    });

    test('Changed validation rule message action is parsed correctly', () => {
        const result = parseAuditTrailRecord(changedValidationMessage);
        expect(result.metadataType).toBe('ValidationRule');
        expect(result.operationType).toBe('MODIFIED');
        expect(result.fieldModified).toBe('errorMessage');
    });

    test('Removed validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(removedValidation);
        expect(result.metadataType).toBe('ValidationRule');
        expect(result.operationType).toBe('DELETED');
        expect(result.fieldModified).toBe(null);
    });

});
