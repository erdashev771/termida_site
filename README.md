# Termida landing page

Buildless HTML, CSS, and vanilla JavaScript. Intended hosting: GitHub Pages at `https://termida.uz`.

## Current status

Development scaffold only. Not ready to publish. The supplied Termida logo is integrated in the header, footer, and favicon. The green appearance follows this asset; real app screens are still pending.

- Android and iOS dashboards supplied and integrated as enhanced sample-data previews. Other app screenshots are still pending. The supplied JPG logo is preserved without editing.
- Detailed features and user journey require verification against the app.
- User-provided Android APK and iOS IPA MediaFire links are configured. All support and IPA installation help links use `https://t.me/twinstack_support`.
- Privacy policy and terms now have linked EN/UZ/RU draft pages (`privacy.html`, `terms.html`), marked noindex until outstanding details are confirmed. Official social links and the developer Telegram channel are configured from owner-provided URLs. No legal documents have been invented.
- Dedicated favicon sizes, manifest icons, and social preview still need production preparation.
- Browser viewport QA, accessibility review, and Lighthouse measurement pending.

## Files

`index.html`: page structure and development placeholders. `css/style.css`: mobile-first neutral layout. `js/main.js`: accessible navigation behavior. `404.html`: error page. `CNAME`, `robots.txt`, and `sitemap.xml`: domain and discovery configuration.

## Beta distribution and support

- Android APK: `https://www.mediafire.com/file/m0vxn70sjnbh76v/Termida-Beta-v1.0.0.apk/file`
- iOS IPA: `https://www.mediafire.com/file/wden28tkg04azs9/Termida-Beta-v1.0.0.ipa/file`
- Telegram support and IPA installation assistance: `https://t.me/twinstack_support`

These exact URLs were supplied by the product owner. Downloads open the MediaFire file pages rather than promising a direct download or automatic installation. All external actions use `target="_blank"` and `rel="noopener noreferrer"`. Distribution notes in English, Uzbek, and Russian state that IPA installation requires a Windows computer or a separately purchased compatible iOS signing certificate, as supplied by the owner. No signing provider, certificate seller, or installation method beyond this information has been invented. Store cards remain Coming Soon.

Remote verification was attempted, but the web tool could not access either MediaFire URL or the Telegram URL. File availability, file integrity, and installation have not been verified; no APK or IPA was downloaded or executed.

## Languages and appearance

English, Uzbek, and Russian are available through the header selector, including on the error page. `js/i18n.js` keeps English source text paired with Uzbek and Russian translations, translates accessible labels and metadata, and updates the document language without reloading. Add dictionary entries when changing source copy. This client-side selector does not provide separately indexed language URLs.

`js/preferences.js` applies appearance before styles load. `css/preferences.css` contains the brand palette, dark theme, controls, and language layout adjustments. The initial theme follows the system, unless the visitor explicitly selects light or dark. Preferences use localStorage keys `termida-language` and `termida-theme`; blocked storage falls back to in-memory controls. No cookies, backend, or libraries are used.

Browser QA was attempted, but both the in-app browser and Edge reported connection timeout/refusal to the local preview. Viewport rendering and persistence in a real browser remain unverified.

## Dashboard assets

Original user-provided JPGs are retained under `assets/screenshots/*-original.jpg`. The user requested clearer images and corrected percentages. Built-in imagegen produced separate `android-dashboard-edited.png` (842 × 1869) and `ios-dashboard-edited.png` (813 × 1934). These are AI-edited presentation images, not pixel-identical originals. Their output pixel counts are lower than the originals; no claim of increased native resolution is made. They display at no more than 288 CSS pixels wide inside the frame, retain their actual aspect ratios, and open at native resolution on click. No CSS blur, opacity, cropping, or perspective transforms are applied to screen content.

Sample data: Android 1530 / 2250 kcal = 68%; consumed protein/carbs/fat 104/166/50g yield 1530 kcal at 4/4/9 kcal per gram. iOS 1802 / 2650 kcal = 68%; consumed macros 120/227/46g yield 1802 kcal. The visible disclosure is translated in all three languages. Preview selectors use real buttons and `aria-pressed`; hidden previews are excluded from navigation.

Device presentation uses separate CSS chassis for Android and iOS: metallic edge highlights, slim black bezels, side controls, centered Android camera, and iOS camera island/home indicator. Hardware decorations sit over unused screen space and are hidden from assistive technology. Screen images retain their native aspect ratios with no perspective transforms or stretching; the full-resolution image link opens the undecorated asset. These are generic platform-inspired frames, not claims of an exact device model.

Imagegen prompt specifications: edit each supplied platform screenshot separately; retain the mountain background, green/black palette, Uzbek labels, status bar, cards and navigation; sharpen typography and remove JPEG softness; no frame or perspective in the generated bitmap. Android: center `1 530`, goal `/ 2 250 kkal`, `68%`, clockwise lime ring 68%; macros `104g / 160g`, `166g / 256g`, `50g / 65g`, bars 65/65/77%. iOS: center `1 802`, goal `/ 2 650 kkal`, `68%`, ring 68%; macros `120g / 165g`, `227g / 329g`, `46g / 75g`, bars 73/69/61%. Request highest available resolution, preserve full portrait screen, and avoid extra graphics or invented features. Generated output was visually reviewed for labels and values; original-layout fidelity remains approximate.

## Preview

Open `index.html` directly for a basic local review. Use a trusted static preview server for browser testing; no application backend or build step is required.

## GitHub Pages

1. Complete the pending production items above and replace preview labels.
2. Push the static files to the intended GitHub repository.
3. Under Settings → Pages, choose deployment from the intended branch and root folder.
4. Set the custom domain to `termida.uz`; retain the included `CNAME`.
5. Verify domain ownership, configure the domain according to current GitHub Pages DNS documentation, and enable HTTPS after certificate provisioning.

DNS records have not been changed. Verify the current official GitHub documentation before making DNS changes; values are intentionally not hard-coded here.

## Release review

Test widths 320, 375, 390, 430, 768, 1024, 1440, and 1920px, including navigation, touch targets, horizontal overflow, screenshot aspect ratios, download behavior, FAQ keyboard use, reduced motion, enlarged text, landscape, and console errors. Test real Safari and Android Chrome where available. Measure Lighthouse rather than assuming scores.

If assets fail to load, check file-name casing and relative paths. If the custom domain fails, check Pages settings, DNS propagation, domain ownership, and HTTPS status. A custom-domain 404 page intentionally uses root-relative paths.

## Footer and brand presentation

The brand icon is 52px in the header (44px below 360px viewport width), and 64px in the footer. The footer uses responsive brand, navigation, and social/community columns. Social and developer community labels support English, Uzbek, and Russian. The existing support account is kept separate from the developer channel.

Owner-provided footer destinations (open in new tabs with `noopener noreferrer`):

- Telegram: `https://t.me/termida_uz`
- Instagram: `https://www.instagram.com/termida_uz`
- X: `https://x.com/twinstackuz`
- Discord: `https://discord.gg/UuTFSURwRB`
- Termida Developers on Telegram: `https://t.me/twinstackdev`

Social icons are inline SVG with visible platform names and no external icon dependencies. URL placement and link attributes are checked locally; remote profile availability and the Discord invite's validity have not been verified.

## Legal document status

The owner confirmed Twinstack Technologies owns Termida; collected data includes account information, weight, height, and food photos; storage uses MySQL at HostX in Uzbekistan; deleting an account removes its related data and backup copies without additional retention. These statements are owner-provided and were not audited against backend code. The frontend does not implement account deletion.

`privacy.html` and `terms.html` contain static English, Uzbek, and Russian articles, with the shared language and appearance controls. Footer policy links now point to these drafts, and copyright includes All rights reserved. Drafts are noindex and excluded from the sitemap.

Remaining privacy questions: actual OpenAI request contents, API features/settings, retention, and processing regions. Official reference checked: https://developers.openai.com/api/docs/guides/your-data . OpenAI storage can differ by endpoint and settings; deletion in Termida must not be presented as automatic deletion of all third-party records. Terms still need applicable jurisdiction, age eligibility, and payment/subscription conditions confirmed. No effective date, legal audit, or compliance certification is claimed. No secrets, server IPs, database credentials, or admin endpoints are included.
