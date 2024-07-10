import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';

export const parseResultsByApexClassActions: Record<string, ParseResult> = {
  changedApexClass: {
    metadataType: MetadataType.ApexClass,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: "Changed AccountTriggerHandler Apex Class code",
    changeCategory: ChangeCategory.BUSINESS_LOGIC_CODE
  }
};
