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

At the end of Alpha the design for managing claims consisted of a single page with the tabs component on it. Each tab was for a specific state a claim could be in eg approved or submitted. Within each tab was a table with claims for that were in the corresponding state. 

![A screenshot from v7 of the prototype showing managing claims screen.](manage-claims-v7.png "Manage claims screen from v7")

While on the whole this screen tested well during Alpha, there were a few issues we had discovered with the design:
- The removal of pagination in the table for MVP meant the tables could end up being very long on a single tab.
- Tabs on smaller screen sizes are vertically stacked on smaller screen sizes meaning multiple, potentially large, tables stacked on top of one another.
- Due to the amount of data that could be on each tab loading times could be affected (this is something we struggled to test in the prototype).
- When using assistive technologies the multiple tabs and large quantities of claims could prove problematic and we struggled to test with users with accessibility needs during alpha.
- We would be introducing new types of claims into these tables in the future for the 60/40 work and introducing another columns would increase cognitive load further on a page that already causes a high cognitive load.

Given the above we decided to looks at ways we would simplify the design journey around managing claims while incorporating the MVP changes. 

>**How might we** improve accessibility, extensibility and scalability of the manage claims journey while not degrading usability.

## What our ideas were

Our starting point for this work was the idea that each tab should instead be separate pages of the service. We felt this would reduce the cognitive load by focussing a page on claims of a specific state without the other visual clutter. It would also allow the tables to better scale and extend as needed for more claims or additional features such as filters and search options in the future. 

The remaining challenge then became how we sign post to these different pages in an intuitive way. This sign posting page would also be the natural home for the start new claim button. 

We explored two ideas for this; the chevron card and basic card:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="basic-cards.png" alt="A screenshot of some basic cards" style="width: 100%; height: auto;">
    <figcaption>Basic cards</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="chevron-cards.png" alt="A screenshot of some chevron cards" style="width: 100%; height: auto;">
    <figcaption>Chevron cards</figcaption>
  </figure>
  </div>
</div>

After some deliberation we decided to opt for the chevron cards as they were more universally seen on the government website and therefore we formed a hypothesis that these would be better suited for this form of signposting.

>**We believe that** using the chevron card to sign post users to different claims state pages
>**Will be a useful feature for** submitters
>**As it will** help them clearly identify the different states claims can be in and allow users to easily navigate to these pages.

## What we changed

The below show the designs we created and tested in v8:

![A screenshot from v8 of the prototype showing managing claims screen.](manage-claims-v8.png "Manage claims")

![A screenshot from v8 of the prototype showing not yet submitted claims screen.](claims-table-v8.png "Not yet submitted claims")

## How we tested our ideas and what we found
We ran usability testing on these designs week commencing 6th May 2024. Here is a summary of the findings related to the above changes:
- users found it very easy to make and submit claims still despite changes. Minimal confusion and little to suggest they would struggle to do this independently
- a shift to pages for the claims tables instead of tabs meant users were able to pick up quicker what was going on that before


## What we will do next
The changes we have made have improved usability as well as providing a better foundation for us to scale and extend as needed in the future, as a result we will move these changes into development and monitor any related findings early on in private beta.

