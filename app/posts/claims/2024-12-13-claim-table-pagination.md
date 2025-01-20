---
title: Reintroducing pagination to the claims tables
description: Adding back in the pagination on the claim tables so that users can see all the claims in a specific status.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-12-13
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As part of work done to scale back the MVP in March to try and meet an aggressive delivery schedule, we removed pagination from the proposed designs. Please see the design history post [Scaling back MVP](../scaling-back-mvp) for more details on the aspects removed from the MVP as part of that work. 

Despite pagination being removed, a technical limitation was put in place on how many claims could be displayed in a table at once. This limitation was introduced to reduce any performance impact that could arise from loading too many claims at a time. Initially, the risk to the user experience was minimal because it would take some time for an organisation to amass enough claims of a particular status to exceed the 100-claim limit. The intention was to reintroduce pagination as an organisation neared this threshold.

We have now reached a point where an organisation has exceeded 100 approved claims. As a result, we are looking to reintroduce pagination to balance performance and usability. Without pagination, users will not be able to view all claims in the table. If they know the claim reference number, they would have to use the new "find a claim" feature that was released.

## What our ideas were

We started by reviewing the pagination design from v7 of the prototype.

![A screenshot taken of claims tables from version 7 of the prototype showing the pagination pattern.](v7-pagination.png "v7 Claim table with pagination")

This design used the [MoJ pagination pattern](https://design-patterns.service.justice.gov.uk/components/pagination/). While it was part of the design during Alpha and was present during usability testing of other elements, it wasn’t the focal point of testing, and the interaction wasn’t fully implemented in the prototype due to challenges with getting it to work alongside the built-in table sorting pattern.

When revisiting this design, we opted to return to the standard GDS pagination pattern as, after discussion, we felt the [standard GDS pattern](https://design-system.service.gov.uk/components/pagination/) would be more accessible. We were also looking for low-risk options that had been extensively tested elsewhere, so we could forego further usability testing before development, as this work was time-critical.

While bringing in the GDS pattern, we also decided to keep the content illustrating the number of results: "Showing 11 to 20 of 30 results." We felt this, alongside the GDS pagination pattern, helped users understand their position in the list of claims.

v13 of the claims tables differs from version 7 in some ways, such as:
- Tabs to show different claims tables for different statuses.
- Multiple learners being allowed on a claim.
Despite these differences, the incorporation of pagination in v13 didn’t require any additional design thinking.

![A screenshot taken of claims tables from version 13 of the prototype showing the pagination pattern.](v13-pagination.png "v13 Claim table with pagination")

Some final considerations included opting for 20 claims per page, which felt like a good balance between usability and page load times. We also made some clarifications regarding behaviour on smaller screen sizes, essentially continuing the rules around ellipses being used only to replace more than one page number.

## How we tested our ideas and what we found

As stated above, due to time constraints, we didn’t have the room to test this with users. However, given the use of a well-established GDS pattern and the existing indirect testing carried out in Alpha, we felt there was minimal risk in developing this without further testing in our service.

## What we will do next

We will proceed with the development of this design and monitor it during the private beta for any issues. While it's unlikely, we can iterate the design as needed during the private beta.