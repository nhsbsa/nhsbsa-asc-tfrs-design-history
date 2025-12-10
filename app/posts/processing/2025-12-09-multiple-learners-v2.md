---
title: Iterating our designs for multiple learners per claim (Processor)
description: Following the first rounds of usabiility testing on our designs for multiple learners there were few areas where changes were needed.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-12-09
tags:
  - private-beta
  - processing-version-13
  - multiple-learners
relatedUserNeeds:
  - user-need-11
  - user-need-12
aside:
  title:  Processing prototype
  content: |
    [View processing v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
The first iteration of accomodating multiple learners for the processor side is documented in our post [Supporting multiple learners per claim (Processor)](../multiple-learners).

During that round there were a number of pain points identified with the designs that needed to be addressed, the problems that were prioritised and agreed to take forward were:
- How might we esure the organsiation name grabs the attention of processors?
- How might we user a term that is mopre closely aligned with the processors intention when clicking 'change organsiation'?
- How might we provide visual indicators for learner outcomes before processing the claim is completed?

On top of these pain point we also had an existing problem to resolve in the design which we deicded not to tackle for the first iteration and that was the edge case scenerio where users decide to jump around the processing steps using the side navigation and try and continue to the confirm outcome screen without having processed all the steps. This would need to be prevented some how through some form of valdiation check on all of the processing steps together being completed.

## What our ideas were

### Organisation header
Addressing the organisation name and change organisation button first we explored two different type sizes and decided to revert the content back to "back to start" as feedback was that this was more simple than change organsiation and that a lot of staff rely on it. The two type sizes we explored:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="large-header.png" alt="A screenshot of a design with a larger size organsiation header" style="width: 100%; height: auto;">
      <figcaption>The design with a larger organsiation header</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="small-header.png" alt="A screenshot of a design with a smaller size organsiation header" style="width: 100%; height: auto;">
      <figcaption>The design with the a smaller organsiation header</figcaption>
    </figure>
  </div>
</div>

Although the smaller header reduced the scroll distance to the main content of the pages it went against the information hierarchy of the page more so than the previous design had done so we decided to go with return to the larger organsiation header without the address as before. 

### Visual indictors for processing outcomes and step navigation
The natural starting point was to place the outcomes into the side navigation we had designed int he first iteration to accomodate the extra space this was meant the side nev needed to be wider. Given processing always take place on desktop on standards NHS BSA equipment this wouldn't be an issue. We decided add the outcome as plain text using the same content we used on the processed version of the claim screen. 

Considering the other problem we had to deal with to validate that all steps had been completed before the otucome confirmation screen we decided to introduce a new screen that showed all the steps and what had been completed and what hadn't. To do this we used the GOV.UK [Complete multiple tasks](https://design-system.service.gov.uk/patterns/complete-multiple-tasks/) pattern but due to our previous decision to note use the GOV.UK tags and instead use the MoJ badge component alongside out decision not only use words associated with 'complete' or 'completion' to refer training we had to modify the pattern for our purpose. In addition to create consistency through the design we have decided to adjust the design in the side nav to use this same modified multiple tasks pattern.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="side-nav.png" alt="A screenshot of side nav design using the modified multiple tasks pattern with the outcome indicators" style="width: 100%; height: auto;">
      <figcaption>The updated side navigation design</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="check-pattern.png" alt="A screenshot of modified multiple tasks pattern with the outcome indicators" style="width: 100%; height: auto;">
      <figcaption>The new modified multiple tasks pattern design</figcaption>
    </figure>
  </div>
</div>

This new screen before the confirm outcome allowed for the validation check to be conducted before moving the user to the confirm outcome screen. When the user tries to continue from this screen when some tasks are still in the to do state it will throw a valdiation errors:

![The design of the valdiation error thrown when trying to continue with tasks still left to do](task-error.png "Valdiation error design")

We could also utilise this screen for when users come to a claim where processing is in progress and they are looking to continue where they left it. The hypothesis was that this new pattern would allow them to see what hed been done already at a high level. We also made the decision to remove the side nav from this new screen and the new confirm outcome screen as our hypothesis is that the new screen would enable users to check at a high level they have done everything before confirming the outcome and therefore being able to see the side nav during that step was no longer needed. 

Something we will look to test in the next round for this design is the affect this new screen step would have on simple single step claims such as a 60 claim which only requires the users to check payment evidence. 

## How we tested our ideas and what we found


## What we will do next
