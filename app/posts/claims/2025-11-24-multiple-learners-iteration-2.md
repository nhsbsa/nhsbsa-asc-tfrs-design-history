---
title: Second iteration of multiple learners for usability testing
description: Iteration based on insights gathered in the first round of concept testing
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-11-24
tags:
  - private-beta
  - multiple-learners
  - claims-version-20
aside:
  title:  Claims prototypes
  content: |
    [View claims v20 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v20/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

- We have iterated on insights from our first round of concept testing to move into usability testing.
- Concept testing helped give us a direction, as there were multiple ways to approach the design. You can read more about that in our previous blog post <a href="../multiple-learners">here</a>.
- The concepts were tested using static screenshots instead of interactive prototypes, which allowed us to learn quickly before investing time in building designs that might be heading in the wrong direction.
- We learned that users had preferences for certain designs, but we wanted to dig deeper into why a design was preferred. Understanding the reasoning behind it was more valuable than simply knowing which components they liked.

Below are the next designs. They combine elements of the concepts that tested well, build on the underlying reasons for user preferences, and form the basis for hypotheses we’ll take into usability testing.

## What our ideas were

### Manage claims 

![Manage claims table](manage-claims.png "Manage claims table")

- We added in the count of learners column into the table, painting a picture of what the claim looks like without diving into the detail. Trying to find a claim for a specific learner name by giving a drop down here wouldn't be the most efficient if the need is to find a particular claim for a learner quick. This would be better answered with something like a advanced search

### Claim details 

![A multiple learner 100 claim](not-yet-submitted-100.png "A multiple learner 100 claim")

> **We believe that** keeping the claim details screen as familiar as possible to current designs
> **Will be a useful feature for** submitters
> **As it will** allow them to adapt more quickly to using the feature

> **We believe that** having a summary section on the claim-details page for learner completions rather than the specific details
> **Will be a useful feature for** submitters
> **As it will** provide a quick overview of the claim’s status based on familiar information—such as dates and evidence—and help them easily see what specific details are still outstanding without having to dive into the details of potentially many learners

#### Links 

Adding “change” links on the learner, completion date and evidence of completions values — when they all led to the same place — did not work well. GDS guidance recommends avoiding multiple links that direct to the same destination, and users in concept testing were unsure what to expect. In addition, the claim-details page now contains many blue links with different functions, so we also conducted a link audit to identify ways to reduce them.

> **We believe that** adding a "Completion" section to the claim and going forward with the "Manage" button 
> **Will be a useful feature for** submitters
> **As it will** meet their expectation of being taken to a single place where they can update all completion information, and it fits the design more of it being a summary.

> **We believe that** moving the claim history to a link placed next to “View previous submissions”
> **Will be a useful feature for** submitters
> **As it will** reduce the variation and volume of font sizes in the claim-details page—an issue highlighted by users—while still allowing us to test whether this change affects its usefulness as an “at-a-glance” view of the claim.

![Claim history page](claim-history.png "Claim history page")

#### 60/40 claims 

We also needed to consider how the design would function across all claim types. During concept testing, we hadn’t fully explored how the ideas would work for 60/40 claims. To fit the "Manage" button design, we realised the 60 section would require its own dedicated area for a learners-management button but only for a single learners row. There is also already a lot of duplicated learner information on the 60/40 screen with learners having a section in each to show changes—potentially even more once the list of learner names appears in the edit alert box. This raised the question of whether now is the right time to rethink the layout, as it was created some time ago and no longer feels like the best fit.

![Original 60/40 claim](original6040.png "Original 60/40 claim")

Updates:

- We explored collapsing the section that isn’t being worked on, but key information such as training details would end up hidden.
- A new question emerged: do the training and learner details actually sit outside the 60/40 split, with the remaining sections being the only parts directly tied to the 60/40 structure?
- This led to a reframing: a claim is essentially one training item plus any number of learners. That’s consistent across both 100 and 60/40 claims, so we extracted this shared information and placing it at the top.
- We collapsed the inactive part of the 60/40 split to save space and removed the timeline, which immediately made the page simpler and easier to navigate

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="6040-collapsed.png" alt="" style="width: 100%; height: auto;">
      <figcaption>New - 60/40 design collapsed</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="6040-expanded.png" alt="" style="width: 100%; height: auto;">
      <figcaption>New - 60/40 design expanded</figcaption>
    </figure>
  </div>
</div>

### Manage learners screen 

![A multiple learner 100 claim](manage-learners.png "A multiple learner 100 claim")

> **We believe that** separating the bulk of learner-completion information into its own management screen 
> **Will be a useful feature for** submitters
> **As it will** prevent the claim-details screen from becoming overloaded, making the information more digestible and allowing easier handling of large amounts of learner data through added space and features such as tabs.

> **We believe that** framing a learner as a name, a corresponding piece of completion evidence, and a completion date—displayed together in individual learner cards
> **Will be a useful feature for** submitters
> **As it will** match their mental model of seeing these pieces of information grouped together and handled as a single unit 

- The idea of bulk upload of certificates is something we are evaluating the tech effort for, which if introduced would perhaps change this flow in the future

#### Completion dates
Completion dates can apply to all learners or to individual learners. Research showed users expected the interface to adapt based on this choice, so we needed a clear way for them to indicate it. Users often missed the “add one to all” link we explored in concept testing, and although the idea of asking whether a date applied to one or all learners tested well, its placement in the flow wasn’t working.


<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="completion-date-question.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Question 1 - is the completion date or all or one learner</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="completion-date-all.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Question 2 - (depending on the previous answer either asks) all learners date or single learner date</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="manage-learners-single-date.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Displays answer for single completion date</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="different-completion-dates.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Displays answer for multiple completion dates</figcaption>
    </figure>
  </div>
</div>

> **We believe that** moving the completion-date choice to the Manage learners screen
> **Will be a useful feature for** submitters
> **As it will** make it easier to set or change whether a date applies to one learner or all, in a way that fits naturally into their workflow

Key behaviours:
- The question appears the first time a completion date is added, then a summary appears at the top.
- Selecting Yes applies the date to all learners.
- Selecting No applies it only to the specific learner.
- If users switch from Yes to No, existing dates remain in place and can be edited individually.
- If a completion date is added for a single learner and another learner is added later, both learner cards appear, with the original learner’s date preserved 

#### Tabs
Managing learners becomes harder as their number increases. In concept testing, 5 of 6 participants preferred using tabs to organise learners

> **We believe that** that highlighting clearly the learners who still need information
> **Will be a useful feature for** submitters
> **As it will** break content into clear sections and focus the attention on what still requires action

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="manage-learners-single-date.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Not yet submitted claim tabs</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="empty-done-tab.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Empty done tab</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="edited-needs-action-tab.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Needs action claim tabs</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="removed-tab.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Needs action claim - removed tab</figcaption>
    </figure>
  </div>
</div>

For claims that haven’t been submitted yet, the tabs are:
- To do – learners who still need information
- Done – learners whose information is complete

For claims that need action after being sent back, the tabs change to:
- Needs action – learners requiring updates or corrections
- Completed - learners who have been marked complete by the processor and can't be edited
- Removed – learners who are no longer elibigle and are removed by submitter

#### Advanced search 
- Actions meeting decided adding in the advanced search for a specific learner's claim wasn’t in scope for multiple learners

#### Start date
- We’re continuing research to understand user needs around capturing start dates

#### One learner V multiple learners in the design 
As we introduced multi-learner functionality, we needed to ensure the journey still worked smoothly for single-learner claims and didn’t become unnecessarily complex.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="single-learner-empty.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Single learner claim empty details</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="single-learner-claim.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Single learner claim filled in details</figcaption>
    </figure>
  </div>
</div>

> **We believe that** allowing the single-learner flow to remain simple while naturally expanding into a multi-learner experience
> **Will be a useful feature for** submitters
> **As it will** maintain a straightforward, one-page journey for single learners, while enabling organisations to add more learners through clear actions like “Add another" and only showing the Manage learners journey when it becomes relevant.


#### Content
- We removed a significant amount of content during the 60/40 rework, focusing on clarity and relevance.
- The Edit learners alert box now links directly to the relevant learner cards on the Manage learners screen.
- Edit tags appear on the top-level claim details, indicating when information of that type has changed for any learner.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="edited-needs-action-tab-learner.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Edited needs action claim</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="needs-action-claim-details-edited.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Multiple completion dates</figcaption>
    </figure>
  </div>
</div>



## How we tested our ideas and what we found

This work went into usability testing 12th November.

Some of the findings post-playback and the "How might we's" they've been turned into:

#### 1. The submitter wasn't always sure when edits had been made to a needs action claim because:
- the edited status alone wasn't enough of a indicator
- the edited learners remained in the same tab and the rejection reason remained
- felt hadn't done anything to confirm the edits they had made. 

"How might we" make user edits for a needs action claim more evident to users?

#### 2. The submitter, due to being used to single learner claims, didn't find the adding of a second learner immediately obvious.

"How might we" ensure submitters can add an additional learner easily?

#### 3. The submitter was sometimes unsure about how to proceed from the learner management screen because:
- they felt they needed to confirm their actions in the learner management screen to progress and the back to claims link did not stand out enough at this stage.

"How might we" make users confident they can proceed with their claim after adding learners?

#### 4. The submitter found it difficult to make an informed decision about what learners to include in a 60 / 40 claim (ie. whether to submit individual claims for learners or a multiple learner claim for the whole cohort) ​becuase:
- likely to miss the content in the initial funding model description(especially if already used to the different funding models)
- they are unaware from the current in-service content, that they are able to remove learners befoe submitted a 40 claim (until had a 60 accepted)
- it's not clear, at the point when they add another learner to a claim, that their funding may be delayed if one learner finishes much later than the others

"How might we" ensure the right messaging is given around the impact of adding multiple learners on a 60/40, at the right point in the journey?

#### 5. The submitter struggled to find 40 claims from the manage claims screen because:
- their first instinct was to look in "submitted" claims
- they don't always associate 60/40 as two seperate claims

"How might we" make finding 40 claims easier than it currently is?


## What we will do next

We will hold a actions meeting where we decide next steps, which will be detailed in the next blog post. Based off the findings we will iterate and go back into another round of testing if deemed necessary.