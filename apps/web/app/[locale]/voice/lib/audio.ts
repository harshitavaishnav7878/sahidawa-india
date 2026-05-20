export type StoredVoiceAnimationPreference = "enabled" | "disabled" | null;

export function resolveVoiceAnimationPreference({
    storedPreference,
    prefersReducedMotion,
}: {
    storedPreference: StoredVoiceAnimationPreference;
    prefersReducedMotion: boolean;
}) {
    if (storedPreference === "enabled") {
        return true;
    }

    if (storedPreference === "disabled") {
        return false;
    }

    return !prefersReducedMotion;
}

export function stopMediaStream(stream: Pick<MediaStream, "getTracks"> | null | undefined) {
    stream?.getTracks().forEach((track) => {
        track.stop();
    });
}
