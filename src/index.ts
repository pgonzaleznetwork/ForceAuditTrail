import { ChangeCategory, SetupAuditTrailRecord } from '../types'
import { parseResultsbyMetadataType } from '../lib/MetadataTypeParsing/allMetadataParsing';
import { ParseResult } from '../types';
import { OperationType } from '../types';
import { MetadataType } from '../types';

export function parseAuditTrailRecord(entry: SetupAuditTrailRecord) : ParseResult{

    //to avoid modifying the original object TODO: use structure clone method
    const clonedRecord: SetupAuditTrailRecord = JSON.parse(JSON.stringify(entry));
    
    const parseResult = parseResultsbyMetadataType[clonedRecord.Action];

    if(parseResult){
        parseResult.setupAuditTrailRecord = clonedRecord;
        return parseResult;
    }

    return {
        operationType: OperationType.UNKNOWN,
        metadataType: MetadataType.Unknown,
        fieldModified: null,
        sampleDisplay: null,
        setupAuditTrailRecord: clonedRecord,
        changeCategory: ChangeCategory.UNKNOWN
    };  
}