---
title: Iterating our manage claims screen
description: We iterated the way users can manage claims to be more accessible and intuitive across all platforms.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-03-26
modified: 2024-05-06
tags:
  - claims-version-8
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---

## Why we did this work

At the end of alpha, the design for managing claims consisted of a single page with a tabs component. Each tab represented a specific state a claim could be in (e.g., approved or submitted). Within each tab was a table displaying claims in that corresponding state.

![A screenshot from v7 of the prototype showing the managing claims screen.](manage-claims-v7.png "Manage claims screen from v7")

While the screen tested well during alpha, we identified a few issues with the design:
- The removal of pagination in the table for MVP meant the tables could become very long within a single tab.
- On smaller screen sizes, the tabs were vertically stacked, meaning multiple large tables were stacked on top of one another.
- Due to the large amount of data, loading times could be affected (this was hard to test in the prototype).
- Multiple tabs and a large number of claims could create accessibility challenges for users of assistive technologies, and we struggled to test with accessibility users during alpha.
- Future changes, such as adding new claim types for the 60/40 work, would increase the cognitive load further, particularly with the need for additional columns on already complex pages.

Given these issues, we decided to explore ways to simplify the design of the claims management journey, while still incorporating the MVP changes.

> **How might we** improve accessibility, extensibility, and scalability of the manage claims journey, while ensuring we don’t degrade usability?

## What our ideas were

Our starting point was the idea that each tab should be a separate page within the service. We felt this would reduce cognitive load by focusing each page on claims of a specific state, without visual clutter from other states. It would also make the tables more scalable, allowing for future additions like filters or search options.

The remaining challenge was how to signpost these different pages in an intuitive way. This page would also naturally house the "Start new claim" button.

We explored two design ideas for this: the chevron card and the basic card.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="basic-cards.png" alt="A screenshot of basic cards" style="width: 100%; height: auto;">
      <figcaption>Basic cards</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="chevron-cards.png" alt="A screenshot of chevron cards" style="width: 100%; height: auto;">
      <figcaption>Chevron cards</figcaption>
    </figure>
  </div>
</div>

After deliberation, we opted for chevron cards as they are more commonly seen on government websites. We hypothesized that these would provide a familiar, easy-to-understand method of signposting.

> **We believe that** using chevron cards to signpost users to different claims state pages
> **Will be a useful feature for** submitters
> **As it will** help them easily identify different claim states and navigate to the relevant page.

## What we changed

Here are the designs we created and tested in v8:

![A screenshot from v8 of the prototype showing the managing claims screen.](manage-claims-v8.png "Manage claims")

![A screenshot from v8 of the prototype showing the not yet submitted claims screen.](claims-table-v8.png "Not yet submitted claims")

## How we tested our ideas and what we found

We ran usability testing on these designs in the week commencing 6th May 2024. Key findings include:
- Users still found it easy to make and submit claims despite the changes. There was minimal confusion, and little to suggest they would struggle to do this independently.
- The shift from tabs to separate pages for the claims tables meant users were able to understand the structure more quickly.

## What we will do next

The changes we've made have improved usability and provided a better foundation for future scalability. As a result, we will move these changes into development and monitor related findings early on in private beta.
