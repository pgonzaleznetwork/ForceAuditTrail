import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {profileFlsChangedCustom, profileFlsChangedStandard} from "../__tests__/mocks/ProfileMock";

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
