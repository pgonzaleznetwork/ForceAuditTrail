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

