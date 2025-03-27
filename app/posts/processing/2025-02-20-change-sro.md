---
title: Allowing organisation to change SRO
description: We needed to implement a tactical solution to allow organisation to change SRO due to a handful of issues in the live service.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-02-20
tags:
  - private-beta
  - processing-version-7
  - onboarding
  - processing-register-an-organisation
  - processing-view-org
relatedUserNeeds:
  - user-need-10
  - user-need-14
aside:
  title:  Processing Prototypes
  content: |
    [View claims v7 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v7/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

The functionality to disable the current Senior Responsible Officer and invite a new one was not in scope of the Private Beta launch. Since going live, there have been a small number of organisations who have notified NHS BSA that their SRO has changed, leaving these organisations with active SRO users who have left their organisation (which is open for potential fraud). There currently is no way of disabling and updating the SROs and preventing them from accessing the claimant system to submit claims.

There is now a need to develop a tactical change within the constraints of the current journey - these changes will be an improvement from the current state, and will be the minimum required to enable an organisation to disable one SRO and invite another. This tactical approach needs to take into account the following context:
- There are only a handful of cases where this is currently needed, and only one where the organisation is currently blocked from making claims.
- There are risks associated with changing the SRO
- The effort to develop a front-end solution is similar to developing a purely bank-end solution
- The previous SRO won't always be available to handover to a new SRO

It was agreed before the design work started that we would not test this feature with users before development as the risk of issue would be reduced by:
- controls around who could perform this action
- limited use of the action
- we had already tested the Edit invited SRO journey and we would look to reuse some of those patterns

And we had higher priority and more risky features to test with users that we would be focussing any testing on.

## What our ideas were
There were three scenarios that we needed to cover for this work that revolved around the status of the existing SRO:
1. The SRO had been invited, created an account and completed registration (ie signed the GDL and added bank details)
2. The SRO has been invited, created an account but not completed registration (ie not signed the GDL and added bank details)
3. The SRO has been invited but not created an account or completed registration (ie not signed the GDL and added bank details)

While some of the requirements were still being established from the business we did some initial exploration of the design space for these three scenarios. We reused elements of existing Edit an invited SRO flow that was covered in [Registering an organisation iteration](../registering-a-org-iteration) post.

Here is an image of our Miro board exploring possible design approaches and considerations for this work:

![A Miro board showing design exploration of the change SRO space.](exploration.jpg "Design exploration Miro board")

This exploration revolved around merged Editing current SRO invite and change SRO into a single journey with a question asking users what they wanted to do. With the additional option of also adding a another SRO. The journey would be access from the new View org page. This felt most appropriate as when we tested the Edit invited SRO work we did find that although users could perform that task needed, they did feel that the actions would be better situated on some form of org view rather than in the register an organisation flow. 

![A screenshot of a question page asking what change the user would like tok make to the SRO](change-sro-question.jpg "What change would you like to make to the SRO question page.")

This approach of using a question to establish what a user wanted to do with the SRO was ultimately discounted as it was agreed that the constraint of one SRO per organisation should remain for now and the ability to edit SRO details is restricted to only one of the scenarios. This meant that this screen would be mostly redundant for most scenarios.

Following this further clarification was made on the business rules and logic and iterated the journey further. This included the addition of a 'Lead processor' role who would be the only user type who could change or edit and SRO in any scenario.

We iterated the design further across the three scenarios and explored the different views for different users types (Processors, Lead processors and CCS agents):

![A Miro board showing the proposed flows for the three scenarios](change-sro-journeys.jpg "Proposed design flows Miro board")


Here are screenshots of the proposed designs of the contact screen for each scenario. 
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 32%;">
  <figure>
    <img src="scenario-1.png" alt="A screenshot taken of version 7 of the prototype showing the contacts screen for scenario 1" style="width: 100%; height: auto;">
    <figcaption>Scenario 1</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 32%;">
  <figure>
    <img src="scenario-2.png" alt="A screenshot taken of version 7 of the prototype showing the contacts screen for scenario 2" style="width: 100%; height: auto;">
    <figcaption>Scenario 2</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 32%;">
  <figure>
    <img src="scenario-3.png" alt="A screenshot taken of version 7 of the prototype showing the contacts screen for scenario 3" style="width: 100%; height: auto;">
    <figcaption>Scenario 3</figcaption>
  </figure>
  </div>
</div>

We now needed to add another layer of content through this to ensure the different scenarios are clearly communicated as scenarios 1 and 2 would show the SRO in the same active state but one would require the new SRO to do some additional action during their registration, this would need to be communicated to the appropriate people as needed.

Content updates were added to make it clear to users:

- that they are able to either edit or change an SRO using the same flow
- what they need to do outside of the service, for example, sign the grant determination letter 
- what new functionality there is in the service, for example, the fact that adding a new SRO automatically deactivates the old one

New content was created for the existing success banners to mirror each new scenario. 

Four templated emails were also created to be sent out to edited and new SROs (see [Emails to adult social care providers](https://bsa2468.atlassian.net/wiki/spaces/ASCRS/pages/5002134478/Emails+to+adult+social+care+providers) - emails 7 to 10).

This was then taken for final sign off from the business. 

## How we tested our ideas and what we found
As mentioned in the 'Why we did this work' section we won't be testing this with users before development, the risks that may arise from not testing this have been mitigated due to the context described. 

## What we will do next
This work will be moved into development and we will monitor feedback from users specific to this feature once released. 