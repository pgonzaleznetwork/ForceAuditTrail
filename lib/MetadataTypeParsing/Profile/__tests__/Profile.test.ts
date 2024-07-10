import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {profileFlsChangedCustom, 
    profileFlsChangedStandard, 
    profileOlpChangedCustom, profilePermChangedCustom, 
    SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom,
    profileLoginHoursChangedCustom, profileLoginHoursChangedStandard,
    deletedLoginIpRange_withProfile,loginIpRange,
    SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom,
    SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom,
    SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom
} from "../__tests__/mocks/ProfileMock";

describe('Profile Tests', () => {

    test('Changed profile permission action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profilePermChangedCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('userPermissions');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });


    test('Changed profile object permission action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profileOlpChangedCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('objectPermissions');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
   

    test('Changed profile connected application action is parsed correctly', () => {
        const result = parseAuditTrailRecord(SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });


});

describe('Profile:Field Level Security Tests', () => {
    test('profileFlsChangedCustom action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profileFlsChangedCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('fieldPermissions');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

    test('profileFlsChangedStandard action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profileFlsChangedStandard);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('fieldPermissions');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
});

describe('Profile:Login hours Tests', () => {
    test('profileLoginHoursChangedCustom action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profileLoginHoursChangedCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('loginHours');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

    test('profileFlsChangedStandard action is parsed correctly', () => {
        const result = parseAuditTrailRecord(profileLoginHoursChangedStandard);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('loginHours');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
});

describe('Profile:Login IP Ranges Tests', () => {
    test('deletedLoginIpRange_withProfile action is parsed correctly', () => {
        const result = parseAuditTrailRecord(deletedLoginIpRange_withProfile);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.DELETED);
        expect(result.fieldModified).toBe('loginIpRanges');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

    test('loginIpRange action is parsed correctly', () => {
        const result = parseAuditTrailRecord(loginIpRange);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe('loginIpRanges');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
});

describe('Profile:Apex Class Access Tests', () => {
    test('SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom action is parsed correctly', () => {
        const result = parseAuditTrailRecord(SetupEntityAccessAudit_Profile_ApexClass_EnabledCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('classAccesses');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

});

describe('Profile:Visualforce Page Access Tests', () => {
    test('SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom action is parsed correctly', () => {
        const result = parseAuditTrailRecord(SetupEntityAccessAudit_Profile_ApexPage_DisabledCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('pageAccesses');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

});

describe('Profile:Custom Metadata Type Access Tests', () => {
    test('SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom action is parsed correctly', () => {
        const result = parseAuditTrailRecord(SetupEntityAccessAudit_Profile_CustomEntityDefinition_EnabledCustom);
        expect(result.metadataType).toBe(MetadataType.Profile);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('customMetadataTypeAccesses');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

});