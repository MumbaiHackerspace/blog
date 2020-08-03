---
title: Domain Design Patterns
date: 2020-07-27
featured_image: /images/blog/post-1.jpg
image_caption: Story map
excerpt: Walk through the Domain Design
tags:
  - blog
  - Visage
---

# Design

A certain amount of thought needs to go into an application design because it should not only serve the current requirements but also be adaptable for future needs.

Presently, while Visage is a small implementation and can be implemented as a motley group of CRUD operations, we will adopt the formal methods of domain design. The reason is most tutorials skip this part and directly show the end output and proceed to the implementation. So lets begin.

## Event Storming

The first tool we use is Event Storming[ES] where we plot the events [In ES, Domain events are usually depicted in orange boxes] that will be generated on a somewhat linear time scale. [note these are domain events, we do not use any technical terms of the system]

Our 1st iteration yielded the below:
![1st iteration Event Storm](/images/blog/Design-ES-1st.jpg)

Please notice the spacing between the events. Some are closer to each other and this is a reflection of their proximity to each other in respect of time. The first contours of our bounded contexts are revealing themselves.

These events are triggered by commands[depicted as blue rectangular boxes] which are usually issued by users [in yellow] or external systems [in pink].

Our 2nd iteration results:
![2nd iteration Event Storming](/images/blog/Design-ES-2nd.jpg)

Note how we have now added a few more events. This process of discovery is encouraged in Event Storming. Our first draft will never be perfect but it sets the bedrock for further discovery.

Also we noticed that our technical biases are creeping in. We need to ensure all terms only domain specific. Lets do some correction and flesh out the rest of the diagram.
