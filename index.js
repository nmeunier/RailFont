const fs = require('fs');
require('icon.font')({ // Default options
    fontName: 'railfont',
    src: './icons',
    dest: './build',
    configFile: './icons/_icon-config.json',
    saveConfig: true,
    image: false,
    html: true,
    htmlTemplate: './templates/html.hbs',
    outputHtml: true,
    css: true,
    cssTemplate: './templates/css.hbs',
    outputCss: true,
    fixedWidth: false,
    normalize: true,
    silent: true,
    types: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
    templateOptions: {
        classPrefix: 'rf-',
        baseSelector: '.rf',
        baseClassname: 'rf'
    },
    codepointRanges: [
        [0xe001, Infinity]
    ]
}).then(function(){
    // Finished
    console.log('Rail font generated successfully !');
})