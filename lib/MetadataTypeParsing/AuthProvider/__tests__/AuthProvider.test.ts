import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {insertAuthProvider, addAuthProviderErrorUrl, enableOptimization} from "../__tests__/mocks/AuthProviderMock";

describe('AuthProvider Tests', () => {

    test('insertAuthProvider action is parsed correctly', () => {
        const result = parseAuditTrailRecord(insertAuthProvider);
        expect(result.metadataType).toBe(MetadataType.AuthProvider);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

    test('addAuthProviderErrorUrl action is parsed correctly', () => {
        const result = parseAuditTrailRecord(addAuthProviderErrorUrl);
        expect(result.metadataType).toBe(MetadataType.AuthProvider);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('errorUrl');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

    test('enableOptimization action is parsed correctly', () => {
        const result = parseAuditTrailRecord(enableOptimization);
        expect(result.metadataType).toBe(MetadataType.AuthProvider);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });

});