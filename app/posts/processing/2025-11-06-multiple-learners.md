---
title: Supporting multiple learners per claim (Processor)
description: Orgs often send multiple learners on the same training, but currently have to submit all the information again for each learner, even if the course details and evidence of payment are the same. 
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2025-11-06
tags:
  - private-beta
  - processing-version-12
  - multiple-learners
relatedUserNeeds:
  - user-need-11
  - user-need-12
aside:
  title:  Processing prototype
  content: |
    [View processing v12 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v12/) 
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

You can read more about how we started solving this for the organisations [Supporting multiple learners per claim (Submitter)](../../claims/multiple-learners). In this post it we explain the solution we are pusueing for this problem space is to allow multiple learners per claim, to support this we need to iterate how claims are processed to accomodate this new claim model. 

## What our ideas were

We had previously explored ways in which we could iterate the claim processing journey, these designs were explored when we looked at [Reducing the reliance on offline records](../claim-view-iteration) which although we didn't test them at that point we did end up revisting them and testing them as part of [Allows processors to send claims back for editing](../edit-a-claim). The testing for this showed challenges with iterating and claim processing journey and showed us although some ideas may have been possible to explore before the service was released users have now been using for such a long time that it has influenced behaviour quite considerably and we have to more closely account for people's reluctance for change particularly in such a high pressure role. 

As a result of this we decided the most effective way of moving forward with any redesign of the processing journey to accomodate multiple learners per claim would be co-design.

### Co-design
We planned and facilitated two days of co-design. This involved 5 processors and 5 QAs/trainers. We split the two different types of particpants into two groups and we had two session each day of 2.5 hours, one in the morning and one int he afternoon. We ran the same sessions with both groups. 

#### Day 1 - process
The first day's sessions focussed on process. We had the processors in the morning and QAs/trainers int he afternoon. Within each session we split them into two groups. First we asked them to plot out their current process in how they tackle processing a claim. We used cards with differnt parts of the claim on so they could physical stick, draw and annotate the process. The second half of the session involved them iterating this to show how they would deal with a claim with multiple learners per claim on it.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="day-1-1.jpg" alt="A picture of the first exercise for day 1 from 1 of the groups." style="width: 100%; height: auto;">
      <figcaption>A picture of the first exercise for day  from one of the groups.</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="day-1-2.jpg" alt="A picture of the second exercise for day 1 from one of the groups." style="width: 100%; height: auto;">
      <figcaption>A picture of the second exercise for day 1 from one of the groups.</figcaption>
    </figure>
  </div>
</div>

#### Day 2 - design
The second day's sessions focussed on the design that would support the multiple learners process from day 1. Using the same groups we asked them to design journeys that would support their process. We provided them with some of the GOV design systems building blocks to aid them in this. Following the first task we then asked them to evaluate their designs and then iterate based on the feedback. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="day-2-1.jpg" alt="A picture of the first exercise for day 1 from 1 of the groups." style="width: 100%; height: auto;">
      <figcaption>A picture of the first exercise for day 2 from one of the groups.</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="day-2-2.jpg" alt="A screenshot from the prototype of the processing claim screen after the change" style="width: 100%; height: auto;">
      <figcaption>A picture of the second exercise for day 2 from one of the groups.</figcaption>
    </figure>
  </div>
</div>

#### Takeaways
- Work to date suggests that the current design of the service and process followed are sub-optimal and may be be contributing to errors and mistakes in processing as well as the pain points in the user experience. However design can’t change without changing the processes, which would take substantial effort and time and wouldn’t be pragmatic. It is suggested:
  - In the short term we approach multiple learner per claim with the knowledge that we aren’t going to substantially change the processes and there is considerable attachment to the current design.
  - When there is capacity in the future it is worth looking in depth at redesigning the business processes alongside the processing portal.
- Designs we take forward should seek to minimise changes for processors. While this may lead to designs that go against good design practice, this is balanced against the impact of change and the confidence that visibility of a lot of information, although suboptimal, may give processors.
- Designs we take forward should support flexibility in processing process eg linear vs simultaneous. 
- Conducting research with the new processors would help us better understand issues with the current design more than anything else but designs for multiple learners per claim will likely favour  experienced processors. In other words, newer processors would likely see more substantial redesign as more positive than experienced processors.

### Design thinking
Following the co-design sessions the design team took away the ideas and iterated and refined them. They developed the following hypotheses:
1. **We believe that** while processing a claim processors want to see all the claim information **as it will** increase confidence in decision making.
2. **We believe that** showing some form of progress tracker **will** help processors orientate themselves to what they have left to process in a large claim and jump to different parts to check what they've done supporting confience in deicision making.
3. **We believe that** breaking down the steps **will** reduce cognitive load.
4. **We believe that** breaking down the steps of processing each learner **will** reduce the impact of interruptions for larger claims as progress can more easily be saved.
5. **We believe that** maintaining a similar look and feel to the existing design **will** reduce the impact of the change.
6. **We believe that** removing guidance type content **will** reduce cognitive load of a page without loss of understanding due to existing Knowledge Base support.
7. **We believe that** reducing the size of the header **will** reduce cognitive load and allows for better focus on the claim without losing the org context
8. **We believe that** keeping flexibility in the design **will** carry on complementing how different processors process

Through this work we developed a refined processing journey. This joruney was bookended by a unprocess claim claim state and then the processed claim state. With processing initiated through a CTA. 
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="unprocessed-claim.png" alt="A screenshot from v12 of the prototype showing the unprocessed claim state" style="width: 100%; height: auto;">
      <figcaption>Unprocessed claim state.</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="processed-claim.png" alt="A screenshot from v12 of the prototype showing the approved claim state" style="width: 100%; height: auto;">
      <figcaption>An example of a processed claim state</figcaption>
    </figure>
  </div>
</div>

The processing journey reused similar themes to the existing design but we split the evidence of payment questions and evidence of completion question onto seperate pages, with each learner being on a seperate page and a progress trackers being always visible to the left hand side of the screen. 
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="payment-check.png" alt="A screenshot from v12 of the prototype showing the evidence of payment check screen" style="width: 100%; height: auto;">
      <figcaption>Evidence of payment check screen</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="completon.check.png" alt="A screenshot from v12 of the prototype showing evidence of completion check screen for a learner" style="width: 100%; height: auto;">
      <figcaption>Evidence of completion check screen for a learner</figcaption>
    </figure>
  </div>
</div>

For this first iteration we did not tackle the view previous submissions table as this is soemthing we will explore in the next iteration alongside the submitter side. 


## How we tested our ideas and what we found
We tested our designs with 5 participants that consisted of 3 band 3 processors and 2 band 4 processors/QAs. We ran moderated usability testing sessions (plus semi-structured interview questions)​, in each session particpants completed two scenarios which aimed to test the more difficult scenarios users face. 

The headline findings were:
- Overall designs tested well, meeting processor's needs, exceeding expectations and helping to increase processing confidence​
- The new page layout, with the modal, adds value, meets needs as a checklist and for navigation​
- Although there are no new barriers introduced by multiple learner claims, it does compound some existing pain points​

Other aspects of testing that worked well:

##### Cost per learner
Processors had no issues calculating this as 'per learner' and it was useful to have the system calculate the total reimbursement amount

##### 'Save and finish later'
This feature is needed and worked as expected, including that any entered text would save at this point

##### Continuing a partially processed claim (that they have processed themselves)
Acceptable to start on payment evidence step as may want to recheck and can easily identify where they have processed to and jump to that learner

##### Final outcome page - Statuses and presentation of learner information
Meets needs – learners categorised by outcome, needs action or rejected learners at top and alphabetical within these categories

##### Finding a learner on a processed claim / claim overview page
Learner links worked as expected, or just scrolled to find the learner

##### Checking dates
Checking the dates generally worked but:​
- Completion dates – would be treated differently if all the completion dates are the same or different, need to ensure processors understand 'date range' for differing completion dates​
- Start date - some said it is needed and checked for end of year cut-off, if training is paid for before the cut off but started after, it Is currently still eligible

Finally the throughts that came out of research before the next steps:
1. As a processor I found value in the modal. 
2. As a processor I would like further learner outcome indicators prior to sending the claim back.
3. As a processor I'm concerned about how much space action notes might take up on the confirmation screen.
4. As a processor I want reassurance that when partially processing a multi-learner claim, I am fairly credited for work needed to ensure the entire claim is accurately processed and my colleague is credited for the work they previously conducted. 
5. As a processor I may need time to adapt to multiple completion dates when processing learner details and cross referencing with attached evidence.
6. As a processor in the world of multiple learners, I am aware there may be more edits made to a claim beyond the reasons I sent it back for action. The process of reviewing an entire resubmitted claim will take me longer than it does currently. 
7. As a processor the reduced size of the organisation name within the claim, feels like an unnecessary change. 
8. As a processor using the 'change organisation' link doesn't speak to my intentions when looking to leave the claim I am working in. 

## What we will do next
We have agreed to take the designs forward and iterated all the points raised above. The exception was point 3 where we felt that if we can design and test a solution to point 2 then point 3 is less importnant. We will test this hypothesis in the next round of testing with users.

Overall this iteration was largely very successful and this was in part due to the co-design session that allowed us to converge on a better solution for the first iteration.