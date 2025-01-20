---
title: Removing references to revalidation funding for MVP
description: Revalidation funding (CPD) claims will not be available for the start of Private Beta. To address this we removed references from the designs.
author:
  name: Mark Portnell (Interaction designer)
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
Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

The decision was made, from both a delivery and product perspective, to de-scope the revalidation funding feature for the start of private beta. This functionality, which allows users to make claims for revalidation funding, will be introduced later in the year.

In our last version of alpha, we had formulated designs for the revalidation funding section of the service. However, we had not yet tested these with users due to difficulties in finding organisations with employees eligible for this funding.

While we knew we had to remove the ability to make claims for revalidation funding, the design challenge was what to do with the references to revalidation funding in the service until we could provide this functionality later in the year.

## What our ideas were

We explored two fundamental design hypotheses:

#### Hypothesis 1
> **We believe that** maintaining references to revalidation funding but disabling access to that part of the service  
> **Will be a useful feature for** submitters  
> **As it will** show where that feature will exist when it is introduced in the future

#### Hypothesis 2
> **We believe that** removing references to revalidation funding  
> **Will be a useful feature for** submitters  
> **As it will** simplify the user interface and reduce cognitive load

After consulting with colleagues in the design community, the general consensus was that it would be better practice to remove references to revalidation funding for MVP, rather than opting for disabled states for certain functionality. This approach was chosen, particularly since we didn’t have the opportunity to research this before design handover.

## What we changed

The main references to revalidation funding were located on the "before you start" screen, eligibility checker screen, and the landing screen after signing in.

With the removal of these references, the eligibility checker screen became redundant and was removed. The small amount of information about care skills funding was moved to the "before you start" screen.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="before-you-start-v7.png" alt="v7 'Before you start'" style="width: 100%; height: auto;">
      <figcaption>The v7 'before you start' screen with references to revalidation funding</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="before-you-start-v8.png" alt="v8 'Before you start'" style="width: 100%; height: auto;">
      <figcaption>The v8 'before you start' screen with references to revalidation funding removed, and the eligibility checker removed</figcaption>
    </figure>
  </div>
</div>

Additionally, the landing screen that appeared after users signed in became redundant. This screen provided signposting to the two parts of the service for each funding pot. Without revalidation funding and with the removal of the dashboard concept for MVP, this page was removed. Users now land directly on the manage claims page for care skills funding after signing in for version 8.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="landing-screen-v7.png" alt="v7 'Landing screen'" style="width: 100%; height: auto;">
      <figcaption>The landing screen that was removed in version 7</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found

Ideally, we would have liked to test this with users and understand their expectations before finalising our approach for MVP. However, due to limited time and the availability of users who would make use of this funding, we opted for desk research on best practices instead.

## What we will do next

We will closely monitor the effectiveness of this approach during early private beta. As we progress, we will explore the best way to introduce revalidation funding into the service when it is ready to be added to the roadmap.


