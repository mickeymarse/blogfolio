---
title: About Metrak
description: Reflections on another abandoned project.
pubDate: 2024-08-29
slug: about-metrak
---

I'm a nerd. A geek. Both. Whichever you prefer.
I use [Letterboxd](https://letterboxd.com/) and I really like it, but it doesn't feel enough for someone like me.
I watch loads of movies but also loads of TV shows. And I read books and comics. And I listem to podcasts. Basically, if there is a medium I can _consume_, I will. And that is why Letterboxd has never been enough for me.

While having that in mind, I started to learn **Ruby**. I'm fascinated by [its creator](https://en.wikipedia.org/wiki/Yukihiro_Matsumoto)'s philosophy first and then by the language itself. Elegant, sinuous, minimal. JavaScript will always be my first love, but coming from it, the Ruby world was very attractive.

It had its moment, as a language, and it's not that trendy anymore. I've read about some of its historical contributor. [One with a great chosen name](https://en.wikipedia.org/wiki/Why_the_lucky_stiff). And [one whose name was a sign by the tech deities](https://en.wikipedia.org/wiki/Sam_Ruby). Nonetheless, Ruby has many supporters (as I've witnessed by attending a [LRUG](https://lrug.org/) meetup). And numerous companies, some way bigger than others, still rely on **Rails**, which was the natural progression of my learning soon after Ruby.

I can't help being niche. It just comes natural to me. Apologies to the East London hipsters gentrifiers who try so hard and constantly fail.

Anyhow, I'm a nerd who learned Ruby, so I had to build something that would reflect both sides of this for me.

### Tracking myself

[**Metrak**](https://github.com/mickeymarse/metrak-api) simply stands for _Media tracker_, and media was the best word I could find to define what I was planning to track.

The plan was to make a web app where to collect a record of all the _pop creations_ I would enjoy over time, with just minimal info attached to it (title, image, year, rating, _type_). The types of creations could be multiple. Movies, TV shows, books comics, podcasts and zines. I just love everything.

I would then display my _records_ to my [blogfolio](https://mickeymarse.dev/) in a Letterboxd manner: vertical posters in a tight, slender grid. A bijoux.

Never had any plan for reviews, but I wouldn't have minded sharing brief impressions on each medium with the possibility of adding more over time in case I had more to add to my own conversation. For that, I created the _Thoughts_ **model** which had a _many to one_ relationship with Media.

That was cute.
On clicking a poster, a little modal would show you my latest thoughts on the medium. Nothing mind blowing, just a cute little addition.

This was the plan.
However, life rarely cares about those.

### Even web apps can transition

I discovered by chance this component library built on top of Tailwind (which I love) called [Flowbite](https://flowbite.com/). What attracted me the most was the fact that it had installation guides for different frameworks and languages. So the plan became to learn one to rule them all.

Silly me.

The building was smooth enough as I slowly advanced beyond the Rails's Getting Started Guide.
Then, the moment to deploy came, and I chose to go for Fly as per usual.

The first ordeal was learning/realising that deploying JavaScript via Ruby can be complicated. Luckily, for that stage, I got the amazing support of Fly's Rails Specialist.
My app went up online but, surprise surprise, it wasn't looking as neat as when offline.

That's when I found out Flowbite guides and troubleshooting sections for deployment are nonexistent and that there isn't really a big, nice community around it I could've turned to ask for help.
This fun project to practice Rails was becoming suddenly annoying.
I thought of refactoring the whole front-end, removing Flowbite and working only using Tailwind, but it would've been probably easier to just remake the app from scratch.
Ruby on Rails is used a lot for back-end work, to the point that there is an option to initialise a Rails App as API-only. But there is also the possibility of turning an existing full-stack app into an API. Hence, the transition started and, yeah, it was satisfying.
I love APIs and I love eliminating overcomplications. This transition didn't take long and Metrak was up and running in no time. And now waiting for its beautiful front-end to be paired with.

### Failure?

Did I give up? Yes.
Could I have learned something by going through the hurdle of fixing the front-end? Yes.
Was I tired and stressed and overwhelmed by life due to all that's happening around me while also being unemployed and unable to land my first job in tech? **Yes**.

So, you know, sometimes you just need to find the easy route and live longer.
I guess that's the final message.
Don't blame me. Blame the medium.
