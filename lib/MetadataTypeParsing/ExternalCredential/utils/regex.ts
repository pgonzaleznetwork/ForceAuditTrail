
export function extractNameFromExternalCredentialEvent(input: string): string | null {
    // Regular expression to match the name after "external credential:"
    const regex = /external credential:\s*(.+)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractNameFromExternalCredentialFieldChangeEvent(input: string): string | null {
    // Regular expression to match the name between "for external credential " and " from"
    const regex = /for external credential\s+(.+)\s+from/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}