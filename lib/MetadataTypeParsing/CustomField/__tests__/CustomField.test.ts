import { ChangeCategory, OperationType, MetadataType } from "../../../../types";
import {parseAuditTrailRecord } from "../../../../src/index";
import {createdCFAutoNumCustom,
    changedCFFieldHelpCustom,
    changedCFAutoNumCustom,
    dataClassificationUpdate,
    filteredLookupRequired,
    add_external_id} from "../__tests__/mocks/CustomFieldMock";


describe('CustomField Tests', () => {

    test('filteredLookupRequired action is parsed correctly', () => {  
        const result = parseAuditTrailRecord(filteredLookupRequired);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('LookupFilter.isOptional');
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });

    test('createdCFAutoNumCustom action is parsed correctly', () => {

        const result = parseAuditTrailRecord(createdCFAutoNumCustom);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.CREATED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });

    test('changedCFFieldHelpCustom action is parsed correctly', () => {

        const result = parseAuditTrailRecord(changedCFFieldHelpCustom);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('inlineHelpText');
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });

    test('changedCFAutoNumCustom action is parsed correctly', () => {

        const result = parseAuditTrailRecord(changedCFAutoNumCustom);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('displayFormat');
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });

    test('dataClassificationUpdate action is parsed correctly', () => {

        const result = parseAuditTrailRecord(dataClassificationUpdate);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe(null);
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });

    test('add_external_id action is parsed correctly', () => {

        const result = parseAuditTrailRecord(add_external_id);
        expect(result.metadataType).toBe(MetadataType.CustomField);
        expect(result.operationType).toBe(OperationType.MODIFIED);
        expect(result.fieldModified).toBe('externalId');
        expect(result.changeCategory).toBe(ChangeCategory.DATABASE_CONFIGURATION);

    });
});
