const request = require('request');
const cheerio = require('cheerio');

let result = 'Sorry, there are no words found.';

request('https://www.urbandictionary.com', function(err, resp, html) {
  if (!err) {
    const $ = cheerio.load(html);
    const wordPanel = $('.def-panel').first();
    const word = wordPanel.find('.word').text();
    const meaning = wordPanel.find('.meaning').text();

    result = `Today's word is: ${word}\n`;
    result += `The definition is: ${meaning}\n`;
  }

  console.log(result);
  return result;
});
