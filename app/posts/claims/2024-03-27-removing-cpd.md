---
title: Removing references to revalidation funding for MVP
description: Revalidation funding (CPD) claims will not be available for the start of Private Beta. To address this we removed references from the designs.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-03-27
tags:
  - claims-version-8
  - revalidation-funding
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---



## Why we did this work

The decision was made from a delivery and product perspective to de-scope the revalidation funding for the start of private beta. This ability to make claims for these would come later in the year. 

In our last version of Alpha we had formulated the designs for the revalidation funding side of the service but this had yet to be tested with users due to challenges around finding organisations with employees who were eligible for this funding pot. 

Although we knew we had to remove the functions of be able to make a claim for revalidation funding the design challenge was what to do with the reference to revalidation funding in the service until we were able to provide the functionality later in the year.

## What our ideas were

There were two fundamental design hypotheses that we explored:

#### Hypothesis 1
>**We believe that** maintaining references to revalidation funding but disabling access to that part of the service
>**Will be a useful feature for** submitters
>**As it will** show where that feature will exist when it is introduced in the future

#### Hypothesis 2
>**We believe that** removed references to revalidation funding
>**Will be a useful feature for** submitters
>**As it will** simplify the user interface and reduce cognitive load

After conversations with colleagues in the design community the general consensus was it would better practice to remove the references to revalidation funding for MVP instead of opting for disabled states for certain functionality particularly given we don't have the opportunity to research this before design handover.

## What we changed

The main references to revalidation funding were found on the 'before you start' screen, eligibility checker screen and the landing screen once you sign in. 

With the removal of the references the eligibility checker screen became redundant and was removed, with the small amount of information on care skills funding was moved to the 'before you start' screen. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="before-you-start-v7.png" alt="v7 'Before you start'" style="width: 100%; height: auto;">
    <figcaption>The v7 before you start screen with references to revalidation funding</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="before-you-start-v8.png" alt="v8 'Before you start'" style="width: 100%; height: auto;">
    <figcaption>The v8 before you start screen without references to revalidation funding and removal of the eligibility checker</figcaption>
  </figure>
  </div>
</div>

Additionally the landing screen that showed once users signed into the service also became redundant. Given it provided signposting to the two parts of the service for each funding pot, without revalidation funding and the removal of the dashboard concept for MVP this page was removed. Users were landing straight onto the manage claims page for care skills funding after sign in for version 8.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="landing-screen-v7.png" alt="v7 'Before you start'" style="width: 100%; height: auto;">
    <figcaption>The landing screen that was removed from version 7</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found
Ideally we would have liked to explore with this with users and understand their expectations before committing to an option for MVP. However with limited time and availability of users that would make use of this funding pot we opted for some desk research on best practice. 


## What we will do next
We will closely monitor this approach through early private beta and will explore how best to introduce revalidation funding into the service when we get to that point in the road map.

