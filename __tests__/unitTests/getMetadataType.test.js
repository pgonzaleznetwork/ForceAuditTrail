import { getMetadataType } from "../../lib/metadataTypesByActions";

describe('getMetadataType', () => {
    test('should return the correct metadata type for a known enum', () => {
        const action = "newValidation";
        const result = getMetadataType(action);
        expect(result).toBe('ValidationRule');
    });

    test('should return the correct metadata type for a known enum with different case', () => {
        const action = "NEWVALIDATION";
        const result = getMetadataType(action);
        expect(result).toBe('ValidationRule');
    });

    test('should return the correct metadata type for a generic pattern', () => {
        const action = "someOtherValidationAction";
        const result = getMetadataType(action);
        expect(result).toBe('ValidationRule');
    });

    test('should match a specific pattern if it is part of another word', () => {
        const action = "changedValidationActiveOld";
        const result = getMetadataType(action);
        expect(result).toBe('ValidationRule');
    });

});

import { parseEntry } from "../../src";
import { newValidationRule } from "../../lib/mockTrailEntries/ValidationRule/newValidation";

describe('SetupAuditTrail', () => {
    test('should validate the Action field and return the correct metadata type', () => {
        const result = parseEntry(newValidationRule);
        expect(result.metadataType).toBe('ValidationRule');
    });
});
