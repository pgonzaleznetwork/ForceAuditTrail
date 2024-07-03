
import {ParseResult} from '../../types';
import {OperationType} from '../../types';
import {MetadataType} from '../../types';

export const parseResultsByValidationRuleActions = new Map<string, ParseResult>();

parseResultsByValidationRuleActions.set('newValidation', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.CREATED,
    fieldModified: null,
    sampleDisplay: 'New Accounts validation rule "will_never_fire"'
});

parseResultsByValidationRuleActions.set('changedValidationMessage', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorMessage',
    sampleDisplay: `Changed error message for Accounts validation "Tamir_validation" from "Tamir is not a good name! jk, it's a great name" to "Tamir is not a good name! jk, it's a great name :)"`
});

parseResultsByValidationRuleActions.set('changedValidationFormula', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorConditionFormula',
    sampleDisplay: `Changed formula for Accounts validation "Only_admin_can_edit_account_number" from...`
});

parseResultsByValidationRuleActions.set('changedValidationActive', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'active',
    sampleDisplay: 'Changed active flag for Accounts validation "Complex_formula" from 1 to 0'
});

parseResultsByValidationRuleActions.set('changedValidationLocation', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorDisplayField',
    sampleDisplay: 'Changed error location for Accounts validation "address" from "Top of Page" to "Account Number"'
});

parseResultsByValidationRuleActions.set('removedValidation', {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.DELETED,
    fieldModified: null,
    sampleDisplay: 'Removed Accounts validation "will_never_fire"'
});






//figure out new vs updated.
/*const profileActionsMap = new Map([
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
*/
/*const genericMetadataTypeactions = [
    { regexExpression: /Profile/i, type: 'Profile' },
    { regexExpression: /Validation/i, type: 'ValidationRule' },
    { regexExpression: /Layout/i, type: 'Layout' },
    { regexExpression: /interactiondef/i, type: 'Flow' },
    { regexExpression: /workflowrule/i, type: 'WorkflowRule'},
    { regexExpression: /emailalert/i, type: 'EmailAlert'},
    { regexExpression: /fieldupdate/i, type: 'FieldUpdate'}
];
*/

/*export function getMetadataType(action) {

    if(specificMetadataTypeActionsMap.has(action)) {
        return specificMetadataTypeActionsMap.get(action);
    }

    for (const { regexExpression, type } of genericMetadataTypeactions) {
        if (regexExpression.test(action)) {
            return type;
        }
    }
    return null; 
}*/


