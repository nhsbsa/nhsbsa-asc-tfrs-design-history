---
title: Third iteration of multiple learners for usability testing
description: Iteration based on insights gathered in the first round of concept testing
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-01-12
tags:
  - private-beta
  - multiple-learners
  - claims-version-21
aside:
  title:  Claims prototypes
  content: |
    [View claims v21 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v21/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

 We have iterated on insights from our first round of usability testing. You can read more about that in our previous blog post <a href="../multiple-learners-iteration-2">Second iteration of multiple learners for usability testing</a>. The actions we agreed to take forward itno the next iteration were summarised in the follow how might we statements:

- **How might we** make user edits for a needs action claim more evident to users?
- **How might we** ensure submitters can add an additional learner easily​?
- **How might we** ensure the right messaging is given around the impact of adding multiple learners on a 60/40, at the right point in the journey?
- **How might we** make users confident they can proceed with their claim after adding learners​


## What our ideas were

### How might we make user edits for a needs action claim more evident to users? 

Findings showed that users weren't always sure when they had made edits to a needs action claim. This was because
- The edited tag alone wasn't enough of an indicator.​
- The edits remained in the same tab and the rejection reason remained.​
- They didn't feel like they had done anything to confirm the edits they had made.

Following some ideation we came up with the following hypothesis:

> **We believe that** adding a 'done' tab and an button to 'move to done' to the needs action state manage learners page
> **Will be a useful feature for** submitters
> **As it will** allow them to self declare when they have actioned a learners and make it clearer what they have left to do.

The design allows users to move learners to done once they have edited the relevent fields.

![A claim in the needs action state showing the 'mark as done' button and the new 'done' tab](mark-as-done.png "A claim in the needs action state showing the 'mark as done' button and the new 'done' tab")

### How might we ensure submitters can add an additional learner easily​?

Findings showed that the ability to add a second learners wasn't immediately obvious to users. This was because they were used to single learner claims and therefore the option to add another wasn't obvious enough given this was a new feature to the service.

Following some ideation we came up with the following hypothesis:

> **We believe that** asking users directly after they have added the first learners whether they want to add a second learner
> **Will be a useful feature for** submitters
> **As it will** ensure they don't miss the option to add more than one learner to a claim

The design triggers a new screen after they add the first learners asking them whether they want to add a more learners. We have managed to incorporate one of the other how might we's into this same design please see the next section of the screenshots of the design we are testing.

### How might we ensure the right messaging is given around the impact of adding multiple learners on a 60/40, at the right point in the journey?

Findings showed that users found it difficult to make an informed decision about what learners to include in a 60 / 40 claim (ie. whether to submit individual claims for learners or a multiple learner claim for the whole cohort). This was because:
- They were likely to miss the content in the initial funding model description (especially if they are already used to the different funding models)​
- They don't know, from the current in-service content, that I will be able to remove learners before submitting a 40 claim (until I have had a 60 accepted)​
- It's not clear, at the point when they add another learner to a claim, that their funding may be delayed if one learner finishes much later than the others

​Following some ideation we came up with the following hypothesis:
> **We believe that** providing dedicated content around the impact of multiple learners at the point of asking them whether they want to add a second learner
> **Will be a useful feature for** submitters
> **As it will** provide the messagaging around impact at the point they are making the decision.

The design means we are combining both solution to this how might we and the previous how might we into a single screen that serves a dual purpose. The resulting designs are as follows:
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="add-another-100.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>The add another learner question screen for a 100 claim.</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="add-another-6040.png" alt="The add another learner screen showing content related to the impact for a 60/40 claim" style="width: 100%; height: auto;">
      <figcaption>The add another learner question screen for a 60/40 claim.</figcaption>
    </figure>
  </div>
</div>

### How might we make users confident they can proceed with their claim after adding learners​

Findings showed that users were sometimes unsure how to proceed from the learner management screen. This was because they felt they needed to confirm their actions to progress back to the claim details screen and the current breadcrumb link did not stand out enough.

Following some quick ideation we came up with the following hypothesis:
> **We believe that** making the existing breadcrumb link into the primary action button
> **Will be a useful feature for** submitters
> **As it will** make it more obvious how to progress back to the claim details screen.

We decided to keep the content of the button the same as this was generic enough to cover all scenarios and ensure consistency.

![A screenshoting showing the 'back to claim details' primary action button](back-to-claim-details-button.png "A screenshoting showing the 'back to claim details' primary action button")

## How we tested our ideas and what we found

This work went into usability testing 12th January. This section will be updated with the findings post playback and actions meeting where we decide next steps.

## What we will do next

Based off the findings we will iterate and go back into another round of testing if deemed necessary.