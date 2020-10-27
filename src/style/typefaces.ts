// font-face syntax stolen from https://google-webfonts-helper.herokuapp.com/
export const fontUrl = "https://static.vciwifi.com/fonts"; // TODO: Put in env file
const uniNeueBook = `${fontUrl}/uni-neue/unineue-book-webfont`;
const uniNeueBold = `${fontUrl}/uni-neue/unineue-bold-webfont`;
const uniNeueHeavy = `${fontUrl}/uni-neue/unineue-heavy-webfont`;
const sourceSansProRegular = `${fontUrl}/source-sans-pro/source-sans-pro-v13-latin_latin-ext-regular`;
const sourceSansProBold = `${fontUrl}/source-sans-pro/source-sans-pro-v13-latin_latin-ext-700`;

const uniNeueBookList = [
  `local('Uni Neue Book')`,
  `local('UniNeue-Book')`,
  `local('UniNeueBook')`,
  `local('uni-neue-book')`,
  `url('${uniNeueBook}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */`,
  `url('${uniNeueBook}.woff2') format('woff2') /* Super Modern Browsers */`,
  `url('${uniNeueBook}.woff') format('woff') /* Modern Browsers */`,
  `url('${uniNeueBook}.ttf') format('truetype') /* Safari, Android, iOS */`,
  `url('${uniNeueBook}.svg') format('svg') /* Legacy iOS */`,
];

const uniNeueBoldList = [
  `local('Uni Neue Bold')`,
  `local('UniNeue-Bold')`,
  `local('UniNeueBold')`,
  `local('uni-neue-Bold')`,
  `url('${uniNeueBold}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */`,
  `url('${uniNeueBold}.woff2') format('woff2') /* Super Modern Browsers */`,
  `url('${uniNeueBold}.woff') format('woff') /* Modern Browsers */`,
  `url('${uniNeueBold}.ttf') format('truetype') /* Safari, Android, iOS */`,
  `url('${uniNeueBold}.svg') format('svg') /* Legacy iOS */`,
];

const uniNeueHeavyList = [
  `local('Uni Neue Heavy')`,
  `local('UniNeue-Heavy')`,
  `local('UniNeueHeavy')`,
  `local('uni-neue-Heavy')`,
  `url('${uniNeueHeavy}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */`,
  `url('${uniNeueHeavy}.woff2') format('woff2') /* Super Modern Browsers */`,
  `url('${uniNeueHeavy}.woff') format('woff') /* Modern Browsers */`,
  `url('${uniNeueHeavy}.ttf') format('truetype') /* Safari, Android, iOS */`,
  `url('${uniNeueHeavy}.svg') format('svg') /* Legacy iOS */`,
];

const sourceSansProRegularList = [
  `local('Source Sans Pro Regular')`,
  `local('SourceSansPro-Regular')`,
  `local('SourceSansProRegular')`,
  `local('source-sans-pro-regular')`,
  `url('${sourceSansProRegular}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */`,
  `url('${sourceSansProRegular}.woff2') format('woff2') /* Super Modern Browsers */`,
  `url('${sourceSansProRegular}.woff') format('woff') /* Modern Browsers */`,
  `url('${sourceSansProRegular}.ttf') format('truetype') /* Safari, Android, iOS */`,
  `url('${sourceSansProRegular}.svg#SourceSansPro') format('svg') /* Legacy iOS */`,
];

const sourceSansProBoldList = [
  `local('Source Sans Pro Bold')`,
  `local('SourceSansPro-Bold')`,
  `local('SourceSansProBold')`,
  `local('source-sans-pro-Bold')`,
  `url('${sourceSansProBold}.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */`,
  `url('${sourceSansProBold}.woff2') format('woff2') /* Super Modern Browsers */`,
  `url('${sourceSansProBold}.woff') format('woff') /* Modern Browsers */`,
  `url('${sourceSansProBold}.ttf') format('truetype') /* Safari, Android, iOS */`,
  `url('${sourceSansProBold}.svg#SourceSansPro') format('svg') /* Legacy iOS */`,
];

export const globalCSS = `@font-face {
font-family: 'Uni Neue';
font-style: normal;
font-weight: 400;
src: url('${uniNeueBook}.eot'); /* IE9 Compat Modes */
src: ${uniNeueBookList.join()};
}
@font-face {
font-family: 'Uni Neue';
font-style: normal;
font-weight: 700;
src: url('${uniNeueBold}.eot'); /* IE9 Compat Modes */
src: ${uniNeueBoldList.join()};
}
@font-face {
font-family: 'Uni Neue';
font-style: normal;
font-weight: 900;
src: url('${uniNeueHeavy}.eot'); /* IE9 Compat Modes */
src: ${uniNeueHeavyList.join()};
}
@font-face {
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
src: url('${sourceSansProRegular}.eot'); /* IE9 Compat Modes */
src: ${sourceSansProRegularList.join()};
}
@font-face {
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 700;
src: url('${sourceSansProBold}.eot'); /* IE9 Compat Modes */
src: ${sourceSansProBoldList.join()};
}
body {
  margin: 0;
  -webkit-text-size-adjust: 100%;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}`;
