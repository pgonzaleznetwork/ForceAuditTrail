import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';

export const parseResultsByNamedCredentialActions: Record<string, ParseResult> = {
    namedCredentialDelete: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.DELETED,
        fieldModified: null,
        sampleDisplay: "Deleted named credential: MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION
    },
    namedCredentialParameterInsert: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Created a new parameter: ExternalCredential (Parameter Type: Authentication, External Credential: myexternal) for MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION
    },
   
    namedCredentialInsert: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created a new named credential: MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION
    }
};
