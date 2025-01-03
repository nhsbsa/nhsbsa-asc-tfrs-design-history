---
title: Asking submitters to identify the training cost per learner
description: Getting accurate data to calculate reimbursement amounts.
author:
  name: Nick Johnstone-Waddell
  url: 'mailto:hi.nick.johnstone.waddell@nhsbsa.nhs.uk'
date: 2024-03-14
tags:
  - claims-version-6
  - content
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

## Why we did this work

For care skills claims there is a maximum reimbursement amount for every training course or qualification. This is set by DHSC as part of the [scheme guidance](https://www.gov.uk/government/publications/adult-social-care-learning-and-development-support-scheme/eligible-training-courses-and-qualifications).

The amount that an organisation will get back for a claim is the lower of this maximum reimbursement amount and what they actually paid. This ensures that an organisation can never get back more than they paid, which could encourage fraud.

Our service therefore needs to know what the organisation paid for the training they’re claiming for.

## What our ideas were

During our alpha prototyping we thought it made sense for submitters to enter the cost information when they created the claim.

Here’s how we did this in v6 of the claims prototype:

![How submitters were asked to calculate the cost as part of a claim"](add-cost.png "How submitters were asked to calculate the cost as part of a claim")

We tried to make it clear that they needed to enter the cost for an individual learner. So if they’d paid for several learners at the same time (which we knew was likely), they’d need to do a calculation to work out the cost for each person.

## How we tested our ideas and what we found

We did extensive usability testing of this over several rounds of user research.

We found that it did not test well, with users telling us this could be difficult to do in anything but the simplest of cases. For example, they might have paid for a certain number of training places and got one free. Following the GDS principle of ‘do the hard work to make it simple’ we therefore felt we should move the calculation and data entry from the submitter to the processor.

## What we will do next

Following the GDS principle of ‘do the hard work to make it simple’ we plan in beta to [move the calculation and data entry from the submitter to the processor](/processing/cost-per-learner-processor/).