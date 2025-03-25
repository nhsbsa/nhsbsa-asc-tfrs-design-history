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

With the start of a new financial year (FY) approaching, a new grant determination letter (GDL) needed to be signed by the senior responsible officer (SRO). Due to the fixed deadline at the end of the FY, we had a very short turnaround for this work, requiring close collaboration between UCD, development, and policy teams. To release this in time for the start of the new FY, we had to design and develop it within a single sprint.  

There were several constraints we had to consider:  
- Limited development time meant we had to keep it as simple as possible technically.  
- No time for user testing meant we had to choose a low-risk approach.  
- Limited design time meant we couldn't explore too many options.  

The core requirement was that until the new GDL had been signed, no claims paid for in the new FY could be submitted.  

## What our ideas were

Our initial thinking focused on four key areas:  
1. Making SROs aware that there was a new GDL to sign.  
2. Drawing SROs' attention to the GDL upon login.  
3. Preventing submission of claims paid in the new FY until the GDL was signed.  
4. Informing users that the GDL needed signing by the SRO.  

### 1. Making SROs aware of the new GDL

Although general guidance was sent to the sector from DHSC about the new GDL, we knew we needed a more targeted approach for SROs using our service. We decided that sending an email to all SROs would be the most effective method.  

Due to time constraints, we couldn't automate this using GOV.UK Notify. Instead, we manually sent emails using SRO email addresses from the database.  

The email included key messages:  
- A link to the new GDL for users to read (as we couldn't host it within the service).  
- Instructions for logging in to sign it.  

![A screenshot of the email](email.png "The new GDL communication email")  

### 2. Drawing SROs' attention to the new GDL upon login

Our initial thought was to require SROs to sign the new GDL as soon as they logged in. However, we identified some issues with this approach:  
- The GDL wouldn’t be live during development, meaning users might struggle to read it at that time.  
- Users logging in to review or submit claims for the previous FY wouldn’t need to sign the new GDL, so forcing them to do so would be unnecessary.  

Instead, we decided to present the GDL signing screen to SROs upon login but give them the option to sign it later. Due to time constraints, we couldn't introduce logic to remember their choice, so the screen would appear every time they logged in until they signed it.  

To keep things simple, we reused the same screen template used during onboarding, updating the content and adding a "sign later" option.  

![A screenshot of the sign new GDL screen from v15 of the prototype](sign-new-gdl.png "The sign new GDL screen that appears upon login for an SRO")  

### 3. Preventing submission of claims paid in the new FY until the GDL is signed

We already have checks in place when users click "Confirm details" before proceeding to the claim declaration screen. One example is a check that ensures the user's ASC-WDS account is up to date before they can submit claims. Since the logic here was similar, we decided to take the same approach.  

When a user clicks "Confirm details," the system checks:  
1. If the payment date is in the new FY.  
2. If the SRO has signed the new GDL.  

If the GDL hasn't been signed, the user is shown a screen informing them they cannot submit the claim until the SRO signs it.  

Since this screen could appear for both SROs and submitters, we created two variations. The SRO version includes a call to action linking to the GDL signing screen.  

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="GDL-prevention-SRO.png" alt="A screenshot of the screen preventing a claim submission for the SRO." style="width: 100%; height: auto;">
    <figcaption>The screen preventing the SRO from submitting the claim.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="GDL-prevention-submitter.png" alt="A screenshot of the screen preventing a claim submission for the submitter." style="width: 100%; height: auto;">
    <figcaption>The screen preventing the submitter from submitting the claim.</figcaption>
  </figure>
  </div>
</div>  

### 4. Informing users that the new GDL needs signing by the SRO

To ensure users were aware that claims paid for in the new FY couldn’t be submitted until the GDL was signed, we needed a way to communicate this clearly. This applied to both submitters and SROs.  

We decided to use the notification banner from the design system. The banner pattern is designed to inform users about important updates without interrupting their workflow.  

This resulted in the final part of our design:  

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="banner-SRO.png" alt="A screenshot of the manage claims screen showing the notification banner for an SRO" style="width: 100%; height: auto;">
    <figcaption>The screen showing the notification banner for an SRO.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-banner.png" alt="A screenshot of the manage claims screen showing the notification banner for a submitter" style="width: 100%; height: auto;">
    <figcaption>The screen showing the notification banner for a submitter.</figcaption>
  </figure>
  </div>
</div>  

## How we tested our ideas and what we found

As mentioned, due to time constraints, we didn’t have the opportunity to test this with users. While there was some uncertainty around how this would be received or whether usability issues would arise, we ensured the ops team was well-prepared to support users who contacted them.  

## What we will do next

We will closely monitor this during the first few weeks of the new FY and maintain close communication with the ops team to address any issues that arise.  
