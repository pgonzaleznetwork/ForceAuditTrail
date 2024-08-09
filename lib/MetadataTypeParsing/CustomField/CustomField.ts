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
    changedCFFieldHelpCustom: {
        metadataType: MetadataType.CustomField,
        operationType: OperationType.MODIFIED,
        fieldModified: 'inlineHelpText',
        sampleDisplay: "Changed help text of my auto number field custom field on Brokers",
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
}