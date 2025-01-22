---
title: Approved and rejected states for 100 claim
description: 

author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-05-15
tags:
  - private-beta
  - processing-version-3
  - processing-view-a-claim
  - 100-type-claims
aside:
  title:  Processing Prototypes
  content: |
    [View processing v3 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v3/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)


## Why we did this work

We needed to consider the view of the process a claim view of a claim that has already been processed e.g. approved or rejected. We wanted to consider the intentions of someone coming to look at the claim in that state and what they want to be able to do.

## What our ideas were

>**We believe that** all the information available 
>**Will be needed for** future processors to come back and look at a already processed claim
>**As it will** allow them to see the outcome of a claim and the reason's why it was rejected, or how much was calculated to be reimbursed if approved.

#### MVP decision
For MVP it was decided to not view the evidence. This is something added into the backlog as seems vital for reflecting on why a claim was approved or rejected or how will a future processor be able to understand why the processor came to that conclusion. 
- Show answers from criteria checks and the no notes/reimbursement amount 
- Still want all the information inputted from the claim, just in a frozen state. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="approved-claim-100.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Approved processed claim</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="rejected-claim-100.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Rejected processed claim</figcaption>
  </figure>
  </div>
</div>

#### Considerations for future

- Notes would be nice to add context for future processor as in this current design there is no information given of dates of submission.

## How we tested our ideas and what we found
- In a round of user research, it was found that they were able to see all the information they needed.
