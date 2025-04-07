---
title:   Edit a claim
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-03-25
tags:
  - private-beta
  - claims-version-15
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

This work is part of the roadmap to ready to reduce the volume of claims that are being rejected. One of the problems identified was the additional time, effort, and frustration that is being caused for both submitters and processors by the requirement of creating a new claim each time a claim has been rejected rather than the expectation of being able to correct any mistakes on an unsuccessful claim and re-submit. 

More information on how we approached this piece of work has been documented in this <a href="#">post.</a>

This design needed to match the decision on the side of processing to introduce the extra option to allow edits to the same claim, putting a claim into a queried state. The designs on the claim side needed to show this change of state and provide action and functionality for the organisation to make changes and re-submit.


## What our ideas were

### Claims table

>**We believe that** adding a new status for queried claims
>**Will be a useful feature for** organisation / submitters
>**As it will** allow them to easily find the claims that need further action on. 

![Manage claims table](manage-claims.png "Manage claims table")

![Queried claims table](queried-claims-table.png "Queried claims table")



### Claim edits

>**We believe that** the organisation the ability to update everything including training
>**Will be a useful feature for** organisation / submitters
>**As it will** allow them the flexibility to update anything they deem necessary. Even thought the processor might have identified the issue we can't assume the exact bits of information in the claim they need to update e.g. if the learner name doesn't match the certificate it might be the learner or the certificate which was incorrect. 

- Ability to edit everything means the processor will need to re-process the whole claim again. This might be a reason we need to break down the changes in the processor side to be more granular and obvious what has changed, but also it came out in UR the processors have previously said they would re-process the whole claim again anyway so what we have now might be fine. 

![Edited queried claim](edited-queried-claim.png "Edited queried claim")


>**We believe that** while they can change the training, they can't change the claim type
>**Will be a useful feature for** organisation / submitters and tech
>**As it will** mean the claim structure stays the same with the information requried and reduces the complexity of how this would affect the finances.

>**We believe that** showing a updated tag on each changed value once edited
>**Will be a useful feature for** organisation / submitters 
>**As it will** clear what has changed from the previous submission.

>**We believe that** the claim history
>**Will be a useful feature for** organisation / submitters and tech
>**As it will** be integral to a submitter coming back to the claim when in the middle of editing and can compare the updated tagged value with the previous submission to see the differences in information.


### Claim history 

![Queried claim](queried-claim.png "Queried claim")

>**We believe that** the claim history
>**Will be a useful feature for** organisation / submitters
>**As it will** allow them to understand the full picture of a claim.

>**We believe that** seeing the previous query notes and claim submissions
>**Will be a useful feature for** organisation / submitters
>**As it will** see what was missing in the past and what was not rectified

![Version of the claim submitted on that date](claim-submission-note.png "Version of the claim submitted on that date")

![View query note](view-query-note.png "View query note")

>**We believe that** having the latest query not in the main view
>**Will be a useful feature for** organisation / submitters
>**As it will** give prominence to the most relevant information state of the claim.

>**We believe that** showing the names and times / dates of the users who processed and submitted the claims
>**Will be a useful feature for** organisation / submitters 
>**As it will** give a audit trail of who has been involved in a claim and gives visibility on who to speak to.

### Save for later

>**We believe that** having save for later functionality to keep edits
>**Will be a useful feature for** organisation / submitters 
>**As it will** allow them to not finish editing in one go

>**We believe that** keeping the edited draft claim in queried status
>**Will be a useful feature for** organisation / submitters 
>**As it will** allow them to still easily find the claim 

>**We believe that** resubmitting the claim moves the claim then to the submitted status
>**Will be a useful feature for** organisation / submitters 
>**As it will** fit their understanding that that is where the claim should sit, and the claim history is enough to add context to the claim.

![Resubmitted claim](resubmitted-claim.png "Resubmitted claim")

![Submitted claims table](submitted-claims-table.png "Submitted claims table")

**To test**
- When a previously queried claim is resubmitted and moves to the "submitted" status, is the claim history sufficient to provide all necessary context, and does the submitter now expect the claim to sit in that submitted status?


- Resubmitting the claim means the submitter needs to re-tick the declaration.

![Claim declaration resigned for each new submission](declaration.png "Claim declaration resigned for each new submission")

## How we tested our ideas and what we found

We divided this work into two aspects: the submitter's journey of editing a claim and the processor's workflow. Each was explored and tested separately, as both were complex and required sufficient time for research, design, and testing. The user research discussion guides for each were extensive, reinforcing the need for a focused approach.

The processor side of the research commenced 7th March and was conducted with 6 participants. 


## What we will do next

- Analysis, playback workshop with the wider team to work together to get to recommendations to take forward, then next iteration of designs and research round two.






