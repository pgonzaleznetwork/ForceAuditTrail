import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
import {extractNameFromAuthProviderEvent} from './utils/regex';

export const parseResultsByAuthProviderActions: Record<string, ParseResult> = {
  enableRequireMfa: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'requireMfa',
    sampleDisplay: "Enabled \"Require MFA on Sign-In\" for for Org Provider",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractNameFromAuthProviderEvent
  },
  enableSendSecretInApis: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'sendSecretInApis',
    sampleDisplay: "Enabled \"Send secrets in APIs\" for for Org Provider",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractNameFromAuthProviderEvent
  },
  changeAuthProviderConsumerSecret: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'consumerSecret',
    sampleDisplay: "Changed Auth. Provider Consumer Secret",
    changeCategory: ChangeCategory.SECURITY
  },
  changeAuthProviderConsumerKey: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'consumerKey',
    sampleDisplay: "Changed Auth. Provider Consumer Key",
    changeCategory: ChangeCategory.SECURITY
  },
  disableSendSecretInApis: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'sendSecretInApis',
    sampleDisplay: "Disabled \"Send secrets in APIs\" for for Org Provider",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractNameFromAuthProviderEvent
  },
  addAuthProviderLogoutUrl: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'logoutUrl',
    sampleDisplay: "Added Auth. Provider Logout URL https://pablo8-dev-ed.develop.lightning.force.com/",
    changeCategory: ChangeCategory.SECURITY
  },
  addAuthProviderIconUrl: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'iconUrl',
    sampleDisplay: "Added Auth. Provider Icon URL https://login.for.com/icons/amazon-black.png",
    changeCategory: ChangeCategory.COSMETIC
  },
  addAuthProviderExecutionUser: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'executionUser',
    sampleDisplay: "Added Auth. Provider Execution User Pablo Gonzalez",
    changeCategory: ChangeCategory.SECURITY
  },
  addAuthProviderRegistrationHandlerCreate: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'registrationHandler',
    sampleDisplay: "Autocreated Auth. Provider Registration Handler",
    changeCategory: ChangeCategory.SECURITY
  },
  disableRequireMfa: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'requireMfa',
    sampleDisplay: "Disabled \"Require MFA on Sign-In\" for for Org Provider",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractNameFromAuthProviderEvent
  },
  enableOptimization: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: null,
    sampleDisplay: "Enabled \"Use subdomain in callback URLs\" for for Org Provider",
    changeCategory: ChangeCategory.SECURITY
  },
  addAuthProviderErrorUrl: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.MODIFIED,
    fieldModified: 'errorUrl',
    sampleDisplay: "Added Auth. Provider Error URL https://pablo8-dev-ed.develop.lightning.force.com/",
    changeCategory: ChangeCategory.SECURITY
  },
  insertAuthProvider: {
    metadataType: MetadataType.AuthProvider,
    operationType: OperationType.CREATED,
    fieldModified: null,
    sampleDisplay: "Created Auth. Provider for Org Provider",
    changeCategory: ChangeCategory.SECURITY,
    nameExtractorFunction: extractNameFromAuthProviderEvent
  }
};
