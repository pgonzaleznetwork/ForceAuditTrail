import { SetupAuditTrailRecord } from '../types'
import { parseResultsbyMetadataType } from 'lib/MetadataTypeParsing/allMetadataParsing';
import { ParseResult } from '../types';

export function parseAuditTrailRecord(entry: SetupAuditTrailRecord){

    //to avoid modifying the original object
    const clonedRecord: SetupAuditTrailRecord = JSON.parse(JSON.stringify(entry));

    if(parseResultsbyMetadataType.has(clonedRecord.Action)) {
        const parseResult = parseResultsbyMetadataType.get(clonedRecord.Action);
        console.log(parseResult);
    }

    //return clonedRecord;
  
 

}