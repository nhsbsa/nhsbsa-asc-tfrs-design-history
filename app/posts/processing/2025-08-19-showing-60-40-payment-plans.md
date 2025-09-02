---
title: Showing 60/40 payment plans
description: A design history post on the design rationale for 60/40 payment plans 
author: 
  name: Sara Gulliver (Interaction designer)
  url: 'mailto:hi.sara.gulliver@nhsbsa.nhs.uk'
date: 2025-08-19
tags:
  - private-beta
  - processing-version-11
  - payment-plan
relatedUserNeeds:
  - user-need-11
  - user-need-12
  - user-need-13
aside:
  title:  Showing 60/40 payment plans
  content: |
    [View processing v11 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v11/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
The first discussion about this issue took place on 20th March. The wider delivery team explored whether there were any potential quick wins and assessed risks of implementing changes without user testing. Tech took it forward to conduct a technical analysis to understand feasibility and constraints.

Design constraints identified in tech review:
- Not all 40% claims require payment evidence - system must differentiate.
- Payment evidence must be clearly associated with the 40% claim, not the 60%.
- 60% claim evidence must remain untouched.
- The system should support uploading multiple payment files for a 40% claim.
- Users must be able to upload payment evidence for already-submitted 40% claims (i.e. unlock them in production).

Picking up this work again we held a workshop with the wider delivery team to agree:
- Agree on the forward approach for handling new claims using payment plans.
- Decide how to handle existing claims retrospectively.

## What our ideas were
Within the design crit workshop we discussed two different design options,
- Option one, Ask submitters up front
- Option two, Ask processors instead

Option 1 – Ask Submitters Up Front
When a course is selected, and they opt into using the 60/40 funding model, then ask if the organisation is using a payment plan.
- If yes: flag the claim as payment plan-related.
- If no: proceed as a standard claim.
This flag allows the system to scaffold the 40% claim to:
- Include fields for payment evidence and payment date (to be completed once the 60 part is approved).

Considerations:
Submitters could make mistakes - we need a way to change the selection.
Should this be editable within the claim as a additional field within the claim, or a processor-side correction?
Existing rules: processors cannot edit claims, could use the send back for edit feature if correction is needed.

Option 2 – Ask Processors Instead
Let processors flag claims as part of a payment plan during the 60 part processing.
Ops team prefers this route, as processors already identify these manually today.

Retrospective Fix for Existing Claims
- This change to flag a existing claim as a payment plan is something that only needs to happen once on a claim, so 
  building full UI functionality may not be worthwhile.
- Ops team is currently identifying which existing claims are part of payment plans.
- Backend solution preferred: allow updates directly through internal tooling or data fixes.

We went ahead with Option 2 with a focus on the processor side, as processors are more than likely would understand what would consist as a payment plan, which was our main assumption we wanted to test. Within the design phase, we started to iterate.

- Design one was embedding the question within the yes radio conditional would be the best option for click reduction and both questions are related to each other within the process. Once we iterated these, we felt that embedding may lead to the question being missed, as the cost per learner question in reviewing the claim is content heavy, and could lead to processors becoming confused by the question. 

- Design two was looking at taking the payment plan question out and having it seperate and asking if the claim has been paid in full. Posing the question first would mean that it would fit within current process of looking at the evidence first and understanding what kind of claim it is. Cost per learner would appear below this as this question links directly to approving, not accepted or editing a claim.

We decided to take design two into the testing phase, as this was our riskiest assumption as this would also be testing new functionality of showing several yes/no questions on the same page.


## How we tested our ideas and what we found

The following scenarios we took into testing were : 

- Understanding the question "Has the organisation paid for this training in full" we wanted to test how processors interpreteded this, and that the content was enough for processors to select a yes or no answer from this.

- Scenario 1, a 60 part payment that has yet to be processed with no 40 part, to understand how processors identify a payment plan from the evidence and understanding of payment plans and how they would process a 60 claim.

- Scenario 2, a 60 part that is an approved claim which is a payment plan, with a 40 part claim that is yet to be processed with multiple submissions. This was to understand how the designs meet the processor needs when processing a 40 claim with a payment plan.

### What we found

Testing was overall positive on the minimal design changes we had made, processors understood the logic and content well. Here's a few highlights : 

- Processors overall can identify payment plans from the design changes.
- The question was interpreted as expected, there was some considerations on how new processors would interpret the question.
- Sometimes its not stated on evidence that its a payment plan, this means processors reach out to confirm before processing the claim.
- Processors use the max reimbursment rate to see if a claim is on a payment plan.
- The vairety of evidence makes calculating the total cost paid total per learner challanging.
- The current designs and process, means processors have to calculate the 60 payment multiple times.
- Processors praised the designs having all the information in one place, however one processor did struggle to get back to process the 40 claim.

## What we will do next

Actions from user research are : 

- Training needs for new processors on 60% payment plans
- Training needs for edit a claim process to be updated within the guidence 
- Display the max reimbursement rate so processors are able to see it in the claim details 
- Continue to review evidence of payments coming through the service, to identify gaps in guidance 
- Add a field in the current 60 payment plan to enter current total paid and consider displaying this on the 40 claim. 

### Max reimbursement rate 
During the actions discussion, as a team we decided that the value of showing the max reimbursement rate in the training section of a claim would be a high value and a quick win for processors. Having Max reimbursement placed within the claim details, was pointed out as where processors typically look at the claim and match it against the evidence given. So we added this to show on all claim types, we also choose to leave the content within the radio buttons for a detailed explanation and breakdown of cost per learner. 