function scoreDraftPosition(draftPosition) {
    if (draftPosition > 255) {
        return 'undrafted'
    }
    else if (draftPosition) {
        (draftPosition > 1)
        return 'third-round'
    }
    return 'first-pick'
}

export default scoreDraftPosition;
