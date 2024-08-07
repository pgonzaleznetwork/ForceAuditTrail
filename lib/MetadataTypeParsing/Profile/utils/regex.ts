

export function extractProfileName(input : string) : string | null {
    let regex;
    
    // Check if the input contains "field-level security"
    if (input.includes("field-level security")) {
        // Regular expression to match the profile name up to the last colon before "field-level security"
        regex = /Changed profile\s+(.*):\s+field-level security/;
    } else {
        // Regular expression to match the profile name up to the first colon
        regex = /Changed profile\s+([^:]+(?::[^:]+)?):/;
    }
    
    // Execute the regex on the input string
    const match = input.match(regex);
    
    // If there's a match, return the captured group, otherwise return null
    return match ? match[1].trim() : null;
}