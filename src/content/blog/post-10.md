---
title: WRITEME
description: Documentations can be better.
pubDate: 2024-06-18
heroImage:
  {
    src: /blog-images/post-10/writeme.png,
    alt: Inside a rectangle with a green horizontal line near it top right corner there is the text WRITEME.md,
  }
slug: writeme
---

Read the documentation. They say.  
They never tell you how bad docs can be though.  
I'm a very visual person, so, it's not rare I prefer watching videos. But I am an hectic reader and a chaotic writer. And written docs are more common than their visual counterpart. Hence, we all will always have to end up relying on them most of the time. And so I do too. And I developed opinions on them.  
Here I will list some.

### Assumption

The same way we all have biases when _just_ living, writers have assumptions they make when writing. It's natural, it's inevitable.  
Even now, the most blatant is that I'm assuming people reading this will know the English language. Furthermore, that people would also automatically get what _docs_ I'm talking about given the context of this ~~blog~~ digital garden.  
However, like bias, it makes a huge difference when we are conscious of them, so to be able to acknowledge them as well as our **positionality** in society.

Thus, who are the docs we are writing for? What do we know about the reader? Or better, what are we assuming about them? And why?

As the tech you're documenting become more niche and esoteric, so the chances that your readers are _nerds_ who have similar taste than you become higher. You might also be so niche and esoteric you don't care about documenting anything because that stuff is just for you.  
Still, the moment you start writing, even in this case, you should stop assuming that even the **nerdest of the nerds** who will approach your docs is your twin or shadow.  
It just makes for better writing.  
And I'm not saying that you should have the same level of exposition as a boring mainstream superhero movie. That makes just for bad writing. But you should start addressing what and why you're leaving out of your docs.

Do they know this language? Do they know this framework? Do they know this package? What OS do they use? What about their browser? Do they know what any of these words mean?

As your tech goes farther away from the niche and closer to being a mainstream tool for the wider public (or so you hope at least), I would say it's better practice to start assuming less. And label whatever is **assumed** under **requirements** (or something like that). Adding links won't hurt. It's a good way to set the ground and build a relationship with the person who will use your creation.

Once, you've done all of that, one thing **they** can assume is you're not a ~~prick~~ snob.

### Writing

It's not always easy and, like anything, some struggle more than others. However, it is vital what your writing is readable and makes sense.  
We're not talking fiction here, so you don't need to worry about character flaws, plot twists, conflicts or lack thereof. Your only concern should be "**is this comprehensible?**".  
It's impressive how people can quickly open an issue or make a pull request for the most hidden bug, but no one will point out wrong/outdated/unclear documentation.  
I found myself willing to do it more than once, but eventually always stopped because I wasn't sure that was even a thing?

Docs are a door to your creation. To your world.  
Ask people to proofread. Not just your techy friends on the Fediverse. Ask to people who are not deep in this already. Especially if your tool is something you're hoping it will be used by a wider audience, a mixed audience, and it's not just a game for the nerd circles.

And don't be jealous of your writing. Don't be possessive towards any of your words or sentences. Welcome any feedback and critique. If someone says they can't understand, it's not because they're stupid. It's because there might be a better way to say that very same thing.

Find it. Find the way. And follow it.

### Examples (and tutorials)

The bigger your project is, the bigger the docs. But I'm not talking just about number of ~~pages~~ wiki entries here.
It means having more space in which to add examples, code snippets and recipes. **Show** your (possible) user **how** to setup and use your tool. Keep it simple. Keep it concise. Once again, keep it clear.  
As they dig deeper into the documentation, you can start to implement more complex examples. However, don't go fancy with the earlier ones or the most common ones. The focus should always be accessibility.

One step further would be having a tutorial. It can be an online one with an in-browser-IDE, or a step-to-step to build something people can do on their own machines.  
The first kind seemed utterly innovative when [\_why](https://github.com/readme/featured/why-the-lucky-stiff) created the one for [Ruby](https://try.ruby-lang.org/), but it seems to be more achievable nowadays, with solo developers building it for the [language they created](https://tour.gleam.run/).  
The second kind has its own audience (I'm one of them), but it seems to be less consistent in terms of quality compared to the former. [Astro](https://docs.astro.build/en/tutorial/0-introduction/) has a really good one while [Django](https://docs.djangoproject.com/en/5.0/intro/tutorial01/)'s is just a big mess. But there is one clear message they want to send you for sure: the people who made Django were cool.

### And much more

I mean, I'm sure I'm touching just the surface and there are people out there who know much more than me. There is the structure to consider, the format, the language(s).  
But I think it is important to start from the basis.  
I've been a Linux and OSS user since teenage years, and the average quality is only marginally improved. While online harassment is still the same or worse. Bad docs are another way to gatekeep knowledge and spaces. Another way to keep you out of the club because you're different.  
But most of us are better than that. And we might write bad docs just because we're lazy. Let's push ourselves a little bit more and keep the gate open together.
