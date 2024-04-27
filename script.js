// MIT License

// Copyright (c) 2024 Nokky07

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const typed = new Typed(".auto-type", {
  strings: ["GameInfo", "GameInfo.com", "Gaming Information.", "Games."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
console.log("Welcome to GameInfo.com");

console.log(
  "This is the developer console for ensuring that every file is loaded correctly.",
);

console.log(
  "The script.js file has been successfully loaded and is functioning normally.",
);

console.log(
  "The scrambler.js file has been successfully loaded and is functioning normally.",
);

(async () => {
  let devtools = "";

  while (devtools === "") {
    await sleep(60);
    console.log(
      "%cWait!",
      "color: #FF6600; font-size: 75px; font-weight: bold; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: black;",
    );
    console.log(
      "%cIf someone told you to copy/paste something here, there's an 11/10 chance you're being scammed.",
      "font-size: 16px; color: white; font-weight: bold;",
    );
    console.log(
      "%cPasting anything in here could give attackers access to SQL injections on the site.",
      "font-size: 16px; color: red; font-weight: bold;",
    );
    console.log(
      "%cUnless you understand exactly what you are doing, close this window and stay safe.",
      "font-size: 16px; color: white; font-weight: bold;",
    );
    console.log(
      "%cIf you do understand exactly what you are doing, you should come help us work on the site haha.",
      "font-size: 16px; color: white; font-weight: bold;",
    );
  }

  async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
})();
