---
title: The Big Picture
date: 2020-08-27
featured_image: /images/blog/post-1.jpg
image_caption: Story map
excerpt: Implementing Strategic Domain driven Design for Visage with EventStorming, Domain Storytelling, Core Charts, Bounded Context Canvas.
tags:
  - blog
  - Visage
---

[toc]

## Introduction

Starting a project is akin to crossing valleys to trek up a mountain for the first time: a map is a great companion. Thats what [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) does for our project: creates just not a 20000 feet view but also literally provides us a road map to build our project.

The [Statement of Intent](https://github.com/HackerspaceMumbai/Visage/wiki/1-Statement-Of-Intent) and [Workflow](https://github.com/HackerspaceMumbai/Visage/wiki/2-Essential-Workflow) provides the foundation for the design decisions.

In this first blog about the project, we will envision the strategic design of the project. This will include modelling the Domain through a process of intentional discovery and relying on different tools to build a broad contour, tease out implicit requirements as well as unearth any blind spots. All this will become apparent below as a "clearer picture" emerges.

> At its core, the goal of Strategic DDD is to help us find the most elusive things in Domain-driven Design: [Bounded Contexts](https://www.infoq.com/news/2019/06/bounded-context-eric-evans/).

## Big Picture Event Storming

The first tool in our arsenal is Event Storming[ES], which is in its essence, the plotting of Domain events [usually depicted in orange boxes] on a somewhat linear time scale as they occur in real life.

Our 1st iteration yielded the below:
![1st iteration Event Storm](https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1599142822/Visage/Design-ES-1st.jpg)
While the key concept to separate Bounded Contexts is the Ubiquitous Language, I feel there should also be a core set of Unambiguous Vocabulary to unify at the domain level. The word _Event_ in English has different meanings depending on the context, especially in software & DDD. So in a nod to my Indian heritage, I standardized on the Sanskrit root word for events, meetups, conferences, functions etc -> **Karyakaram**

Please notice the spacing between the events. Some are bunched up together and this is a reflection of their proximity to each other in respect of time. Our bounded contexts are emerging.

These events are triggered by commands[depicted as blue rectangular boxes] which are usually "intentioned" by users [in yellow] or external systems [in pink].

Our 2nd iteration results:
![2nd iteration Event Storming](https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1599142822/Visage/Design-ES-2nd.jpg)

Note how we have now added a few more events. This process of discovery is encouraged in Event Storming. Our first draft will never be perfect but it sets the bedrock for further exploration.

Also we noticed that our technical biases are creeping in[Send Email, duh🤦‍♂️]. We need to ensure all terms are only domain specific. Lets do some correction and flesh out the rest of the diagram.

Voila, the final version of the Big Picture Event Storming is built with [Mural](https://app.mural.co/invitation/mural/hm2422/1595976908405?sender=augcor3018&key=22e68a54-6b14-413d-a37c-b6278ccacfb7) which has a more professional looking Event Storming template.

![Final Big Picture Event Storming](https://res.cloudinary.com/mumbai-hackerspace/image/upload/f_auto,q_auto/v1599142826/Visage/BigPictureEventStorming_fin.png)

Based on a few design heuristics, "I spy" the nebulous contours of at least two bounded contexts[BC] with the "RegistrationClosed" being the pivotal event. I have named them "Event Registration" and "Check-ins" respectively after agonizingly iterating over them over a day or so especially the former.

## Domain Storytelling

[Domain Storytelling](https://domainstorytelling.org/) is a DDD tool where Domain Experts pictorially depict their workflow involving actors and work objects. The kicker here is that the activities are numbered in order of their occurrence.

Thanks to the good folks at [WPS](https://github.com/WPS), who have provided a Domain Storytelling [Modeller](https://www.wps.de/modeler/) to make our lives much easier, we have a short 20 second video of the Visage "story".

<iframe width="560" height="315" src="https://www.youtube.com/embed/5vXRYps9_n8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One of the heuristic that is associated with Domain StoryTelling is that uni-directional flows are usually indicative of bounded contexts. This was quite revealing for now it shows that they are definitely three distinct bounded contexts.

1.Scheduling
2.Shortlisting
The above two have been carved out from the earlier Event Management. While ruminating over the names [deja vu, I know], I had a look at Eventbrite's blade for event creation and found that they named it _Scheduling_. And truth be told, at a higher level, that's what it actually is. **To let DDD help you, you got to learn to keep your ego/biases aside.**
3.CheckingIn

## Core Domains Charts

Now that we have our Bounded Contexts, lets see how they work with each other. Most folks go with Context Maps as their tool for this as recommended by [Eric Evans](https://dddcommunity.org/book/evans_2003/) but I prefer Core Domain Charts, since the latter strategically depicts the relationships between bounded contexts.

![Core Domain Charts](https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1599145061/Visage/Visage-Core-Domain.png)

## Bounded Context Canvas

Next up we try to focus on each Bounded Context individually. [Nick Tune](https://medium.com/@ntcoding) & his buddies at [DDD Crew](https://github.com/ddd-crew) [go check out their GitHub organization for more DDD goodies] had come up with a modelling technique to approach a Bounded Context like a black box: see what goes in, what comes out and what gets processed. The canvases have been sketched out using [draw.io](https://drawio-app.com/) v3 versions. I will update them as and when the v4 draw.io template is available.

![Shortlisting Bounded Context Canvas](/images/blog/Shortlisting.svg)

Can you see the Core Domain Charts effect out here? Since Shortlisting is a core domain, it will be in a driving position with Scheduling, which is a Generic/Supporting domain, hence the former is the customer while the latter is a supplier. While with CheckingIn, which is also a core domain, it is treated on an equal footing. Don't overlook politics.

These canvases are the first artifact to be [checked into the GitHub repo hosted source folder](https://github.com/HackerspaceMumbai/Visage/commit/6768e24bc865e2b12109198ebe0421ba93991b2b) of their respective microservices as part of [Living Documentation](https://leanpub.com/livingdocumentation). In a sense, it signifies these canvases are the spiritual fountainhead of the co-located code.

## Impact Mapping

Lastly, an app or a project does not exist in a vacuum, rather its invariably part of an ecosystem. I use Impact Mapping to do a kind of out of the box thinking, getting the lay of the land so to say, see who are allies of the project and what it is up against to make a dent in the cosmos.

![Impact Mapping Visage](https://res.cloudinary.com/mumbai-hackerspace/image/upload/q_auto,f_auto/v1599142825/Visage/ImpactMapping_fin.jpg)

> A journey of a thousand miles begins with a single step

You can follow the progress of this project on [Azure DevOps](https://bit.ly/2YHTZgq)

For the next blog post, we will be going into Tactical DDD with Example Mapping based BDD, Process Modelling EventStorming, Aggregate Canvases etc.
