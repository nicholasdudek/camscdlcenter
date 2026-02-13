const fs = require('fs');
const { minify } = require('csso');
const JavaScriptObfuscator = require('javascript-obfuscator');

console.log('Building minified and obfuscated files...\n');

// 1. Minify CSS
console.log('1. Minifying CSS...');
const css = fs.readFileSync('styles.css', 'utf-8');
const header = css.substring(0, css.indexOf('*/') + 2);
const cssContent = css.substring(css.indexOf('*/') + 2);

const minifiedCss = minify(cssContent);
const finalCss = header + '\n' + minifiedCss.css;
fs.writeFileSync('styles.min.css', finalCss);
console.log('   ✓ styles.min.css created');
console.log('   Size: ' + fs.statSync('styles.min.css').size + ' bytes (original: ' + fs.statSync('styles.css').size + ' bytes)');

// 2. Obfuscate JavaScript
console.log('\n2. Obfuscating JavaScript...');
const js = fs.readFileSync('main.js', 'utf-8');
const jsHeader = js.substring(0, js.indexOf('*/') + 2);
const jsContent = js.substring(js.indexOf('*/') + 2);

const obfuscationResult = JavaScriptObfuscator.obfuscate(jsContent, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false, // Set to false to avoid issues
    debugProtectionInterval: 0,
    disableConsoleOutput: false,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 10,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayEncoding: ['base64'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 2,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
});

const finalJs = jsHeader + '\n' + obfuscationResult.getObfuscatedCode();
fs.writeFileSync('main.min.js', finalJs);
console.log('   ✓ main.min.js created');
console.log('   Size: ' + fs.statSync('main.min.js').size + ' bytes (original: ' + fs.statSync('main.js').size + ' bytes)');

console.log('\n✓ Build complete!');
