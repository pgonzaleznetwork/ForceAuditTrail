import { parseResultsByValidationRuleActions } from "./ValidationRule";
import { parseResultsByProfileActions } from "./Profile/Profile";
import { parseResultsByProfileSessionSettingActions } from "./ProfileSessionSetting";
import { parseResultsByProfilePasswordPolicyActions } from "./ProfilePasswordPolicy";
import { ParseResult } from '../../types';


export const parseResultsbyMetadataType: Record<string, ParseResult> = {
  ...parseResultsByValidationRuleActions,
  ...parseResultsByProfileActions,
  ...parseResultsByProfileSessionSettingActions,
  ...parseResultsByProfilePasswordPolicyActions
};
