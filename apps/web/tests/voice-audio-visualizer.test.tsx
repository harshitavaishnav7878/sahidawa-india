import { renderToStaticMarkup } from "react-dom/server";

import { VoiceAnimationToggle } from "../app/[locale]/voice/VoiceAnimationToggle";
import { VoiceListeningPanel } from "../app/[locale]/voice/VoicePanels";
import { resolveVoiceAnimationPreference, stopMediaStream } from "../app/[locale]/voice/lib/audio";

describe("voice audio visualizer helpers", () => {
    it("defaults animations off when the user prefers reduced motion", () => {
        expect(
            resolveVoiceAnimationPreference({
                storedPreference: null,
                prefersReducedMotion: true,
            })
        ).toBe(false);
    });

    it("lets an explicit stored preference override reduced-motion defaults", () => {
        expect(
            resolveVoiceAnimationPreference({
                storedPreference: "enabled",
                prefersReducedMotion: true,
            })
        ).toBe(true);

        expect(
            resolveVoiceAnimationPreference({
                storedPreference: "disabled",
                prefersReducedMotion: false,
            })
        ).toBe(false);
    });

    it("stops every track on a media stream and tolerates missing streams", () => {
        const firstStop = jest.fn();
        const secondStop = jest.fn();
        const stream = {
            getTracks: () => [{ stop: firstStop }, { stop: secondStop }],
        };

        expect(() => stopMediaStream(null)).not.toThrow();
        stopMediaStream(stream);

        expect(firstStop).toHaveBeenCalledTimes(1);
        expect(secondStop).toHaveBeenCalledTimes(1);
    });
});

describe("VoiceListeningPanel visualizer fallback", () => {
    it("renders accessible visualizer and volume labels without requiring a DOM canvas", () => {
        const markup = renderToStaticMarkup(
            <VoiceListeningPanel
                transcript="Start speaking about your symptoms..."
                statusLabel="Listening for symptoms"
                stream={null}
                isListening={true}
                isFading={false}
                animationsEnabled={false}
                visualizerLabel="Microphone waveform"
                volumeLabel="Volume level"
                visualizerUnavailableLabel="Live waveform unavailable"
            />
        );

        expect(markup).toContain("Microphone waveform");
        expect(markup).toContain("Volume level");
        expect(markup).toContain("Live waveform unavailable");
        expect(markup).toContain("Start speaking about your symptoms...");
    });
});

describe("VoiceAnimationToggle", () => {
    it("renders as a polished switch with an active state", () => {
        const markup = renderToStaticMarkup(
            <VoiceAnimationToggle
                label="Voice animations"
                enabled={true}
                onToggle={() => undefined}
            />
        );

        expect(markup).toContain('role="switch"');
        expect(markup).toContain('aria-checked="true"');
        expect(markup).toContain("Voice animations");
        expect(markup).toContain("bg-emerald-600");
        expect(markup).toContain("shadow-emerald-500/25");
    });
});
