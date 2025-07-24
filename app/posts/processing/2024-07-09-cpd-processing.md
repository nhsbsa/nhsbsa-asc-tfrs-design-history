---
title: CPD processing
description: CPD claims are in the MVP so added ability to process these claims. 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-07-09
tags:
  - private-beta
  - processing-version-3
  - processing-process-a-claim
  - revalidation-funding
aside:
  title:  Processing prototypes
  content: |
    [View processing v3 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v3/) 
    Password: bsaasc123

          Claim reference's to test:

          100
          Submitted: Z1Z-F1J6-3XF7-A
          Approved: Z8S-F1J6-4GH7-A
          Rejected: K93-SK68-3S2K-A

          60
          Submitted: WR5-R2P4-DSL4-B
          Approved: R4Y-NL7G-D967-B
          Rejected: NLE-BMDT-68ZI-B

          40
          Submitted: R7J-NC3G-D967-C
          Approved: R4Y-NL7G-D967-C
          Rejected: K92-HD52-7GD9-C


---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)

## Why we did this work

The prototype has been expanded to allow CPD claims to be submitted. The expectation is that there are going to be less of these type of claims, so the work balanced user needs with coming up with a design flow that has the least amount of changes needed to the TU journey, with minimal technical effort. This means when bringing CPD claims now into the processing side of the service there is also minimal design effort, more following the patterns and process of what has already been done.

## What our ideas were

#### Differences
The two funding pots have different rules and information submitted so there are small differences that need to be displayed in the designs.
- What you claim for. Tu claims are for courses and qualifications with awarding bodies and whereas CPD claims are open ended to cover books and journals to time spent mentoring etc. Tu training will have a set name to process whereas CPD claims have a free input textbox with up to 75 characters to describe.

>**We believe that** adding content stating whether its a revalidation or care skills claim
>**Will be useful information for** processors
>**As it will** set them up to know what kind of claim they are about to process as each has different information to look for.

>**We believe that** encouraging the submitter to enter a verbose training description
>**Will be useful for** processors
>**As it will** help them understand the context of the claim.

- TU funding has two types of 100 and 60/40 which has different and complicated rules on how much to refund and the burden is taken off the submitter and onto the processor to enter the cost per learner based off the evidence. For CPD funding its more straightforward, as a learner has a budget of £500 each and is allowed to submit claims up to that amount. In the service we have the amount the training cost and the remaining budget amount, so the amount to be reimbursed is something the service can easily calculate itself, rather than asking the processor to work it out. The processor just needs to check the evidence of payment matches the criteria and the rest will be predetermined.

>**We believe that** displaying the learner budget remaining
>**Will be useful for** processors
>**As it will** help them to understand the context of the claim and can check the reimbursement calculation.

>**We believe that** removing the need to enter a reimbursement amount
>**Will be useful for** processors
>**As it will** remove the burden and chance of error in calculation.

![A screenshot from the processing a claim prototype showing a unprocessed claim](unprocessed-claim.png "Unprocessed claim")

>**We believe that** the outcome screen 
>**Will be useful for** processors
>**As it will** be a place to explain the reimbursement amount and explain why it might be more or less than the training amount based on the revalidation budget remaining on the learner.

![A screenshot from the processing a claim prototype showing the search claim screen](reimbursement-amount.png "Approval outcome screen - reimbursement explaining")

![A screenshot from the processing a claim prototype showing the search claim screen](processed-claim-approved.png "Processed claim - approved")


>**We believe that** the outcome screen 
>**Will be useful for** processors
>**As it will** be a place to explain the reimbursement amount and explain why it might be more or less than the training amount based on the revalidation budget remaining on the learner.

![A screenshot from the processing a claim prototype showing the search claim screen](unprocessed-claim-no.png "Unprocessed claim - no selection")

![A screenshot from the processing a claim prototype showing the search claim screen](rejection-notes.png "Rejected outcome screen - rejection notes")

![A screenshot from the processing a claim prototype showing the search claim screen](processed-claim-rejected.png "Rejected processed claim")

## How we tested our ideas and what we found

- Tested with users on ...