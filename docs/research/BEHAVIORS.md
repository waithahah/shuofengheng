# Interaction Behaviors - garbotableware.com

## 1. Top Bar & Navigation Header
- **Top Bar**: Fixed dark bar (`#1f1f1f`) containing email (`sale@garbotableware.com`), phone (`+86 20 8479 1380`), social links, search button, and language modal trigger.
- **Search Modal**: Triggers modal dialog with search input field on clicking search icon.
- **Language Switcher**: Opens modal drawer with language selection (Google Translate widget integration).
- **Navigation Dropdowns**: Multi-level hover dropdown menus (`Products` -> `Ceramic`, `Kitchenware`, `Plasticware`, `Flatware`, `Opal Glass`).

## 2. Hero Banner Swiper
- **Mechanism**: Auto-playing carousel (`swiper-bundle`) with 3000ms delay.
- **Interactivity**: Next/Prev side arrow buttons, interactive pagination dots at bottom.
- **Responsive behavior**: Banner image switches source for mobile screens (`<picture><source media="(max-width: 968px)">`).

## 3. Categories Section ("WE ARE TABLEWARE MANUFACTURER")
- **Layout**: 6 category cards (Ceramic, Flatware, Kitchenware, Plasticware, Opal Glass, Glassware).
- **Hover behavior**: Image scale transition (`1.1x`) on hover + overlay dark gradient with "View More" link reveal.

## 4. Factory & About Swiper ("Tableware Industry supply chain master")
- **Layout**: Split 2-column layout (Text story on left, autoplaying factory image swiper on right).
- **Control**: Custom prev/next navigation arrows (`.main-about .swiperbtn`).

## 5. Wholesale Top Ranking Tableware Grid
- **Layout**: 8-product card grid.
- **Hover behavior**: Card border highlight (`#c4151c`) + image subtle zoom + title hover color change.

## 6. News & Articles Section
- **Layout**: 3 article cards with red date badge (`day`/`month`), title, summary text, and "READ MORE" button.

## 7. Footer
- **Layout**: 4 columns (Contact info, About Us links, Catalog download links, Email newsletter subscription + social icons).
- **Back to Top**: Floating / footer back-to-top button with smooth scroll.
