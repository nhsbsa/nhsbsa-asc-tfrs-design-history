---
title: Exploring validation for multi-learner claims that need action
description: Adding the manage learners page makes applying validation slightly more challenging on a needs action claim. We explored ideas to tackle this. 
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-02-27
tags:
  - private-beta
  - multiple-learners
  - claims-version-22
aside:
  title:  Claims prototypes
  content: |
    [View claims v22 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v22/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
In our release for the 'Edit a claim' feature, when resubmitting a needs action claim the user needs to edit information on the claim before being able to resubmit the claim. If they haven't changed anything then the user is presented  with an error message saying "You cannot resubmit a claim without making the requested edits". Due to limitations on the processing of a claim we don't know exactly what needs to be changed. For example a claim returned due to edits requested in relation to the payment evidence may requires change on one or all of; payment date, payment evidence, training selection.

Mutliple learners being on a claim adds some further complexity to this as now there are multiple learners that may have requested edits. In addition to this, users can remove learners from the claim as a new possible action and we have the the new concept in manage learners page where users can "Move to edits done".

## What our ideas were
There are a few areas that we explored ideas in:
1. Checking whether every learner has been moved to 'edits done'
2. Checking whether there is an edit in at least one required field for that area.
3. Checking whether changes have been made to the learner before it can be moved to 'edits done' 

### 1. Checking whether every learner has been moved to 'edits done'
There were two ways we could apply this sort of valdiation:
- On the manage learners page, ensuring all learners have been moved to the 'edits done' tab before the user can return to the claim details screen
- When the user clicks to submit the claim the validation is applied and an error message is shown if not all learners are in the 'edits done' tab on the manage learners page.

There are however challenges with each of these approaches. With the first idea we kmow users might not action all learners all at once therefore performing validation at this stage simply wouldn't work. With the second idea linking the validation through to the manage learners page would be a challenge, while we could put the error summary at the start of the claim d3etails page there isn't an easy place to put the error message before the manage learners page technically covers three fields on the claim details page; learners, compeltion date and completion evidence. 

On top of this there is also the looming challenge that in a few edge cases the change that actually need to be made is against the training but the note about this is against the learners and therefore we encounter a potential conflict of mental models by applying this sort of validation. A user percieves they have made the change but we still require them to perform a seemingly unrelated action elsewhere. 

### 2. Checking whether there is an edit in at least one required field for that area.
This would involve checking certain fields depending on the type of criteria that fails. So if the claim failed on evidence of payment then we would check whether the evidence of payment, payment date or trainign fields had been changed and something similar for evidence of completion. While the validation rules here are quite straight forward how we apply the error messages is quite difficult. We would stick with the current error message applied in the alert box saying they haven't made the required edits, however we can't easily tell them exactly what they haven't done. This gets more complex for the user to work out when applied to a multi learner claim. By applying this level of validation check we risk users getting stuck, frustrated and giving up.

### 3. Checking whether changes have been made to the learner before it can be moved to 'edits done' 
This would involve applying validation on the click of the 'move to edits done' button on a learner card checking whether something has changed and if not using a similar error message approach to what we currenrtly use on the claim details where the error message is applied in the alert box for that card. The challenge here comes again in the edge cases where the user actually has to change training which isn't on the card we end up with a potentially confusing error message that is detatched from the area the user actually needs to change.

## What we will do next
What we found was that no solution was without it's issues, all possibly leading to confusion and frustration due to various possible scernarios and edge cases. What testing without validation showed is that users were able to identify what needed to be actioned and make those actions for the common scenario. We therefore decided to intiially keep the validation very open and flexible. Providing the user changes at least one aspect of the claim they will be able to resubmit. We won't apply any further validation and leave the moving of learner cards to 'edits done' as a way the user can manage there to do list rather than using it to determine whether the user can resubmit the claim yet. We will release the feature with this option for validation but monitor closely to see how this affects number of resubmissions. It is worth noting that currently the operations team will call the submitter after the 2nd failed resubmission to help them resolve there issues this will continue to act a mitigator in the short term for users who struggle with actioned claims that have been returned. 