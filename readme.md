Quiplibre
=========

This is Quiplibre, a Free Software alternative to Quiplash.

## How do I work this?

Quiplibre is available by viewing quiplibre.html in a web browser. You can either download the html file and view it locally, or visit https://wyattscarpenter.github.io/quiplibre/ on your phone or computer or whatever.

Once you are looking at quiplibre, you will be given a chance to host a new game or join a game as a player.

NOTE: You must be connected to the internet to play quiplibre.

## I'm playing during a pandemic and all my friends are in different houses, can we still play?

Sure! Just open a hosting session, and then have each player including yourself open a joining session. Quiplibre is still mostly functional even without a "big screen" everyone can see.

## Can I write my own custom prompts?

Sure, just modify the prompts array in the html file. It's a big ol' list of prompts, named `prompts`. You must surround your prompt in quotation marks (either 'single' or "double") and after the closing quotation mark put a comma. Give it a shot!

You might want to make a copy of the unaltered prompts first and put it somewhere convenient, so you can go back to the default prompts easily.

## So I notice this project is missing a lot of the bells and whistles of Quiplash, such as music, timers, colors, etc

Yeah, I couldn't be bothered. If you'd like to try to spruce Quiplibre up, go right ahead :)

## What do I do if I think of a good prompt (or other contribution) I'd like to submit?

Raise an issue or submit a pull request on https://github.com/wyattscarpenter/quiplibre. Only submit prompts you have the legal right and volition to release under the project's license, though. Don't be stealing copyrighted works to submit as Quiplash prompts!

## What's the license of this project?

This project is released under the license found in [license.txt](license.txt). Here is a copyright notice to express that more fully:

    Copyright (C) 2020, Wyatt S Carpenter

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

This project depends on various other things, such as PeerJS, unpkg.com, the text of license.txt, Google's STUN server, and your browser's WebRTC capabilities, which are not our responsibility and which are released under their own terms.

## On The Category Of Games That Are Like Quiplash

Games that are like [Quiplash](https://www.jackboxgames.com/quiplash/) could perhaps be called "quip games" or "quiplikes". At time of writing (2023-09-07) here are the quiplikes I know about:

* alternativeto.net lists 16 alternatives to quiplash, many of them quiplikes, including this one https://alternativeto.net/software/quiplash/
* [Quibbl.in](http://web.archive.org/web/20230628130022/https://quibbl.in/), although I get the impression that it is now defunct
* [QwiqWit.com](https://www.qwiqwit.com), also described here: http://paulwind.com/work/qwiqwit
* there are several versions of Quiplash published by Jackbox Games, which I guess are technically quiplikes
* the various forks of Quiplibre are cool! I haven't looked over them in depth, but some of them probably have better UX than Quiplibre itself https://github.com/wyattscarpenter/quiplibre/forks?include=active&page=1&period=&sort_by=stargazer_counts
* there are various quiplash-related repos on github, some of them apparently open source quiplikes, which is nice :) https://github.com/search?q=quiplash&type=repositories
* there may have been, in human history, various times at which someone invented "write funny answers to amusing prompts" as a game, but I haven't looked into it.

## Developer information

This project uses Playwright for some basic testing. This means it has the scaffolding of an npm project, even though it's really just an html file.

I tried to convince tsc to typecheck the js in the html for me, as an additional static check, but it did not want to operate on that file extension, alas.
