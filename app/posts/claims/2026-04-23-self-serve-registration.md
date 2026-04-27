---
title: Self serving organisation regisration
description: Exploring how we allow users to self initiate the onboarding journeys themselves through the service.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-04-23
tags:
- private-beta
- self-serve
- claims-version-24
aside:
  title:  Claims prototypes
  content: |
    [View claims v24 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v24/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)


## Why we did this work

The current LDSS onboarding process is a multi-step, invitation-led journey that includes an Expression of Interest, completion of onboarding forms, Sign-up to or update ASC-WDS and an onboarding call. The onboarding team provides significant manual support throughout this process, including onboarding calls which typically take 15–20 minutes per organisation. End-to-end onboarding currently takes 3–5 working days to complete.

While some organisations value the onboarding call for guidance and reassurance, reliance on this process increases operational workload, raises the cost per transaction, and limits the service’s ability to scale. Organisations cannot self-initiate onboarding, have limited visibility of progress across the journey, and often rely on repeated email and phone exchanges to move forward.

As the service moves into public beta and demand increases, the current approach will not be sustainable. The service needs to support a clearer, more flexible onboarding journey that allows organisations to complete most steps independently, while still providing targeted support where it adds the most value.

The aim is to design a scalable onboarding experience that increases self-service, reduces onboarding times and operational effort, and supports service growth. Operational staff will continue to carry out essential manual checks to validate organisation details and prevent fraudulent activity, but their involvement in routine onboarding activities should be significantly reduced.

## What our ideas were

We started out with the following hypothesis:

>**We believe that** allowing users to provide all of the organsiation's information directly in the service
>**Will be a useful feature for** senior responsible officers (SROs)
>**As it will** provide more flexibility in when they complete the task and less reliant on the operational team

As we also know from previous research that some information required from organisations during onboarding my not be readily available to the SRO allowing them the ability to save and return later to complete would be invaleable to them.

With this in mind we aproached this looking at the broader steps of the journey first the focus over all is to minimise any additional information requests that they don't already provide at some point in the as-is process. 

1. User gain some awareness of the service
2. Users come to the service landing pages to understand what the service is, whether they are eligible and whether it is right for their organisation.
3. They identify who in their organisations needs to sign up ie. who is the SRO.
4. SRO creates a user account
5. SRO submits a registration request for their organisation.
6. Back office staff review this information and determine an outcome. 
7. Once the registration request is approved the SRO signs the GDL for that organisations and provides bank details.

We have already done work around step 2 which is described in the design history post <a href="../self-serve-eligibility">understanding whether the service is right for my organisation</a>.

To allow users to save and finish at a later date and to improve the security of how we allow access to these in progress registrations, we decided that users must first create an authenticated account in the service. 

This means that after a user decides they want to use the service they click start now and then need to create an account first. Since we also need to cater for returning users we opted to ask the user whether they already have account. If they do we can direct them to sign in, if they don't we can direct them to create one.

![A screenshot showing 'have you already got an account' question with two radio options](what-do-you-want-to-do.png "A screenshot showing 'have you already got an account' question'")

In the systemn currently the SROs account is created initially by back office staff and the user completes this from the confirmation email. As we are looking at a self serve model we opted to ask the SRO for their details directly and then create the account from these and send them the confirmation email to complete the process.

![A screenshot showing user details input questions](what-do-you-want-to-do.png "User details")

Once they complete this they will recieve the confirmation email and be able to move through the existing user account setup screens we alread have. Once they complete this we will land them on a screen which, for now, we are calling "manage organisations' the idea is this will be the central hub for a user to see all the organisations they can access and register new organisations. We aren't focussing on this screen during this initial phase so we have just put a single "register a new organisation' button on the page to allow users to register an org and we will look to flesh out the design of this page in a further iteration. 

To register an organisation the user needs to provide:
- their role within the organisation
- name and address of the organisation
- proof of their organisation's address
- their organisation’s workplace ID as it appears in the Adult Social Care Workforce Data Set

If they have them, we also request that they provide their organisation's:
- Companies House registration number
- CQC registration number
- VAT registration number

We have also decided to ask them whether they are the SRO just to reiterate that this information needs to be provided by the SRO. We started off with a simple one question per page approach and dealt with the 'optional' data by asking whether they were registered for the respective things. 

To reduce any chances of users getting too far into this process we felt it was most appropriate to ask whether they were the SRO towards the beggining of the flow. Due to this it therefore made sense to ask for the users job title as the next question. This lead us nicely into asking for the other peieces of information after this. Resulting in a SRO details first followed by the organisation details they wanted to register. 

To complete this concept we opted to provide the user with a reminder of the information we would be asking for up front and also to call out that they can save and return later at any point in the process. The resulting steps were as follows:

1. Before you start
2. Are you the Senior Responsible Officer (SRO) for the organisation you want to register?
3. What is your job title?
4. What is the name of your organisation?
5. What is the registered address of your organisation?
6. Provide proof of your organisation's address
7. What is your organisation's workplace ID?
8. Is this information correct? (Confirmation of results using workplace ID)
9. Is your organisation registered with Companies House?
10. [If yes] What is your organisation's Companies House registration number?
11. Is your organisation registered with the CQC?
12. [If yes] What is your organisation's  CQC registration number?
13. Is your organisation VAT registered?
14. [If yes] What is your organisation's VAT registration number?
15. Check your answers
16. Declaration
17. Registration details submitted

Where appropriate we provided hint text to support the user, in particular on the proof of address page providing examples of the kinds of acceptable evidence. The designs for all these screens can be found in v24 of the claims prototype. 

Here are a couple of screenshots of some of the designs.  

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="before-you-start.png" alt="The before you start screen with information about what the user needs to provide to register their organsaition" style="width: 100%; height: auto;">
      <figcaption>1. Before you start</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="are-you-the-sro.png" alt="The screen that asks whether they are the SRO provided a reminder of what that means and that they are the only person that can register the organsiation" style="width: 100%; height: auto;">
      <figcaption>2. Are you the Senior Responsible Officer (SRO) for the organisation you want to register?</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="address-evidence.png" alt="The screen that asks for proof of address and provides several examples of what type of document would be acceptable" style="width: 100%; height: auto;">
      <figcaption>1. Before you start</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src=".png" alt="The screen that asks the user to check the details from the ASC-WDS to confirm that they are correct" style="width: 100%; height: auto;">
      <figcaption>2. Are you the Senior Responsible Officer (SRO) for the organisation you want to register?</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found


## What we will do next


