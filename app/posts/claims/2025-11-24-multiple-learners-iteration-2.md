---
title: Second iteration of multiple learners for usability testing
description: Iteration based on insights gathered in the first round of concept testing
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-11-24
tags:
  - private-beta
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

- We have iterated on insights from our first round of concept testing to move into usability testing.
- Concept testing helped give us a direction, as there were multiple ways to approach the design. You can read more about that in our previous blog post <a href="../multiple-learners">here</a>.
- The concepts were tested using static screenshots instead of interactive prototypes, which allowed us to learn quickly before investing time in building designs that might be heading in the wrong direction.
- We learned that users had preferences for certain designs, but we wanted to dig deeper into why a design was preferred. Understanding the reasoning behind it was more valuable than simply knowing which components they liked.

Below are the next designs. They combine elements of the concepts that tested well, build on the underlying reasons for user preferences, and form the basis for hypotheses we’ll take into usability testing.

## What our ideas were

### Claim details 

> **We believe that** keeping the claim details screen as familiar as possible to current designs
> **Will be a useful feature for** submitters
> **As it will** allow them to adapt more quickly to using it

> **We believe that** separating the bulk of learner-completion information into its own management screen 
> **Will be a useful feature for** submitters
> **As it will** prevent the claim-details screen from becoming overloaded, making the information more digestible and allowing easier handling of large amounts of learner data through added space and features such as tabs.

> **We believe that** having a summary section on the claim-details page for learner completions
> **Will be a useful feature for** submitters
> **As it will** provide a quick overview of the claim’s status based on familiar information—such as dates and evidence—and help them easily see what specific details are still outstanding

#### Links 
> **We believe that** moving the claim history to a link placed next to “View previous submissions”
> **Will be a useful feature for** submitters
> **As it will** reduce the variation and volume of font sizes in the claim-details page—an issue highlighted by users—while still allowing us to test whether this change affects its usefulness as an “at-a-glance” view of the claim.

- Having multiple “change” links on the learner, completion date and evidence of completions values — when they all led to the same place — did not work well. GDS guidance recommends avoiding multiple links that direct to the same destination, and users were unsure what to expect. In addition, the claim-details page now contains many blue links with different functions, so we conducted a link audit to identify ways to reduce them

> **We believe that** going forward with the "Manage" button 
> **Will be a useful feature for** submitters
> **As it will** their expectation of being taken to a single place where they can update all completion information

#### 60/40 claims 

We also needed to consider how the design would function across all claim types. During concept testing, we hadn’t fully explored how the ideas would work for 60/40 claims. To fit the "Manage" button design, we realised the 60% section would require its own dedicated area for a learners-management button but only for a single learners row. There is also already a lot of duplicated learner information on the 60/40 screen—potentially even more once the list of learner names appears in the edit alert box. This raised the question of whether now is the right time to rethink the layout, as it was created some time ago and no longer feels like the best fit.

Updates:

We explored collapsing the section that isn’t being worked on, but key information such as training details would end up hidden.

A new question emerged: do the training and learner details actually sit outside the 60/40 split, with the remaining sections being the only parts directly tied to the 60/40 structure?

This led to a reframing: a claim is essentially one training item plus any number of learners. That’s consistent across both 100% and 60/40 claims, so we explored extracting this shared information and placing it at the top.

We collapsed the inactive part of the 60/40 split to save space and removed the timeline, which immediately made the page simpler and easier to navigate


### Manage learners screen 

> **We believe that** framing a learner as a name, a corresponding piece of completion evidence, and a completion date—displayed together in individual learner cards
> **Will be a useful feature for** submitters
> **As it will** match their mental model of seeing these pieces of information grouped together and handled as a single unit 

- The idea of bulk upload of certificates is something we are evaluating the tech effort for, which if introduced would perhaps change this flow in the future

#### Completion dates
The completion date could apply to all learners or to each individual learner. From research, we knew users expected the design to adapt based on which option they chose, so we needed a way for them to feed this choice into the design.

We found that users often missed the link to “add one to all.”

The concept of asking whether the date applied to one or all learners worked well, but the placement of this question in the design and flow wasn’t quite right.

> **We believe that** moving the completion-date choice to the Manage learners screen and embedding it into the flow, while displaying the question for reference
> **Will be a useful feature for** submitters
> **As it will** allow them to easily set or change whether the date applies to one learner or all, fitting naturally into their workflow

- asked it when first adding a completion date, then the summary apepars at top.
- If yes, add to all,
- If no, just adds for the specific learner
- If yes then changes to no, keeps same completion date on everyone, then they can change individually
- How to deal with completion dates
If a single learner and added completion date on that screen, then add another, then would show both learner cards with the original learner's completion date shown 

#### Tabs
* Managing learners within a claim can become challenging as the number of learners increases. In testing, 5 out of 6 participants indicated that they preferred the tabbed approach to learner management

> **We believe that** showing learners in a way that highlights only those who still require additional information
> **Will be a useful feature for** submitters
> **As it will** provide a clear way of breaking up the information and focusing attention on learners who still need actions completed

- Having to do and done tabs, once filled in a card, it moves to done
- For needs action tabs, if edit it stays in needs action with edited tag, removed tab if its been submitted before, submitted tab can't be edited

- Think fits expectation of the tab interaction behaviour

#### Advanced search 
- Actions meeting decided adding in the advanced search for a specific learner's claim wasn’t in scope for multiple learners

#### Start date
- This is still undergoing further research to find out the needs 
- Asking in the usability testing on the processor side whether they do something with it (insight was band 3’s say yes, trainers say no?)

#### One learner v multiple learners in the design 
As our designs developed with multiple learners in mind, we had to make sure still worked for single learner, and that the introduction of multiple learners didn't now make that a overcomplicated journey. 

Currently might only have one learner card on manage learners page, if a single learner claim

We imagined the expectation if there was only one learner, there is no need to go to any other screens, similar to the current journey. With this idea then we needed to make it work on the one page and expand into a multi learner claim if the org so wished. How to make the transition natural in the flow?

Added "add another" to links, no manage learners button until added a second learner


#### Content
Removed a lot of the content when reqorked 60/40
- Edit learners alert text links to the specific learners cards in the manage learners screen 
- Edit tags show on the top level claim details for any information of that type that has changed on any of the learners 


## How we tested our ideas and what we found

## What we will do next
