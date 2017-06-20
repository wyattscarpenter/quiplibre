Quiplibre
=========

This is Quiplibre, a Free Software alternative to Quiplash. It relies on the [HappyFunTimes party games system](http://greggman.github.io/HappyFunTimes).

## Structure:

    main.js         # electron's initial script.
                    # It starts happyfuntimes and
                    # opens game.html in a window

    game.html       # the game. All HTML/CSS/JavaScript are in this file
                    # for simplicity

    controller.html # the controller. This is served to player's devices
                    # when they go to happyfuntimes.net


## How do I run this thing?
1. clone this git repo, or download the zip file and extract it to where ever you want this project to live
2. Install (Node.js)[https://nodejs.org/en/] on your computer, if it isn't already installed.
3. run "npm install" on the directory (this is what RUNMEFIRSTTIME(.sh|.bat) does)
4. each time you want to run the game, run "npm start" in the directory. (this is what RUNME(.sh|.bat) does)

## How do I connect controllers?
Open a browser window and go to http://happyfuntimes.net. This should connect your device to the game. Make sure your device is on the same WiFi as your computer.

NOTE: HappyFunTimes claims it will only work on home network, and is unlikely to work on corporate networks, coffee shops, airport WiFi, etc...

## So I notice this project is missing a lot of the bells and whistles of Quiplash, such as music, timers, etc
Yeah, I somewhat foolishly sacrificed a lot of that in order to maintain compatibility with pre-2015 javascript and low-end machines.

## You're telling me Quiplibre has to look like crap because of backwards compatibility?
Oh, I also just couldn't be bothered. If you'd like to try to spruce Quiplibre up, go right ahead :)

## What do I do if I think of a good prompt (or other contribution) I'd like to submit?
Raise an issue or submit a pull request on https://github.com/wyattscarpenter/quiplibre. Only submit prompts you have the legal right and volition to release into the public domain, though, as all Quiplibre prompts are released into the public domain! Don't be stealing copyrighted works to submit as Quiplash prompts!

## What's the license of this project?
The prompts are released under [CCO 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). Everything else is released under the license found in [LICENSE.txt]. This project depends on various other projects, which are not our responsibility and which are released under their own licenses.