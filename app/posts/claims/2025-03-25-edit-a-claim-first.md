---
title: Giving organisations the ability to edit a claim and resubmit it
description: Currently when a claim is rejected organisations have to create a new claim to be able to resubmit. Exploring allowing users to edit a claim to see if this would solve this problem. 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-03-25
tags:
  - private-beta
  - claims-version-15
  - edit-claim
relatedUserNeeds:
  - user-need-4
  - user-need-2
  - user-need-6
aside:
  title:  Claims prototypes
  content: |
    [View claims v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v15/) 
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

There is a auditing requirement around all changes made to the claims should be visible to both submitters and processors to be aware of changes made. This includes: details of the submitters, date stamp of change, evidence provided at each submission. 

>**We believe that** the claim history 
>**Will be a useful feature for** organisation / submitters particulary within edit a claim
>**As it will** allow them to understand the full picture of a claim's journey, making it even more important in edit a claim scenarios as the history becomes more complex.

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

The claim side of the research commenced May and was conducted with 7 participants. 

### Who we tested with
7 participants:​
- 6 SROs and submitter​
- 1 submitters only​

Range of organisations:​
- 3 small, 3 medium, 1 large (range of staff 10-750)​
- Type of care: residential, day, community and domiciliary care

Claims status:
- 5 rejected and accepted
- 1 accepted only
- 1 rejected only (resubmission in progress)

Accessibility needs:
- 1 participant with motor and cognitive impairments

### How we tested
- Task-based moderated usability testing with ASC org users​
- Pre-task semi-structured interview questions​
- Post-task follow up questions​

### What we found
- The claim scaffold screen felt overwhelming, especially with claim history and multiple blue links. Users were confused about which information was most relevant.
- Some users preferred searching by learner info rather than claim reference number.
- Uncertainty around which list an edited, saved queried claim should appear in.
- Users wanted to edit any field, but editing is limited to 60/40 parts. This raised concerns—for example, if a learner is incorrectly entered in the 60 part, it can’t be corrected in the 40 part.
- Users treat the queried claims list as a to-do list and wanted the option to remove claims they no longer intend to edit and resubmit.

### UR recommendations
Edit a claim has strong potential to reduce friction in the resubmission journey and improve claim tracking, but will require further design iteration and testing to fully realise its value.

Key recommendations:
- Clarify the "queried" status to better communicate the need for user action.

- Iterate the claim scaffold screen by improving layout and hierarchy:
    - Prioritise key information submitters need to act on
    - Make the query note more visible and prominent than claim history notes
    - Reduce the visual prominence of claim history
    - Highlight information relevant to the specific claim type (e.g. 40 claims)
    - Differentiate label colours (e.g. queried vs. 60) to avoid confusion

- Ensure processors can send all relevant information at once to avoid fragmented communication.

- Allow users to tidy up their queried claims list if they don’t plan to resubmit—preferred over enforcing time-based status changes.

- Reconsider introducing alternative contact methods (e.g. online chat) for support with queries and rejections.

- Review rejection and query reason templates to make it clear whether resubmission is possible.

- Reassess the value of allowing users to add contextual notes to reduce ambiguity around submitted evidence.

### Assumptions
Due to the tight deadline for the first iteration, several design assumptions were made. For the next phase, I need clarity on the following to inform improvements:
- How users can access offline support or contact us for disputes
- Resubmission timeframes—are they enforced by the system or left to the processor to manage?
- If archive is introduced, what are the rules for restoring archived claims and allowing resubmission?
- How to recover a 40 part if the wrong learner was entered on the 60 part, given that fields are only editable within their respective sections

## What we will do next

Following user research analysis and a playback workshop with the wider team, we agreed on the following actions for the next design iteration and research round:
- Iterate Edit a claim to better meet user needs around this feature
- Refine language to clearly communicate meaning and required actions
- Simplify the claim scaffold screen to reduce cognitive load
- Rework claim history to better support user needs
- Consider multiple learners in the scaffold design, as this upcoming feature could impact layout
- Explore options for clearing queried claims, challenging the initial assumption that few claims would be abandoned. If these claims move to a new state, we may also need a way to bring them back









