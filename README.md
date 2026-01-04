# dox.com — Static demo site

This is a minimal static site with a transparent black (glass) background and 30+ cool buttons that reveal information in a panel below when clicked.

Files:
- `index.html` — page markup
- `styles.css` — styling & effects
- `script.js` — button generation and click handling (edit this file to customize)

How to customize
1. Open `script.js`.
2. Edit the `items` array at the top. Each entry has:
   - `id` — unique id for the button (keep unique)
   - `label` — the text shown on the button
   - `html` — HTML string inserted into the info panel when the button is clicked

Example item:
{
  id: "my-button",
  label: "My Button",
  html: "<h3 class='title'>My Button</h3><p class='body'>This is the info for my button.</p>"
}

You can add/remove items. The page will regenerate the grid automatically.

Hosting / 24/7
- For a free and simple option, push these files to a public GitHub repository and enable GitHub Pages (use the repository's main branch root).
- Alternatively deploy to Vercel or Netlify for continuous deploys from GitHub (they provide free tiers).
- If you want a persistent backend or advanced features (auth, DB, realtime), I can help convert this into a Next.js app or add a backend and deployment pipeline.

Accessibility notes
- Buttons are keyboard-accessible (Enter / Space activate).
- The info panel uses `aria-live="polite"` to announce changes for screen readers.

Safety note
- Don't publish private personal data or other sensitive information publicly. This template is neutral and can be used for many benign purposes (documentation, FAQ, feature list, etc.).

Want me to:
- Fill in custom button labels and content you provide? I can update the array for you.
- Push this to a GitHub repo and set up GitHub Pages or Vercel deployment? Share repo access or let me know the repo name.
- Add search/filter for buttons, categories, or multi-open accordion behavior? Tell me which features you'd like next.