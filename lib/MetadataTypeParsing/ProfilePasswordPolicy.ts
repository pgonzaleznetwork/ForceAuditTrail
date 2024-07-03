import { ParseResult } from '../../types';
import { OperationType } from '../../types';
import { MetadataType } from '../../types';
import { ChangeCategory } from '../../types';

export const parseResultsByProfilePasswordPolicyActions = new Map<string, ParseResult>();

parseResultsByProfilePasswordPolicyActions.set('forgotPasswordRedirectEnableForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'forgotPasswordRedirect',
    sampleDisplay: "Changed Custom: Marketing Profile profile: Turned on the Don't immediately expire links in forgot password emails setting",
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('minimumPasswordLifetimeEnableForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'minimumPasswordLifetime',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Enabled requiring minimum password lifetime',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('obscureSecretAnswerEnableForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'obscure',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Enabled obscuring of secret answer',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordquestionForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'passwordQuestion',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password question policy from Cannot contain password to None',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordcomplexityForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'passwordComplexity',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password complexity policy from Must include alpha and numeric characters to Must include alpha, numeric, and special characters',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordminlengthForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'minimumPasswordLength',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password minimum length policy from 8 characters to 12 characters',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordhistoryForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'passwordHistory',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password history policy from 3 passwords remembered to 4 passwords remembered',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordexpiryForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'passwordExpiration',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password expiry policy from 90 days to One year',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordlockoutForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'lockoutInterval',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password lockout period policy from 15 minutes to 30 minutes',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});

parseResultsByProfilePasswordPolicyActions.set('passwordmaxinvalidForProfile', {
    metadataType: MetadataType.ProfilePasswordPolicy,
    operationType: OperationType.MODIFIED,
    fieldModified: 'maxLoginAttempts',
    sampleDisplay: 'Changed profile Custom: Marketing Profile: Changed password maximum invalid attempts policy from 10 to No Limit',
    changeCategory: ChangeCategory.SECURITY_PASSWORDS
});
