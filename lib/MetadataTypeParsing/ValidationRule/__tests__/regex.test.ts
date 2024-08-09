import {extractValidationRuleNameFromNewEvent,
    extractValidationRuleNameFromChangeEvent,
    extractValidationRuleNameFromDeleteEvent
} from '../utils/regex';

describe('Validation Rule Info Extraction', () => {

    it('should extract the object name and rule name, remove trailing "s" from the object name, and return them concatenated', () => {

        const input1 = 'New Brokers validation rule "check_if_is_active"';
        expect(extractValidationRuleNameFromNewEvent(input1)).toBe('Broker.check_if_is_active');

        const input2 = 'New Accounts validation rule "validate_account_status"';
        expect(extractValidationRuleNameFromNewEvent(input2)).toBe('Account.validate_account_status');
    });

    it('should extract the object name and rule name for formula change', () => {
        const input = 'Changed formula for Accounts validation "Only_admin_can_edit_account_number" from...';
        expect(extractValidationRuleNameFromChangeEvent(input)).toBe('Account.Only_admin_can_edit_account_number');
    });

    it('should extract the object name and rule name for error message change', () => {
        const input = 'Changed error message for Accounts validation "Tamir_validation" from "Tamir is not a good name! jk, it\'s a great name" to "Tamir is not a good name! jk, it\'s a great name :)"';
        expect(extractValidationRuleNameFromChangeEvent(input)).toBe('Account.Tamir_validation');
    });

    it('should extract the object name and rule name for active flag change', () => {
        const input = 'Changed active flag for Accounts validation "Tamir_validation" from 1 to 0';
        expect(extractValidationRuleNameFromChangeEvent(input)).toBe('Account.Tamir_validation');
    });

    it('should extract the object name and rule name for error location change', () => {
        const input = 'Changed error location for Accounts validation "Tamir_validation" from "Top of Page" to "Account Number"';
        expect(extractValidationRuleNameFromChangeEvent(input)).toBe('Account.Tamir_validation');
    });

    it('should extract the object name and rule name for delete event', () => {
        const input = 'Removed Accounts validation "will_never_fire"';
        expect(extractValidationRuleNameFromDeleteEvent(input)).toBe('Account.will_never_fire');
    });
});