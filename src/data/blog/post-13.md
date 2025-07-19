---
title: About TarMarAPI
description: Reflections on an abadondoned project.
pubDate: 2024-08-15
slug: about-tarmarapi
---

I don't just write metaphors about APIs. Sometimes, I try to build them too.

### What is TarMarAPI

TarMarAPI stands for **Tar**ot de **Mar**seille **API**. And the Tarot de Marseille is, [according to Wikipedia](https://en.wikipedia.org/wiki/Tarot_of_Marseilles), a tarot pattern, one of the oldest. It has been around for centuries, way longer than the more famous [Rider-Smith](https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot). Its origin, like anything so old, is dripping speculation. It is already unclear if these cards were used for gaming or fortune telling since the beginning. There is also no way to pinpoint a single author/creator (something we love to do so much) since there are many variations of the same pattern. Almost as if it was an open source project that people forked and customised as they pleased.

More recently, [Alejandro Jodorowsky](https://en.wikipedia.org/wiki/Alejandro_Jodorowsky), together with artist [Philippe Camoin](https://en.camoin.com/tarot/-Philippe-Camoin-en-.html), worked on this pattern and published their own iteration.
And it was on this deck that I studied, taught by a person who has covered many roles in my life, but whose life we won't cover here.
I learned with it and I loved it. I got readings done with the RS for years before that, but the different (even if just slightly so) perspective offered by this deck resonated much more with me.
And so I started reading tarots and it has been fascinating so far to connect with people through this medium. And then I started coding and tried to look for tarots in this other world. That's when I came across not [one](https://github.com/ekelen/tarot-api), but [two](https://github.com/LindseyB/tarot-api) free and open source tarot APIs! Whoop, whoop!!! Of course, none of them was serving the Tarot de Marseille. Hence, why I decided to make one myself. I've been wanting to build an API for a while anyway and I needed to start building my portfolio post-bootcamp.

### Cooking time

I knew since the beginning that I wanted to work using [Bun](https://bun.sh/). The reason being I always want to try a brand-new tool. ~~And I'm into cute mascots~~.
Because, on the internet (hence always), people are incapable of critical thinking, reviews were polarised. But I'm a hype person, so, negativity can't beat me. In fact, I decided I wanted to try the [BETH Stack](https://youtu.be/cpzowDDJj24), in order to try not just one brand new tool, but many!!!

So, I installed Bun and then created an app using [Elysia](https://elysiajs.com/). That went pretty smoothly. Then, I wanted to setup a database and that's when things started going awry. Bun has a built-in SQLite db. However, given how fresh off the oven it is (even though it should be steamed in my opinion), it's still quite _buggy_, especially if you want to pair with an ORM that is equally new like [Drizzle](https://orm.drizzle.team/).

This was the first part of the project where I had to spend a bit of time navigating GitHub issues. Only to find out Bun's database and Drizzle are not a match (not yet at least). At that point, I decided to stay true to the BETH and tried [Turso](https://turso.tech/) instead.
Both Drizzle and Turso have a CLI tool that lets you interact with them and makes any task faster as well as preventing any unnecessary GUI interaction. The two also (financially) support one another, so they have specialised setup guides on their websites for whoever wants to use them together.
Overall, the process wasn't truly straightforward, but doable at least.

Okay, I now have a basic API. The next thing I want to do is deploy it. And the best place to deploy a Bun app is [Fly](https://fly.io/), my reliable sources say. Which also comes with a beautiful CLI app that lets you do so many cool things that I'm still discovering.
One of the things it does is also _scanning_ your app and produce a `Dockerfile` needed for deployment. Sadly, despite their claims, Fly thinks I'm about to deploy a Node app, which I'm obviously not.
That's when I dwell in the issues realm once again only to eventually find out the best way to deal with it is to copy and paste a template for Bun. So much for automation.

### Dinner's ready

And so [**TarMarAPI**](https://github.com/mickeymarse/tarmarapi) was born.

I haven't touched it much since then, but i truly want to keep building on it, improving it and making it bigger.
I think the main blocker for now is that I want to make the entries for each card richer. However, to do that, I need to study some more first. Studying requires time which, fun enough, I don't haven since **I'm busy being unemployed**. I will probably have to write about it at some point.

Then, I will have to look into Bun's specific middleware to improve the API overall. I would like to be ready and safe to the point I can build a frontend which uses it to do tarot readings. Which might require the use of some AI. Or it might not. Haven't decided yet.

Maybe the best outcome would be the one decided with the tarots. I should just go and have a chat with them to see what do they think about it.
