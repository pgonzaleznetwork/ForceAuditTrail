import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';

export const parseResultsByExternalDataSourceActions: Record<string, ParseResult> = {
    xdsInsert: {
    metadataType: MetadataType.ExternalDataSource,
    operationType: OperationType.CREATED,
    fieldModified: null,
    sampleDisplay: "Created a new Salesforce Connect: Cross-Org external data source: Replication Org",
    changeCategory: ChangeCategory.INTEGRATION
  },
  xdsFieldChange: {
    metadataType: MetadataType.ExternalDataSource,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: "OAuth Scope changed for Simple URL external data source Replication Org from testScope to null",
    changeCategory: ChangeCategory.SECURITY
  },
  xdsEncryptedFieldChange: {
    metadataType: MetadataType.ExternalDataSource,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: "Password changed for Salesforce Connect: Cross-Org external data source Replication Org	",
    changeCategory: ChangeCategory.SECURITY
  }
};
