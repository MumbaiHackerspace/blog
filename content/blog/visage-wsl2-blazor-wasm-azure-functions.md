---
path: Visage
date: 2020-01-20T23:57:11.214Z
title: In the beginning
description: 'Visage: Why, what and how?'
---
<!--StartFragment-->

As an OSS community we conduct a lot of meetups \[last count over 100 in the past 8 years], and as an organizer one of the most important and absolutely necessary task for us \[but which most of us hate]from a civic and venue security requirements are checkins and checkouts of the attendees. The checkins also forms the bedrock for our blacklist system; we expect our attendees to adhere to basic RSVP etiquette for our meetups \[which are all free & usually 3x houseful, and for which speakers volunteer to speak even though they put so much time and efforts to prepare] and any no-shows, after following due process, have their future RSVPs automatically rejected for a duration of time.

We found our fellow techies finding novel methods to circumvent the blacklist : churning through their emails and mobile numbers.

For this we are building a solution where we take the opportunity to incorporate some of the latest technologies. Think about it, the project does not need to be web scale but its much more than a hobby project; gives us quick feedback on our code (+ processes) and evaluate technologies beyond their buzz.

And as our good friend [Shaun](https://twitter.com/swyx/status/1212439325104726018) has exhorted,#LearningInTheOpen; we will blog our daily progress.

Since the person who will be doing the bulk of the work is a Microsoft MVP with Azure credits, we will be boot strapping the solution with the following stack:

* Dev Infra: WSL2 with Code Insider version
* Framework : .Net Core 3.1 on Linux
* Frontend: Blazor WASM + SignalR
* Middleware: Azure Functions Containers - Docker
* Backend: CosmosDB + Neo4j
* AI/ML : Azure Cognitive Vision + Bot Service Framework
* Project: Azure DevOps
* Deployment: Azure CDN + Azure FrontDoor
* Identity: Auth0

<!--EndFragment-->
