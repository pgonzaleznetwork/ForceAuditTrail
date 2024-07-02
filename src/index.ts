import {getMetadataType} from '../lib/metadataTypesByActions';
import { SetupAuditTrailEntry } from '../types'

export function parseEntry(entry: SetupAuditTrailEntry){

    const deepCloneEntry = JSON.parse(JSON.stringify(entry));

    const { Action } = deepCloneEntry;
    let something: boolean = entry.Action;
    deepCloneEntry.metadataType = getMetadataType(Action);
    return deepCloneEntry;

}