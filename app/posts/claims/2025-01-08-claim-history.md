---
title: Showing the journey a claim has been on
description: Adding back in the claim history so that organisations can see when claims moved through the process.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-01-08
tags:
  - private-beta
  - claims-version-13
  - claims-manage-claims
  - claims-start-a-claim
relatedUserNeeds:
  - user-need-1
aside:
  title:  Claims prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As part of the work done to scale back the MVP in March to meet an aggressive delivery schedule, we removed claims from the proposed designs for the claims app. For more details about the aspects removed from the MVP, please refer to the design history post [Scaling back MVP](../scaling-back-mvp-claims).

One of the user needs identified earlier is:

> **As a** submitter  
> **I need to** see when a claim was started and/or last updated  
> **So that** I can track the claim's timeline.

Currently, we do not meet this need due to the removal of the claim history pattern. Although this hasn’t been flagged as a critical issue by users, it remains a gap. As we were still in the discovery phase of some larger problem areas, and given the development space, we decided to revisit this feature. This would be a small addition to our development plan. However, we did not have time to test this with users.

## What our ideas were

We began by reviewing the claim history design from v7 of the prototype.

![A screenshot of a claim from version 7 of the prototype showing the claim history pattern.](v7-claim-history.png "v7 Claim history")

This design used the [MoJ timeline pattern](https://design-patterns.service.justice.gov.uk/components/timeline/). While this was part of the design during Alpha and included in usability testing of other elements, it wasn’t a focal point of testing. This was due to time constraints and other higher priorities during our sessions with users.

When revisiting this design, we decided to stick with the MoJ timeline approach as it closely aligned with the user need described above. Additionally, we had previously received feedback (mainly from processors) that viewing dates in a summary list format could be confusing.

We reviewed the existing logic behind the pattern and made the following adjustments:
- **Supporting information** would only be shown for the most recent status change.
- **Claim history** would be displayed even for not-yet-submitted claims, showing a single entry.
- **Claim status changes** would show the individual responsible, except for the “Claim Created” entry, as this data doesn’t currently exist.
- For **60/40 claims**, we would display status changes for both parts (60 and 40) together.

We also made a final adjustment by removing unnecessary content from the supporting information to ensure that it was more suitable for quick viewing.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="v13-claim-history-6040.png" alt="A screenshot taken of a 60/40 approved claim from version 13 of the prototype showing the claim history pattern." style="width: 100%; height: auto;">
    <figcaption>60/40 claim history</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="v13-claim-history-100.png" alt="A screenshot taken of a 100 rejected claim from version 13 of the prototype showing the claim history pattern." style="width: 100%; height: auto;">
    <figcaption>100 claim history</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found

As mentioned, due to time constraints, we didn’t have the opportunity to test this with users. However, we felt confident proceeding with development due to the use of a well-established GDS pattern, along with indirect testing carried out during Alpha. This led us to believe there was minimal risk in developing the feature without additional testing within our service.

## What we will do next

We will proceed with developing this design and monitor its performance during private beta. While we don’t anticipate major issues, we will be ready to iterate the design as needed if any problems arise during private beta.