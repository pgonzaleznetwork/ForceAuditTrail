import { ParseResult, OperationType, MetadataType, ChangeCategory } from '../../../types';
import { extractNameFromExternalCredentialEvent,extractNameFromExternalCredentialFieldChangeEvent } from './utils/regex';

export const parseResultsByExternalCredentialActions: Record<string, ParseResult> = {
    externalCredentialDelete: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.DELETED,
        fieldModified: null,
        sampleDisplay: "Deleted external credential: myNewExternalCred",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction: extractNameFromExternalCredentialEvent
    },
    externalCredentialFieldChange: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Authentication Protocol changed for external credential myNewExternalCred from Basic Authentication to Custom",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction:extractNameFromExternalCredentialFieldChangeEvent
    },
    externalCredentialInsert: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created a new external credential: myNewExternalCred",
        changeCategory: ChangeCategory.INTEGRATION,
        nameExtractorFunction: extractNameFromExternalCredentialEvent
    }
};
