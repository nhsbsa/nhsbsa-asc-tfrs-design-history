---
title: Dealing with duplicate learners
description: We can only have unique learner records in our service so we need to deal with users adding a duplicate learner to prevent this.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-15
modified: 2024-05-20
tags:
  - claims-version-8
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---



## Why we did this work
Learners in our service are unique entities in that they have a unique identifier in their national insurance number. Whenever a learner is added to the service for use in a claim that learner is saved and can be used in future claims. As a result of this if a user were to add a new learner and the National insurance number matches a learner that is already in the system then we need some mechanism to deal with this to prevent duplicate learners being added to the service.

## What our ideas were
Through some exploration of the problem space we identified three primary scenarios that might lead to above situation:
1. A user mistakenly tries to add a learner again as they didn't search correctly and therefore doesn't realise the learner had already been added.
2. A user mistakenly tries to add a learner again because they searched correctly but the learners details have changed (eg name change)
3. A user mistypes a NI number when adding a new learner and this inadvertently matches an existing learner. (Rare)

For each of those scenarios we identified an appropriate corrective action:
1. Add the existing learner to the claim instead of creating a new learner record.
2. Update the existing learners record and add that to the claim.
3. Go back to correct the mistake in the add new learner form.

To allow the user to self identify their scenario we had the following hypothesis:

>**We believe that** allowing users to compare information between the intended new learner and the matched learner record
>**Will be a useful feature for** submitters
>**As it will** help them identify the correct follow on action for their scenario.

We first explored existing patterns across the GOV.UK space and came across the (compare information pattern)[https://design.homeoffice.gov.uk/patterns/compare-information] in the home office design system. Given our concerns about being able to test this with users before development we felt using a existing pattern would minimise risk. We incorporated this pattern into our service and allowed for the relative corrective actions. Unfortunately due to tight deadlines we did not have the time to explore learner record updates and this was something that was added to the backlog. 

![A screenshot taken from v8 of the prototype showing the compare information pattern used to compare two sets of learners information](learner-duplication.png "The compare information pattern used to compare two sets of learners information")

## How we tested our ideas and what we found
Unfortunately due to aggressive deadlines we were unable to test this pattern properly before development or private beta. 


## What we will do next
While we feel the use of this pattern untested in our service is low risk due to it being taken from the home office design system we still have concerns around the lack of corrective action that deals with updating learner records. We have agreed that this is something we will try and monitor during private beta and conduct further research as necessary when we look to address the issue of updating learner records. 
