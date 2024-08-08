
export function extractProfileNameFromPasswordPolicyEvent(input : string) : string | null {
    // Regular expression to match the profile name after "Changed profile" and ending at the last colon
    const regex = /Changed profile\s+(.+):/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}

export function extractProfileNameFromforgotPasswordRedirect(input : string) : string | null {
    // Regular expression to match the profile name after "Changed" and before " profile:"
    const regex = /Changed\s+(.+?)\s+profile:/;
    
    const match = input.match(regex);
    
    return match ? match[1].trim() : null;
}