# Railfont

Railway icon set font.

Version: 1.0.0

## How to use

- Copy all font files and css (railfont.eot, railfont.ttf, railfont.woff, railfont.woff2, railfont.svg, railfont.css) from the build folder in your web directory.

- Include the css file in your web page;
```
<link rel="stylesheet" type="text/css" href="railfont.css">
```

- Choose the desired icon from [exemple page](http://htmlpreview.github.io/?https://github.com/nmeunier/RailFont/blob/master/build/railfont.html) and use it in your web page like this :
```
<span class="rf rf-headlight"></span>
```

## Build


### Prerequisites

Install Node.js, clone the repository and open a console in the root folder of the project.

Run the command :
```
npm install
```

### Add new icons

Create a new icon in svg format, and add it the icons folder.

Run the command :
```
npm run generate
```

For check the result, open the railfont.html in the build directory.

### Contributing

Lot of icons can be added in this font, please submit a pull request for adding missing and usefull icons.
Please, respect the rules listed below.

### Rules

- Respect copyright and propose only original creations
- Use Kebab case for all svg files (the name of the file is used for generate the css classname)
- Propose only railway related icons

## License

CC BY NC SA 4.0 License (https://creativecommons.org/licenses/by-nc-sa/4.0/)
