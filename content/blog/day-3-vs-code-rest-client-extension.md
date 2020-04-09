---
path: Visage
date: 2020-04-09T18:58:56.229Z
title: 'Day 3: VS Code Rest Client Extension '
description: >-
  We incorporate an extension that's a big rage in integrating 3rd party APIs in
  VS Code
---
## Rest Client VS Code Extension
After getting Xamarin to work [had to upgrade the emulator in the end], I decided to get a look in for the Rest Client extension that was garnering quite a following in the REST API world. And now I know why....even though there are quite a few stellar products like Insomnia and Postman in this fields, **REST Client extension brings 3rd Party API integration as part of your development workflow. And in doing so saves quite a bit of your computers memory and diskspace since its integrated with VS Code.**

1. In your VS Code settings.json, one can create key value pairs for different environments. Ofc, the prime candidate for these pairs are Visage specific secrets + sensitive data [i.e. all info that should not be either stored or committed to a public repo]
 
![Rest-Client-VSCode-settings](Rest-Client-VSCode-settings.png)

2. You write up your call in files with .http extension. One thing that is going to be a great time saver is the visual cues it provides if a parameter being invoked in not part of the environment.

![Rest-Client-Squiggle](Rest-Client-Squiggle.png)

Once you switch to the current environment via VS Code's Command Palette, the squiggly goes away

![Rest-Client-Environment-Switch](Rest-Client-Environment-Switch.png)


