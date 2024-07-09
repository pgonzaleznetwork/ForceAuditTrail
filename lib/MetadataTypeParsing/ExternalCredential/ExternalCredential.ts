import { ParseResult, OperationType, MetadataType, ChangeCategory } from '../../../types';

export const parseResultsByExternalCredentialActions: Record<string, ParseResult> = {
    externalCredentialDelete: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.DELETED,
        fieldModified: null,
        sampleDisplay: "Deleted external credential: myNewExternalCred",
        changeCategory: ChangeCategory.INTEGRATION
    },
    externalCredentialFieldChange: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Authentication Protocol changed for external credential myNewExternalCred from Basic Authentication to Custom",
        changeCategory: ChangeCategory.INTEGRATION
    },
    externalCredentialInsert: {
        metadataType: MetadataType.ExternalCredential,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created a new external credential: myNewExternalCred",
        changeCategory: ChangeCategory.INTEGRATION
    }
};
