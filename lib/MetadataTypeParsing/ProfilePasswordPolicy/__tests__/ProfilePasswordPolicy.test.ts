import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {minimumPasswordLifetimeEnableForProfile, 
    obscureSecretAnswerEnableForProfile, 
} from "../__tests__/mocks/ProfilePasswordPolicyMock";

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
