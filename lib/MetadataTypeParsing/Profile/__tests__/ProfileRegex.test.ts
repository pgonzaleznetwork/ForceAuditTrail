import {extractProfileName} from '../../Profile/utils/regex';

describe('ProfileRegex', () => {

    let defaultString :string = `Changed profile Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`;

    it('should extract profile name from the string', () => {
        expect(extractProfileName(defaultString)).toBe('Sales Development Manager');
    });

    let defaultStringWithExtraColon :string = `Changed profile Custom: Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`;

    it('should extract profile name from the string with colon', () => {
        expect(extractProfileName(defaultStringWithExtraColon)).toBe('Custom: Sales Development Manager');
    });
});


