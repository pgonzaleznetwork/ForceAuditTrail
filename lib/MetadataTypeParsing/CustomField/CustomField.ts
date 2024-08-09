import { ParseResult } from '../../../types';
import { OperationType } from '../../../types';
import { MetadataType } from '../../../types';
import { ChangeCategory } from '../../../types';
/*import { extractProfileName , extractProfileNameFromIpRange,
  extractProfileNameFromDataCategory,
  extractProfileNameFromLoginFlowEvent
} from './utils/regex';*/

export const parseResultsByCustomFieldActions: Record<string, ParseResult> = {

    createdCFAutoNumCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created my auto number field custom field (Auto Number: Starting from 0) on Brokers",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    createdCFFormulaCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created custom formula field formula custom field (Checkbox) on Brokers",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    createdCFLookupCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.CREATED,
        fieldModified: null,
        sampleDisplay: "Created custom lookup relationship lookup field (Account) on Brokers",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFOptionOnOffCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "The custom field option Restricted Delete for lookup field on object Brokers has changed from on to off",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFOptionOffOnCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "The custom field option Restricted Delete for lookup field on object Brokers has changed from off to on",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFFieldHelpCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'inlineHelpText',
        sampleDisplay: "Changed help text of my auto number field custom field on Brokers",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFTypeFormulaCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'type',
        sampleDisplay: `Changed field type of formula custom field custom formula field on Brokers from Checkbox to Date`,
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: 'Changed label of custom field on Brokers from formula custom field to formula custom field1',
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    changedCFFormulaCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'formula',
        sampleDisplay: `Changed formula of formula custom field custom field on Brokers from "true" to "false"`,
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    changedCFAutoNumCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'displayFormat',
        sampleDisplay: "Changed display format of my auto number field custom field on Brokers from A-{0000} to AB-{0000}",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    dataClassificationUpdate: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: null,
        sampleDisplay: "Changed the Field Usage metadata field from None to Active for the my auto number field field on Broker",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },

    add_external_id: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'externalId',
        sampleDisplay: "Created external identifier designation: Broker.my auto number field",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupDelete: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter',
        sampleDisplay: "Deleted Lookup Filter from lookup field on Broker",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupCreateNewField: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter',
        sampleDisplay: "Set Lookup Filter Criteria for lookup field on Broker to lookup field: Account Owner ID equals Broker: Owner ID",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupEdit: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter',
        sampleDisplay: "Changed Lookup Filter Informational Message for lookup field on Broker from none to text",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupRequired: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter.isOptional',
        sampleDisplay: "Set lookup Filter for lookup field on Broker to required",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupActivate: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter.active',
        sampleDisplay: "Activated Lookup Filter for lookup field on Broker",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupDeactivate: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter.active',
        sampleDisplay: "Deactivated Lookup Filter for lookup field on Broker",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    filteredLookupOptional: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter.isOptional',
        sampleDisplay: "Set lookup Filter for lookup field on Broker to optional",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    },
    
    filteredLookupCreate: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'LookupFilter',
        sampleDisplay: "Added Lookup Filter to lookup field on Broker",
        changeCategory: ChangeCategory.DATABASE_CONFIGURATION
    }
}


/**
 * add regex for the following actions [filteredLookupCreateNewField]
 * Set Lookup Filter Informational Message for lookup field on Broker to none
 * Set Lookup Filter Criteria for lookup field on Broker to lookup field: Account Owner ID equals Broker: Owner ID	
 * Set Lookup Filter Error Message for lookup field on Broker to Value does not exist or does not match filter criteria.	
 */