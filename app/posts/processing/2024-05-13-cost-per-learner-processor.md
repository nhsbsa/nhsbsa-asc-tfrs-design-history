---
title: Moving the cost per learner calculation to processors
description: Why we wanted processors rather than submitters to identify the training cost per learner.
author:
  name: Nick Johnstone-Waddell (Content designer)
  url: 'mailto:hi.nick.johnstone.waddell@nhsbsa.nhs.uk'
date: 2024-05-13
tags:
  - private-beta
  - claims-version-6
  - processing-version-3
  - processing-process-a-claim
  - 100-type-claims
  - 60-40-type-claims
aside:
  title:  Processing Prototypes
  content: |
    [View processing v3 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v3/) 
    Password: bsaasc123

    Claim reference ID's
    Submitted: Z1Z-F1J6-3XF7-A
    Approved: Z8S-F1J6-4GH7-A
    Rejected: K93-SK68-3S2K-A
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

During alpha, we had explored [asking submitters to identify the training cost per learner](/claims/cost-per-learner-submitter/) so the service could accurately calculate the amount of reimbursement due.

When this did not perform well in usability testing, we decided to move the calculation to the processors instead.

## What our ideas were

This was our early design in v2 of the processing prototype:

![How processors were initially asked to calculate the cost per learner in v2"](cost-per-learner-v2.png "How processors were initially asked to calculate the cost per learner in v2")

Like for the submitters, we explain that the cost is needed for a single learner.

## How we tested our ideas and what we found

Unfortunately our usability testing with processors showed that they found this requirement to be as difficult as submitters did.

We needed processors to review the payment evidence, which could include multiple documents, to work out the amount paid for a single learner. But a receipt and invoice could be for multiple learners. And processors were sometimes unsure if a cost related to multiple learners or multiple courses for the same learner.

## What we will do next

We iterated design to:

* give it a clearer heading - we used ‘cost per learner’ rather than ‘how much was paid’ to make obvious it related to a single person
* include the maximum reimbursement amount - by specifying this figure, we expected processors to find it easier to identify the correct figure to enter (for example, if the maximum reimbursement amount was £50 but the receipt was for £500, it strongly suggested that multiple learners were paid for at the same time)
* add content to make it clear why this figure was needed - we felt this would encourage processors to spend the time to work out the correct cost

Here’s the improved design in v3 of the processing prototype:

![Improved content for asking processors to calculate the cost per learner in v3"](cost-per-learner-v2.png "Improved content for asking processors to calculate the cost per learner in v3")

Early suggestions are that while still a potential pain point, this new design makes it easier for processors. We will continue to test this further.