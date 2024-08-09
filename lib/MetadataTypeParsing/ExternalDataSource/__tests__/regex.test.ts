import {extractDataSourceNameFromInsertEvent,
    extractDataSourceNameFromFieldChangeEvent,
    extractDataSourceNameFromEncryptedFieldChangeEvent
} from '../utils/regex';

describe('Data Source Name Extraction', () => {

    it('should extract the data source name from creation event', () => {

        const input = "Created a new Salesforce Connect: Cross-Org external data source: Replication Org";
        expect(extractDataSourceNameFromInsertEvent(input)).toBe('Replication Org');
    });

    it('should extract the source name from field change event', () => {
        const input = "OAuth Scope changed for Simple URL external data source Source From from testScope to null";
        expect(extractDataSourceNameFromFieldChangeEvent(input)).toBe('Source From');
    });

    it('should extract the source name from the event string', () => {
        const input = "Password changed for Salesforce Connect: Cross-Org external data source Replication Org";
        expect(extractDataSourceNameFromEncryptedFieldChangeEvent(input)).toBe('Replication Org');
    });
});