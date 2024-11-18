---
title: Post-processing emails to users
description: Informing submitters when a claim has been processed.
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

It was very apparent from the earliest rounds of UR in alpha that users did not want the reimbursement process to be a ‘black box’. They wanted to know what was happening to their claims, for instance, so they could predict when the money would reach their bank account and therefore manage their cash flow effectively.

They also told us that they didn’t want to have to log into the service every day just to see if a claim had been processed. This was an inefficient use of their time and they’d much prefer to be told proactively when a claim moved to a new status.

## What our ideas were

During alpha and early beta we considered various options including:

* SMS notifications
* an organisational dashboard to show claims that have changed state or require attention
* emails

Due to constraints around the MVP, we agreed the email option would be the easiest to implement.

With input from NHSBSA operations, we created a set of email templates, which we then tested with end users. The 6 templates covered 100, 60 and 40 claims - each being either approved or rejected.

Example - 100 claim approved

> **Subject: Claim reference: [ref number]**
>
> Dear [first name] [last name], 
>
> Thank you for submitting your care skills claim to the Claim for adult social care learning and development service.  
>
> The claim has been approved.  
>
> To view the claim and reimbursement information, log in to the service. You will then need to find the claim from the 'manage claims' screen.
>
> Payment will take place as soon as possible. Allow at least 10 working days before getting in touch with payment queries. Email us at [email](#) or phone us on 0300 xxx xxxx. You cannot reply to this email. 
>
> If you can, please fill in a [short survey](#) to tell us about your experience with this claim. This will help us to improve the service. 
>
> NHS Business Services Authority

## How we tested our ideas and what we found

We implemented the emails in 3 phases:

1. Manually sent by processors.
2. Automated with generic link to service start page.
3. Automated with deep link to specific claim.

In the very first release in private beta, emails had to be sent manually by processors. This required copying and pasting from the knowledge base template and could take several minutes per email.

In observational testing with processors, it was clear this was an awkward process. Processors told us it was the biggest pain point for them. They were delighted when we released the automated emails. This really helped them to see that we were listening to and acting on their feedback.

## What we will do next

We are planning further visits to observe NHSBSA processors and will be able to assess the reduction in time and cognitive load through the email automation.

We will also talk to end users in UR sessions to understand how useful the emails are to them, how we could improve them and what we could learn in terms of future work around other types of notifications.

We’re also keen to explore improvements to the subject line of the emails. At the moment a subject of ‘Claim reference’ feels rather vague and it might only be obvious what the claim actually relates to once someone opens the email. The challenge will be to make the subject more meaningful while not making it too long.