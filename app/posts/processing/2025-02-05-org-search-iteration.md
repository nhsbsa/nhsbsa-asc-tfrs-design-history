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
We first tested the org view with processors and css agents in February and 

It was found
- missing scenarios as workplace ID wasn't always to hand
- verbal communication of these values led to mistakes 
- routes in were confusing, something posed to content

## What our ideas were

#### Search terms 
Speaking to research, we cross examined search terms for the scenarios they would cover for processors and ccs agents. 

These scenarios include: mail referrals etc

We wanted to balance covering scenarios with not changing too much as we were only going to be able to sense check and also minimal tech effort in changes.

- We believe email, claim ref and id were enough to cover all the scenarios that we might have been missing before e.g. mail referrals etc 

We believe splitting tbetween the two routes works with claim id in find a claim, and email and workplace id in find a org, means not two places to search the same thing. 
And for CSS agents they won't have the find a claim option, but we believe email is enough to aid cover their scenarios. 

There was a concern about ID/CV process and the risk if they didn't do workplace ID first. Amy and Seyimi had a discussion with ops and they agreed to take on the risks surrounding ID/CV process. 

- So from here both routess still allow you to carry out all the same tasks, its the same org header and everything underneath, can process claims through both
- Sort of think of them as direct links to where the user wants to go and do, at the place in the org view they can do it. 
- So find a claim takes directly to claim 
- More general org info through the other
- We believe the content changes within the org view make it clearer to the user they are within the organisation.
- Would be confusing to take away functionality because they’ve come in through a particular route, and they have to go out to go in through a different route. Still in both routes they have access to all the org information.

#### Search input design 
* The need to have seperate input fields for each find a organisation type of search term was a consideration as if in the same box its harder to give specific error messages as would involving assuming what the value is of that's been entered. From tech, it was decided this is less of a issue in this search case as there will be no partial matches, just returning a direct result search, and from a content perspective we can 

- So when we doing the iteration initially of multiple search inputs we had come to conclusion with tech that having multiple terms in the same search input is ok in this case as can validate 
- Just can’t be specific in format errors
- So if its empty its this message
- If it doesn’t fit the format of a ID or a email address its this message 
- If it fits one but can’t find it its this error message 
- And if they do it goes through 
- B02944934

>**We believe that** 
>**Will be a useful feature for** 
>**As it will** 

![Screenshot of the new organisation notes tab ](notes-tab.png "Screenshot of the new organisation notes tab")

#### Email
- Can search by active, invited, inactive SRO’s, add into table to also show as want to be able to see if should carry on speaking to the person on the phone and understand full context.
- Can search by active, invited submitters
- Don’t have the dates active, so can’t order by most recent, will order by status then by first name 


#### Job roles

- hide the find a claim and register a org route
- hide the processing radio buttons inside a not yet processed claim. Everything else the same.
- hidden functionality to process the claims


#### Content updates

- Tab now called Claims
- Tab now called Contacts
- Tab now called Organisation notes
- Add in reference to process a claim, thats enough to still make clear thats something they can do through these routes

## How we tested our ideas and what we found


## What we will do next
