---
title: Addressing time sensitive policy restrictions
description: Two time sensitive policy requirements were introduced that we needed to address through design.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-08
modified: 2024-05-16
tags:
  - claims-version-8
  - policy-restrictions
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

Two time-sensitive policy requirements were introduced:
- Users of the service can only claim for training that started and was paid for on or after 1 April 2024.
- Users of the service have to submit claims within 3 months of the completion of the training.

Despite the fact that we weren't going to enforce the latter requirement from the start of private beta, we still wanted to lay the groundwork now to support both of these requirements. 

## What our ideas were

### Users of the service can only claim for training that started and was paid for on or after 1 April 2024

For this requirement, we considered two core ideas:
- placing a check on the start date and payment date upon submission of the claim
- preventing users from adding start dates and payment dates from before this time

We favoured the latter of these ideas as we felt we should help users understand that the claim they are trying to make won't be valid earlier in the journey. However, this did mean we needed to reinforce the understanding of the policy date throughout the journey. To accommodate this, we added a notification banner on the manage claims screen and additional supporting text on the pages to add payment date and start date, and introduced error handling for invalid dates. Here are screenshots from v8 of the prototype showing these changes:

![A screenshot from v8 of the claims prototype showing the manage claims home screen with the notification banner.](manage-claims-home.png "Manage claims home page with notification banner")

![A screenshot from v8 of the claims prototype showing the add start date page with warning text.](start-date.png "Add start date page with warning text")

![A screenshot from v8 of the claims prototype showing the add start date page with an invalid date error.](start-date-error.png "Add start date page with invalid date error")

### Users of the service have to submit claims within 3 months of the completion of the training

For this requirement, we considered two core ideas:
- Capture the completion date and prevent users from submitting claims where the completion date is more than 3 months ago.
- Reject claims as part of processing where the completion date noted on any certification is more than 3 months before submission. 

We favoured the former idea here as it would allow users to understand sooner that they have missed the opportunity to claim for this training. As a result, we introduced the completion date as a core part of the claim. However, for the start of private beta, we won't be enforcing the date check aspect of this. 

Here are the screenshots from v8 of the prototype showing these additions:

![A screenshot from v8 of the claims prototype showing the add completion date on the claim details screen.](completion-date.png "Completion date feature now added to claim")

![A screenshot from v8 of the claims prototype showing the add completion date screen.](completion-date.png "Add completion date screen")

## How we tested our ideas and what we found

Unfortunately, we were not able to test this with users before development work progressed, but we did get the opportunity to test these with users w/c 6 May 2024. What we found was that users understood how we communicated the 1 April 2024 policy date and didn't feel that supplying the completion date would be an issue, as this information comes hand in hand with the certification. However, we didn’t feel that the findings on the policy date were completely concrete due to the nature of usability testing. 

## What we will do next

We will monitor this closely through private beta and particularly look at feedback and analytics around the impact of the 1 April 2024 policy date and whether users still try to make claims for training paid for or started before this date. We believe that as time progresses, the risk of users trying to make claims for training started or paid for before this date will reduce.