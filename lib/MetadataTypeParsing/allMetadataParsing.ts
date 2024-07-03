import { parseResultsByValidationRuleActions } from "./ValidationRule";
import { parseResultsByProfileActions } from "./Profile";
import { parseResultsByProfileSessionSettingActions } from "./ProfileSessionSetting";
import { parseResultsByProfilePasswordPolicyActions } from "./ProfilePasswordPolicy";

export const parseResultsbyMetadataType = new Map([
    ...parseResultsByValidationRuleActions,
    ...parseResultsByProfileActions,
    ...parseResultsByProfileSessionSettingActions,
    ...parseResultsByProfilePasswordPolicyActions
]);