export interface Attributes {
    type: string;
    url: string;
  }
  
  export interface CreatedBy {
    attributes: Attributes;
    Username: string;
  }
  
  export interface SetupAuditTrailEntry {
    attributes: Attributes;
    Id: string;
    CreatedBy: CreatedBy;
    CreatedDate: string;
    Action: string;
    Display: string;
  }
  