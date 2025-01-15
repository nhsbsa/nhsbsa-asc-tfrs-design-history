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
- A submitter starts a claim, but the learner leaves the organisation before completing the training, and the claim can't be submitted.
- A submitter starts a claim, but when they try to add a learner, they find that a claim has already been made for that training for that learner.

As a result of these scenarios, this may lead to claims accumulating in the not-yet-submitted table that are not needed. This formed the following hypothesis:

> **We believe that** allowing users to delete not-yet-submitted claims  
> **Will be a useful feature for** submitters  
> **As it will** help them maintain their claims in a manageable state and allow them to find claims that require action more easily.  

Claims in the submitted state cannot be deleted because of how claims are managed and processed in the back office systems. Once claims are processed, they cannot be deleted, as they serve as a record of claim outcomes. 

This option will be available for both 100 and 60 claim types. However, it will not be available for a 40 claim type due to how it is tied to the 60 claim that has already been approved. This is something we will revisit in the future if a learner does not complete the training.

## What our ideas were

The first factor we needed to consider was where to place the "delete" call to action (CTA). We considered the following options:
- Alongside the other CTAs at the bottom of the claim page.
- On the not-yet-submitted claims table in a new 'actions' column.
- On the claims page, positioned alongside the claim ID in the header.

After considering these options, we concluded that placing the CTA in the claims details header would be confusing and inconsistent with the location of other claim CTAs. We also considered placing the delete action in the table, but given the potential frequency of this action and the risk of mistakenly deleting the wrong claim, we decided against it. Instead, we decided to position the delete CTA on the claim page at the bottom, alongside the other CTAs, as this made the most sense.

Next, we reviewed existing GDS patterns and guidelines for potential styling options. We initially considered using a red 'warning button' in line with standard GDS guidelines, which are typically used for destructive actions like permanently deleting an account. However, we determined that this wouldn't be appropriate since deleting a not-yet-submitted claim could be easily undone by recreating the claim if necessary. Additionally, placing another prominent CTA alongside the existing 'Confirm details' and 'Save and finish later' CTAs would reduce visual clarity. Therefore, we opted for a link button for this action, which was placed in a button group alongside the other two CTAs. This made the delete button less visually prominent but still logically placed.

We ensured that the context of the action was clear by labeling the button "Delete claim" to make it obvious what would happen if the user selected it.

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

Given the nature of the action, we added an additional confirmation screen before the claim is deleted. This was to mitigate the risk of users accidentally performing this action. We also used this screen to highlight the permanence of the action and made sure to display key information—such as the training and learner names—so that users could verify they were deleting the correct claim.

![A screenshot taken from v13 of the prototype showing the confirmation when users tries to delete a not yet submitted claim](confirmation.png "The delete a claim confirmation screen from v13")

After the claim is deleted, users are returned to the not-yet-submitted claims table, with a confirmation banner to indicate the action's success. We opted for the MoJ banner, which has tested well in other parts of the service, instead of the standard GDS notification banner.

![A screenshot taken from v13 of the prototype showing the confirmation banner when user deletes a not yet submitted claim](banner.png "The confirmation banner after deleting a claim from v13")

## How we tested our ideas and what we found

We spoke to four people as part of this round of user research. All sessions were conducted over MS Teams and lasted one hour. After gathering some background information (device, digital literacy, organisation size), participants were asked to complete four tasks. One of those tasks involved deleting a claim, where users were provided with a claim reference, learner name, and course name and asked to find and delete it.

### Key Findings
- All participants completed the task quickly and found it "easy," "clear," and "straightforward."
- The delete claim link was immediately located by users and performed as expected.
- Most participants considered the ability to delete a claim a useful feature.

### Reasons for Deleting a Claim
Participants mentioned several reasons for deleting a claim:
- The learner didn’t complete the course (e.g., due to illness).
- The learner left the organisation.
- The learner died.
- There was a disciplinary issue with the learner.
- The learner failed the course.
- To clear the screen and "get rid of clutter."
- The claim information was incorrect (e.g., claiming for the wrong course or level).

The only potential downside mentioned was the possibility of accidentally deleting a claim and losing key information. However, participants found the "are you sure?" screen helpful for preventing accidental deletions. One user noted that it would be more of a disadvantage to have many claims on the screen that couldn't be deleted.

A couple of users suggested the possibility of archiving claims, with a reason for why the claim wasn’t completed (e.g., the learner didn’t finish the course). This would allow users to keep track of incomplete claims.

Overall, these findings validated our hypotheses and design thinking.

## What we will do next

This feature will move into development, and we will monitor its usage during the private beta. Although some users expressed interest in an archive function, we did not find enough evidence to prioritize this feature over other higher-priority areas.