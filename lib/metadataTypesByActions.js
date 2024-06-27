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


const customFieldPatterns = [
    { pattern: /changedCF/i, type: 'CustomField' },
    { pattern: /changedCFFieldHelp/i, type: 'CustomField' },
    { pattern: /changedCFFormula/i, type: 'CustomField' },
    { pattern: /createdCFFormula/i, type: 'CustomField' }
]

const pageLayoutPatterns = [
    { pattern: /createdcustentlayout/i, type: 'Layout' },
    { pattern: /custentlayout/i, type: 'Layout' },
    { pattern: /accountlayout/i, type: 'Layout' }
]


const flowPatterns = [
    { pattern: /deactivatedinteractiondefinition/i, type: 'Flow' },
    { pattern: /deletedinteractiondefversion/i, type: 'Flow' },
    { pattern: /createdinteractiondefversion/i, type: 'Flow' },
    { pattern: /deactivatedinteractiondefversion/i, type: 'Flow' },
    { pattern: /createdinteractiondefinition/i, type: 'Flow' }
]

const workflowRulePatterns = [
    { pattern: /deactivatedworkflowrule/i, type: 'WorkflowRule' },
    { pattern: /changedworkflowrule/i, type: 'WorkflowRule' },
    { pattern: /activatedworkflowrule/i, type: 'WorkflowRule' },
    { pattern: /flowMetricsManageFlowOnlyOff/i, type: 'WorkflowRule' },
    { pattern: /changedDefaultWorkflowUser/i, type: 'WorkflowRule' },
    { pattern: /createdworkflowtimetrigger/i, type: 'WorkflowRule' },
    { pattern: /createdworkflowrule/i, type: 'WorkflowRule' }
]

const emailAlertPatterns = [
    { pattern: /createdemailalert/i, type: 'WorkflowRule' },
]

const workflowFieldUpdatePatterns = [
    { pattern: /createdfieldupdate/i, type: 'WorkflowRule' },
]


const specificMetadataTypePatterns = [
    ...validationRulePatterns,
    ...profilePatterns,
    ...customFieldPatterns,
    ...pageLayoutPatterns,
    ...flowPatterns,
    ...workflowRulePatterns,
    ...emailAlertPatterns,
    ...workflowFieldUpdatePatterns
];


const genericMetadataTypePatterns = [
    { pattern: /Profile/i, type: 'Profile' },
    { pattern: /Validation/i, type: 'ValidationRule' },
    { pattern: /Layout/i, type: 'Layout' },
    { pattern: /interactiondef/i, type: 'Flow' }
];

export function getMetadataType(action) {
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


