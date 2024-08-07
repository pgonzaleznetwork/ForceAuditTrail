

export function extractProfileName(input: string): string | null {
    // Regular expression to match the profile name
    const regex = /Changed profile\s+([^:]+:[^:]*|[^:]+)\s*:/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}