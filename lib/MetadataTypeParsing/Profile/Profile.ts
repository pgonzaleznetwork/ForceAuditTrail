import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';

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
  },
  profileFlsChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'fieldPermissions',
    sampleDisplay: "Changed profile Custom: Sales Profile: field-level security for Broker: Mobile Phone was changed from No Access to Read Only",
    changeCategory: ChangeCategory.SECURITY
  },
  profileFlsChangedStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'fieldPermissions',
    sampleDisplay: "Changed profile Authenticated Website: field-level security for Account: Number of Locations was changed from Read/Write to No Access",
    changeCategory: ChangeCategory.SECURITY
  },
  profileLoginHoursChangedStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginHours',
    sampleDisplay: "Changed profile Standard Platform User: login hours were changed from Sunday All Day to Sunday 12:00 AM - 1:00 AM",
    changeCategory: ChangeCategory.SECURITY
  },
  profileLoginHoursChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginHours',
    sampleDisplay: "Changed profile Custom: Marketing Profile: login hours were changed from Sunday All Day to Sunday 12:00 AM - 1:00 AM",
    changeCategory: ChangeCategory.SECURITY
  },
  deletedLoginIpRange_withProfile: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.DELETED,
    fieldModified: 'loginIpRanges',
    sampleDisplay: "Deleted Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255",
    changeCategory: ChangeCategory.SECURITY
},
loginIpRange: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.CREATED,
    fieldModified: 'loginIpRanges',
    sampleDisplay: "Added Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255",
    changeCategory: ChangeCategory.SECURITY
  },
  SetupEntityAccessAudit_Profile_ApexClass_DisabledStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Standard Platform User: AmossTest_InterfaceToDouble Apex class access was disabled",
    changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexClass_EnabledStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Standard Platform User: AmossTest_InterfaceToDouble Apex class access was enabled",
    changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexClass_DisabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Custom: Support Profile: Bakery Apex class access was disabled",
    changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Custom: Support Profile: ApexTypesController Apex class access was enabled",
    changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexPage_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Standard Platform User: ChangePassword pageAccesses was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: CommunitiesSelfRegConfirm pageAccesses was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexPage_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: CommunitiesSelfRegConfirm pageAccesses was enabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_ApexPage_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Standard Platform User: ChangePassword pageAccesses was enabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Standard Platform User: Feature Flag Custom Metadata Type was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: DML Finalizer Custom Metadata Type was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Standard Platform User: Feature Flag Custom Metadata Type was enabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: DML Finalizer Custom Metadata Type was enabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_FlowDefinition_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile System Administrator: Create_a_Case_Custom Flow access was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_FlowDefinition_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile System Administrator: Create_a_Case_Custom Flow access was enabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_FlowDefinition_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: Create_a_Case_Custom Flow access was disabled",
  changeCategory: ChangeCategory.SECURITY
},
SetupEntityAccessAudit_Profile_FlowDefinition_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: Create_a_Case_Custom Flow access was enabled",
  changeCategory: ChangeCategory.SECURITY
}
};
