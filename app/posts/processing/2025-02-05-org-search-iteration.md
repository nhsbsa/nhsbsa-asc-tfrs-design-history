---
title: Expanding search terms to find a organisation WIP
description: Work to iterate the routes into the organisation view and the search terms used to cover all the scenarios.
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-02-05
tags:
  - private-beta
  - processing-version-7
  - processing-find-an-org
aside:
  title:  Processing Prototypes
  content: |
    [View processing v7 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v7/) 
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

## Why we did this work
We tested the first iteration of the find and view a organisation journey with processors and css agents in w/c 5th February and there were a number of areas highlighted as needing further development. Post playback and actions meeting, these were the updates agreed upon to make:

- Routes in to the service were confusing to the user about the differences between, unclear which to use.
- Search terms
  - It was found their were a number of scenarios that searching for a organisation with workplace ID wouldn't cover. For example...
  - Verbal communication of a workplace ID over the phone led to mistakes in typing it in.

## What our ideas were

#### Search terms 
Speaking to research, the options for search terms were cross examined against the scenarios they would cover for processors and ccs agents. These scenarios include: mail referrals etc. TO ADD

When deciding how to expand what the staff could search with, we wanted to balance covering the missing scenarios with not changing too much as we were only going to be able to sense check the changes with staff during a informal 2 hour workshop rather than do another complete usability test, and also had to be minimal in tech effort to make the changes.

>**We believe that** email, claim ref and id
>**Will be a useful feature for** staff to search with
>**As it will** them to cover the scenarios of.... TO ADD

There was a concern about the ID/CV process and the risk that if we opened up the search terms it wouldn't be enforcing workplace ID to be required first. Product had a discussion with ops and they agreed to take on the risks surrounding ID/CV process. 

#### Routes in 

Working with content, it was considered combining the two routes in into one. We believe that this would require too much content on the search page to explain all the functionality available in the org view and would be conflating the two intentions of the users.

>**We believe that** keeping the two routes seperate
>**Will be a useful feature for** BSA staff
>**As it will** keep intentions seperate of going directly to a specific claim, and doing something more general with the organisation information.

Content included changing the "Process a claim" wording to "Find a claim", and within the org view, content was reviewed to make it clearer the user is within org level view through both routes.

>**We believe that** keeping the ability to search with claim id within the find a claim route and adding ability to find a org with email and workplace id
>**Will be a useful feature for** BSA staff
>**As it will** not mean that you can search claim id in two places, which will help with the user's confusion about the differences between the options.

>**We believe that** keeping both routes allowing you to access all the same functionality e.g. process a claim
>**Will be a useful feature for** processors
>**As it would** be confusing to take away functionality because they’ve come in through a particular route and they would have to go out and in again to access. Still in both routes they have access to all the org information.


#### Search input design 
* The need to have seperate input fields for each find a organisation type of search term was a tech consideration as if they are all entered in the same box it's harder to give specific error messages as would involving assuming what the value is of that's been entered. From tech perspective, it was decided this is less of a issue in this search case as there will be no partial matches, just returning a direct result search, and from a content perspective because there are max two search terms and email is a well known format, we can have a error that still gives helpful information.

>**We believe that** having the terms entered in one input field
>**Will be a useful feature for** staff
>**As it will** keep the search page simple


#### Email
To expand the search to allow to search by email, there are multiple status' that could be associated with these users'.

>**We believe that** searching by active, invited, inactive SRO’s and displaying all these users in the Contact's SRO's section
>**Will be a useful feature for** staff
>**As it will** as want to be able to see if should carry on speaking to the person on the phone and understand full context.

>**We believe that** searching by active, invited submitters and only displaying these users and not the inactive one's in the Contact's submitter's section
>**Will be a useful feature for** staff
>**As it will** be less important to see deleted submitter's.

We won't capture the dates that each submitter is active, which also means then we can't display these user's in order of most recent. Decided to show in order of active/invited and then inactive, then within each status order them alphabetically which be helpful to provide some order.


#### Job roles
Two job roles in service of processor and CCS agent.
For a CCS agent they won't be able to Process a claim or register a organisation. These are then options that are hidden on the signposting page. Since they will then only have one option we will istead naviagte them on login to the find a organisation search page. Processing of a claim functionality within the not yet processed claim view will also be hidden. 

>**We believe that** only being able to search by email, workplace id
>**Will be a useful feature for** ccs agents
>**As it will** them to cover the scenarios of... TO ADD

#### Content updates

- Tab now called Claims
- Tab now called Contacts
- Tab now called Organisation notes
- Add in reference to process a claim, thats enough to still make clear thats something they can do through these routes

## How we tested our ideas and what we found

- Sense checked the updates with BSA staff in a workshop, rather than a full usability test. They agreed the routes in were clearer, and the added ability to search with email will help. 

## What we will do next
- Gone into development.