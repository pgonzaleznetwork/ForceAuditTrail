export function extractApexClassName(input: string): string | null {
    // Regular expression to match the profile name between the first word and "Apex Class code"
    const regex = /^\w+\s+(.+)\s+Apex Class code$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}