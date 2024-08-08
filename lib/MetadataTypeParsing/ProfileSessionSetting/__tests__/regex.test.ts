import {extractProfileNameFromSessionSettingEvent} from '../utils/regex';

describe('Extract name from ProfileSessionSetting event', () => {

    it('should extract profile name from the string', () => {
        
        const input = 'Changed profile Changed: Marketing Profile Changed: Changed Session Timeout Value from 120 to 90 minutes';
        expect(extractProfileNameFromSessionSettingEvent(input)).toBe('Changed: Marketing Profile Changed');
    });
});