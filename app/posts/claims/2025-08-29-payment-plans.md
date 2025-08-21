---
title:   60/40 payment plan claims
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-08-19
tags:
  - private-beta
  - claims-version-18
relatedUserNeeds:
  - user-need-3
aside:
  title:  Claims prototypes
  content: |
    [View claims v18 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v18/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

#### What’s the problem we’re addressing?

 One of the problems that has been identified is that currently organisation submitters are unable to provide evidence of payment for 40% claim submissions when using payment plans, in cases where the 60% of the course cost has already been submitted and reimbursed. There has been a change in our training providers accepting payment for courses to suit the 60% and 40% Claims which allows organisations to pay for 60% of the course amount and then pay for 40% balance of the course at a future date as a payment plan. The 40% Payments made as part of the payment plan cannot be evidenced as the system only requires evidence of completion for 40% Claims.

#### Problem Statement
The current system is unable to accept evidence of payment for 40% claims submission either as part of payment plans where 60% of the course was paid and claim submission has been made to receive reimbursement for the 60% claims. BSA staff are currently unable access these claims as there is no evidence of payment for the 40% Claims submitted used via payment plans.


## What our ideas were

There were two routes we could take for this piece of work. Ask the submitters if the claim is a payment plan or ask the processors. We played out the logic of what these scenarios would involve and played back to the wider delivery team. 

#### Option 1 – Ask Submitters Up Front
When a course is selected, and they opt into using the 60/40 funding model, then ask if the organisation is using a payment plan.
* If yes: flag the claim as payment plan-related.
* If no: proceed as a standard claim.
This flag allows the system to scaffold the 40% claim to:
* Include fields for payment evidence and payment date (to be completed once the 60 part is approved).

Considerations:
* Submitters could make mistakes - we need a way to change the selection.
* Should this be editable within the claim as a additional field within the claim details, or a processor-side correction?
* Existing rules: processors cannot edit claims, could use the send back for edit feature if correction is needed.

#### Option 2 – Ask Processors Instead
Let processors flag claims as part of a payment plan during the 60 part processing.

#### Outcome
Ops team prefers option 2 of asking the processors, as this is something they already identify manually today. Off this decision we designed the processing side of this feature first that is detailed in this post. The decision to only have the processors flag it if the evidence of payment does meet the required criteria means the submitter's will only see any effect of it being flagged as a payment plan on a approved 60 claim and the corresponding 40.

![A 60/40 payment plan claim](claim-details-payment-plan-claim.png "A 60/40 payment plan claim")

#### Changes

- Added additional rows and values for the submitter to add evidence of payment and payment date to the 40 if its a payment plan
- The alert box, that is used for updates and direction, informs the submitter that they also need to add these values.
- The screens to add the dates and evidence are the same as are already used in the service

>**We believe that** adding the rows and adding content to the alert box
>**Will be a useful feature for** submitters
>**As it will** be enough information for them to know what to do now 

>**We believe that** pointing to contact BSA if anything is incorrect
>**Will be a useful feature for** submitters
>**As it will** rare that the claim will be incorrectly marked as a payment plan and if it is then this can be dealt with offline.

>**We believe that** reusing the same screens for adding the information
>**Will be a useful feature for** submitters
>**As it will** help them easily understand what to do

#### Questions and answers from the buisness

How many pieces of additional evidence can be added to a 40 part payment plan claim?
- Currently we allow a maximum of  4 pieces of evidence for the 60% payment evidence and we can implement same for 40% Payment plan option and the expectation is maximum of 4 pieces of evidence for the 40% payment plan evidence and 1 certificate of completion to confirm course completion.
    
Is the max reimbursement amount of a payment plan claim based on the first payment date?
- For the Current 60/40 funding model -  the payment date for 60% affects the max reimbursement rate  for the 40% , so the second payment date if a payment plan is used shouldn't impact what they would be reimbursed for the 40% as it will be based on the first 60% payment date and applicable reimbursement rate.( To ensure that with the possibility of rate/course list changes mid year or between years the 60% rate is applicable).
 
What are the rules about the date entered in relation to the  financial year? e.g.  what if the first 60% payment is in a different financial year to the second 40% payment? Would the difference in financial years impact the 40% reimbursement in this case? 
- The second 40% payment date shouldn't impact what should be reimbursed as the 60% Payment date and rate has been saved against that claim. The 40% reimbursement rate would have to be based ultimately on the rate that was published at the time of booking training so the same rate as the 60% payment either way. 

What are the rules about the date entered in relation to the other dates entered on the claim.
- Second 40% payment date will always be after the first 60% payment date and course start date. Future payment dates for the 40% payment plan date should not be allowed on claim submission.

These answers have been fed into the designs for validating the dates added.

## How we tested our ideas and what we found

This is going into user testing, updates will be posted here once complete.