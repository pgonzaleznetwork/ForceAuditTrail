//can we figure out the object name
const validationRuleactions = [
    { action: /newValidation/i, type: 'ValidationRule' },
    { action: /changedValidationMessage/i, type: 'ValidationRule' },
    { action: /changedValidationFormula/i, type: 'ValidationRule' },
    { action: /changedValidationActive/i, type: 'ValidationRule' },
];

//figure out new vs updated.
const profileactions = [
    { action: /profileFlsChangedStandard/i, type: 'Profile' },
    { action: /profileFlsChangedCustom/i, type: 'Profile' },
    { action: /profileDefaultCustAppCustom/i, type: 'Profile' },
    { action: /profileTabsetChangedCustom/i, type: 'Profile' },
    { action: /SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom/i, type: 'Profile' },
    { action: /profilePermChangedCustom/i, type: 'Profile' },
    { action: /profileOlpChangedCustom/i, type: 'Profile' },
    { action: /profileCustAppCustom/i, type: 'Profile' },
    { action: /profilePageLayoutChangedStandard/i, type: 'Profile' },
]

/**
 * CustomField actions
 * @type {Array<{action: RegExp, type: string}>}
 */
const customFieldactions = [
    { action: /changedCF/i, type: 'CustomField' },
    { action: /changedCFFieldHelp/i, type: 'CustomField' },
    { action: /changedCFFormula/i, type: 'CustomField' },
    { action: /createdCFFormula/i, type: 'CustomField' }
]

const pageLayoutactions = [
    { action: /createdcustentlayout/i, type: 'Layout' },
    { action: /custentlayout/i, type: 'Layout' },
    { action: /accountlayout/i, type: 'Layout' }
]


const flowactions = [
    { action: /deactivatedinteractiondefinition/i, type: 'Flow' },
    { action: /deletedinteractiondefversion/i, type: 'Flow' },
    { action: /createdinteractiondefversion/i, type: 'Flow' },
    { action: /deactivatedinteractiondefversion/i, type: 'Flow' },
    { action: /createdinteractiondefinition/i, type: 'Flow' }
]

const workflowRuleactions = [
    { action: /deactivatedworkflowrule/i, type: 'WorkflowRule' },
    { action: /changedworkflowrule/i, type: 'WorkflowRule' },
    { action: /activatedworkflowrule/i, type: 'WorkflowRule' },
    { action: /flowMetricsManageFlowOnlyOff/i, type: 'WorkflowRule' },
    { action: /changedDefaultWorkflowUser/i, type: 'WorkflowRule' },
    { action: /createdworkflowtimetrigger/i, type: 'WorkflowRule' },
    { action: /createdworkflowrule/i, type: 'WorkflowRule' }
]

const emailAlertactions = [
    { action: /createdemailalert/i, type: 'WorkflowAlert' },
    { action: /deletedemailalert/i, type: 'WorkflowAlert' },
]

const workflowFieldUpdateactions = [
    { action: /createdfieldupdate/i, type: 'WorkflowFieldUpdate' },
    { action: /deletedfieldupdate/i, type: 'WorkflowFieldUpdate' },
]


const specificMetadataTypeactions = [
    ...validationRuleactions,
    ...profileactions,
    ...customFieldactions,
    ...pageLayoutactions,
    ...flowactions,
    ...workflowRuleactions,
    ...emailAlertactions,
    ...workflowFieldUpdateactions
];


const genericMetadataTypeactions = [
    { action: /Profile/i, type: 'Profile' },
    { action: /Validation/i, type: 'ValidationRule' },
    { action: /Layout/i, type: 'Layout' },
    { action: /interactiondef/i, type: 'Flow' },
    { action: /workflowrule/i, type: 'WorkflowRule'},
    { action: /emailalert/i, type: 'EmailAlert'},
    { action: /fieldupdate/i, type: 'FieldUpdate'}
];

export function getMetadataType(action) {
    // First try matching specific actions
    for (const { action, type } of specificMetadataTypeactions) {
        if (action.test(action)) {
            return type;
        }
    }
    // If no specific match is found, try matching generic actions
    for (const { action, type } of genericMetadataTypeactions) {
        if (action.test(action)) {
            return type;
        }
    }
    return null; // or handle the case where no match is found
}


