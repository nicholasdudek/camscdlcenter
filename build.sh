#!/bin/bash
# Build script for Cam's CDL Center website
# This script minifies CSS and obfuscates JavaScript

echo "Building production files..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --silent
fi

# Run build script
node build.js

echo ""
echo "Build complete!"
echo "Files ready for deployment:"
echo "  - index.html (HTML structure)"
echo "  - styles.min.css (Minified CSS)"
echo "  - main.min.js (Obfuscated JavaScript)"
