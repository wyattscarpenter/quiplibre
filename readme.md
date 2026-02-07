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
* [Use Your Words](https://useyourwords.lol/) 1 and 2, "The 'Use Your Words' Games!", seem to be similar.
* [Quibbl.in](http://web.archive.org/web/20230628130022/https://quibbl.in/), although I get the impression that it is now defunct
* [QwiqWit.com](https://www.qwiqwit.com), also described here: http://paulwind.com/work/qwiqwit
* there are several versions of Quiplash published by Jackbox Games, which I guess are technically quiplikes
* the various forks of Quiplibre are cool! I haven't looked over them in depth, but some of them probably have better UX than Quiplibre itself https://github.com/wyattscarpenter/quiplibre/forks?include=active&page=1&period=&sort_by=stargazer_counts
* there are various quiplash-related repos on github, some of them apparently open source quiplikes, which is nice :) https://github.com/search?q=quiplash&type=repositories
* there may have been, in human history, various times at which someone invented "write funny answers to amusing prompts" as a game, but I haven't looked into it.

## Developer information

This project uses Playwright for some basic testing. This means it has the scaffolding of an npm project, even though it's really just an html file. The tests are rather shallow, because I ran out of patience about them. They may also be flaky.

I tried to convince tsc to typecheck the js in the html for me, as an additional static check, but it did not want to operate on that file extension, alas. Sad! So, we do a little scripting, and get it to work. It doesn't *pass* a tsc check (tsc doesn't know what a lot of the variables are since they can't be statically determined), but it was cool to get reminded that I should const a few vars. This is available as `npm check`, although, as I just said, I don't expect that check to pass. Side note on const: I've always found it unintuitive that when you const an object — and most variables store objects in a system like this — it consts the object reference but still lets the object itself mutate. I understand how this works, and why, since I understand pointers, but it "seems" wrong. So, if you're like me, keep that in mind while reading the code, if you read it; I const a lot of objects and then mutate them anyway. Arrays are also objects in this sense btw.

According to my attempts at autonomous testing, webkit browsers do not support WebRTC/PeerJS, or vice-versa. So Quiplibre won't work on them. Please let me know if that's right or wrong. Especially if you can fix the error I encountered during testing! I do not have access to a webkit browser myself (Safari, etc); and the failure is surprising given what they claim to support. Some of the information on https://www.kirsle.net/journey-to-get-webrtc-working-well-in-safari might be relevant to this.

Due I guess to the fact that http-server hasn't updated in 4 years, when I run the tests I get the following deprecation message:

```
[WebServer] (node:1444) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
[WebServer] (Use `node --trace-deprecation ...` to show where the warning was created)
```

I don't really care about that, but if the test setup stops working, guess you should... find a different http server package. It's only used for the test setup, anyway.

### The superbowl shuffle

This isn't important at all, but here's a short essay I wrote about the matchup randomization in this software. The core of quiplibre and quiplash is comparing your answers head-to-head with another player to let everyone vote on these answers. I've never studied how quiplash does this, nor have I studied this problem in general, which is probably well-known and well-solved at this point in human history. Instead, I enjoyed it as a puzzle, on 2026-02-06. (Although, I may have seen a solution somewhere before in my life, who knows.) Here are the properties we know about this matchup procedure:

1. **No player can be matched up against himself.** This just wouldn't make any gameplay sense.
2. **The matchups should probably be randomized, given the other constraints.** I've never verified that this is how quiplash does it, but I imagine this is more interesting in the long run than, say, player one and player two always matching up, and so on.
3. **Each player answers two prompts.** This isn't really a constraint so much as it answers a constraint. If each player only answered one prompt, and therefore was in one matchup, then in an odd number of players one would be left out in the cold, possibly given a [bye](https://en.wikipedia.org/wiki/Bye_(sports)). So, since that can be easily avoided by answering two prompts, we do that.

Essentially, if you take the original (arbitrary) order of players as the "left" side of the list of matchups, you can conceptualize the problem like this: can you shuffle the players in such a way that the new list of players on the "right" side doesn't map any player to himself? Obviously it's possible, but what algorithm will you use? I decided to call this procedure "the superbowl shuffle", since it's about matchups, like a sporting event, and I really like that song. (Note, of course, that the superbowl is not matched up this way.)

The first idea that occurred to me, of course, was to use an ordinary shuffle. One of these is pretty easy to make if you have a randomness primitive, which we do. You have the old array, and then copy it and shuffle the new array. (The easiest shuffle algorithm, assuming you know the length of the array, is actually out-of-place, so that's actually just one step!) But, of course, it has a fatal flaw: a player can end up matched to himself, by pure chance. So, that's a bust. Call that the "ordinary shuffle".

However, the "ordinary shuffle" can be salvaged. We can check the new list and the old list and see if any of the players are matched against themselves. If so? Throw away the list and try again. This algorithm has the slight disadvantage that it could theoretically run forever. Still, it's probably fine in practice. However, I still rejected it as "not computer science enough". Call this the "dullard's superbowl shuffle".

The second idea that occurred to me is severely flawed and yet remained in Quiplibre for an embarrassingly long number of years. The new list was populated from the old list without replacement, much like an ordinary shuffle algorithm. The only added constraint was that the draw function was given a player, which it was not allowed to select. This was implemented by filtering the array it selected from. This led to the occasional awkward situation:

    1 2 3
    2 1 ?

Here, the algorithm has selected 2 to fight 1 and 1 to fight 2. Therefore, its list of candidates is: `[3]`. Filtered by what's allowed, that list becomes `[]`. Due to the way javascript works and how the random selection procedure is written, that means the player that will be fighting 3 is `undefined`. Later, the program tries to use a property of this player and crashes, due to the way javascript works, resulting in https://github.com/wyattscarpenter/quiplibre/issues/9. However, some of the time it randomly happens to work out anyway, which is why I didn't notice it before, I suppose.

    1 2 3
    3 1 2

    1 2 3
    2 3 1

Oh — actually, I've learned that due to a bug in my random selection algorithm, this was always wrong, and would always fail for any number of players greater than 2. 2 being, unfortunately, the main way I would manually test it. The bug was: unlike every other random choice algorithm in this program, for this I wrote rand*(length-1) instead of rand*length. This was presumably because I had previously written it rand*(length-1) for the length of the unfiltered array, and when I started using the filtered array length directly I forgot to change it to not subtract 1. So, it would never be allowed to pick the last element, and thus always crash. It would be bad even without this bug, as it would sometimes not work, but never working is even worse.

It's worth noting that this is actually worse than the dullard's shuffle and the ordinary shuffle, because it crashes the program. Let's call this the "superbly bad shuffle".

Now, on to the good shuffle. I decided to go at it another way. Let's secure the no-self property first. We can do this very simply by shifting once left or once right, wrapping around on the edges. Here I choose left.

    1 2 3
    2 3 1

Incidentally, you can't shift **more** than 1, as a constant, because 2 is a valid list length — and so on for all of the other natural numbers. Shifting that many would get you back to the original position, ruining the point. But 1 always works, because the game cannot be played solitaire. You also cannot just reverse the list, because in odd lists the middle player would map to himself. But, anyway, that's the no-self property sorted... if we can keep it.

Now we'd like to get the randomization property sorted. Easy. Make n swaps, iterating through the source slots and randomly selecting the target slots ignoring the swap if it would put a player up against himself.

For instance, say we've just shifted the list and now we're in the beginning of the randomization procedure. Our list looks like this, as above:

    1 2 3 4 5
    2 3 4 5 1

Now, we consider the player in the first position, 2. Say for example that we roll our die and get 4. This would put 4 in the 1 slot and 2 in the 4 slot, which is fine, so we do that.

    1 2 3 4 5
    4 3 4 2 1

Now we consider the second slot, which has 3 in it. We roll our die and let's say we get 4. This would put 3 in the 4 slot, which is fine, but it would put 2 in the 2 slot! Can't have that. So we continue along. Repeat this process until you get to the end of the list.

(Incidentally, you can never make any random swaps in a 3-list, because the only two valid positions are shift left 1 and and shift right 2, and you can get from one to the other in those with swaps. So, I guess the choice of which way to shift should ideally be randomized!)

This probably isn't, like cryptographically secure or whatever, but it's good enough for randomizing a game. You can even run through the list swapping twice, if you feel like it. Call this the "Carpenter shuffle", or whatever its actual name is because I'm sure it's been invented before.
