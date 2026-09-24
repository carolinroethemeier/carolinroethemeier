# carolinroethemeier.github.io

Personal website of Carolin Roethemeier. Plain HTML and CSS, no build step.

## Put it online (about 15 minutes)

### 1. Create the repository
1. Sign in to GitHub as **carolinroethemeier**.
2. Click **+** (top right) → **New repository**.
3. Repository name: `carolinroethemeier.github.io` (exactly this).
4. Choose **Public**, tick nothing else, click **Create repository**.

### 2. Upload the files
1. On the new repository page, click **uploading an existing file**.
2. Unzip the download on your computer, open the `carolinroethemeier.github.io` folder,
   select **everything inside it** (including the `assets`, `css` and `js` folders) and drag it into the browser.
3. Click **Commit changes**.

> The file `.nojekyll` is hidden on Mac/Windows. It isn't essential, so don't worry if it doesn't upload.

### 3. Switch on GitHub Pages
1. In the repository, go to **Settings** → **Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then **Save**.
3. After 1–2 minutes the site is live at **https://carolinroethemeier.github.io**.
4. Tick **Enforce HTTPS** on the same page once it's available.

### 4. Connect the contact form (Formspree)
1. Create a free account at https://formspree.io with **carolin.roethemeier@tum.de** and confirm the email.
2. Click **New form**, name it "Website", and copy the form endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
3. In the repository, open `contact.html`, click the pencil icon (Edit), search for `YOUR_FORM_ID`
   and replace it with your ID (the part after `/f/`, e.g. `abcdwxyz`). Click **Commit changes**.
4. Send yourself a test message from the live site. Formspree asks you to confirm the first submission by email.

Until step 4 is done, the form tells visitors to email you directly instead.

## Changing content later
- Edit any `.html` file directly on GitHub (pencil icon) and commit. The site updates within a minute or two.
- To replace the CV, upload a new PDF with the **same name** into `assets/` (`Carolin_Roethemeier_CV.pdf`).
- To replace the photo, upload a new `assets/portrait.jpg` (portrait format, about 880 × 1080 px).

## Own domain (optional)
1. Buy a domain, e.g. `roethemeier.de`, from a registrar such as INWX or Strato.
2. At the registrar, add these DNS records:
   - `A` records for the bare domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record for `www` pointing to `carolinroethemeier.github.io`
3. In **Settings → Pages → Custom domain**, enter the domain and save, then tick **Enforce HTTPS**.
4. In each `.html` file, update the `og:image` address at the top if you want link previews to use the new domain.

## What's inside
| Path | What it is |
|---|---|
| `index.html` | Home |
| `research.html` | Research, publications, teaching, supervision |
| `experience.html` | Industry experience and education |
| `contact.html` | Contact form and links |
| `imprint.html`, `privacy.html` | Legal pages (Impressum, Datenschutz) |
| `404.html` | Shown for broken links |
| `css/site.css` | All styling, including phone and tablet layouts |
| `js/contact.js` | Sends the form to Formspree without leaving the page |
| `assets/` | CV, photos, favicon and self-hosted fonts (no Google connection) |
