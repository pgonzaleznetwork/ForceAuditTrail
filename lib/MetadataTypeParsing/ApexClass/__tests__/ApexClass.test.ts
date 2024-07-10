import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {changedApexClass, 
} from "../__tests__/mocks/ApexClassMock";

describe('Apex Class Tests', () => {

    test('changedApexClass action is parsed correctly', () => {
        const result = parseAuditTrailRecord(changedApexClass);
        expect(result.metadataType).toBe(MetadataType.ApexClass);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.BUSINESS_LOGIC_CODE);
    });

});