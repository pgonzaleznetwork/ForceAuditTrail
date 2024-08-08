import {extractProfileName,
    extractProfileNameFromIpRange
} from '../../Profile/utils/regex';

describe('Profile Regex from most entries', () => {

    let defaultString :string = `Changed profile Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`;

    it('should extract profile name from the string', () => {
        expect(extractProfileName(defaultString)).toBe('Sales Development Manager');
    });

    let defaultStringWithExtraColon :string = `Changed profile Custom: Sales Development Manager: general user permission Access to view Data Assessment was changed from disabled to enabled`;

    it('should extract profile name from the string with colon', () => {
        expect(extractProfileName(defaultStringWithExtraColon)).toBe('Custom: Sales Development Manager');
    });
});

describe('Profile Regex from IP Range', () => {

    let deletedEntry :string = 'Deleted Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255';
    let addedEntry: string = 'Added Login Ip Range to Custom: Support Profile from 1.1.1.2 to 255.255.255.255';


    it('should extract profile name from the deleted entry', () => {
        expect(extractProfileNameFromIpRange(deletedEntry)).toBe('Custom: Support Profile');
    });

    it('should extract profile name from the added entry', () => {
        expect(extractProfileNameFromIpRange(addedEntry)).toBe('Custom: Support Profile');
    });
    
});


