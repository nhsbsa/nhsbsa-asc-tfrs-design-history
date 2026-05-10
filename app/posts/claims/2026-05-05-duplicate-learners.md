---
title: Duplicate learners 
description: Revisiting how to deal with duplicate claims of the same learner and training combination in the service to work with single and multiple learner claims
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2026-05-05
tags:
- private-beta
- multiple-learners
- duplicate-learners
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

We already have duplicate learner checks in place for single-learner claims at multiple points in the journey (adding a learner, changing a learner, adding training, changing training). This needed to be reconsidered for multiple-learner claims, where the complexity increases significantly.

In particular, there is a wider issue where changing training on a claim with multiple learners could result in several learners already having existing claims for the new training. This raised a key question: where and how should we detect and handle these duplicate learner/training combinations in a consistent way across the service?

We also identified a gap in the current system, where duplicate validation does not consistently happen at submission, creating a potential loophole where invalid combinations could exist across multiple not-yet-submitted claims.



## What our ideas were

We mapped out where duplicate learner errors could occur across both single and multiple learner claims, covering both the new claim journey and the needs action journey, as these are the points where data is created or updated

New claim journey

Add training → add learner (single learner error)
Add training → add learner → add second learner (single learner error)
Add training → add multiple learners → change a learner (single learner error)
Add training → add learner → change training (single learner error)
Add training → add multiple learners → change training (potential multiple learner error)

Needs action journey

Single learner → change training (single learner error)
Multiple learners → change training (potential multiple learner error)
Single learner → change learner (single learner error)
Multiple learners → change learner (single learner error)

On submission

New claim (single learner)
New claim (multiple learners)
Needs action claim (single learner)
Needs action claim (multiple learners)

At present, there are no consistent duplicate checks enforced at submission.

#### Validation logic

A duplicate is defined as a learner and training combination that already exists in a claim in one of the following states:
- Submitted
- Needs action
- Approved

The combination is allowed if the claim is in:
- Not yet submitted
- Rejected

### Option 1: Validate during the journey

- Show error at every point it is triggered in both the new claim and needs action journeys
- Reuse the error design of showing a single training and 1 or more learners
- Adapt content and action of how to resolve depending on where the error occurs, for example:
  - when adding a new learner → can’t add that specific new learner so add a different one 
  - when changing learner → can’t change to that learner so change to a different one
  - when changing training and multiple duplicate learners → remove them then try again

Key consideration: While plotting this approach out it felt it required multiple tailored states increasing design and maintenance complexity, especially as rules differ by journey step.


### Option 2: Validate at submission only

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim.png" alt="Claim view where duplicate learner check happens on confirm" style="width: 100%; height: auto;">
      <figcaption>Claim view where duplicate learner check happens on "Confirm details"</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="single-learner.png" alt="Single learner - duplicate claim error" style="width: 100%; height: auto;">
      <figcaption>Single learner view - duplicate claim error</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="multiple-learner.png" alt="Multiple learner - duplicate claim error" style="width: 100%; height: auto;">
      <figcaption>Multiple learner view - duplicate claim error</figcaption>
    </figure>
  </div>
</div>

- Run duplicate learner/training checks only at the point of submission.
- Block submission if any invalid combinations exist.

Key benefits:

- Single, consistent validation point.
- One shared error pattern to maintain.
- Fixes an existing system loophole where duplicate combinations can exist across multiple not-yet-submitted claims without being caught earlier.

Key risks:
- Users may complete a full claim only to be blocked at the end.
- No visibility of previously entered data or changes (no submission history view or undo capability).
- Potentially frustrating experience if multiple issues are surfaced at once.
- Risk of users needing to retrace steps without clear guidance.

### Considerations
- Option 1 increases complexity and ongoing maintenance due to multiple entry points and context-specific messaging.
- Option 2 simplifies design and ensures consistency, but risks a less forgiving user experience at the end of the journey.
- Option 2 also resolves an existing issue by enforcing validation at submission, closing the loophole around multiple not-yet-submitted duplicate claims.

MVP was decided to proceed with on submission (option 2), with the understanding that it simplifies implementation and ensures data integrity, but may require further UX improvements if user frustration becomes significant

## What we will do next
- Designs were handed over to development to be implemented as part of multiple learners work