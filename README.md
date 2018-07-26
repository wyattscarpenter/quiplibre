Quiplibre
=========

This is Quiplibre, a Free Software alternative to Quiplash. It relies on the [HappyFunTimes party games system](http://greggman.github.io/HappyFunTimes).

## How do I work this?
1. Install [Node.js](https://nodejs.org/en/) on your computer, if it isn't already installed
2. clone this git repo, or download the zip file and extract it to where ever you want this project to live
3. run "npm install" on the directory (this is what RUNMEFIRSTTIME.bat does)
4. each time you want to run the game, run "npm start" in the directory (this is what RUNME.bat does)
(If you aren't using Windows, please note that the batch files I just mentioned are also valid shell scripts, so you can still use them. If you *are* using Windows, just ignore this parenthetical entirely.)

## How do I connect controllers?
Open a browser window and go to http://happyfuntimes.net. This should connect your device to the game. Make sure your device is on the same WiFi as your computer.

NOTE: HappyFunTimes claims it will only work on home network, and is unlikely to work on corporate networks, coffee shops, airport WiFi, etc...

## Can I write my own custom prompts?
Sure, just modify prompts.json. It's a big ol' list of prompts. You must surround your prompt in quotation marks (either 'single' or "double") and after the closing quotation mark put a comma. Give it a shot!

You might want to make a copy of the unaltered prompts.json first and put it somewhere convenient, so you can go back to the default prompts easily.

## So I notice this project is missing a lot of the bells and whistles of Quiplash, such as music, timers, colors, etc
Yeah, I couldn't be bothered. If you'd like to try to spruce Quiplibre up, go right ahead :)

## What do I do if I think of a good prompt (or other contribution) I'd like to submit?
Raise an issue or submit a pull request on https://github.com/wyattscarpenter/quiplibre. Only submit prompts you have the legal right and volition to release under the project's license, though. Don't be stealing copyrighted works to submit as Quiplash prompts!

## How is this project structured?
Here are the three most important files:

    main.js         # electron's initial script.
                    # It starts happyfuntimes and
                    # opens game.html in a window

    game.html       # the game. All HTML/CSS/JavaScript are in this file
                    # for simplicity

    controller.html # the controller. This is served to player's devices
                    # when they go to happyfuntimes.net

## What's the license of this project?
This project is released under the license found in [LICENSE.txt](LICENSE.txt). This project depends on various other projects, which are not our responsibility and which are released under their own licenses.
