import {extractProfileName,
    extractProfileNameFromIpRange,
    extractProfileNameFromDataCategory,
    extractProfileNameFromLoginFlowEvent
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

describe('Profile Regex from Data Category', () => {

    let defaultString :string = `Changed visibility of All Articles Data Category Group for Custom: Support Profile from Custom: [All > Apex] to Custom: [All]`;

    it('should extract profile name from the string', () => {
        expect(extractProfileNameFromDataCategory(defaultString)).toBe('Custom: Support Profile');
    });

});

describe('Profile Regex from UI Login Flow', () => {

    it('should extract profile name from "Enabled" string', () => {

        const input1 = "Enabled UI Login flow for for Standard User with flow standard profile flow";
        expect(extractProfileNameFromLoginFlowEvent(input1)).toBe('for Standard User');
    });

    it('should extract profile name from "Deleted" string', () => {

        const input2 = "Deleted UI login flow for for Standard User";
        expect(extractProfileNameFromLoginFlowEvent(input2)).toBe('for Standard User');
    });

    it('should extract profile name from "Reassigned" string', () => {

        const input3 = "Reassigned UI login flow for for Contract Manager to Custom: Sales Profile";
        expect(extractProfileNameFromLoginFlowEvent(input3)).toBe('for Contract Manager');
    });
});

