---
title: Showing the journey a claim  ahs been on
description: Adding back in the claim history so that organisations can see when claims moved through the process.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-01-08
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

## Why we did this work
As part of work done to scale back the MVP back in March to try and meet an aggressive delivery schedule we removed claims from the proposed designs for the claims app. Please see the design history post [Scaling back MVP](../scaling-back-mvp) that goes into further details about the aspects removed from MVP as part of that work. 

One of the user needs that has been identified in the past is:
>**As a** submitter
>**I need to** to see when a claim was started and/or last updated
>**So that** I can track the claim's timeline

Currently we do not meet this need given the removal of the claim history pattern. Although this hasn't been flagged by users as being a critical issue currently we were still working on the discovery phase of some big problem spaces and there was a gap in development work. Therefore the decision was made to look again at this as it was a small bit of work that could fill a vacant space in the development plan, however we wouldn't have any time to further test this with users.

## What our ideas were
We started by looking back at the claim history design from v7 of the prototype.

![A screenshot taken of a claim from version 7 of the prototype showing the claim history pattern.](v7-claim-history.png "v7 Claim history")

This design used the [MoJ timeline pattern](https://design-patterns.service.justice.gov.uk/components/timeline/), while it was part of the design during Alpha and was present during usability testing of other elements it wasn't a focal point of testing, this was due to the time constraints and other higher priorities for the times we had with users.

When revisiting this design we opted to keep with the MoJ timeline approach as this closely aligned with the user need described. In addition we have previously heard (albeit from processors) that viewing dates in a summary list form can make it more difficult to understand. 

Next we reviewed the existing logic of the pattern we had used and agreed the following tweaks:
- Supporting information would only show for the most recent status change
- For consistency we would show the claim history even on not-yet-submitted claims with just one entry
- We would show the individual responsible for the status change expect for claim created as this data doesn't currently exist
- With the new design for 60/40 claims being a combined claim we would show status changes for both the 60 part and the 40 part together. 

The final small tweak was to review the existing content and we made the decision to simply further and remove unnecessary content from the supporting information this was to ensure the content was more suitable to being viewed at a glance.

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
As stated above due to time constraints we didn't have the room to test this with users, but given the use of an established pattern from a GDS sub design system and existing indirect testing carried out in Alpha we felt there was minimal risk to developing this without further testing in our service. 

## What we will do next
We will look to develop this design and monitor it during private beta for any issues. While unlikely if we need to we can iterate the design as needed further on in private beta.



