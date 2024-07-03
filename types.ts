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

export enum MetadataType{
  ValidationRule = 'ValidationRule',
  Profile = 'Profile',
  CustomField = 'CustomField',
  Layout = 'Layout',
  Unknown = 'Unknown'
}

export interface ParseResult {
  operationType: OperationType;
  metadataType: MetadataType;
  fieldModified: string | null;
  sampleDisplay: string | null;
  setupAuditTrailRecord?: SetupAuditTrailRecord;
}