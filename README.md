# Quiz-game

## Demo

Here is a working live demo: https://mhevyk.github.io/pure-js-quiz/

![Project Image](src/assets/docs/preview.jpg)

---

### Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [How To Use](#how-to-use)

---

## Description

Quiz-game is a simple app for studying foreign languages. It allows us to fill in a vocabulary with words and study them, completing quizes and analysing their results.

#### Key technologies

- HTML5
- CSS3
- JS ES6+
- Webpack
- Eslint

#### Additional libraries

- [fontawesome](https://fontawesome.com/)
- [chart.js](https://www.chartjs.org/docs/latest/)

<div class='text-right'>
    <a href='#quiz-game' class="right">Back To The Top</a>
</div>

---

## Features

- **User-friendly interface**. A lot of tooltips and descriptions are provided to improve user experience.
- **Self-studying**. All words and some settings store locally and do not remove on page reloading.
- **Multiple translates**. Each word can have one or more translates.
- **Words import**. It is possible to add multiple records to some group by selecting or dragging text file.
- **Generating results**. Results of each quiz prints on separate page using charts and tables.

<div class='text-right'>
    <a href='#quiz-game' class="right">Back To The Top</a>
</div>

---

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mhevyk/pure-js-quiz.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the project
   ```sh
   npm run build
   ```
4. Run file `public/index.html` using web browser

<div class='text-right'>
    <a href='#quiz-game' class="right">Back To The Top</a>
</div>

---

## How To Use

### Adding record

Records should follow these rules:
- word must be unique
- word can`t contain comma symbol
- translate can`t contain comma symbol
- word and translate of single record should not be equal
- translates of single record should not be equal

If word appears multiple times, it`s translates will be added to existing record's translates

### Import records

We can add multiple records using text file. To import file correctly follow these steps:
1. Select group, where append all records from file. If it doesn`t exist, create it.
2. Select symbol, which separates word and translates in your file. App supports separators `:`, `>` and `=`.
3. Import text file, which has content, that corresponds following syntax:
```
word1 <separator> translate1, translate2, ...
word2 <separator> translate1
```

Text file content should also correspond [adding record rules](#adding-record). Spaces between word, separator and translates doesn't matter.
We use a `<separator>` to separate word from translate and to separate records we need to write them from new line.

Example of correct text file content with separator `>`:
```
apple > яблуко, яблучний
pine > груша
```

4. Open uploaded file toggler and check if file loading was succesfull
![File upload example](src/assets/docs/uploaded-files-toggler.jpg)

5. Submit form to add records to your vocabulary.

<div class='text-right'>
    <a href='#quiz-game' class="right">Back To The Top</a>
</div>

---

<style>
.text-right { text-align: right; }
</style>