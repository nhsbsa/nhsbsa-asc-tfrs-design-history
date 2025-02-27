---
title: Removing references to care skills funding
description: After revalidation funding was removed from the scheme, we no longer needed to refer to care skills funding.
author:
  name: Nick Johnstone-Waddell (Content designer)
  url: 'mailto:hi.nick.johnstone.waddell@nhsbsa.nhs.uk'
date: 2024-09-18
modified: 2024-09-18
tags:
  - private-beta
  - claims-version-13
  - claims-manage-claims
  - claims-support-and-guidance
aside:
  title:  Claims prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

The original funding scheme - the Training Fund Reimbursement Scheme (TFRS) - consisted of 2 types of funding:

1. **Targeted upskilling** - this was primarily for staff who are not registered with a professional body and was expected to make up around 95% of all funding.
2. **Continuing Professional Development** - the remaining funding was to support the professional revalidation of staff registered with a professional body.

We did extensive research and design thinking to iterate the names of these funding pots, arriving at ‘care skills funding’ and ‘revalidation funding’. These were non-ambiguous and well understood by users.

When the new government decided to replace TFRS with a new scheme prior to launch - the Learning and Development Support Service (LDSS) - revalidation funding was completely dropped.

While in many ways this was a good thing, as it removed one entire user journey from the service and therefore made everything simpler, we had very limited time to fully consider the implications from a design perspective.

Therefore although we stripped out all the revalidation functionality, the service that launched into private beta still had many references to ‘care skills funding’. This included on the:

* start screen
* claim signposting screen
* manage claims screen, including the ‘start a new care skills’ button and related content guidance links 
* claim status screens

## What our ideas were

When we tested the MVP just prior to launch with users who were unaware of the previous revalidation option, most references to ‘care skills funding’ seemed to pass them by without comment. But one screen elicited comments from all users - the claim signposting screen:

![Claim signposting screen from v12 showing the single type of funding available"](claim-signposting-v12.png "Claim signposting screen from v12 showing the single type of funding available")

This screen had been important in early prototypes to allow users to choose between care skills funding and revalidation funding. But with only a single option now available, all users questioned why it was needed and felt it was unnecessary.

The only benefit of this screen was for senior responsible officers (SROs) as it provided them the ability to manage their team members. This is how they could delegate their authority to additional ‘submitters’ who would be able to submit claims on their behalf.

Our hypothesis was that we’d streamline the process and provide most benefit to users by removing this screen and moving the ‘manage team’ option to the header bar for SROs. Our only slight concern was whether SROs would find it harder to spot this admin option in its new location.

## How we tested our ideas and what we found

We have strong evidence that removing the claim signposting screen won't have any negative impact in terms of the user journey for making a claim.

But before implementing this change in the live service, we plan to do usability testing with SROs to check whether the new positioning of the admin option is problematic.

## What we will do next

If moving the admin option to the header does not work well we'll consider keeping a version of the current claim signposting screen just for SROs - so submitters would miss out this step.