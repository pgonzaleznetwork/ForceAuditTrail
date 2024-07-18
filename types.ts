export interface Attributes {
    type: string;
    url: string;
  }
  
export interface CreatedBy {
  attributes: Attributes;
  Username: string;
}

export interface SetupAuditTrailRecord {
  attributes: Attributes;
  Id: string;
  CreatedBy: CreatedBy;
  CreatedDate: string;
  Action: string;
  Display: string;
}

export enum OperationType {
  CREATED = 'CREATED',
  MODIFIED = 'MODIFIED',
  DELETED = 'DELETED',
  UNKNOWN = 'UNKNOWN'
}

export enum ChangeCategory {
  COSMETIC = 'COSMETIC',  
  BUSINESS_LOGIC_DECLARATIVE = 'BUSINESS_LOGIC_DECLARATIVE',
  BUSINESS_LOGIC_CODE = 'BUSINESS_LOGIC_CODE',
  SECURITY = 'SECURITY',
  DATA_INTEGRITY = 'DATA_INTEGRITY',
  DATABASE_CONFIGURATION = 'DATABASE_CONFIGURATION',
  SECURITY_PASSWORDS = 'SECURITY_PASSWORDS',
  INTEGRATION = 'INTEGRATION',
  UNKNOWN = 'UNKNOWN'
}

export enum MetadataType{
  ValidationRule = 'ValidationRule',
  Profile = 'Profile',
  ProfileSessionSetting = 'ProfileSessionSetting',
  CustomField = 'CustomField',
  ApexClass = 'ApexClass',
  Layout = 'Layout',
  ProfilePasswordPolicy = 'ProfilePasswordPolicy',
  ExternalCredential = 'ExternalCredential',
  RemoteSiteSetting = 'RemoteSiteSetting',
  NamedCredential = 'NamedCredential',
  Unknown = 'Unknown'
}

export interface ParseResult {
  operationType: OperationType;
  metadataType: MetadataType;
  fieldModified: string | null;
  sampleDisplay: string | null;
  setupAuditTrailRecord?: SetupAuditTrailRecord;
  changeCategory: ChangeCategory;
}