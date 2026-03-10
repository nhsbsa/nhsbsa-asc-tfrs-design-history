---
title: Third iteration of multiple learners for usability testing
description: Iteration based on insights gathered in the first round of concept testing
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-01-12
modified: 2024-02-27
tags:
  - private-beta
  - multiple-learners
  - claims-version-21
  - claims-version-22
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

![A screenshot showing the 'back to claim details' primary action button](back-to-claim-details-button.png "A screenshot showing the 'back to claim details' primary action button")

## How we tested our ideas and what we found

This work went into usability testing 12th January. We tested with 6 users, 5 of which had submitted claims and 1 who had onboarded but not submitted claims yet. This covered a range of org sizes and types of care provided. Prior to test no one had any experience with the new 'edit a claim' feature and submission history feature released in December 2025. 

Here is a summary of the high level findings:
- The design changes go some way to addressing issues seen in previous rounds and the feature has real value (particularly for 100 claims)​
- There was concerns around the lack of flexibility multiple learners offers for 60 / 40 claims, and the implication of its use were regularly missed​
- Making edits to a claim sent back for action flowed better than previous iterations, but some users are still uncertain on how to submit edits 
- Claim history is difficult form some users to understand and has limited use in organisations with only one submitter​
- We saw further evidence supporting previous research findings, such as providing suitable evidence, finding existing claims and the need to know payment dates​

The following insights were then taken into discussion:
1. How might we make progressing edits in a needs action claim more evident to users?
2. How might we make accessing needs action learners more evident to users?
3. How might we ensure a submitter can easily access key information about what has happened previously in a claim?
4. How might we decide whether multiple learners should be released for 60/40 as part of MVP?
5. How might we ensure rules around 60/40 are understood by users when selecting multiple learners?

## What we will do next

As the insights showed that only smaller changes were required and need to move work into develop we agreed the following changes against each of the insights that would then move into development:

### 1. How might we make progressing edits in a needs action claim more evident to users?
The core idea was the replace the "back to claim detail button" with something a bit more action oriented that would suggest how they move forward in their journey. Two different placements were considered and two different designs of the call to action were considered. The shift from the back button to this new style would be triggered when the last learner was moved out of needs action:
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="action-style1.png" alt="A design of the manage learners page with an alert box with an action above the tabs" style="width: 100%; height: auto;">
      <figcaption>Placement option 1 with style option 1</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="action-style2.png" alt="A design of the manage learners page with an tocket panel with an action within the needs action tab" style="width: 100%; height: auto;">
      <figcaption>Placement option 2 with style option 2</figcaption>
    </figure>
  </div>
</div>

We decided upon placement option 1 with style option 2. Alongside this change we also iterated the content of the tabs to tie together the idea that they are making edits rather than the needs action language which we are reserving for the claim status only.

![A screenshot showing the updated design with a ticket panel sat above the tabs](final-design.png "The final design")

### 2. How might we make accessing needs action learners more evident to users?
Due to the fact we weren't retesting this with users we didn't want to make major changes to how the requested edits are displayed to users in the alert box of a needs action claim. The two key issues that were identified were:
- Users thinking the guidance link about what evidence they need to provide would tell them the request edits. 
- Users weren't sure what clicking on the learner name link would do. 

To combat this we moved the guidance link into the opening paragraph and adapted the content around it to call out that this was guidance. We also added hint text for multi learner claims that clarified to the user what would happen if the user clicked on the learner name links.

![A screenshot showing the updated design for thhe alert box, where the guidance link has moved to the opening paragraph and there is help text informing the users that clicking on the learner name will show the requested edits.](alert-box-design.png "The final alert box design for a needs action claim")

### 3. How might we ensure a submitter can easily access key information about what has happened previously in a claim?
The view previous submissions table was always the most challenging part of the "edit a claim" feature. Showing the changes over time between each submission also gets significantly more difficult to do when there are multiple learners on a claim. Further research has shown that the key information for users are:
- claim journey milestones
- who submitted the submissions
- requested edits of rejection reasons

The detail of what has changed between submissions was of less use to users and with the introduction of multiple learners became much harder for them to understand the details anyway. We therefore made the decision to strip the design back removing the view previous submissions table and focussing on enhaving the timeline to include any requested edits for previous submissions. As the view previous submissions would still be found on the processor side it would allow processors and CCS agents to support users if they did have queries about what changes had been made previously.

We explored embedding the requested edits fully into the timeline but found this to be overwhelming particularly as they could be quite long for multiple learner claims. Therefore we decided upon add a simple link under the timeline entry that opened a new page allowed the users to more easily digest the information.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="timeline.png" alt="A screenshot of the claim timeline with the new links to the requested edits" style="width: 100%; height: auto;">
      <figcaption>The new claim timeline design</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="edit-note.png" alt="A new page showing the requested edits for a particular submissions" style="width: 100%; height: auto;">
      <figcaption>The new page design showing the requested edits.</figcaption>
    </figure>
  </div>
</div>

### 4. and 5. approaching multiple learner 60/40 claims
Multiple learners has already been much more challenging for 60/40. We needed to make a decision of whether to include support for multiple learners on 60/40 claims for the initial release of multiple learners. The following factors impact this decision:
- the implications for submitters adding multiple learners to 60/40 claims is different to 100 claims and the impact it might have is often not clear.
- Research has shown that submitters are less likely use multiple learners for 60/40 claims
- Data analysis of existing data shows that around 40% of possible multi-learner claims would be for 60/40 claims but as more OMMT claims come in (which are only eligible for 60/40), this proporation is only likely to decrease. 
- further research and design work would be required to try and resolve the outstanding challenges for multiple learners on 60/40 claims. 

As a result of these factors we made the decision to focus on releasing multiple learners for 100 claims as part of the MVP solution and plan to return to it for 60/40 claims further into our roadmap. 