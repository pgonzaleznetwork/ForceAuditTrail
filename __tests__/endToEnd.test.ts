import { parseAuditTrailRecord } from "../src";
import { ChangeCategory, OperationType, MetadataType } from "../types";
import { newValidation, changedValidationMessage, removedValidation } from "./mockData/ValidationRule";
import { profilePermChangedCustom, profileOlpChangedCustom , SetupEntityAccessAudit_Profile_ConnectedApplication_EnabledCustom } from "./mockData/Profile";
import { sessiontimeoutForProfile } from "./mockData/ProfileSessionSetting";
import { minimumPasswordLifetimeEnableForProfile, obscureSecretAnswerEnableForProfile } from "./mockData/ProfilePasswordPolicy";
import { profileFlsChangedCustom , profileFlsChangedStandard} from "./mockData/Profile";

describe('ValidationRule Tests', () => {

    test('New validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(newValidation);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
    });

    test('Changed validation rule message action is parsed correctly', () => {
        const result = parseAuditTrailRecord(changedValidationMessage);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('errorMessage');
        expect(result.changeCategory).toBe(ChangeCategory.COSMETIC);
    });

    test('Removed validation rule action is parsed correctly', () => {
        const result = parseAuditTrailRecord(removedValidation);
        expect(result.metadataType).toBe(MetadataType.ValidationRule);
        expect(result.operationType).toBe(OperationType.DELETED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.DATA_INTEGRITY);
    });

});



describe('ProfileSessionSetting Tests', () => {
    test('Changed profile session setting action is parsed correctly', () => {
        const result = parseAuditTrailRecord(sessiontimeoutForProfile);
        expect(result.metadataType).toBe(MetadataType.ProfileSessionSetting);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('sessionTimeout');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
});

describe('ProfilePasswordPolicy Tests', () => {
    test('Changed minimumPasswordLifetimeEnableForProfile action is parsed correctly', () => {
        const result = parseAuditTrailRecord(minimumPasswordLifetimeEnableForProfile);
        expect(result.metadataType).toBe(MetadataType.ProfilePasswordPolicy);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('minimumPasswordLifetime');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY_PASSWORDS);
    });

    test('Changed obscureSecretAnswerEnableForProfile action is parsed correctly', () => {
        const result = parseAuditTrailRecord(obscureSecretAnswerEnableForProfile);
        expect(result.metadataType).toBe(MetadataType.ProfilePasswordPolicy);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('obscure');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY_PASSWORDS);
    });
});



