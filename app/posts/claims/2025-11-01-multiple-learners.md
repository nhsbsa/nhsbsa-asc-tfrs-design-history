---
title: Supporting multiple learners per claim (Submitter)
description: Orgs often send multiple learners on the same training, but currently have to submit all the information again for each learner, even if the course details and evidence of payment are the same. 
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-11-01
tags:
  - private-beta
  - multiple-learners
  - claims-version-19
relatedUserNeeds:
  - user-need-3
aside:
  title:  Claims prototypes
  content: |
    [View claims v19 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v19/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
One of the problems that has been identified through UR in the past is orgs often send multiple learners on the same training, but currently have to submit all the information again for each learner, even if the course details and evidence of payment are the same. ​

When submitters are creating multiple claims for the same course, using the same payment evidence and the only differing element is the individual learner, the repetitive process is frustrating, time consuming and can lead to mistakes in the submitted claim.​

As part of work done to scale back the MVP in March 2024 to try and meet an aggressive delivery schedule, we removed the ability to add multiple learners to a claim from the proposed designs. Please see the design history post [Scaling back MVP](../scaling-back-mvp-claims) for more details on the aspects removed from the MVP as part of that work.

We have now returned to this problem space which has continued to be highlighted by users in research as a major pain point in their use of the service. 

## What our ideas were
During the definition and discovery work that was done around this problem space we explored some different models of a claim that might address the issues. The two main concepts were:
- Allowing users to add multiple learners to a single claim each with their own evidence of completion
- Providing a way for users to duplicate a claim as a starting point and selecting which information they wish to keep. 

Both options would reduce the amount of duplication in information being added to the service. However the duplicate claim option didn't extend these benefits to the processor in reducing the need for them to check the same information multiple times. After evaluating the different approaches and understanding early expectations from users we went with the approach of allowing them to add multiple learners per claim. The approach we had originally taken in Alpha for this problem space.

### Ideation process

Given how much the serice had evolved since then we decided to approach the design work with fresh eyes. This started with the an in-person ideation day with the UCD team in London to explore, discuss and ideate around this problem space.

We followed the [idea storm](https://pipdecks.com/pages/idea-storm?srsltid=AfmBOoqb78jwC_mDWKw0GVM7Ti_90xm_59xyRIX2U9FSmhozL6fHAeAJ) workshop template from Pip decks to reduce the preperation overhead a workshop day can have. The idea storm has 5 key steps:
1. How might we's
2. Mind map
3. Idea eights
4. T-bar format
5. Rose, Thorn, Bud

The resulting outputs was a wider variety ideas that had been evaluated through a crit process. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="ideas1.jpg" alt="An image of ideas in T-bar format with evaluation post-its" style="width: 100%; height: auto;">
      <figcaption>Ideas in T-bar format with Rose, Thorn Bud post it notes</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="ideas2.jpg" alt="An image of ideas in T-bar format with evaluation post-its" style="width: 100%; height: auto;">
      <figcaption>Ideas in T-bar format with Rose, Thorn Bud post it notes</figcaption>
    </figure>
  </div>
</div>

Through discussions during our ideation day we found there were still some direction setting questions to help narrow in on a particularly design direction, so we decided to start with some concept designs and take them to users. ​

The concepts covered:​
- Reusing as much of the existing design as possible with multiple learners all one the same screen.​
- Current claim design but with a separate learners page for that claim for them to add completion date and evidence of completion.​
- Different approaches to the presentation of learner screen.​
- Exploring how users could add a completion date for all learners together or individually.

Here are some of the concepts we took to users:
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim1.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Claim concept 1</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim2.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Claim concept 2</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="learners1.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Learners concept 1</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="learners2.png" alt="" style="width: 100%; height: auto;">
      <figcaption>Learners concept 2</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found
We ran content testing with 5 users, some of which hadn't used the service before. A [playback of the research](https://nhsbsauk.sharepoint.com/:p:/r/teams/SS-AdultSocialCare/_layouts/15/Doc.aspx?sourcedoc=%7B0A38E5C2-21F2-4D40-9D3C-20A9FF7CCAF2%7D&file=1.%20Submitters%20-%20ML%20concept%20testing.pptx&action=edit&mobileredirect=true) can be found in our sharepoint. 

In summary the key insights were as follows:
- Delayed reimbursement due to the introduction of multiple learners is a concern for smaller sized organisations. ​We know there will be instances where learners do not complete training. If their withdrawal for training effects the reimbursement of other learners, we may see cases where organisations revert to single claims. 
- Learner management within a claim has potential to become difficult and unruly for large number of learners on a claim​. 5 out of 6 participants stated the tabbed approach to learner management was their preference.
- Inputting individual learner information can be time consuming and "tedious" when there are a large number of learners at an organisation. This feature does not currently resolve any of this problem
- Users often have access to completion certificates in 'bulk'.​ Multiple learners does not currently solve the painpoint of uploading one piece of evidence at a time. Several users suggested adding this capability. This pain point is increased for larger orgs and reduces the value of this feature.
- Most users associated language around 'complete' with whether a learner had completed their training, rather than fulfilling evidence criteria within a claim.
- We continue to hear feedback around a desire to search for claims in a way that meets mental models of claims to specific submitters. 
- Users queried what the need for a training start date was. We also know that multiple learner claims could see learners start on varying dates which adds to the confusion. 

## What we will do next
We will continue to take the current approach to multiple learners forward. We will iterate from the concepts that have been developed keeping the themes of seperate area for learner management on a claim alongside ways to allow users to add completion dates for all learners while ensuring users of the 60/40 funding model fully understand the impact of them opting to use this alongside claims with large amounts of learners on. We will prototype up designs and run usability testing with users to understand specific behaviour and interaction issues. 
