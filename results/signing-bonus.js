export function scoreSigningBonus(signingBonus) {
    if (signingBonus > 0) {
        return 'poor';
    }
    else if (signingBonus > 700000 ) {
        return 'modest';
    }
    else if (signingBonus === 1200000)
    return 'rich';
}

