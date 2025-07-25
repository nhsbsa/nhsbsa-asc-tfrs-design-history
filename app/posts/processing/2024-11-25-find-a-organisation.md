---
title: Find a organisation
description: To support the problem statement to help an org solve a problem quickly and help BSA solve an org related problem quickly we need the ability for a BSA user to easily find an onboarded organisation
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-25
tags:
  - private-beta
  - processing-version-6
  - processing-find-an-org
relatedUserNeeds:
  - user-need-13
aside:
  title:  Processing prototypes
  content: |
    [View processing v6 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v6/) 
    Password: bsaasc123

          Claim reference's to test:
          
          100
          Submitted: Z1Z-F1J6-3XF7-A
          Approved: Z8S-F1J6-4GH7-A
          Rejected: K93-SK68-3S2K-A

          60
          Submitted: WR5-R2P4-DSL4-B
          Approved: R4Y-NL7G-D967-B
          Rejected: NLE-BMDT-68ZI-B

          40
          Submitted: R7J-NC3G-D967-C
          Approved: R4Y-NL7G-D967-C
          Rejected: Y6M-5DYB-TRCL-A
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

At the moment, the limitation of accessibility to organisational details and a centralized access for BSA staff, including processors and CCS agents, makes organisation-related issues unable to be resolved promptly. To support the problem statement to help an org solve a problem quickly and help BSA solve an org related problem quickly we need the ability for a BSA user to easily find an onboarded organisation. 

From there BSA staff would need to be able to carry out IDCV to verify who in a org they are speaking to. That was addressed in a separate piece of work but was also considered in this one as each supports the other in terms of like what information the organisation will have to hand to complete the IDCV might also be then what is considered easiest to use to find the organisation in the beginning. 

#### Themes to shape the work 
We have previously held a ideation day in person back in September exploring the concept of a organisation view with the UCD and wider delivery team and what might that look like, and include. Some themes that came out the day that we wanted to move forward with shaping the work:
* Accessing the org view
* Supporting comms between colleagues
* UCD and legal best practice
* Understanding and supporting user journeys
* Highlight what’s important
* The right information at the right time
* Supporting CCS and processor best practices and minimising workarounds
* Audit trail viewable at the appropriate level of detail

#### Use cases of the org view 
To be able to feed into how we might make the find a claim feature to look we needed to know the information that would fuel it, in particular what information might different use cases be coming to the search feature with to find a org. For part two of this ticket the user needs to be able to perform a ID/CV check with the org to verify who speaking to with some different information, so that also helped to understand the sort of information they may have to hand already for a search.

CCS agent in org to BSA about org:
* Questioning rejection reason
* Expected Outcome date or payment date following outcome
* Authentication issue
* Onboarding/EOI Query
* Claim query, course/qualification query / Eligibility/ Scheme query
* Detail change
* A dispute

BSA Processor to org to resolve a BSA query:
* Claim query
* Onboarding issue
* Authentication issue
* Invalid bank details
Processor outside of speaking to a org
* Verify bank details

ID/CD criteria:
* Claim reference number
* Workplace ID
* Organisation name
* Organisation address
* Organisation postcode
* Submitter/SRO’s full name
* Submitter/SRO’s email address
* Learner’s full name
* Training course name

## What our ideas were

Holding a co-design session, I made sure to set the context of we are only trying to find a organisation, to reduce risk of scope creep. But also the importance of the tickets can’t only be thought about in isolation, need to consider designs made for flexibility and scalability.

Following the double diamond design theory, we tried to get as many ideas as possible, see what the potential of the solutions could be, fed in by various roles of design, tech, BA’s, research, so we make sure we are balancing the different voices in the design. We then used methods of dot voting on what came out of the ideation in a way to get majority view on narrowing down ideas to take forward.

One idea was a advanced search. A consideration here though was how to identify the correct organisation before then doing the CV check (as could be checking against the wrong org). For example, multiple orgs have same learner, so would produce multiple results. Decided that a direct search that would land on one result would be best as reduces work so thinking about the info that could lead to one result.

>**We believe that** searching by email address, claim reference and workplace ID
>**Will be a useful feature for** bsa staff 
>**As it will** always any of these would lead to one result whereas organisation name could lead to multiple results. Also each is a different way in offering a variety of routes either via user, claim or org.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="signposting.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 1 of breaking down search into asking what to search by</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="find-org.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 2 of adding a search option relevant to each user, claim and org</figcaption>
  </figure>
  </div>
</div>

>**We believe that** having one input box with examples of valid inputs
>**Will be a useful feature for** BSA staff
>**As it will** be clear what is a accepted formats, and because it will still only lead to one direct match this is acceptable with tech.


We evolved to remove multiple things to search by and only test workplace id as that was determined by policy to be the block as to whether they can continue in the journey or not. If they don't have at this point then no point going further. 

![Screenshot of find a organisation feature searching by workplace ID ](find-org-workplace-id.png "Screenshot of find a organisation feature searching by workplace ID")

>**We believe that** adding a new option on the signposting page to find a organisation
>**Will be a useful feature for** BSA staff
>**As it will** suit the different intentions they are coming with of either process a claim, find a org, register a org, which are all different things.

![Screenshot of the signposting page with updated language on options ](final-signposting.png "Screenshot of the signposting page with updated language on options")

#### Outcomes to consider for further design development:

* If Email search is considered again in the future, it may give multiple results in the future as multiple organisations could have the same SRO. Something to bear in mind that it may potentially change from being a direct search.

## How we tested our ideas and what we found
- We tested the org view with CCS agents and processors week commencing 5th January 2025.
- The main themes from the playback:
  - Confusing options on signposting page, and for CCS agents because they would only be shown the Find a organisation option, this page could be removed
  - Mistakes typing in a verbally conveyed workplace id, in some cases staff think the user won't have the workplace id
  - Processors were majority of the time going in through the process a claim route as they just saw abililty to search by claim ID
  - They were confused as to the view they landed in through different options. Evaluate whether separate routes in for processors are necessary and if one route in is acceptable

## What we will do next
- Holding a post playback actions session with the wider delivery team to decide what actions to progress with.
- Next updates will be done in version 7 of the prototype.


