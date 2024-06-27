import {getMetadataType} from '../lib/metadataTypesByActions';

export function parseEntry(entry){

    const deepCloneEntry = JSON.parse(JSON.stringify(entry));

    const { Action } = deepCloneEntry;
    deepCloneEntry.metadataType = getMetadataType(Action);
    return deepCloneEntry;

}