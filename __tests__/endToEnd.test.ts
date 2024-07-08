import { parseAuditTrailRecord } from "../src";
import { ChangeCategory, OperationType, MetadataType } from "../types";
import { sessiontimeoutForProfile } from "./mockData/ProfileSessionSetting";







describe('ProfileSessionSetting Tests', () => {
    test('Changed profile session setting action is parsed correctly', () => {
        const result = parseAuditTrailRecord(sessiontimeoutForProfile);
        expect(result.metadataType).toBe(MetadataType.ProfileSessionSetting);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('sessionTimeout');
        expect(result.changeCategory).toBe(ChangeCategory.SECURITY);
    });
});





