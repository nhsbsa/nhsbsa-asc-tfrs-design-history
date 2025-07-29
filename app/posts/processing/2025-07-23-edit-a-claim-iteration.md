---
title: Iterating the edit a claim designs for processors
description: Following the first round of usability testing on edit a claim we returned to the drawing board for the next iteration.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-07-23
tags:
  - private-beta
  - processing-version-8
  - edit-claim
relatedUserNeeds:
  - user-need-4
  - user-need-11
  - user-need-12
aside:
  title:  Processing prototypes
  content: |
    [View processing v9 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v9/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

Our first iteration of design and testing on this problem space is documented in the post [Edit a claim - processor side](../edit-a-claim). In that first iteration we sought to use design work we had done previously but didn't move into testing due to a change in priorities. That work was documented in the post [Reducing the reliance on offline records](../claim-view-iteration). 

What we tested in the first round of edit a claim work involved this revamped claim view. What we had were mixed findings on this new claim view and the size of changes alongside the edit a claim options made for more difficult research analysis. Following cross discipline discussions we agreed that the priority was to get the edit a claim feature out as quickly as possible. This meant that the substantial changes made to the claim view, with the lack of clear consensus in insights, was not a viable route of exploration for us. 

We agreed that we would constrain ourselves and minimise any changes to the structure of the current live claim design. This meant that the edit a claim option would be surfaced through an additional radio button answer to the existing two evidence questions. The overall flow of the screens would also remain the same with only screens that are essential to meet business requirements being added. This may result in reduced usability as we know from previous research that the existing design of the claim view has usability issues. 

## What our ideas were

Reverting back to the design of a claim that is in live meant that our starting point was the following two screens from the existing process a claim journey.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim-view-past.png" alt="A screenshot from v7 of the prototype showing the view of a claim ready to be processed" style="width: 100%; height: auto;">
      <figcaption>Claim view v7</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-outcome-past.png" alt="A screenshot from v7 of the prototype showing screen to confirm the outcome of the processed claim" style="width: 100%; height: auto;">
      <figcaption>Outcome confirmation v7</figcaption>
    </figure>
  </div>
</div>

Keeping within the constraints we agreed above we decided to allow the option to send back the claim for editing by the submitter by using an additional radio button option for each processing question. This would split out 'No' into two options: one that allows the submitter to make amends and the other that would reject the claim outright. The following logic would then apply:
- If both answers are 'yes' then the claim will be approved. 
- If at least one answer is 'no, reject" then the claim will be rejected. 
- If at least one answer is 'no, send back for editing' and the other is yes then it will be sent back for editing. 

Next we needed to agree the content for these options.

This was done through a face-to-face workshop with band 4 processors and trainers.

Participants iterated content twice following discussions around:
- the difference between claims that are rejected outright and those that can be sent back to the submitter for editing
- the need for submitters and processors to share a similar language

While participants agreed unanimously on the term ‘reject’ for rejected claims, they arrived at 2 options for claims that need to be sent back: 
- Pend - action required
- Action required

These were both chosen for their similarity to submitters’ preferred status name for claims that are sent back: “Needs action” – see [Edit a claim - submitter side (second iteration)](../claims/edit-a-claim-second).

Following a dot vote, all but one participant voted for “Action required”. 

### Intro text for notes

Given that there are now 2 “no” options that processors can select, the intros to the rejection and action notes needed to highlight the difference between them – see below. 

#### No - reject:

Why has this claim been rejected?
<span class="govuk-caption-m">This note tells the organisation why their claim has been rejected and therefore cannot be edited and resubmitted</span>

#### No - action required:

What action does the organisation need to take?
<span class="govuk-caption-m">This note tells the organisation what edits they need to make before they resubmit this claim</span>


These updates resulted in the following design for the options:

![The new radio button options.](radio-options.png "A screenshot from v9 of the processing prototype that shows the new radio button options.")

The remaining aspect of the design needed to tackle some business requirements around this feature:
- Processors need to review how many times a claim has been submitted.
- Processors need to review previous submissions of the claim to understand what has changed and why they were sent back.

The claim view design doesn't have the layout to accommodate this additional layer of information without it being potentially very confusing. We decided to reuse the view previous submissions pattern that we developed for the organisations side as if users found this usable it would reduce development effort as the pattern could be reused across both applications. We added some additional text to the claim summary to describe how many submissions there had been and if there were more than one we would show a 'view previous submissions' link that takes the user to a separate page that displayed the pattern.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="view-previous-submissions-link.png" alt="A screenshot from v9 of the prototype showing the view previous submissions link" style="width: 100%; height: auto;">
      <figcaption>View previous submissions link</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="view-previous-submissions-page.png" alt="A screenshot from v9 of the prototype showing the view previous submissions page" style="width: 100%; height: auto;">
      <figcaption>View previous submissions page</figcaption>
    </figure>
  </div>
</div>

The resulting new screen designs look like this:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim-view-new.png" alt="A screenshot from v9 of the prototype showing the view of a claim ready to be processed" style="width: 100%; height: auto;">
      <figcaption>Claim view v9</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-outcome-new.png" alt="A screenshot from v9 of the prototype showing screen to confirm the outcome of the processed claim" style="width: 100%; height: auto;">
      <figcaption>Outcome confirmation v9</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found

We ran a round of usability testing with 5 processors. This round tested the following iterations of the design, that were guided by the research
insights and recommended from the previous round of research: 
- Reverting to previous processor flow​
- Removal of the third question [Is there any other reason why this claim should be rejected?]​
- Two questions with 3 options in original flow​
- Content changes to 3 options​
- Previous submission history

Here is a summary of what we saw and heard:
- Processors want to be able to send back for action for issues currently approved at risk' so their processing is accurate
- Inconsistent processing for the same scenarios
- Inconsistent processing behaviour for a reject and communication of claim issues
- Claim history met users' needs and aligns with WoW and will form a key first part of processing resubmitted claims
- Users often missed the link for the claim submission history
- Having the submission history available changed the processing flow for users and some start processing checks from the history
- Claim history may reduce reliance on notes spreadsheet but not replace it 

## What we will do next

Following a review of the insights and recommendations we agreed the following actions:
- Work the operational teams to update guidance for processing behaviour
- Assess the risks of iterating the design to only have one evidence question that covered both checks without further testing
- Assess the location of the view previous submissions link.
- Provide a link between the 60 and 40 parts of the claim on the previous submissions table. 