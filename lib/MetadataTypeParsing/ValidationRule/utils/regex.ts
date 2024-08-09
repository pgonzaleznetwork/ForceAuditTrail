
export function extractValidationRuleNameFromNewEvent(input: string): string {
    // Regular expression to match the object name between "New " and the last "validation rule"
    const objectRegex = /New\s+(.+?)\s+validation rule/;
    
    // Regular expression to match the rule name after "validation rule "
    const ruleRegex = /validation rule\s+"(.+)"$/;
    
    // Extract the object name
    const objectMatch = input.match(objectRegex);
    let objectName = objectMatch ? objectMatch[1].trim() : '';
    
    objectName = returnAsSingular(objectName);

    // Extract the rule name
    const ruleMatch = input.match(ruleRegex);
    const ruleName = ruleMatch ? ruleMatch[1].trim() : '';
    
    return createApiName(objectName,ruleName);
}

export function extractValidationRuleNameFromChangeEvent(input: string): string {
    // Regular expression to match the object name between "for " and the first " validation"
    const objectRegex = /for\s+(.+?)\s+validation/;
    
    // Regular expression to match the rule name between "validation " and " from"
    const ruleRegex = /validation\s+"(.+)"\s+from/;
    
    // Extract the object name
    const objectMatch = input.match(objectRegex);
    let objectName = objectMatch ? objectMatch[1].trim() : '';
    
    objectName = returnAsSingular(objectName);

    // Extract the rule name
    const ruleMatch = input.match(ruleRegex);
    const ruleName = ruleMatch ? ruleMatch[1].trim() : '';
    
    return createApiName(objectName,ruleName);
}

export function extractValidationRuleNameFromDeleteEvent(input: string): string {
    // Regular expression to match the object name between "Removed " and " validation"
    const objectRegex = /Removed\s+(.+?)\s+validation/;
    
    // Regular expression to match the rule name between "validation " and the end
    const ruleRegex = /validation\s+"(.+)"$/;
    
    // Extract the object name
    const objectMatch = input.match(objectRegex);
    let objectName = objectMatch ? objectMatch[1].trim() : '';
    
    objectName = returnAsSingular(objectName);

    // Extract the rule name
    const ruleMatch = input.match(ruleRegex);
    const ruleName = ruleMatch ? ruleMatch[1].trim() : '';
    
    return createApiName(objectName,ruleName);
}

function returnAsSingular(objectName: string) : string{
    if (objectName.endsWith('s')) {
        objectName = objectName.slice(0, -1);
    }
    return objectName;
}

//like Account.Prevent_update
function createApiName(parentObject: string,ruleName: string) : string {
    return `${parentObject}.${ruleName}`;
}