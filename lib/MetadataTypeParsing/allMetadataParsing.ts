import { parseResultsByValidationRuleActions } from "./ValidationRule";
import { parseResultsByProfileActions } from "./Profile";
import { parseResultsByProfileSessionSettingActions } from "./ProfileSessionSetting";

export const parseResultsbyMetadataType = new Map([
    ...parseResultsByValidationRuleActions,
    ...parseResultsByProfileActions,
    ...parseResultsByProfileSessionSettingActions
]);