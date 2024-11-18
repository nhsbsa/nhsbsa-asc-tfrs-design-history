---
title: Improving rejection notes
description: Helping processors provide useful information to submitters when a claim is rejected.
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

Every claim that is rejected by an NHSBSA processor will get a rejection note. This is a vital part of the audit trail. It’s also visible to the submitter and should enable them to understand what they did wrong and - importantly - what they should do next time to hopefully ensure the claim can be approved.

Prior to the service going live it hadn’t been possible to do much work on rejection notes. This was partly due to lack of time but mainly because we had only a vague idea of what sort of reasons claims might be rejected. Talking to NHSBSA, it felt important to wait until the service was live and we had real data on rejected claims before we did much work on this.

## What our ideas were

Initially, the NHSBSA operations team helpfully came up with an initial set of rejection reasons for processors to use. These covered:

* course not completed
* course not eligible
* invoice only
* images/evidence unclear (this relates to an unsatisfactory photo or scan of a physical document)
* course not commenced

Talking to processors, we identified various issues with these templates. They included:

* the length - they were quite long as each repeated a lot of standard guidance on evidence requirements and we worried that they could be offputting to submitters
* the 1,000 character limit on rejection reasons was at danger of being breached if more than one reason needed to be included
* the templates contained formatting such as bullet points but this was lost as the rejection note field could only accept plain text
* more granularity of reasons was required, as for instance a reason of ‘invoice only’ could cover a number of issues
* some misunderstandings on behalf of the processors, as it should be impossible for a submitter to claim for an ineligible course and therefore the ‘course not eligible’ reason would not be needed

When we explored how rejection notes were used on other systems run by the NHSBSA, the advice from other designers was to keep notes short and to the point and link to additional guidance rather than duplicating it.

## How we tested our ideas and what we found

The user researcher and content designer went to the NHSBSA office in Fleetwood for a day to investigate. Activities included:

* an initial session with processors to explore what mistakes submitters make and what evidence should ideally look like to approve a claim
* a follow-up session with QAs to understand why rejection reasons are important and what makes a good or bad rejection note
* observations of processors as they reviewed claims to understand pain points

Based on this workshop we developed a new set of rejection reasons.

### Evidence of payment​

1. Missing information on evidence of payment
2. Information on evidence of payment does not match claim​
3. Organisation address on invoice does not match address on service​
4. No invoice or no receipt​
5. Issue with VAT number​
6. Payment schedule not completed​ (this relates to an organisation not having completed payment for a course before submitting a claim but DHSC may relax this for 60/40 claims so the rejection reason may need further work)
7. Claim submitted over 3 months after completion​ (this check is not currently required as DHSC is not currently enforcing this)
8. Claim submitted before course started​ (this check is being built into the service)​

### Evidence of completion​

9. Missing information on completion certificate​
10. Awarding date before completion date​
11. Information in evidence of completion does not match claim​
12. Incorrect learning provider​

### Both​

13. Photo or scan of evidence does not meet requirements

For each reason we’d provide the template and an example to help processors implement it consistently.

For example:

### Missing information on evidence of payment

#### Template:

> Some of the required information is missing from your evidence of payment.
> 
> The invoice or receipt do not currently show:
> - [first piece of missing information]
> - [second piece of missing information]
> - [etc]
>
> Our [help with evidence requirements](#) provides more information, including how to resubmit the claim.

#### Example:

> Some of the required information is missing from your evidence of payment.
>
> The invoice or receipt do not currently show the name of the training provider.
>
> Our [help with evidence requirements](#) provides more information, including how to resubmit the claim.

## What we will do next

We’re setting up a workshop with NHSBSA operations to explore the new templates and check they’re at an appropriate level of granularity and detail.

We’re also looking at potential changes to how rejection notes are displayed to submitters within the service. This could include using the inset text component to make notes more prominent (though GDS says that some users don’t notice inset text on complex pages and therefore we’d want to test this carefully) and making the link to the evidence guidance more obvious.