//can we figure out the object name
const validationRuleActionsMap = new Map([
    ['newValidation', 'ValidationRule'],
    ['changedValidationMessage', 'ValidationRule'],
    ['changedValidationFormula', 'ValidationRule'],
    ['changedValidationActive', 'ValidationRule'],
]);

//figure out new vs updated.
const profileActionsMap = new Map([
    ['profileFlsChangedStandard', 'Profile'],
    ['profileFlsChangedCustom', 'Profile'],
    ['profileDefaultCustAppCustom', 'Profile'],
    ['profileTabsetChangedCustom', 'Profile'],
    ['SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom', 'Profile'],
    ['profilePermChangedCustom', 'Profile'],
    ['profileOlpChangedCustom', 'Profile'],
    ['profileCustAppCustom', 'Profile'],
    ['profilePageLayoutChangedStandard', 'Profile'],
]);

/**
 * CustomField actions
 * @type {Array<{action: string, type: string}>}
 */
const customFieldActionsMap = new Map([
    ['changedCF', 'CustomField'],
    ['changedCFFieldHelp', 'CustomField'],
    ['changedCFFormula', 'CustomField'],
    ['createdCFFormula', 'CustomField'],
]);

const pageLayoutActionsMap = new Map([
    ['createdcustentlayout', 'Layout'],
    ['custentlayout', 'Layout'],
    ['accountlayout', 'Layout'],
]);

const flowActionsMap = new Map([
    ['deactivatedinteractiondefinition', 'Flow'],
    ['deletedinteractiondefversion', 'Flow'],
    ['createdinteractiondefversion', 'Flow'],
    ['deactivatedinteractiondefversion', 'Flow'],
    ['createdinteractiondefinition', 'Flow'],
]);

const workflowRuleActionsMap = new Map([
    ['deactivatedworkflowrule', 'WorkflowRule'],
    ['changedworkflowrule', 'WorkflowRule'],
    ['activatedworkflowrule', 'WorkflowRule'],
    ['flowMetricsManageFlowOnlyOff', 'WorkflowRule'],
    ['changedDefaultWorkflowUser', 'WorkflowRule'],
    ['createdworkflowtimetrigger', 'WorkflowRule'],
    ['createdworkflowrule', 'WorkflowRule'],
]);

const emailAlertActionsMap = new Map([
    ['createdemailalert', 'WorkflowAlert'],
    ['deletedemailalert', 'WorkflowAlert'],
]);

const workflowFieldUpdateActionsMap = new Map([
    ['createdfieldupdate', 'WorkflowFieldUpdate'],
    ['deletedfieldupdate', 'WorkflowFieldUpdate'],
]);

const specificMetadataTypeActionsMap = new Map([
    ...validationRuleActionsMap,
    ...profileActionsMap,
    ...customFieldActionsMap,
    ...pageLayoutActionsMap,
    ...flowActionsMap,
    ...workflowRuleActionsMap,
    ...emailAlertActionsMap,
    ...workflowFieldUpdateActionsMap,
]);

const genericMetadataTypeactions = [
    { regexExpression: /Profile/i, type: 'Profile' },
    { regexExpression: /Validation/i, type: 'ValidationRule' },
    { regexExpression: /Layout/i, type: 'Layout' },
    { regexExpression: /interactiondef/i, type: 'Flow' },
    { regexExpression: /workflowrule/i, type: 'WorkflowRule'},
    { regexExpression: /emailalert/i, type: 'EmailAlert'},
    { regexExpression: /fieldupdate/i, type: 'FieldUpdate'}
];

export function getMetadataType(action) {

    if(specificMetadataTypeActionsMap.has(action)) {
        return specificMetadataTypeActionsMap.get(action);
    }

    for (const { regexExpression, type } of genericMetadataTypeactions) {
        if (regexExpression.test(action)) {
            return type;
        }
    }
    return null; 
}


