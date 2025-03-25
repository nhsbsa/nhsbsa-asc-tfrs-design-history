---
title:   Supporting SROs to sign the new GDL
description: With the new financial year comes a new grant determination letter. We needed to develop a solution to allow senior responsible officers to sign it.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-03-19
tags:
  - private-beta
  - claims-version-15
  - claims-gdl
  - claims-account-creation
relatedUserNeeds:
  - user-need-10
aside:
  title:  Claims prototypes
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

With the dawn of a new financial year (FY) on the horizon so too came a new grant determination letter (GDL). The new GDL would need to be signed by the senior responsible officer (SRO). Due to the fixed date of the end of the FYwe had a very quick turn around for this piece of work which required very close collaboration between, UCD, development and Policy teams. To be able to be released in time of the start of the new FY we would have to design and develop this within a sprint. 

There were a number of constraints within this piece of work that we had to consider:
- Limited time to develop meant we had to keep it as simple as possible technically.
- No time to test it with users meant we had to focus on an approach that would be low risk without testing.
- Limited time to design meant we couldn't wonder too wide in our design thinking. 

The core requirement around the new GDL was that until it had been signed no claims that were paid for in the new FY could be submitted. 

## What our ideas were

Our initial thinking centred around four core areas:
1. Make SROs aware that there was a new GDL to sign in the service
2. Draw SROs attention to the new GDL to sign it upon login
3. Prevent claims that have been paid for in the new FY for being submitted until the new GDL ahs been signed.
4. Inform users that the new GDL needs signing by the SRO


### 1. Make SROs aware that there was a new GDL to sign in the service
Despite general guidance going out to the sector from DHSC about the new GDL we new likely needed a more target approach for the SROs of our service to ensure they were aware and new what to do. We decided that sending an email to all SROs would be the best method for this. Given the time we had to deliver this we wouldn't be able to do this automatically in the service through GOV Notify. Therefore we opted to send this more manually using the SRO email addresses pulled from the database. 

The email had key messages:
- direct users to the new GDL to read (as we wouldn't be able to host this within the service.)
- Instruct users to login to sign it. 

![A screenshot of the email](email.png "The new GDL communication email")

### 2. Draw SROs attention to the new GDL to sign it upon login
Our initial thought was to force users to sign the new GDL when they login. However there were a few issues we identified with this approach:
- We wouldn't be able to link to the new GDL on this page as it wouldn't be live during development and therefore users may struggle to read it at that point in time.
- Users may be logging in to just review or make claims for the previous FY and, given they wouldn't need to sign the new GDL for that, shouldn't be made to.

Therefore we took the approach to still present the screen to sign the new GDL to SROs upon login but give them the option to sign it later. Given the time we wouldn't be able to introduce anything smart that would remember their choice for future logins to this screen would always show to the SRO upon every login. 

To keep things simple we reused the same screen template for sign the GDl during onboarding but updated the content and provided a 'sign later' call to action.

![A screenshot of the sign new GDL screen from v15 of the prototype](sign-new-gdl.png "The sign new GDL screen that appears upon login for a SRO")

### 3. Prevent claims that have been paid for in the new FY for being submitted until the new GDL ahs been signed.
We already have some checks that are conducted when the user clicks the 'Confirm details' call to action that prevents the user from continuing to claim declaration. One of particular note is the screen that informs the user that they need to ensure their ASC-WDS account is up to date before they can submit claims. We felt that the logic was similar here and so we decided to take a similar approach.

When the user clicks 'confirm details' check if the payment date is in the new FY. If it is then check whether the SRO has signed the new GDL. If they haven't signed it present them with a screen informing them that they can't submit the claim until the SRO does. 

Given this screen could appear for both the SRO or submitter we decided to have two variations. The SRO would see a call to action to take them to the sign new GDL screen.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="GDL-prevention-SRO.png" alt="A screenshot taken of the screen preventing a claim submission for the SRO." style="width: 100%; height: auto;">
    <figcaption>The screen preventing the SRO from submitting the claim.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="GDL-prevention-submitter.png" alt="A screenshot taken of the screen preventing a claim submission for the submitter." style="width: 100%; height: auto;">
    <figcaption>The screen preventing the submitter from submitting the claim.</figcaption>
  </figure>
  </div>
</div>

### 4. Inform users that the new GDL needs signing by the SRO
The last aspect was to have some method to communicate that users would be unable to submit claims, paid for in the new FY, until the new GDL has been signed. This would apply for both the submitter and SRO. However as before we would given the option for the SRO to sign the new GDL as part of this. We felt the most appropriate design choice would be to use the Notification banner from the design system as the notification banner lets you tell the user about something that’s not directly relevant to the thing they’re trying to do on that page of the service.

This resulted in the final aspect of our design:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="banner-SRO.png" alt="A screenshot taken manage claims screen showing the notification banner for a SRO" style="width: 100%; height: auto;">
    <figcaption>The screen showing the notification banner for a SRO</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-banner.png" alt="A screenshot taken manage claims screen showing the notification banner for a submitter" style="width: 100%; height: auto;">
    <figcaption>The screen showing the notification banner for a submitter</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found

As mentioned, due to time constraints, we didn’t have the opportunity to test this with users. While there was some uncertainty around how this would be received and what usability issues, if any, would be experienced. We made sure the Ops team were well prepared to support users who get in touch, by going through what was being released for organisations. 

## What we will do next

We will closely monitor this during the first few weeks of the new FY and keep a close line of communication with the Ops team to address any issues if they arise. 