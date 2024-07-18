import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';

export const parseResultsByRemoteSiteSettingActions: Record<string, ParseResult> = {
    remoteproxy: {
        metadataType: MetadataType.RemoteSiteSetting,
        operationType: OperationType.UNKNOWN,
        fieldModified: null,
        sampleDisplay: "Remote Proxy insert NetSuite: https://api.netsuite.com",
        changeCategory: ChangeCategory.INTEGRATION
    }
};
