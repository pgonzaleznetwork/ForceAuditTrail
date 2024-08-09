import {extractNameFromAuthProviderEvent} from '../utils/regex';

describe('AuthProvider Regex Tests', () => {

    it('should extract AuthProvider name from the MFA event string', () => {

        const input = 'Enabled "Require MFA on Sign-In" for for Org Provider';
        expect(extractNameFromAuthProviderEvent(input)).toBe('for Org Provider');
    });
});