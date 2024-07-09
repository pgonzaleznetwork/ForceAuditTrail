import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {externalCredentialInsert} from "../__tests__/mocks/ExternalCredentialMock";

describe('ExternalCredential tests', () => {

    test('Create external credential action is parsed correctly', () => {
        const result = parseAuditTrailRecord(externalCredentialInsert);
        expect(result.metadataType).toBe(MetadataType.ExternalCredential);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.INTEGRATION);
    });
});