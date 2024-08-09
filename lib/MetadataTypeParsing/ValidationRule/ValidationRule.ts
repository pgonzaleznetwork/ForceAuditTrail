import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import {extractValidationRuleNameFromNewEvent,
  extractValidationRuleNameFromChangeEvent,
  extractValidationRuleNameFromDeleteEvent
} from './utils/regex';

export const parseResultsByValidationRuleActions: Record<string, ParseResult> = {
  newValidation: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.CREATED,
    fieldModified: null,
    sampleDisplay: 'New Accounts validation rule "will_never_fire"',
    changeCategory: ChangeCategory.DATA_INTEGRITY,
    nameExtractorFunction: extractValidationRuleNameFromNewEvent
  },
  changedValidationMessage: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorMessage',
    sampleDisplay: `Changed error message for Accounts validation "Tamir_validation" from "Tamir is not a good name! jk, it's a great name" to "Tamir is not a good name! jk, it's a great name :)"`,
    changeCategory: ChangeCategory.COSMETIC,
    nameExtractorFunction: extractValidationRuleNameFromChangeEvent
  },
  changedValidationFormula: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorConditionFormula',
    sampleDisplay: `Changed formula for Accounts validation "Only_admin_can_edit_account_number" from...`,
    changeCategory: ChangeCategory.DATA_INTEGRITY,
    nameExtractorFunction: extractValidationRuleNameFromChangeEvent
  },
  changedValidationActive: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'active',
    sampleDisplay: 'Changed active flag for Accounts validation "Complex_formula" from 1 to 0',
    changeCategory: ChangeCategory.DATA_INTEGRITY,
    nameExtractorFunction: extractValidationRuleNameFromChangeEvent
  },
  changedValidationLocation: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorDisplayField',
    sampleDisplay: 'Changed error location for Accounts validation "address" from "Top of Page" to "Account Number"',
    changeCategory: ChangeCategory.COSMETIC,
    nameExtractorFunction: extractValidationRuleNameFromChangeEvent
  },
  removedValidation: {
    metadataType: MetadataType.ValidationRule,
    operationType: OperationType.DELETED,
    fieldModified: null,
    sampleDisplay: 'Removed Accounts validation "will_never_fire"',
    changeCategory: ChangeCategory.DATA_INTEGRITY,
    nameExtractorFunction: extractValidationRuleNameFromDeleteEvent
  }
};

