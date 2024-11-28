---
title: Explaining reimbursement calculations
description: Explaining reimbursement amounts to processors.
author:
  name: Nick Johnstone-Waddell
  url: 'mailto:hi.nick.johnstone.waddell@nhsbsa.nhs.uk'
date: 2024-08-08
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

It’s important for processing staff to understand how the reimbursement amount for a claim is calculated. This gives them the confidence they’ve processed it correctly and allows them to respond to any queries escalated from the contact centre.

Initially in private beta, contact centre staff will also be using the processing service to respond to calls directly, so it’s also important for them to understand the calculations.

While the reimbursement calculations are not in themselves massively complicated, explaining them clearly and succinctly is a challenge. Even within the project team, we often struggled to explain the logic, particularly for split 60/40 claims.

## What our ideas were

In terms of the different types of claims, the first we looked at in the processing prototype was the more straightforward ‘100’ claim, where organisations get back the total reimbursement amount in one payment after the training is completed.

On the claim processing outcome screen, we used the GDS details component to allow a processor to get more information on the reimbursement calculation.

Our first design used static content:

![How we explained the reimbursement calculation in v2"](reimbursement-calculation-v2.png "How we explained the reimbursement calculation in v2")

## How we tested our ideas and what we found

Usability testing with processors indicated that the concept of providing an explanation was useful but the content itself was wordy and hard to follow without the use of actual figures from the claim.

## What we will do next

We iterated the component to show the calculation more clearly and with the actual costs from the claim being approved:

![Making the explanation more useful in v3"](reimbursement-calculation-v3.png "Making the explanation more useful in v3")

Feedback from a show and tell where we demonstrated this new content was extremely favourable, with someone saying:

> From a CCS [contact centre services] perspective, the way you are describing the claim breakdown is excellent and will really help agents on the phone.