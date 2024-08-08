import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import {extractProfileNameFromSessionSettingEvent} from './utils/regex';

export const parseResultsByProfileSessionSettingActions: Record<string, ParseResult> = {
  sessiontimeoutForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: 'sessionTimeout',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed Session Timeout Value from 120 to 90 minutes',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  },
  disableICForInternalUsersForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed Skip verifying identity when employees access experiences (device activation) from False to True',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  },
  allowOAuthForInternalUsersForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed Allow OAuth when employees authorize on an experience from False to True',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  },
  relaxEmployeeIpRestrictionsForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed Relax profile login IP restrictions from False to True',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  },
  networkSessionDecouplingForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed Separate Experience and Salesforce login auth from False to True',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  },
  requiredSessionLevelForProfile: {
    metadataType: MetadataType.ProfileSessionSetting,
    operationType: OperationType.MODIFIED,
    fieldModified: 'requiredSessionLevel',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed RequiredSessionLevel Value from None to High Assurance',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromSessionSettingEvent
  }
};
