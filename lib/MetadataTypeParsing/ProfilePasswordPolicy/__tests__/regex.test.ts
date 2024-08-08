import { extractProfileNameFromPasswordPolicyEvent,
    extractProfileNameFromforgotPasswordRedirect
 } from '../../ProfilePasswordPolicy/utils/regex';

describe('ProfilePasswordPolicy Regex Tests', () => {

    it('should extract profile name from "Enabled requiring minimum password lifetime" string', () => {
        const input = 'Changed profile Custom: Marketing Profile: Enabled requiring minimum password lifetime';
        expect(extractProfileNameFromPasswordPolicyEvent(input)).toBe('Custom: Marketing Profile');
    });

    it('should extract profile name from "Enabled obscuring of secret answer" string', () => {
        const input = 'Changed profile Custom: Marketing Profile: Enabled obscuring of secret answer';
        expect(extractProfileNameFromPasswordPolicyEvent(input)).toBe('Custom: Marketing Profile');
    });

    it('should extract profile name from "Changed password question policy from Cannot contain password to None" string', () => {
        const input = 'Changed profile Custom: Marketing Profile: Changed password question policy from Cannot contain password to None';
        expect(extractProfileNameFromPasswordPolicyEvent(input)).toBe('Custom: Marketing Profile');
    });

    it('should extract profile name from "Some other action description" string', () => {
        const input = 'Changed profile Custom: Marketing Profile: Some other action description';
        expect(extractProfileNameFromPasswordPolicyEvent(input)).toBe('Custom: Marketing Profile');
    });
});

describe('ProfilePasswordPolicy Regex Tests for forgotPasswordRedirect', () => {
    it('should extract profile name from the string', () => {
        const input = "Changed Custom: Marketing Profile profile: Turned on the Don't immediately expire links in forgot password emails setting";
        expect(extractProfileNameFromforgotPasswordRedirect(input)).toBe('Custom: Marketing Profile');
    });
});