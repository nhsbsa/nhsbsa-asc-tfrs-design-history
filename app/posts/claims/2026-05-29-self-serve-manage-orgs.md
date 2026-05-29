---
title: Allowing users to access multiple organisations
description: Users may be members of multiple organsiations we explored ways we could support this in the service.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-05-29
tags:
- private-beta
- self-serve-onboarding
- claims-version-25
aside:
  title:  Claims prototypes
  content: |
    [View claims v25 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v25/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)


## Why we did this work

Currently in the service users can only be associated with one organsiation. This constraint came from delivery pressures at the start of Beta and is purely there due to the lack of time and resources to resolve it alongside higher priority pain points. 

We know that, particularly in parent/subsidary organisation structures, organisations often have the same senior responsible officers (SROs) or submitters across these structures. The issue that then arises due to the constraint in the system is that organisation then start changing their ASC-WDS account structures, often combining different account together. This is frustrating for users and also make it more difficult for the service to track spending caps for organisations. This will also cause challenges for us in the future when we implement changes to enforce legal rules in the service around these parent/subsidary organisation structures.

The goal is to remove this constraint for users as part of the self serve onboarding work to lay the ground work for future work around parent/subsidary organisation structures.

On top this the other work we have done around self-serve onboarding in particular the abilty for SRO to save the progress of the registration requests to complete later means we also needs an abilty for an SRO to see all of their in-progress registration requests and continue them as they wish.  

## What our ideas were

We started out with the following broad hypothesis:

>**We believe that** allowing users to access multiple organisations 
>**Will be a useful feature for** senior responsible officers (SROs)
>**As it will** align with existing organisation structures and reduce issues created for dependant services

It felt The pragmatic approach for these challenges was for us to identify the minimum viable solution to tackle these problems together as there were natural cross over between the problems. This leds us to the hypothesis:

>**We believe that** a single screen showing all a users organisations, active or registration requests
>**Will be a useful feature for** senior responsible officers (SROs) and submitters
>**As it will** make it easier for them to manage their organisations and requests

Initial analysis followed by a workshop was used to establish what states of an organisation would need to be covered by this design and what information we felt user might need to see to help form our initial designs for testing:

The organisation states we agreed needed to be catered for:
- **Active** - an organisation that has been onboarded successfully
- **Inactive** - an organsation that has been onboarded successufully but has since been deactivated for some reason
- **Rejected** - an organisation whose registration request has been rejected
- **Submitted** - an organisation where the registration request has been submitted and is being processed
- **Draft** - an organisation where the registration request has been stated but not submitted yet

The information we agreed was needed about each organisation:
- Organisation name
- ASC-WDS Workplace ID
- The users role in the organisation
- The organisations SRO
- Organisation address

We did some low-fi ideation with the team to explore what this screen could look for users.

![A screenshot showing miro board with lo-fi drawings of screen designs for the manage organisation screen](lo-fi-ideas.png "Lo-fi design ideas")

We then took thes lo-fi ideas and iterated them into some hi-fi designs, further fleshing out some of the detail. We then conducted a design crit on these hi-fi design. These ideas played around with data presentation exploring:
- different definition list based presentations eg. summary cards
- different grid layouts
- different grouping eg with or without sub-headings

![A screenshot showing miro board with hi-fi screen designs for the manage organisation screen with sticky notes with critique](hi-fi-crit.png "Hi-fi design crit")

Following the crit we were able to converge on a single design idea and incorporate refined content:

![A screenshot showing the final design with an example of a user with organisation in many different states](final-design.png "Our final design showing a user with organisations in different states")

Firstly summary cards felt like the best approach for us and is a pattern we have used elsehwere in the service and have tested well with suers as ways of showing mutliple entities together in one list.

We opted to go without sub headings as most users will only have one organsiation on this screen and we believed the sub-headings added unnecessary content to the screen in those situations. On top of this the sub-heading combined with the org state tag on the cards felt like duplicated content and we believed the tag would be a better approach and would be clearer for users. 

We also decided upon a single column using the two thirds width for the cards this allowed for ample space for content and we believed it made the page easier to read for users. 

Our final layer in the design was the content, focussed around the use of the word 'my' to better illustrate the users position in relation to these organisations; "my organisations", "my role". Then for the actions utilising the same copy for the area of the service they link to to reinforce the mental models of the service with users; "Manage claims", "Manage Submitters". 

We felt that this design would offer the best effort to value ratio for the service and would allow us to get a solution out there sooner. We will take this into testing to ensure that there is enough value gained for users from the approach we are looking to take.

## How we tested our ideas and what we found


## What we will do next


