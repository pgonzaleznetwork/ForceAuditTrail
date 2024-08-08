export function extractProfileNameFromSessionSettingEvent(input : string) : string | null {
    // Regular expression to match the profile name after "Changed profile" and before the last occurrence of ": Changed"
    const regex = /Changed profile\s+(.+):\s+Changed/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}