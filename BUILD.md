# Code Organization & Obfuscation Documentation

## Overview

The Cam's CDL Center website has been restructured to prevent easy copying by:
1. **Splitting code** into separate files (HTML, CSS, JavaScript)
2. **Minifying** CSS to reduce size and readability
3. **Obfuscating** JavaScript with advanced scrambling techniques

## File Structure

### Production Files (Deploy These)
- **`index.html`** (21 KB) - Main HTML structure with minimal inline code
- **`styles.min.css`** (24 KB) - Minified and compressed CSS stylesheet
- **`main.min.js`** (106 KB) - Heavily obfuscated and scrambled JavaScript

### Source Files (Not Deployed - Excluded via .gitignore)
- **`styles.css`** - Original readable CSS (for development)
- **`main.js`** - Original readable JavaScript (for development)

### Build Files
- **`build.js`** - Node.js script that minifies CSS and obfuscates JavaScript
- **`build.sh`** - Shell script wrapper for easy building
- **`package.json`** - NPM dependencies configuration

## Obfuscation Techniques Applied

### CSS Minification
The CSS has been minified using CSSO with the following optimizations:
- ✅ Whitespace removal
- ✅ Comment removal (except copyright)
- ✅ Property merging and shorthand conversion
- ✅ Redundant rule elimination
- **Result:** 48% size reduction (47 KB → 24 KB)

### JavaScript Obfuscation
The JavaScript has been heavily obfuscated using JavaScript Obfuscator with aggressive settings:

#### Code Transformation
- ✅ **Control Flow Flattening** (75%) - Breaks linear code flow into complex switch-case statements
- ✅ **Dead Code Injection** (40%) - Adds non-functional code to confuse readers
- ✅ **String Array Encoding** - Stores all strings in encoded arrays with shuffling
- ✅ **String Array Rotation** - Rotates array indices to prevent mapping
- ✅ **Number to Expression** - Converts numbers to complex mathematical expressions
- ✅ **Transform Object Keys** - Obscures object property names
- ✅ **Self-Defending Code** - Detects beautification attempts and breaks

#### Variable & Function Obfuscation
- ✅ **Hexadecimal Identifiers** - All variable names converted to hex (e.g., `_0x4a2c`)
- ✅ **String Splitting** - Breaks strings into 10-character chunks
- ✅ **Base64 Encoding** - Encodes string arrays in base64
- ✅ **Wrapper Functions** - Wraps string access in multiple function layers

#### Result
- **Size increase:** 17 KB → 106 KB (due to obfuscation overhead)
- **Readability:** Near impossible to understand without reverse engineering
- **Functionality:** 100% preserved, all features work identically

## How It Prevents Copying

### 1. **Code Separation**
Instead of one 2,440-line file, code is split across 3 files:
- Makes it harder to copy everything at once
- Requires understanding of file dependencies
- External references can be tracked/monitored

### 2. **Minification**
CSS is compressed to a single line with:
- No indentation or formatting
- Minimal variable names
- No comments (except copyright notice)
- Difficult to read and understand

### 3. **JavaScript Obfuscation**
JavaScript is transformed into unreadable code:

**Before (readable):**
```javascript
function updateTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
```

**After (obfuscated):**
```javascript
function _0x21dc3c(_0x112b06,_0x4ce7fc,_0x305af7,_0x5e1236){
    return _0x3e3f89(_0x112b06-0xb9,_0x4ce7fc-0x477,_0x5e1236,_0x5e1236-0x14e);
}
const _0x25c6c9=_0x5b5f52[_0x430b70(0x111,0x162)](_0x3aa37d[0x2e5]());
```

### 4. **Legal Protection**
All files retain copyright headers:
- Clear ownership statements
- Legal warnings about unauthorized use
- Contact information for enforcement

## Building the Production Files

### Prerequisites
```bash
npm install
```

This installs:
- `csso-cli` - CSS minifier
- `terser` - JavaScript minifier
- `javascript-obfuscator` - Code obfuscator

### Running the Build

**Option 1: Using the shell script**
```bash
./build.sh
```

**Option 2: Using Node directly**
```bash
node build.js
```

### Build Process
1. Reads `styles.css` and minifies to `styles.min.css`
2. Reads `main.js` and obfuscates to `main.min.js`
3. Preserves copyright headers in both files
4. Reports file sizes and compression ratios

## Deployment

### Files to Deploy
Deploy only these files to your web server:
- ✅ `index.html`
- ✅ `styles.min.css`
- ✅ `main.min.js`
- ✅ `cdlcenter.png`
- ✅ `Cams CDL Logo.png`
- ✅ `ll.webp`
- ✅ `CNAME`
- ✅ `.nojekyll`

### Files NOT to Deploy
Do **not** deploy these development files:
- ❌ `styles.css` (unminified source)
- ❌ `main.js` (unobfuscated source)
- ❌ `build.js` (build script)
- ❌ `build.sh` (build script)
- ❌ `package.json` (npm config)
- ❌ `package-lock.json` (npm lock file)
- ❌ `node_modules/` (dependencies)

These are automatically excluded via `.gitignore`.

## Maintenance & Updates

### Making Changes to CSS
1. Edit `styles.css` (the readable version)
2. Run `./build.sh` to rebuild `styles.min.css`
3. Test the changes
4. Deploy only `styles.min.css`

### Making Changes to JavaScript
1. Edit `main.js` (the readable version)
2. Run `./build.sh` to rebuild `main.min.js`
3. Test thoroughly (obfuscation can sometimes break code)
4. Deploy only `main.min.js`

### Making Changes to HTML
1. Edit `index.html` directly
2. No rebuild needed
3. Test and deploy

## File Size Comparison

| File | Original | Optimized | Change |
|------|----------|-----------|--------|
| **HTML** | 83 KB (2,440 lines) | 21 KB (376 lines) | -75% |
| **CSS** | 47 KB (inline) | 24 KB (external) | -48% |
| **JavaScript** | 17 KB (inline) | 106 KB (external) | +524%* |
| **Total** | 83 KB (1 file) | 151 KB (3 files) | +82%* |

*JavaScript size increases due to obfuscation overhead, but provides significant security benefit.

## Security Benefits

### What This Prevents
✅ **Casual Copying** - Average users cannot easily copy/paste the code  
✅ **Quick Modifications** - Extremely difficult to modify without breaking  
✅ **Code Understanding** - Nearly impossible to understand logic flow  
✅ **Easy Replication** - Cannot simply copy and reuse the code  
✅ **Student Copying** - Prevents use as template for homework/projects  

### What This Doesn't Prevent
❌ **Determined Hackers** - Advanced reverse engineering is still possible  
❌ **Server Access** - wget/curl can still download the files  
❌ **Legal Protection** - Technical measures don't replace copyright law  
❌ **Screenshots** - Visual appearance can still be copied  

## Technical Notes

### Browser Compatibility
- Obfuscated code works in all modern browsers
- Same compatibility as original code
- No performance impact on users

### Debugging
- Use browser's "Prettify" feature to make obfuscated code somewhat readable
- Original source files (`styles.css`, `main.js`) available for development
- Self-defending code may break in some debuggers

### Performance
- Minified CSS loads faster (smaller file size)
- Obfuscated JS is slightly slower to parse (more complex)
- Overall performance impact: minimal (<50ms difference)

## Copyright Protection

All production files include copyright headers:

```
/*
 * © 2026 Cam's CDL Center - All Rights Reserved
 * This code is protected by copyright law.
 * Unauthorized copying, distribution, modification, or use
 * is strictly prohibited and may result in legal action.
 */
```

Combined with the obfuscation, this provides:
- **Legal deterrent** - Clear ownership and warnings
- **Technical barrier** - Difficult to copy and understand
- **Traceability** - Copyright notices remain in code
- **Evidence** - Shows protection measures were taken

## Troubleshooting

### Build fails with "module not found"
```bash
rm -rf node_modules package-lock.json
npm install
./build.sh
```

### Obfuscated JavaScript doesn't work
- Check browser console for errors
- Verify all files are uploaded to server
- Ensure file paths are correct in index.html
- Test with original `main.js` to isolate issue

### CSS styles not applying
- Clear browser cache
- Check that `styles.min.css` is in same directory as `index.html`
- Verify file was uploaded correctly
- Check Network tab in browser DevTools

## Support

For questions or issues with the build process:

**Contact:**
- Email: camscdlcenter@camsgroupinc.com
- Phone: (407) 449-5254

---

**Last Updated:** February 13, 2026  
**Version:** 2.0.0 - Code Split & Obfuscated
