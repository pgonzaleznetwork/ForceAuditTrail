import { ParseResult } from '../../types';
import { OperationType } from '../../types';
import { MetadataType } from '../../types';
import { ChangeCategory } from '../../types';

export const parseResultsByProfileActions: Record<string, ParseResult> = {
  profilePermChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'userPermissions',
    sampleDisplay: `Changed profile Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`,
    changeCategory: ChangeCategory.SECURITY
  },
  profileOlpChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'objectPermissions',
    sampleDisplay: `Changed profile Sales Development Manager: Metadata object permissions were changed from No Access to Read, Edit, Delete`,
    changeCategory: ChangeCategory.SECURITY
  },
  profileTabsetChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'tabVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: Active Scratch Orgs tab was changed from Default Off to Default On',
    changeCategory: ChangeCategory.COSMETIC
  },
  profileCustAppCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: Playground Starter application is now Visible',
    changeCategory: ChangeCategory.SECURITY
  },
  profileDefaultCustAppCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: AllTabSet is now the default application',
    changeCategory: ChangeCategory.SECURITY
  },
  profileDescriptionChanged: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'description',
    sampleDisplay: 'Changed profile Sales Development Manager: Description was changed',
    changeCategory: ChangeCategory.COSMETIC
  },
  SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Sales Development Manager: Force.com IDE connected app is enabled',
    changeCategory: ChangeCategory.SECURITY
  },
  SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Sales Development Manager: Force.com IDE connected app is disabled',
    changeCategory: ChangeCategory.SECURITY
  }
};
