export function extractRemoteProxyName(input: string): string | null {
    // Regular expression to match the name between "insert", "delete", or "update" and ": http"
    const regex = /\b(?:insert|delete|update)\s+(.+?):\s+http/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}