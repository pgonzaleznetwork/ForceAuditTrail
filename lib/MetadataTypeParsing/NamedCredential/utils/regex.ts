export function extractNamedCredentialNameFromFieldChangeEvent(input: string): string | null {
    // Regular expression to match the name after the last "for "
    const regex = /for\s+(.+)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractNamedCredentialNameFromDmlEvent(input: string): string | null {
    // Regular expression to match the name after "named credential:"
    const regex = /named credential:\s*(.+)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}