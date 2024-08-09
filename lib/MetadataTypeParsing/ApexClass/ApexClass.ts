import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import {extractApexClassName} from './utils/regex';

export const parseResultsByApexClassActions: Record<string, ParseResult> = {
  changedApexClass: {
    metadataType: MetadataType.ApexClass,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: "Changed AccountTriggerHandler Apex Class code",
    changeCategory: ChangeCategory.BUSINESS_LOGIC_CODE,
    nameExtractorFunction: extractApexClassName
  },
  createdApexClass: {
    metadataType: MetadataType.ApexClass,
    operationType: OperationType.CREATED,
    fieldModified: null,
    sampleDisplay: "Created PastryTests Apex Class code",
    changeCategory: ChangeCategory.BUSINESS_LOGIC_CODE,
    nameExtractorFunction: extractApexClassName
  },
  deletedApexClass: {
    metadataType: MetadataType.ApexClass,
    operationType: OperationType.DELETED,
    fieldModified: null,
    sampleDisplay: "Deleted AccountTriggerHandler Apex Class code",
    changeCategory: ChangeCategory.BUSINESS_LOGIC_CODE,
    nameExtractorFunction: extractApexClassName
  }
};
