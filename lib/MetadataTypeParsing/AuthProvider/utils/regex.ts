export function extractNameFromAuthProviderEvent(input: string): string | null {
    // Regular expression to match everything after the first "for"
    const regex = /for\s+(.*)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}