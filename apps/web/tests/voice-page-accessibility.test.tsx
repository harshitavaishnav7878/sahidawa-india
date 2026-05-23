import { renderToStaticMarkup } from "react-dom/server";

import VoiceTriagePage from "../app/[locale]/voice/page";

jest.mock("next-intl", () => ({
    useTranslations: () => (key: string) => key,
}));

jest.mock("sonner", () => ({
    toast: {
        error: jest.fn(),
        success: jest.fn(),
    },
}));

jest.mock("../app/[locale]/components/PageHeader", () => ({
    PageHeader: ({ title, subtitle }: { title: string; subtitle: string }) => (
        <header>
            <a href="/">Back</a>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    ),
}));

describe("VoiceTriagePage accessibility shell", () => {
    it("renders a skip link before a focusable main landmark target", () => {
        const markup = renderToStaticMarkup(<VoiceTriagePage />);
        const skipLinkIndex = markup.indexOf('href="#main-content"');
        const mainIndex = markup.indexOf("<main");

        expect(skipLinkIndex).toBeGreaterThan(-1);
        expect(mainIndex).toBeGreaterThan(-1);
        expect(skipLinkIndex).toBeLessThan(mainIndex);
        expect(markup).toContain('id="main-content"');
        expect(markup).toContain('tabindex="-1"');
    });
});
