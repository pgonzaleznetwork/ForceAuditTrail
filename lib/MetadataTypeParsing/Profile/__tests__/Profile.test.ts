import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {profileFlsChangedCustom, 
    profileFlsChangedStandard, 
    profileOlpChangedCustom, profilePermChangedCustom, 
    SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom,
    profileLoginHoursChangedCustom, profileLoginHoursChangedStandard
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