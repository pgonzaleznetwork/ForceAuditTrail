import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {remoteproxy} from "../__tests__/mocks/RemoteSiteSettingMock";

describe('RemoteSiteSetting Tests', () => {
    test('remoteproxy action is parsed correctly', () => {
        const result = parseAuditTrailRecord(remoteproxy);
        expect(result.metadataType).toBe(MetadataType.RemoteSiteSetting);
        expect(result.operationType).toBe(OperationType.UNKNOWN);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.INTEGRATION);
    });
});