export function extractProfileName(input : string) : string | null {
    let regex;
    
    
    if (input.includes("field-level security")) {
        // Regular expression to match the profile name up to the last colon before "field-level security"
        regex = /Changed profile\s+(.*):\s+field-level security/;
    } else {
        // Regular expression to match the profile name up to the first colon
        regex = /Changed profile\s+([^:]+(?::[^:]+)?):/;
    }
    
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractProfileNameFromIpRange(input : string) : string | null {
    // Regular expression to match the profile name between "to" and "from"
    const regex = /to\s+(.+?)\s+from/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractProfileNameFromDataCategory(input : string) : string | null {

    const regex = /Changed visibility of All Articles Data Category Group for\s+(.+?)\s+from\s/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractProfileNameFromLoginFlowEvent(input : string) : string | null {
    // Regex for "Deleted" case by default
    let regex = /for\s+(.+)$/;
    
    if (input.startsWith("Enabled") || input.startsWith("Reassigned")) {
        // Regex for "Enabled" and "Reassigned" cases
        regex = /for\s+(.+?)\s+(?:to|with)/;
    }
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}
