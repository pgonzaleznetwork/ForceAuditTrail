
import {extractNameFromExternalCredentialEvent,
    extractNameFromExternalCredentialFieldChangeEvent
} from '../utils/regex';

describe('External Credential Name Extraction', () => {

    it('should extract the external credential name from the "Deleted" event string', () => {

        const input = "Deleted external credential: myNewExternalCred";
        expect(extractNameFromExternalCredentialEvent(input)).toBe('myNewExternalCred');
    });

    it('should extract the external credential name from the "Created" event string', () => {

        const input = "Created a new external credential: myNewExternalCred";
        expect(extractNameFromExternalCredentialEvent(input)).toBe('myNewExternalCred');
    });

    it('should extract the external credential name from the authentication protocol change event string', () => {
        const input = "Authentication Protocol changed for external credential myNewExternalCred from Basic Authentication to Custom";
        expect(extractNameFromExternalCredentialFieldChangeEvent(input)).toBe('myNewExternalCred');
    });
});