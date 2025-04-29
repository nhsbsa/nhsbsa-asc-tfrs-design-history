---
title: Informing users about new reimbursement amounts for 2025 to 2026
description: With the new financial year comes a new reimbursement rates, this means different rates depend on when training was paid 
author:
  name: Martine Gallie (Content designer)
  url: 'mailto:hi.martine.gallie@nhsbsa.nhs.uk'
date: 2025-04-28
tags:
  - private-beta
  - claims-version-15
relatedUserNeeds:
  - user-need-1
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

Reimbursement amounts are based on when training is paid for. There are new reimbursement amounts for the financial year 2025 to 2026, which started on 1 April 2025. To make submitters and processors aware of this, we needed to update screens for both.

Previous work had been done to review content for the new reimbursement rates. However this work didn’t consider all the different states a claim can be in and the different ways we currently communicate the maximum reimbursement amount for 100 and 60/40 claims.

We needed to make sure that the content was tailored to both types of claim and every status they pass through.
  

## What our ideas were
It was decided that the most efficient way to communicate the change in reimbursement amounts would be to:
- add some new content to the claims scaffold screen for submitters
- add similar content to the ‘process a claim’ screens on the processor side

The content on these screens is quite light and transactional so, in order to not disrupt this, we needed to keep any additional content as clear and concise as possible. 

This table lays out the approach we took, using a 100 claim as an example:

### Submitters
| Scenario (100 claim)  | Existing content  | New content | Notes and rationale |
| ----------- | ----------- | ----------- | ----------- |
| Claim not yet submitted - **no payment date** | **The maximum amount for this training is £100**  | **If you paid for this training on or after 1 April 2025, the maximum reimbursement amount is [ X ].**<br><br>If you paid before this date, the maximum amount is **[ Y ]**. | When no payment date has been added yet - both the old reimbursement amount and the new amount are explicitly spelled out.<br><br>**Rationale**: this is to give users the full information about  the change in amounts at the start of the flow. |
| Claim not yet submitted - **payment date added** <br><br>AND<br><br>Claim **submitted** | **The maximum amount for this training is £100**  | **The maximum reimbursement amount for this training is [X/Y].**<br><br>This is the maximum amount for training paid for **[on or before 31 March 2025] [on or after 1 April 2025]**. | Payment date has been added - submitters are informed why they are receiving a particular amount.<br><br>**Rationale**: this explains why the submitter is receiving a particular amount  |
| Claim approved  | You will get back £50 for this claim.  | [No change]  | Where a claim, or part of a claim, has been approved, no change is made.<br><br>**Rationale**: users will already have had explanatory information about the change in amounts at 3 previous stages of the flow.  |

### Processors
| Scenario (100 claim)  | Existing content  | New content | Notes and rationale |
| ----------- | ----------- | ----------- | ----------- |
| **Review of evidence**  | **The maximum reimbursement amount for this training is £50.**  | **The maximum reimbursement amount for this training is [ X/Y ].**<br><br>This is the maximum amount for training paid for **[on or before 31 March 2025] [on or after 1 April 2025].**  | Processors are informed why submitters are receiving a particular amount.<br><br>**Rationale**: this means processors have this information at hand if the submitter gets in touch to enquire about the amount.  |
| 100 claim - **approved**  | The organisation will receive £50 in reimbursement.  | [no change]  | No change.<br><br>**Rationale**: processors will see information on the new reimbursement amounts on the previous and next screens.  |
| 100 claim - **completed review of evidence**  | * maximum reimbursement amount for this training £50  | * maximum reimbursement amount for training paid for **[on or before 31 March 2025] [on or after 1 April 2025]** (X/Y)  | Processors are again informed why submitters are receiving a particular amount.<br><br>**Rationale**: this means processors have this information available if the submitter gets in touch to enquire about the amount.  |

We held a review of the new content with design, tech and UR colleagues to discuss the pros and cons of testing it and the possible risks associated with not testing it.

In this session we decided to:
- incorporate changes into the prototype so they can have some light-touch testing during the next round of edit a claim testing
- consider whether we need to signpost to scheme guidance
- request that the updates are done as a hot fix 
- agree when the updates should be removed from the service


## How we tested our ideas and what we found

As mentioned above, we decided to incorporate these updates into the prototype so they could have some light-touch testing during the [next round of edit a claim testing](https://nhsbsauk.sharepoint.com/:p:/t/SS-AdultSocialCare/EQNlPA40XdRHl18HGOuG4EUB-j8tL5pEfLCeFEvAjHFf9w?e=LgltXs).
It was decided to add a direct link to the scheme guidance to the [service start page](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v15/before-you-start), rather than add a link to the claims screens. Users do not actually use the start page at the moment, but this seemed the most appropriate place for it to sit for future use.

## What we will do next

The new content was added to v15 of the claims prototype and screenshots of the content changes have been recorded in miro on the user journeys (beta) board. 

Example:
![An example screenshot of the new reimbursement rate content](reimbursement-rate-example.png "An example of the reimbursement rates content on a not-yet-submitted 100 claim.")

This update is now in development. 

We have agreed on a data-driven approach to removing the content, for example, x amount of weeks after we last see a claim submitted with last year’s payment date.

