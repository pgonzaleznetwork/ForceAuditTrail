export function extractDataSourceNameFromInsertEvent(input: string): string | null {
    // Regular expression to match the name after "data source:"
    const regex = /data source:\s*(.+)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractDataSourceNameFromFieldChangeEvent(input: string): string | null {
    // Regular expression to match the name between "external data source" and the last "from"
    const regex = /external data source\s+(.+)\s+from/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractDataSourceNameFromEncryptedFieldChangeEvent(input: string): string | null {
    // Regular expression to match the name after "external data source"
    const regex = /external data source\s+(.+)$/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}