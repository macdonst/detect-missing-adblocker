# detect-missing-adblocker

> A web component that will show a warning if a visitor doesn't have an ad blocker.



## Including the component to an HTML file

1. Import custom element:

### Unpkg

```html
<script type="module" src="https://unpkg.com/detect-missing-adblock/detect-missing-adblock.js?module=true"></script>
<link rel="stylesheet" href="https://unpkg.com/detect-missing-adblock/detect-missing-adblock/nativeads.js.css">
```

### Snowpack

```html
<script type="module" src="https://cdn.skypack.dev/detect-missing-adblock"></script>
<link rel="stylesheet" href="https://cdn.skypack.dev/detect-missing-adblock/nativeads.js.css">
```

2. Start using it!

```html
<detect-missing-adblock>
  <span slot="title">🦠 Ad-blocker not detected</span>
  <span slot="message">This site doesn't contain ads but consider installing a browser extension that blocks ads and other malicious scripts in your browser to protect your privacy and security.
  <p><a href="https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/#resources" target="_blank">Learn more.</a></p>
  </span>
</detect-missing-adblock>
```

## Including the component from NPM

1. Install `detect-missing-adblock` NPM package:

```console
npm i detect-missing-adblock
```

2. Import custom element:

```javascript
import DetectMissingAdBlocker from 'detect-missing-adblock'
```

3. Include that `script` tag in your HTML.
4. Start using it:

```html
<detect-missing-adblocker>
  <span slot="title">🦠 Ad-blocker not detected</span>
  <span slot="message">This site doesn't contain ads but consider installing a browser extension that blocks ads and other malicious scripts in your browser to protect your privacy and security.
  <p><a href="https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/#resources" target="_blank">Learn more.</a></p>
  </span>
</detect-missing-adblocker>
```
