---
title: Removing bank details from the SRO onboarding journey
description: To better support the possibility of self-serve onboarding and facilitate more automated bank details checks.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-03-07
tags:
  - private-beta
  - claims-version-13
  - onboarding
  - claims-account-creation
  - claims-bank-details
aside:
  title:  Claims Prototypes
  content: |
    [View claims v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v15/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As part of the work we have been doing to explore ways to enable a more self serve approach to onboarding we identified that changing the input of bank details from being tied to the account creation steps of an SRO to being position within the service may provide a number of benefits. We had the following two hypotheses:

>**We believe that** seperating out the bank details input from the onboarding journey
>**Will be a useful feature for** SROs
>**As it will** simplify the journey and make it easier to get into the service 

>**We believe that** separating out the bank details input from the onboarding journey
>**Will be a useful feature for** SROs
>**As it will** mean that SROs won't be hindered getting into the service if they don't have bank details to hand 

On top of this there were two strategic reasons why we wanted to explore this work:

- Would better support both automated and semi-automated bank details checks that are currently being explored.
- Would better support the ability for orgs to edit bank details

As a result we chose to test concepts with users to explore these hypotheses.

## What our ideas were

Due to the time-boxing of this exercise we had limited time to explore too many ideas in the design phase. Our starting ideas were:

1. Give the option to add bank details during onboarding if they want to, (they can choose to add them later though)
2. Remind users while using the service that they won't be able to submit claims until bank details are added.
3. SROs will have the ability to add the bank details through any notifications about bank details. Submitters will be informed to speak to their SRO.
4. Bank details would need to 'live' somewhere at an organisation level.

Our starting choice was the introduction of the [service navigation component](https://design-system.service.gov.uk/components/service-navigation/). This would contain 2 core pages:
- Manage claims
- Organisation details

and then two additional pages for SRO users
- Manage team
- Bank details

This route would allow us to do away with the funding pot signposting page that, since the removal of revalidation funding (CPD) from the service last year had become superfluous. 

![A screenshot of the signposting page from v12 of the prototype](signposting-page.png "Superfluous signposting page")

We proposed using the notification banner to inform users of missing bank details. This would persist on the manage claims screen until the SRO has added them. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="SRO-landing-screen.png" alt="A screenshot taken of the landing screen for an SRO in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>SRO service navigation design</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-landing-screen.png" alt="A screenshot taken of the landing screen for a submitter in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Submitter service navigation design.</figcaption>
  </figure>
  </div>
</div>

As you may notice we added some additional organisation information to the header. We know in the future we may have to support organisation switching for users who manage multiple organisations potentially as part of a parent child structure. We have taken this pattern from the [Claim funding for mentor training](https://itt-mentoring-beta-94341ca35a2c.herokuapp.com/) who have a similar challenge where users are responsible for multiple organisations. Another benefit of this alongside the addition of the organisation details tab was that it would have the potential to better support ID/CV during calls to the contact centre as it would make information required for aht process more easy to access in the service. As we have previously heard that it is often a challenge for users to dig out their organisation workplace ID when calling the contact centre.

![A screenshot of the new organisation details page from version 15 of the prototype](organisation-details.png "Organisation details page")

We reused the design to input bank details from the onboarding journey as this is a standard GDS pattern for bank details. 

We used a standard summary list pattern to present the bank detail back to the user.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="empty-bank-details.png" alt="A screenshot taken of the bank details screen without bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Bank details page before adding bank details</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="full-bank-details.png" alt="A screenshot taken of the bank details screen with bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Bank details pager after adding bank details.</figcaption>
  </figure>
  </div>
</div>

As we are still waiting on decision surrounding the automation of bank details checks, we need to design to support two possible routes:
- Automated check where response can be provided immediately following input.
- Semi-automated check where the response from the check would be delayed from input and provided later.

As a result we felt having a separate tab showing the bank details would support both options depending on what decision is made. As automated checks could be provided on the bank details input page itself in real-time and then the screen where we present the bank details once they have been inputted could be iterated to include any form of checks and responses that come back to the user.

The final aspect of the design would be to prevent users from submitting claims when bank details have not been added. This would apply for both users types however the SRo would have the option to add bank details at that point if they wished. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="SRO-missing-bank-details.png" alt="A screenshot taken of the screen preventing the SRO from submitting claims if the organisation doesn't have bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>The screen a SRO would see when trying to submit a claim when the organisation is missing bank details</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-missing-bank-details.png" alt="A screenshot taken of the screen preventing a submitter from submitting claims if the organisation doesn't have bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>The screen a submitter would see when trying to submit a claim when the organisation is missing bank details</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found

TODO

## What we will do next

TODO