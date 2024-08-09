import {extractNamedCredentialNameFromFieldChangeEvent,
    extractNamedCredentialNameFromDmlEvent
} from '../utils/regex';

describe('NamedCredential Regex Tests', () => {

    it('should extract the name field change event', () => {

        const input = "Updated the parameter: Url from (Parameter Type: Url, Parameter Value: https://happysoup.io) to (Parameter Type: Url, Parameter Value: https://happysoup.dev) for NewNamedCred";
        expect(extractNamedCredentialNameFromFieldChangeEvent(input)).toBe('NewNamedCred');
    });

    it('should extract the named credential from the "Deleted" event string', () => {
        const input = "Deleted named credential: MyNamedCredential";
        expect(extractNamedCredentialNameFromDmlEvent(input)).toBe('MyNamedCredential');
    });

    it('should extract the named credential from the "Created" event string', () => {
        const input = "Created a new named credential: MyNamedCredential";
        expect(extractNamedCredentialNameFromDmlEvent(input)).toBe('MyNamedCredential');
    });
});