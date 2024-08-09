import {extractRemoteProxyName} from '../utils/regex';

describe('Remote Proxy Name Extraction', () => {
    
    it('should extract the remote proxy name from the "insert" event string', () => {
        const input = "Remote Proxy insert NetSuite: https://api.netsuite.com";
        expect(extractRemoteProxyName(input)).toBe('NetSuite');
    });

    it('should extract the remote proxy name from the "delete" event string', () => {
        const input = "Remote Proxy delete NetSuite: https://api22.netsuite.com";
        expect(extractRemoteProxyName(input)).toBe('NetSuite');
    });

    it('should extract the remote proxy name from the "update" event string', () => {
        const input = "Remote Proxy update NetSuite: https://api22.netsuite.com";
        expect(extractRemoteProxyName(input)).toBe('NetSuite');
    });
});