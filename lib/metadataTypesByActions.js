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
    // First try matching specific patterns
    for (const { pattern, type } of specificMetadataTypePatterns) {
        if (pattern.test(action)) {
            return type;
        }
    }
    // If no specific match is found, try matching generic patterns
    for (const { pattern, type } of genericMetadataTypePatterns) {
        if (pattern.test(action)) {
            return type;
        }
    }
    return null; // or handle the case where no match is found
}

// Example usage
const actions = [
    'newValidation',
    'changedValidationMessage',
    'changedValidationFormula',
    'changedValidationActive',
    'deletedValidation',
    'someOtherValidationAction',
    'DataCloudValidationDeleted',
    'NEWVALIDATION', // Testing case insensitivity
    'datacloudvalidationdeleted' // Testing case insensitivity
];

actions.forEach(action => {
    const metadataType = getMetadataType(action);
    console.log(`Action: ${action}, Metadata Type: ${metadataType}`);
});
