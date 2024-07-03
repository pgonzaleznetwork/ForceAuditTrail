import { parseAuditTrailRecord } from "../src";
import { ChangeCategory, OperationType, MetadataType } from "../types";
import { newValidation, changedValidationMessage, removedValidation } from "./mockData/ValidationRule";

describe('ValidationRule Tests', () => {

    test('New validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(newValidation);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
    });

    test('Changed validation rule message action is parsed correctly', () => {
        const result = parseAuditTrailRecord(changedValidationMessage);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('errorMessage');
        expect(result.changeCategory).toBe(ChangeCategory.COSMETIC);
    });

    test('Removed validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(removedValidation);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.DELETED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.DATA_INTEGRITY);
    });

});
