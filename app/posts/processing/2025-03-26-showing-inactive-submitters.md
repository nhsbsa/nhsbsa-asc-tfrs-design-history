---
title: Showing inactive submitters to the user.
description: Designing a quick solution to show inactive submitters alongside active and invited submitters to processors and CCS agents.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-03-26
tags:
  - private-beta
  - processing-version-8
  - processing-view-org
relatedUserNeeds:
  - user-need-13
aside:
  title:  Processing Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v8/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As detailed in the post covering the work to allow back office staff to add a new Senior responsible officer (SRO): [Allowing organisation to change SRO](../change-sro). As part of that work we were showing all inactive SROs alongside the active SRO.

![A screenshot showing v7 of the prototype where we are showing inactive SROs](change-sro.png "A screenshot from the change SRO post showing inactive SROs")

It was identified that by showing inactive SROs it implies that we would show inactive submitters if there were any. But this isn't the case. We agreed that there was an opportunity to make this better meet those expectations. However we wanted to do this in a way that was quick to develop with minimal changes to the existing design. We also had to account for the fact that the list of inactive submitters could theoretically grow quite large and are less useful that the active and invited submitters. 

## What our ideas were
When we started the work some of our initial thinking involved using the tabs component and splitting the different states onto separate tabs for both SROs and submitters. We quickly discounted this as it was a large change to the existing design and therefore more risk without testing and more development effort. 

Our next concept was to have a separate table for inactive submitters towards the bottom below the active and invited submitters. We considered two different options to show this information to the user:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="option-1.png" alt="A screenshot of option 1 showing separate headers for active and inactive submitters." style="width: 100%; height: auto;">
    <figcaption>Option 1</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="option-2.png" alt="A screenshot of option 2 showing a another table with supporting text but beneath the existing active/invited submitter table" style="width: 100%; height: auto;">
    <figcaption>Option 2</figcaption>
  </figure>
  </div>
</div>

We decided upon option 2 as we felt that having separate active or inactive headers was too messy and the option 2 felt a lot visually cleaner. 

The final aspect was to just ensure we dealt with the 4 different permutations that this screen could take:
1. No active/invited submitters and no inactive submitters
2. Some active/invited submitters but no inactive submitters
3. No active/invited submitters but some inactive submitters
4. Some active/invited submitters and some inactive submitters

This involved some variations in content between the different states:
1. "No Submitters added yet."
2. "No submitters have been deleted by the SRO."
3. "There are currently no active or invited submitters."
4. As per the design in option 2 above.

## How we tested our ideas and what we found
As mentioned in the 'Why we did this work' section we won't be testing this with users before development, due to the size of the change it was agreed that there was low risk in releasing the work before usability testing. 

## What we will do next
This work will be moved into development and we will monitor feedback from users specific to this feature once released. 