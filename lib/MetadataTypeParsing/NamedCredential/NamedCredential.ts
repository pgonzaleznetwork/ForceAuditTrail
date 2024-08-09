import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import {extractNamedCredentialNameFromFieldChangeEvent,
    extractNamedCredentialNameFromDmlEvent
} from './utils/regex';

export const parseResultsByNamedCredentialActions: Record<string, ParseResult> = {
    namedCredentialDelete: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.DELETED,
        fieldModified: null,
        sampleDisplay: "Deleted named credential: MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction:extractNamedCredentialNameFromDmlEvent
    },
    namedCredentialParameterInsert: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Created a new parameter: ExternalCredential (Parameter Type: Authentication, External Credential: myexternal) for MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction: extractNamedCredentialNameFromFieldChangeEvent
    },
   
    namedCredentialInsert: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created a new named credential: MyNamedCredential",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction:extractNamedCredentialNameFromDmlEvent
    },
    namedCredentialParameterFieldsChange: {
        metadataType: MetadataType.NamedCredential,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Updated the parameter: Url from (Parameter Type: Url, Parameter Value: https://happysoup.io) to (Parameter Type: Url, Parameter Value: https://happysoup.dev) for NewNamedCred",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction: extractNamedCredentialNameFromFieldChangeEvent
    }
};
