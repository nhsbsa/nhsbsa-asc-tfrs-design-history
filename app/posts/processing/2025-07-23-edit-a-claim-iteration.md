---
title: Iterating the Edit a claim designs - processor side
description: Following the first round of usability testing on edit a claim we returned to the drawing board for the next iteration.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-07-23
tags:
  - private-beta
  - processing-version-8
  - processing-edit-a-claim
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

Our first iteration of design and testing on this problem space is documenting in the post [Edit a claim - processor side](../edit-a-claim). In that first iteration we sought to use design work we had done previously but didn't move into testing due to a change in priorities. That work was documented in the post [Reducing the reliance on offline records](../claim-view-iteration). 

What we tested in the first round of edit a claim work involved this revamped claim view. What we had were mixed findings on this new claim view and due to the size of changes alongside the edit a claim options made for more difficult research analysis. Following cross discipline discussions we agreed that the priority was to get the edit a claim feature out as quickly as possible. This meant that the substantial changes made to the claim view with the lack of clear concensus in insights was not a viable route of exploration for us. 

We agreed that we would constraint ourselves to minimise any changes to the keep to the structure of the current claim design that is in live. This meant that the edit a claim option would be surfaced through an additional radio button answer to the existing two evidence questions. The overall flow of the screens would also remain the same with only screens that are essential to meet business requirements being added. This may result in reduced usability as we know from previous research that the existing design of the claim view has usability issues. 

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

Keeping within the constraints we agreed above we decided to allow the option to send back the claim for editing by the submitter by using an additional radio button option for each processing question. This would split out 'No' into two options one that allows the submitter to make amends and the other that would reject the claim outright. The following logic would then apply:
- If both answers are 'yes' then the claim will be approved. 
- If at least one answer is 'no, reject" then the claim will be rejected. 
- If at least one answer is 'no, send back for editing' and the other is yes then it will be sent back for editing. 

Next we needed to agree the content for these options. [TODO content write up]

This resulted in the following design for the options:

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

TODO

## What we will do next

TODO