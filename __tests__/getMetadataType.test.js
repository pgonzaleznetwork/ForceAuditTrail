const validationRulePatterns = [
    { pattern: /newValidation/i, type: 'ValidationRule' },
    { pattern: /changedValidationMessage/i, type: 'ValidationRule' },
    { pattern: /changedValidationFormula/i, type: 'ValidationRule' },
    { pattern: /changedValidationActive/i, type: 'ValidationRule' },
];


const profilePatterns = [
    { pattern: /profileFlsChangedStandard/i, type: 'Profile' },
    { pattern: /profileFlsChangedCustom/i, type: 'Profile' },
    { pattern: /profileDefaultCustAppCustom/i, type: 'Profile' },
    { pattern: /profileTabsetChangedCustom/i, type: 'Profile' },
    { pattern: /SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom/i, type: 'Profile' },
    { pattern: /profilePermChangedCustom/i, type: 'Profile' },
    { pattern: /profileOlpChangedCustom/i, type: 'Profile' },
    { pattern: /profileCustAppCustom/i, type: 'Profile' },
    { pattern: /profilePageLayoutChangedStandard/i, type: 'Profile' },
]

const specificMetadataTypePatterns = [
    ...validationRulePatterns,
    ...profilePatterns,
];


const genericMetadataTypePatterns = [
    { pattern: /Profile/i, type: 'DataCloud' },
    { pattern: /Validation/i, type: 'ValidationRule' },
];

function getMetadataType(action) {
    for (const { pattern, type } of specificMetadataTypePatterns) {
        if (pattern.test(action)) {
            return type;
        }
    }
    for (const { pattern, type } of genericMetadataTypePatterns) {
        if (pattern.test(action)) {
            return type;
        }
    }
    return null;
}

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

import { parseEntry } from "../src";
import { newValidationRule } from "../lib/mockTrailEntries/ValidationRule/newValidation";

describe('SetupAuditTrail', () => {
    test('should validate the Action field and return the correct metadata type', () => {
        const result = parseEntry(newValidationRule);
        expect(result.metadataType).toBe('ValidationRule');
    });
});
