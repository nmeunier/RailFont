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
    // Font generated, create index file
    fs.readdir('./icons', function(err, items) {
        let content = {};
        let fileFilter = /\.svg$/;
        for (var i=0; i<items.length; i++) {
            if(fileFilter.test(items[i])){
                let name = items[i].replace('.svg', '');
                content[name] = 'rf-' + name;
            }
        }
        fs.writeFile('./build/icon-list.json',JSON.stringify(content),{encoding:'utf8',flag:'w'}, ()=>{
            console.log('Rail font generated successfully !');
        })
    });

})