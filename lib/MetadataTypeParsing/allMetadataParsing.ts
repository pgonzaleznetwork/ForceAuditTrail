import { parseResultsByValidationRuleActions } from "./ValidationRule/ValidationRule";
import { parseResultsByProfileActions } from "./Profile/Profile";
import { parseResultsByProfileSessionSettingActions } from "./ProfileSessionSetting";
import { parseResultsByProfilePasswordPolicyActions } from "./ProfilePasswordPolicy/ProfilePasswordPolicy";
import { ParseResult } from '../../types';


export const parseResultsbyMetadataType: Record<string, ParseResult> = {
  ...parseResultsByValidationRuleActions,
  ...parseResultsByProfileActions,
  ...parseResultsByProfileSessionSettingActions,
  ...parseResultsByProfilePasswordPolicyActions
};
