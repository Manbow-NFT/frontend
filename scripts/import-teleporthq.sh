#!/bin/zsh
unzip manbow-frontend-teleporthq-next.zip -d teleporthq
rm teleporthq/package.json 
rm teleporthq/pages/_app.js
zmv -W 'teleporthq/components/*.js' 'teleporthq/components/*.tsx'
zmv -W 'teleporthq/pages/*.js' 'teleporthq/pages/*.tsx'
find "teleporthq/" -name "*.tsx" -exec sed -i '' 's/props/props: any/' {} \;
cp teleporthq/components/*.tsx src/components/
cp teleporthq/pages/*.tsx src/pages/
cp teleporthq/pages/style.css src/styles/
rm -r teleporthq
