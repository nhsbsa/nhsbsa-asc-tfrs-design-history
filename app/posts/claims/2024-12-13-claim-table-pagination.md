---
title: Reintroducing pagination to the claims tables
description: Adding back in the pagination on the claim tables so that users can see all the claims in a specific status.
author:
  name: Mark Portnell
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

## Why we did this work
As part of work done to scale back the MVP back in March to try and meet an aggressive delivery schedule we removed pagination from the proposed designs. Please see the design history post [Scaling back MVP](../scaling-back-mvp) that goes into further details about the aspects removed from MVP as part of that work. 

Despite pagination being removed there was a technical limitation put in place on how many claims could be presented in a table at once. This was to reduce any performance impact that may arise from too many claims being loaded in at a time. This limitation would have minimal risk to the user experience as from the offset of the service it would take some time before enough claims of a particular status would amass for an organisation that would take it over this 100 claim limit. The intention was to return to this feature as an organisation neared this threshold. 

We have now reached a point where an organisation has exceeded 100 approved claims and therefore we are looking to reintroduce pagination to strike a balance between performance and usability. Without pagination currently users will not be able to view certain claims as they wouldn't be shown on the claim table. Instead, if they know the claim reference number they would have to make use of the new find a claim feature that was released.

## What our ideas were
We started by looking back at the pagination design from v7 of the prototype.

![A screenshot taken of claims tables from version 7 of the prototype showing the pagination pattern.](v7-pagination.png "v7 Claim table with pagination")

This design used the [MoJ pagination pattern](https://design-patterns.service.justice.gov.uk/components/pagination/), while it was part of the design during Alpha and was present during usability testing of other elements it wasn't a focal point of testing, the interaction was also not fully implemented in the prototype at the time due to challenges with getting it to work alongside the in-built table sorting pattern. 

When revisiting this design we opted to return to the standards GDS pagination pattern as, after discussion, we felt that the [standard GDS pattern](https://design-system.service.gov.uk/components/pagination/) would be more accessible and we were looking for low risk options that have been extensively tested elsewhere so that we can forego further usability testing before development as this work was quite time critical. 

While bringing in the GDS pattern we also decided to keep the content that illustrates the number of results; "Showing 11 to 20 of 30 results" as we felt this alongside the GDS pagination pattern worked well in helped users understand where they were in the pages of claims. 

v13 of the claims tables is somewhat different from version 7, some examples of those differences being:
- Tabs to show different claims tables for different statuses.
- Multiple learners being allowed on a claim
Despite these differences the incorporated of the pagination in v13 didn't require any additional design thinking.

![A screenshot taken of claims tables from version 13 of the prototype showing the pagination pattern.](v13-pagination.png "v13 Claim table with pagination")

Some final considerations were made, we opted for 20 claims per page as this felt a good balance between usability and page load times. We also made some small clarifications to behaviour expected on smaller screen sizes, essentially continuing the rules around ellipses only being used to replace more than one page number. 

## How we tested our ideas and what we found
AS stated above due to time constraints we didn't have the room to test this with users, but given the use of a well established GDS pattern and existing indirect testing carried out in Alpha we felt there was minimal risk to developing this without further testing in our service. 

## What we will do next
We will look to develop this design and monitor it during private beta for any issues. While unlikely if we need to we can iterate the design as needed further on in private beta. P



