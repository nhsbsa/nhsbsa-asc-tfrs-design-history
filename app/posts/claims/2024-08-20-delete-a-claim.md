---
title: Deleting claims
description: There are few scenarios that could lead to claims being created that can't be progressed and therefore needs to be deleted.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-08-20
modified: 2024-09-19
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---



## Why we did this work
There are a few scenarios that could lead to a claim being created that can't or won't be progressed:
- A submitter creates a claim just to see what the process is like.
- A submitter starts a claim but the learner leave the organisation before completing the training and therefore the claim can't be submitted.
- A submitter starts a claim but when they go to add a learner they can't because a claim has already been made for that training for that learner.

As a result of these scenarios this may result in claims building up in the not-yet-submitted table that are not needed. This formed the following hypothesis:
>**We believe that** allowing users to delete not-yet-submitted claims
>**Will be a useful feature for** submitters
>**As it will** help them maintain their claims in a manageable state and allow them to find claims that require action more easily.

Claims in the submitted state cannot be deleted due to the way that the claims are managed and allocated for processing in the back office systems. Once claims are processed these cannot be deleted as they serve as a record of claim outcomes. 

The option would be available for both 100 and 60 claim types however would not be available for a 40 claim type due to how it is tied to the 60 claim that has already been approved. However this is something we need to revisit in the future due to the possibility of a learner not completing the training.

## What our ideas were
The first factor that we needed to consider was where the location of this call to action (CTA) would need to be placed. We considered the following options:
- Alongside the other CTAs at the bottom of the claim page
- On the not-yet-submitted claims table in a new 'actions' column
- On the claims page but position alongside the claim ID in the header

When considering these options we felt that positioning the CTA in the claims details header would be confusing for users and inconsistent with where the other claim CTAs are on the page. With regards to putting the delete action in the table presented the additional factor of the potential of deleting multiple claims, given the potential frequency of this action and the lack of evidence to support this need we didn't think this was necessary and the added factor of ensuring that this action wasn't mistakenly clicked for the wrong claim we felt placing this action on the claim page at the bottom along with the other CTAs made the most sense. 

The next port of call was to review existing GDS patterns and guidelines to understand potential styling options, this started with us reviewing the red 'warning button' in the standard GDS guidelines. It is suggested that this should be used sparingly and that most services should not need one. It states to only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account. With this in mind we did not feel this would be appropriate due to the nature of deleting a claim that hasn't been submitted where the user could just create the claim again if needed. On top of this placing another prominent CTA alongside the existing 'Confirm details' and  'Save and finish later' CTAs would lower the visual clarity of the commonly used actions. Therefore we decided to use a link button for this action and position it in a button group along side the other two CTA's making it less visually prominent but still in a logical place. 

Whatever button we used though we needed to make sure the context and button text make clear what will happen if the user selects it. Therefore we opted for 'Delete claim' to clearly indicate what the user would be deleting. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="delete-100.png" alt="A screenshot taken from v13 of the prototype showing the delete a claim button on a 100 not-yet-submitted claim" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing the delete a claim button on a 100 not-yet-submitted claim</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="delete-60.png" alt="A screenshot taken from v13 of the prototype showing the delete a claim button on a 60 not-yet-submitted claim" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing the delete a claim button on a 60 not-yet-submitted claim</figcaption>
  </figure>
  </div>
</div>

Given the nature of the action we decided upon an additional confirmation from the user before the the claim is deleted. This was a further mitigation to user accidentally performing this action. We also used this screen as a way of highlighting to the user the permanence of the action and that it cannot be undone. Given we know that claim ID may hold little meaning to users we also felt it appropriate to provide some additional two key pieces of information, the training and learner if they have been added, to provide context enough for the user to clarify they were deleting the right claim.

![A screenshot taken from v13 of the prototype showing the confirmation when users tries to delete a not yet submitted claim](confirmation.png "The delete a claim confirmation screen from v13")

Once the the claim has been deleted we return them to the not-yet-submitted claims table and provide a confirmation to the user in the form of a banner to convey the actions success. We opted to use the MoJ banner rather than the standard GDS notification banner, as this would be consistent with the how we have chosen between the two types in other parts of the service where it has tested well.

![A screenshot taken from v13 of the prototype showing the confirmation banner when user deletes a not yet submitted claim](banner.png "The confirmation banner after deleting a claim from v13")

## How we tested our ideas and what we found
We spoke to 4 people as part of this round of user research. All of these sessions were conducted over MS Teams. The Teams calls were an hour long. After gathering some background information (device being used, digital literacy, organisation size) we asked participants to complete 4 tasks. One of those tasks was based around deleting a claim. Users were provided with a claim reference, learner name and course name and asked to find and delete it.

We found that:
- All participants completed the task quickly and reported it was 'easy', 'clear' and 'straightforward' to do.​
- The delete claim link was immediately located by users and performed as expected.​
- On the whole, being able to delete a claim was considered a useful function by users. 

Reasons highlighted by participants as to why they would delete a claim included: ​
- If the learner didn't complete the course e.g., if they're unwell​
- The learner left the organisation​
- The learner died​
- There was a disciplinary with the learner​
- The learner failed the course​
- For clearing purposes and "getting them off screen so they don't appear in searches" and "like not leaving rubbish emails in your inbox".​
- The claim info is incorrect e.g., claiming for the wrong course or level. 

Other findings included:
- The only possible disadvantage of having this functionality identified by participants, was around the possibility of accidentally deleting a claim, subsequently losing key info and having to re-do work. However, they also felt that the 'are you sure screen' was helpful at preventing this from happening. It provided them with an opportunity to 'double check' that the claim they were deleting was the correct one and 'think about it'. One user stated they thought it would be more of a disadvantage to have loads of claims on there that can't be deleted, than accidentally deleting a claim - particularly giving the likelihood of that happening.​
- A couple of users questioned whether they would prefer a way of 'archiving' claims with a reason of why the claim wasn't completed, for example, the learner didn't complete a course - so they could keep track of which claims they have decided not to complete and why.​
- Users thought it would be appropriate for the person responsible for completing the claims to be able to delete them. But there was also some consideration of whether this should be restricted based on job role and levels of access, such as other submitters not being able to delete colleagues claims.

Overall this validated our hypotheses and design thinking. 

## What we will do next
This feature will move into development and we will monitor it's usage further during private beta. Despite the finding where some users wondered whether a archive function would be useful we did not feel there was enough evidence for us to explore this further over other higher priority problem spaces. 



