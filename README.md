# dress-css is:
lightweight CSS flex grid library [Tiny Grid](#tiny-grid)
#### ➕ 
CSS helper library [Dress.css](#dresscss)
#### For creating responsive UI's
- [DEMO](https://eladolo.github.io/dress-css/demo/index.html)

## Install
```bash
    npm i dress-css
```
or
----------
![Logo](https://raw.githubusercontent.com/eladolo/dress-css/master/demo/logo.png)
## Tiny Grid
```bash
    ./dist/css/helpers/tinygrid.css
```
or with a CDN
```html
    <link rel="stylesheet" href="https://res.cloudinary.com/chakstudio/raw/upload/v1640448879/tinygrid-min_bpguow.css">
```
And the following structure in your html tags:
```html
    <div class="tg-container">
        <div class="tg-row">
            <div class="tg-col-4 tg-col-md-6 tg-col-sm-12">                
            </div>
        </div>
    </div>
```
Where:
- ".tg-container" css class for a container to wrap the flex container
- ".tg-row" css class for the flex container
- ".tg-col-{1-12}" css class for desktop views
- ".tg-col-md-{1-12}" css class for tablet and mid screen views
- ".tg-col-sm-{1-12}" css class for smarthphone views  
And:
- ".lg-hide" for hide in desktop views
- ".md-hide" for hide in tablet and mid screen views
- ".sm-hide" for hide in smarthphone views  
For advance control in the flex grid behavior:
- ".tg-justify{-, -md-,-sm-}{flex-start,flex-end,center}" for control flex justify behavior
- ".tg-align{-, -md-,-sm-}{flex-start,flex-end,center,strech,baseline}" for control flex align behavior
- ".tg-align-content{-, -md-,-sm-}{flex-start,flex-end,center,strech,space-between,space-around}" for control flex align-content behavior
## Dress.css
```bash
    ./dist/css/min/dress.2.0.min.css
```
or with a CDN
```html
    <link rel="stylesheet" href="https://res.cloudinary.com/chakstudio/raw/upload/v1702018321/dress.2.0.min_isykfo.css">
```
And the following class in your parent container:
```html
    <body class="dress">
```
For dressing your container & his children with the following [helper's](#helpers)
```html
    <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./css/dress.2.0.min.css">
        <title>Dress.css Demo</title>
    </head>
    <body class="dress bg-grey">
        <div class="p-1 w-5 text-center sqr-48 box-shadow border-blue border-solid border-s4 md-hide">
            <i class="material-icons fs-48 w-100 c-pointer green mouse-over">check</i>
        </div>
    </body>
```
#### Helper's
###### Width:
- ".w-{1-100}" in steps of 1% (1,2,3,4...)  
###### Height:
- ".h-{1-100}" in steps of calc(1vh) (1,2,3,4...)  
###### Margin:
- ".m-{0-100}" in steps of 1% (1,2,3,4...)  
- ".ml-{1-100}" margin left in steps of 1% (1,2,3,4...)  
- ".mr-{1-100}" margin right in steps of 1% (1,2,3,4...)  
- ".mt-{1-100}" margin top in steps of 1% (1,2,3,4...)  
- ".mb-{1-100}" margin bottom in steps of 1% (1,2,3,4...)    
###### Padding:
- ".p-{0-100}" in steps of 1% (1,2,3,4...)  
- ".pl-{1-100}" padding left in steps of 1% (1,2,3,4...)  
- ".pr-{1-100}" padding right in steps of 1% (1,2,3,4...)  
- ".pt-{1-100}" padding top in steps of 1% (1,2,3,4...)  
- ".pb-{1-100}" padding bottom in steps of 1% (1,2,3,4...)    
###### Text Decoration:
- ".text-{uppercase,lowercase,capitalize,bold,bolder,underline,overline,line-through,blink,decoration-none}"  
for text decoration and basic styling  
###### Text Position:
- ".text-{left,right,center,justify}"  
for text alignment  
###### Font Size:
- ".fs-{6-72}" in steps of 1px (6,7,8,...,72)  
###### Cursors:
- ".c-{pointer,move,help,wait,hand}"  
for cursor icons  
###### Shapes:
- ".rounded"  
for rounded corners on elements of 5px of border-radius
- ".circle"  
for circle elements of 50% of border-radius
- ".sqr-{24,48,96,128}"  
for square shapes in pixels
- ".rec-{24,48,96,128}"  
for rectangle shapes **WHERE** the *height* is the _double_ of the *width* in pixels  
#### Colors:
* "black", "white", "gray", "silver", "maroon", "red", "purple", *  
* "hotpink", "green", "lime", "olive", "yellow", "navy", "blue", *  
* "teal", "aqua" *  
###### Font
- ".{"black", "white", "gray", "silver", "maroon", "red", "purple", "hotpink", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"}"  
for font color  
###### Background
- ".bg-{"black", "white", "gray", "silver", "maroon", "red", "purple", "hotpink", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"}"  
for background color  
###### Border Color
- ".border-{"black", "white", "gray", "silver", "maroon", "red", "purple", "hotpink", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"}"  
for border color  
###### Border Size
- ".border-s{1-25}" in steps of 1px  
###### Border Style
- ".border-{"solid", "dashed", "dotted", "double", "ridge", "none"}"  
for border-style propierty  
###### Shadows
- ".{"text", "box"}-shadow"  
for shadows in font and elements  
###### Opacity
- ".op-{0-10}"  
for _opacity_ changes in elements  
###### Elements
- ".overflow-{auto, hidden, scroll, autohide}"  
for change _overflow_ elements behaivor
- ".{center, left, right, absolute, relative, fixed}"  
for position elements with _margin: 0 auto_, _float_ and _position_
- ".d-{none, block, inline-block}"  
for visibility elements with _display_
- ".mouse-over"  
for mouseover element styling with _box-shadow_ and _border-radius_  