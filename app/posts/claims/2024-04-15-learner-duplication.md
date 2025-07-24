---
title: Dealing with duplicate learners
description: We can only have unique learner records in our service so we need to deal with users adding a duplicate learner to prevent this.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-15
modified: 2024-05-20
tags:
  - private-beta
  - claims-version-8
  - claims-start-a-claim
  - claims-learners
  - 100-type-claims
  - 60-40-type-claims
relatedUserNeeds:
  - user-need-9
aside:
  title:  Claims prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v8/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
Learners in our service are unique entities identified by their National Insurance (NI) number. Whenever a learner is added to the service for use in a claim, that learner is saved and can be used in future claims. As a result, if a user adds a new learner with an NI number that matches a learner already in the system, we need a mechanism to address this and prevent duplicate learners from being added.

## What our ideas were
Through some exploration of the problem space, we identified three primary scenarios that might lead to the situation described above:

1. A user mistakenly tries to add a learner again because they didn't search correctly and therefore doesn't realize the learner has already been added.
2. A user mistakenly tries to add a learner again because they searched correctly, but the learner’s details have changed (e.g., name change).
3. A user mistypes an NI number when adding a new learner, which inadvertently matches an existing learner (rare).

For each of these scenarios, we identified an appropriate corrective action:
1. Add the existing learner to the claim instead of creating a new learner record.
2. Update the existing learner’s record and add that to the claim.
3. Correct the mistake in the “add new learner” form.

To allow users to self-identify their scenario, we had the following hypothesis:

>**We believe that** allowing users to compare information between the intended new learner and the matched learner record  
>**Will be a useful feature for** submitters  
>**As it will** help them identify the correct follow-up action for their scenario.

We first explored existing patterns across the GOV.UK space and came across the [Compare Information Pattern](https://design.homeoffice.gov.uk/patterns/compare-information) in the Home Office design system. Given our concerns about being able to test this with users before development, we felt using an existing pattern would minimize risk. We incorporated this pattern into our service, allowing for the relevant corrective actions. Unfortunately, due to tight deadlines, we did not have time to explore learner record updates, which has been added to the backlog.

![A screenshot taken from v8 of the prototype showing the compare information pattern used to compare two sets of learners’ information](learner-duplication.png "The compare information pattern used to compare two sets of learners' information")

## How we tested our ideas and what we found
Unfortunately, due to aggressive deadlines, we were unable to properly test this pattern before development or private beta.

## What we will do next
While we feel that the use of this pattern, untested in our service, is low risk due to its provenance in the Home Office design system, we still have concerns about the lack of corrective action for updating learner records. We have agreed to monitor this during private beta and conduct further research as necessary when addressing the issue of updating learner records.

