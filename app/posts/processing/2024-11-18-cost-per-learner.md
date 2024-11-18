---
title: Identifying the training cost per learner
description: Helping processors work out reimbursement amounts.
author:
  name: Nick Johnstone-Waddell
  url: 'mailto:hi.nick.johnstone.waddell@nhsbsa.nhs.uk'
date: 2024-11-18
tags:
  - processing-version-3
  - process-a-claim
  - content
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

## Why we did this work

For care skills claims there is a maximum reimbursement amount for every training course or qualification. This is set by DHSC as part of the scheme guidance.

The amount that an organisation will get back for a claim is the lower of this maximum reimbursement amount and what they actually paid. This ensures that an organisation can never get back more than they actually paid, which could encourage fraud.

Our service therefore needs to know what the organisation paid for the training they’re claiming for. Over the course of alpha and early beta phases we explored different ways to do this, in particular while reducing complexity for end users.

## What our ideas were

Initially we thought it made sense for submitters to enter the cost information when they created the claim.

Here’s how we did this in v6 of the claims prototype:

![How submitters were asked to calculate the cost as part of a claim"](add-cost.png "How submitters were asked to calculate the cost as part of a claim")

We tried to make it clear that they needed to enter the cost for an individual learner. So if they’d paid for several learners at the same time (which we knew was likely), they’d need to do a calculation to work out the cost for each person.

This did not test well, though, with users telling us this could be difficult to do in anything but the simplest of cases. For example, they might have paid for a certain number of training places and got one free. Following the GDS principle of ‘do the hard work to make it simple’ we therefore felt we should move the calculation and data entry from the submitter to the processor.

This was our early design in v2 of the processing prototype:

![How processors were initially asked to calculate the cost per learner in v2"](cost-per-learner-v2.png "How processors were initially asked to calculate the cost per learner in v2")

Like for the submitters, we explain that the cost is needed for a single learner.

## How we tested our ideas and what we found

Unfortunately our testing with processors showed that they found this requirement to be as difficult as submitters did.

We needed processors to review the payment evidence, which could include multiple documents, to work out the amount paid for a single learner. But a receipt and invoice could be for multiple learners. And processors were sometimes unsure if a cost related to multiple learners or multiple courses for the same learner.

So we iterated design to:

* give it a clearer heading - we used ‘cost per learner’ rather than ‘how much was paid’ to make obvious it related to a single person
* include the maximum reimbursement amount - by specifying this figure, we expected processors to find it easier to identify the correct figure to enter (for example, if the maximum reimbursement amount was £50 but the receipt was for £500, it strongly suggested that multiple learners were paid for at the same time)
* add content to make it clear why this figure was needed - we felt this would encourage processors to spend the time to work out the correct cost

Here’s the improved design in v3 of the processing prototype:

![Improved content for asking processors to calculate the cost per learner in v3"](cost-per-learner-v2.png "Improved content for asking processors to calculate the cost per learner in v3")

Early suggestions are that while still a potential pain point, this new design makes it easier for processors.

## What we will do next

We will do further research with processors during private beta to identify if this new content is working and if not, how we can improve it further.