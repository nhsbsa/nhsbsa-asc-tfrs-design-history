---
title: Find a organisation
description: To support the problem statement to help an org solve a problem quickly and help BSA solve an org related problem quickly we need the ability for a BSA user to easily find an onboarded organisation
author:
  name: Hannah Williams
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-25
tags:
  - processing-version-6
  - process-a-claim
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

## Why we did this work

At the moment, both organisations and BSA staff are struggling to resolve organisation-related problems quickly, which is affecting processing times. The limitation of accessibility to organisational details and a centralized access for BSA staff, including processors and CCS agents, makes it unable to resolve organisation-related issues promptly. Currently BSA staff are unable to carry out IDCV when an organisation calls and they cannot currently verify who they are speaking to. These are both issues I aimed to answer in this first ticket. 

I split this part of the work up into two sections as both quite juicy so needed time to deep dive into each seperately, but also they still need to be thought of together and not in solution as each supports the other. This post supports part one of the journey of providing the ability for a BSA user to find an onboarded organisation.

We have previously held a ideation day in person back in September exploring the concept of a organisation view with the UCD and wider delivery team and what might that look like, and include. Some themes that came out the day that we wanted to move forward with shaping the work:
- Accessing the org view
- Supporting comms between colleagues
- UCD and legal best practice
- Understanding and supporting user journeys
- Highlight what’s important
- The right information at the right time
- Supporting CCS and processor best practices and minimising workarounds
- Audit trail viewable at the appropriate level of detail

## What our ideas were

Went through the roadmap to ready document that was linked in my ticket and these are the use cases and users of sort of three directions of scenarios of who wants to find a claim:

CCS agent in org to BSA about org:

BSA Processor to org to resolve a BSA query:

Processor outside of speaking to a org:


To be able to feed into how we might make the find a claim feature to look we needed to know the information that would fuel it, in particular what information might these different use cases be coming to the search feature with to find a org? For part two of this ticket the user needs to be able to perform a ID/CV check with the org to verify who speaking to with some different information, so that also helped to understand the sort of information they may have to hand already for a search. 
ID/CD criteria:
-  Claim reference number
- Organisation name
- Organisation address
- Organisation postcode
- Submitter's full name
- Submitter's email address
- Learner's full name 
- Training course name

Also to consider:
- Workplace ID
- User's name
- Location address/postcode
- Tag of fraud 
- Submitter/SRO name
- Learner
- Training

Next we thought about how best to search for a organisation considering:
- the use cases people come to find a claim to solve and what might have in common
- what information they might have

Ideas that came out:
- Direct search 
- Indirect search/advanced search, as each may have different start info, which may produce multipl results
- Filtering a list of orgs
- Quick searches(e.g. orgs that recently searched a claim)
- Multiple routes in through search and through a claim
- search claim ID then link to org
- ask a natural language question, eg "which organisation submitted a claim for mental health training using the xxx training provider in the last week?"
- Be able to click the info visible e.g., if looking at a claim be able to click on the org or submitter or learner (not really 'searching' though, more navigating). But means that it matters less what is searched as they can then navigate around within?
- Search as you type?
- see a list of orgs with currently logged-in users to easily select the one whose user is currently on the phone
- Filter/group by tags
- Remember recent searches to easily find orgs again
- Being able to take submitter details (eg. name and email) and then find org(s)/claims associated with them
- Being able to search orgs that are not yet fully onboarded (filter?)
- See the "Find an Organisation option" which is clickable and displays all Org details
- All Organisation details should be visible on the next page after Find an Org has been selected - IDCV Done from this view
- Sort and Filter by specific criterias based on the reason for the search 
- Info-Name and email of org users, Claims ref, workplace ID, Org name, Address-Postcode
- Can navigate to the claims history from the Organisation details page to see details and statuses of the claims and rejection reasons if applicable
- break the search down into asking what they want to search with, then click continue and enter that info
- find a org through three: claim specific (id), user specific (email address), organisation specific (workplace ID, postcode), then Verify the org (name, address and postcode) and the user (first name, last name and email) - based on search results - ID/CV

One consideration was how to identify correct organisation before then doing CV check (as could be checking against the wrong org). For example, multiple orgs have same learner - only applicable when indirect search and multiple results. 

Dot voting led most important to be decided as claim reference, email, workplace ID in a direct search should be a good starting point to go off and test.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="idea-1.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 1 of breaking down search into asking what to search by</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="idea-2.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 2 of adding a search option relevant to each user, claim and org</figcaption>
  </figure>
  </div>
</div>

![A screenshot from the ideation workshop of dot voting on find a claim information for what is most useful ](dot-voting-info.png "dot voting on find a claim information for what is most useful")

>**We believe that** searching by email address, claim reference and workplace ID
>**Will be a useful feature for** bsa staff 
>**As it will** always lead to one result, organisation name could lead to multiple results. 

## How we tested our ideas and what we found

## What we will do next
