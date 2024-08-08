import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import { extractProfileName , extractProfileNameFromIpRange,
  extractProfileNameFromDataCategory,
  extractProfileNameFromLoginFlowEvent
} from './utils/regex';

export const parseResultsByProfileActions: Record<string, ParseResult> = {
  profilePermChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'userPermissions',
    sampleDisplay: `Changed profile Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`,
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileOlpChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'objectPermissions',
    sampleDisplay: `Changed profile Sales Development Manager: Metadata object permissions were changed from No Access to Read, Edit, Delete`,
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileTabsetChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'tabVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: Active Scratch Orgs tab was changed from Default Off to Default On',
    changeCategory: ChangeCategory.COSMETIC,
    nameExtractorFunction: extractProfileName
  },
  profileTabsetChangedStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'tabVisibilities',
    sampleDisplay: 'Changed profile Standard Platform User: Analytics tab was changed from Default On to Default Off',
    changeCategory: ChangeCategory.COSMETIC,
    nameExtractorFunction: extractProfileName
  },
  profileCustAppCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: Playground Starter application is now Visible',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileDefaultCustAppCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: 'Changed profile Sales Development Manager: AllTabSet is now the default application',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileCustAppStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: "Changed profile System Administrator: Sample Console application is now Visible",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
profileDefaultCustAppStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'applicationVisibilities',
    sampleDisplay: "Changed profile System Administrator: AppLauncher is now the default application",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
  profileDescriptionChanged: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'description',
    sampleDisplay: 'Changed profile Sales Development Manager: Description was changed',
    changeCategory: ChangeCategory.COSMETIC,
    nameExtractorFunction: extractProfileName
  },
  SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Sales Development Manager: Force.com IDE connected app is enabled',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  SetupEntityAccessAudit_Profile_ConnectedApplication_DisabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: 'Changed profile Sales Development Manager: Force.com IDE connected app is disabled',
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileFlsChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'fieldPermissions',
    sampleDisplay: "Changed profile Custom: Sales Profile: field-level security for Broker: Mobile Phone was changed from No Access to Read Only",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileFlsChangedStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'fieldPermissions',
    sampleDisplay: "Changed profile Minimum Access - Salesforce: field-level security for Account: Customer Priority was changed from 0 to 2",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileLoginHoursChangedStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginHours',
    sampleDisplay: "Changed profile Standard Platform User: login hours were changed from Sunday All Day to Sunday 12:00 AM - 1:00 AM",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  profileLoginHoursChangedCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginHours',
    sampleDisplay: "Changed profile Custom: Marketing Profile: login hours were changed from Sunday All Day to Sunday 12:00 AM - 1:00 AM",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
  },
  deletedLoginIpRange_withProfile: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginIpRanges',
    sampleDisplay: "Deleted Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromIpRange
},
loginIpRange: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'loginIpRanges',
    sampleDisplay: "Added Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileNameFromIpRange
  },
  SetupEntityAccessAudit_Profile_ApexClass_DisabledStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Standard Platform User: AmossTest_InterfaceToDouble Apex class access was disabled",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexClass_EnabledStandard: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Standard Platform User: AmossTest_InterfaceToDouble Apex class access was enabled",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexClass_DisabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Custom: Support Profile: Bakery Apex class access was disabled",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom: {
    metadataType: MetadataType.Profile,
    operationType: OperationType.MODIFIED,
    fieldModified: 'classAccesses',
    sampleDisplay: "Changed profile Custom: Support Profile: ApexTypesController Apex class access was enabled",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexPage_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Standard Platform User: ChangePassword pageAccesses was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: CommunitiesSelfRegConfirm pageAccesses was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexPage_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: CommunitiesSelfRegConfirm pageAccesses was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ApexPage_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'pageAccesses',
  sampleDisplay: "Changed profile Standard Platform User: ChangePassword pageAccesses was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Standard Platform User: Feature Flag Custom Metadata Type was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: DML Finalizer Custom Metadata Type was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Standard Platform User: Feature Flag Custom Metadata Type was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customMetadataTypeAccesses|customSettingAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: DML Finalizer Custom Metadata Type was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_FlowDefinition_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile System Administrator: Create_a_Case_Custom Flow access was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_FlowDefinition_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile System Administrator: Create_a_Case_Custom Flow access was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_FlowDefinition_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: Create_a_Case_Custom Flow access was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_FlowDefinition_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'flowAccesses',
  sampleDisplay: "Changed profile Custom: Support Profile: Create_a_Case_Custom Flow access was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomPermission_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customPermissions',
  sampleDisplay: "Changed profile Custom: Marketing Profile: Nebula Logger: Can Execute Log Batch Purger Custom Permission was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomPermission_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customPermissions',
  sampleDisplay: "Changed profile Custom: Marketing Profile: Nebula Logger: Can Execute Log Batch Purger Custom Permission was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomPermission_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customPermissions',
  sampleDisplay: "Changed profile System Administrator: Access Restricted UI Permission Custom Permission was disabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_CustomPermission_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'customPermissions',
  sampleDisplay: "Changed profile System Administrator: Access Restricted UI Permission Custom Permission was enabled",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
changedCatGroupVisibilityUserNode_CustomToAll: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for Custom: Support Profile from Custom: [All > Apex > SOQL] to All",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_NoneToCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for Custom: Support Profile from None to Custom: [All > Apex > SOQL]",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_CustomToNone: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for Custom: Support Profile from Custom: [All > Apex > SOQL] to None",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_AllToCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for Custom: Support Profile from All to Custom: [All > Apex > SOQL]",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_CustomToCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for Custom: Support Profile from Custom: [All > Apex] to Custom: [All]",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_AllToNone: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for PT1 from All to None",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
changedCatGroupVisibilityUserNode_NoneToAll: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'categoryGroupVisibilities',
  sampleDisplay: "Changed visibility of All Articles Data Category Group for PT1 from None to All",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction:extractProfileNameFromDataCategory
},
SetupEntityAccessAudit_Profile_ExternalDataSource_DisabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'externalDataSourceAccesses',
  sampleDisplay: 'Changed profile System Administrator: Replication Org External Data Source access was disabled',
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ExternalDataSource_EnabledStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'externalDataSourceAccesses',
  sampleDisplay: 'Changed profile System Administrator: Replication Org External Data Source access was enabled',
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ExternalDataSource_DisabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'externalDataSourceAccesses',
  sampleDisplay: 'Changed profile Custom: Support Profile: Replication Org External Data Source access was disabled',
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
SetupEntityAccessAudit_Profile_ExternalDataSource_EnabledCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'externalDataSourceAccesses',
  sampleDisplay: 'Changed profile Custom: Support Profile: Replication Org External Data Source access was enabled',
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileName
},
profilePageLayoutChangedCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'layoutAssignments',
  sampleDisplay: "Changed profile Custom: Support Profile: Account page layout for Master record type was changed from Account (Support) Layout to Account (Sales) Layout",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profilePageLayoutChangedStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'layoutAssignments',
  sampleDisplay: "Changed profile Contract Manager: Account page layout for Master record type was changed from Account Layout to Account (Marketing) Layout",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
deleteLoginFlow: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'loginFlows',
  sampleDisplay: "Deleted UI login flow for Standard User",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileNameFromLoginFlowEvent

},
insertLoginFlow: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'loginFlows',
  sampleDisplay: "Enabled UI Login flow for Standard User with flow standard profile flow",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileNameFromLoginFlowEvent
},
updateLoginFlowProfile: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'loginFlows',
  sampleDisplay: "Reassigned UI login flow for Contract Manager to Custom: Sales Profile",
  changeCategory: ChangeCategory.SECURITY,
  nameExtractorFunction: extractProfileNameFromLoginFlowEvent
},
profilerecordTypeVisibilitiesChangedCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Custom: Support Profile: default record type for Account changed from Customer to Partner",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profileRecordTypeRemovedCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Custom: Support Profile: Customer record type was removed from Account object",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profileRecordTypeRemovedStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Standard Platform User: Partner record type was removed from Account object",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profilerecordTypeVisibilitiesChangedStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Standard Platform User: default record type for Account changed from --Master-- to Customer",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profileRecordTypeAddedStandard: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Standard Platform User: Partner record type was added to Account object",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
},
profileRecordTypeAddedCustom: {
  metadataType: MetadataType.Profile,
  operationType: OperationType.MODIFIED,
  fieldModified: 'recordTypeVisibilities',
  sampleDisplay: "Changed profile Custom: Support Profile: Partner record type was added to Account object",
  changeCategory: ChangeCategory.COSMETIC,
  nameExtractorFunction: extractProfileName
}
};
