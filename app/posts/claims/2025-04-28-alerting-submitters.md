---
title: Alerting submitters when a course payment date is ineligible
description: With the new financial year comes course list changes, this means depending on when organisations paid for training it may not be eligible for funding. 
author:
  name: Martine Gallie (Content designer)
  url: 'mailto:hi.martine.gallie@nhsbsa.nhs.uk'
date: 2025-04-28
tags:
  - private-beta
  - claims-version-16
relatedUserNeeds:
  - user-need-5
aside:
  title:  Claims prototypes
  content: |
    [View claims v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v15/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

The eligible training courses and qualifications list contains multiple entries for some modules and qualifications reflecting changes in reimbursement rate. Each entry has a ‘Valid from’ and ‘Valid to’ date with different reimbursement amounts associated with each. 

The policy rule is that the claim is eligible if the payment date falls within the range of the ‘ValidFrom’ and ‘ValidTo’ for an entry on the course list. This also determines the reimbursement rate. 

During testing for release 1.7, a problem was highlighted with the error handling on failed validation of the payment date of a course. The generic ‘problem with service’ page was showing instead of an error response advising that the claim isn’t valid because of an ineligible payment date.

Content needed to be created to make the user aware of the specific error that was happening, so they could understand the issue they are facing.

## What our ideas were
Initially we considered creating a new kick-out page, similar to the generic service page that was already appearing, but more specific to this particular error.

We identified a couple of disadvantages to this:
- it would create more work for our devs than using a validation pattern
- it would take submitters away from the screen they were working on

For these reasons we decided it was preferable to use the regular GOV.UK validation pattern, with this error message:

Payment date must fall within eligible financial year for this course

The content was also updated to let submitters know that any course selected needs to fall within the eligible financial year.


### Submitters
| Existing content  | New content  |
| ----------- | ----------- |
| You’ll need to make sure the date you enter matches the date on the payment evidence.  | You’ll need to make sure the date you enter: <br>* matches the date on the payment evidence <br>* falls within the eligible financial year for this course (you can check this in the list of eligible courses and qualifications) |

We used bullet points to make the content as clear and readable as possible. We also included a link so that submitters are able to easily check the eligible year for the course selected.

Because we are using error messaging rather than a separate kick out page the link remains available to submitters after the error message appears. 

![An example screenshot of v15 of the prototype showing the new content on the payment date input screen](payment-date-error.png "The new content on the payment date input screen")

## How we tested our ideas and what we found

Because we are focussing on larger features, such as [edit a claim](../edit-a-claim), we did not have capacity to test this content.

## What we will do next

We will monitor this content on the live service in order to resolve any issues that arise.

