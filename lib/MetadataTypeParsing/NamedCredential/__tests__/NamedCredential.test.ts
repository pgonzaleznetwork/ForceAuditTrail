import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {namedCredentialDelete, namedCredentialInsert,
    namedCredentialParameterInsert
} from "../__tests__/mocks/NamedCredentialMock";

describe('NamedCredential Tests', () => {

    test('namedCredentialInsert action is parsed correctly', () => {
        const result = parseAuditTrailRecord(namedCredentialInsert);
        expect(result.metadataType).toBe(MetadataType.NamedCredential);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.INTEGRATION);
    });

    test('namedCredentialDelete action is parsed correctly', () => {
        const result = parseAuditTrailRecord(namedCredentialDelete);
        expect(result.metadataType).toBe(MetadataType.NamedCredential);
        expect(result.operationType).toBe(OperationType.DELETED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.INTEGRATION);
    });

    test('namedCredentialParameterInsert action is parsed correctly', () => {
        const result = parseAuditTrailRecord(namedCredentialParameterInsert);
        expect(result.metadataType).toBe(MetadataType.NamedCredential);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.INTEGRATION);
    });
    

});