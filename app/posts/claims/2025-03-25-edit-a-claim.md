---
title:   Edit a claim - submitter side (first iteration)
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-03-25
tags:
  - private-beta
  - claims-version-15
relatedUserNeeds:
  - user-need-4
  - user-need-2
  - user-need-6
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

The claim side of the research commenced May and was conducted with X participants. 

### Who we tested with
X participants:​
- X SROs and submitter​
- X submitters only​

Range of organisations:​
- X small, X medium, X large (range of staff X-X)​
- Type of care: residential, day, community and domiciliary care

### How we tested
- Task-based moderated usability testing with ASC org users​
- Pre-task semi-structured interview questions​
- Post-task follow up questions​
- Scenario: 

### What we found - MORE TO ADD
- The claim scaffold screen was cognitively overwhelming with the claim history added. The additional blue links to see all the information and the multiple query and claim details confused users as to which is most relevant. 
- Some users wanted to search by learner information instead of claim reference number​
- Not sure which list a save and edited queried claim should live in 
- That the users wanted to be able to edit any field. This is still locked into being only for the 60/40 parts and issues have been noted as to what if the incorrect learner was inputted on 60 part, in the 40 part where the leanrer's evidence is added this has potential to not be able to be recovered.
- User's wanted to be able to tidy up their queried claims list, as they use it as a to do list. In the scenario they decided they didn't want to edit and resubmit a claim they would want to be able to clear it from this list. 
- 


### UR recommendations
- Edit a claim has the potential to be a high value feature to users that could reduce significant friction in the resubmission journey and support the tracking of claim status, but will require some design iteration to reach this​ - the design should be iterated and retested to ensure the potential benefits are realised
- ​That the language used for the 'queried' status is reviewed so it is clearer to users what it means, particularly to emphasise the need for action
- Iterate claim scaffold screen design by reviewing the page layout including:
  -  Making sure the most important information for submitters to act on is most prominent on the page including 
  - Making the query note more visible and clearer so that it takes precedence over any notes in the claim history
  - Situating the claim history differently so it is less prominent
  - Relevant information for the claim type in question is more prominent (ie. 40 claims)
  - Change the colour of queried or 60 label so they don't match
  - That the processing side of the feature enables processors to review and send all relevant information to submitters at the same time
  - When users feel they cannot meet the criteria to re-submit a claim, they want a way to manage and 'tidy' their queried claims another way. This would be preferred by participants in favour of resubmission timeframes being introduced to change claim statuses
  - To revisit whether there are alternative methods  of contact (ie. online chat) for users to speak to NHSBSA about queries and rejections.
  - To revisit rejection reason template and developing query reason wording to ensure that it's clear whether users can resubmit or not
  - ​To revisit whether it would be of enough value to increase the scope, so users can provide contextual information (e.g., in the form of a note) to reduce the ambiguity of evidence submitted


### Assumptions
  Before of the tight dealdine to deliver the first iteration there were a number of assumptions that went into the design. For the next iteration I also need to make sure I had all these answers and account for them:
  - Make it clear how to access offline process / contact us in case of disputes of outcomes
  - In what window period can a claim be resubmitted in
  - 



## What we will do next

- Following the UR analysis and playback workshop with the wider team to work together to get to recommendations to take forward, we agreed to take the following actions to go into the next iteration of designs and research round two.
1. Iterate edit a claim to better meet the needs for this feature.
2. Iterate language used to be more clearly understood by users what it means and that there is action for them to do.
3. Iterate the claim scaffold screen to be less cognitively overwhelming.
4. Iterate the claim history to make sure hitting the needs of the users.
5. Iterate the claim scaffold screen with also multiple learners in mind as this is a feature further down on the roadmap but that has the potential to change the design of this once more if not considered now.
6. Explore functionality to let the orgs clear up their queried claim's list. This fits as a finding around the assumption from the first iteration that the volume of claims where they will never want to resubmit will be low enough to not include in inital scope. If it moves to a new state then will need the functionality to potetnailly bring it back in.










