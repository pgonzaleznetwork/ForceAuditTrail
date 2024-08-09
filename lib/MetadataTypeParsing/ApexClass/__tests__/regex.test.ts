import {extractApexClassName} from '../utils/regex';

describe('ApexClass Regex Tests', () => {

    it('should extract ApexClass name from the "Changed" string', () => {
        const input = "Changed ChangedAccountApex Apex Class code";
        expect(extractApexClassName(input)).toBe('ChangedAccountApex');
    });

    it('should extract ApexClass name from the "Created" string', () => {
        const input = "Created PastryTests Apex Class code";
        expect(extractApexClassName(input)).toBe('PastryTests');
    });

    it('should extract ApexClass name from the "Deleted" string', () => {
        const input = "Deleted AccountRecordTests Apex Class code";
        expect(extractApexClassName(input)).toBe('AccountRecordTests');
    });
});