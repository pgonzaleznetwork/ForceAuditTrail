import {getMetadataType} from '../lib/metadataTypesByActions';
import { SetupAuditTrailRecord } from '../types'

export function addExtraProps(entry: SetupAuditTrailRecord){

    const deepCloneEntry = JSON.parse(JSON.stringify(entry));

    const { Action } = deepCloneEntry;
  
    deepCloneEntry.metadataType = getMetadataType(Action);
    return deepCloneEntry;

}