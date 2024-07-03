import { parseResultsByValidationRuleActions } from "./ValidationRule";
import { parseResultsByProfileActions } from "./Profile";

export const parseResultsbyMetadataType = new Map([
    ...parseResultsByValidationRuleActions,
    ...parseResultsByProfileActions
]);