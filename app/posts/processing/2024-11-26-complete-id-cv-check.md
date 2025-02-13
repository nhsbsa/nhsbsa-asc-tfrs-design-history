---
title: Complete a ID/CV check
description: Once a organisation has been found, BSA staff need to be able to verify who they are speaking to before they are they able to process a query
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-26
tags:
  - private-beta
  - processing-version-6
  - processing-view-org
  - processing-id-cv
aside:
  title:  Processing Prototypes
  content: |
    [View processing v6 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v6/) 
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

As part of the work to help organisations and BSA staff resolve organisation-related problems quickly, this is the second part of my ticket to give BSA staff functionality to complete the ID/CV check so then they can progress with the query within a centralised organisation view. Important while doing this piece of work to bear in mind the wider scope and potential future features to make sure we design in a way that is scalable and maintainable.

![A diagram of high level activity flow of journey detailing what information is needed ](high-level-activity-flow.png "A diagram of high level activity flow of journey detailing what information is needed")

## What our ideas were

#### Considerations to keep in mind:
* The ID/CV checks aren’t going to be a recorded process, we will display the information and they then do the checks verbally. This view, where the find a organisation flow lands, needs to support this process providing the information necessary. 
* How might we help CCS agents maintain sight of who they are speaking to from an org as this was a user need that came out during Alpha that staff forget who is on the phone.
* How might we cater to different users priorities in this wider org view as this view is going to support many different user journeys including processing of a claim, as well as resolving queries, so the ID/CV check isn’t necessary to every journey that lands a user on this screen.
* How to show the right information at the right time?

Held a second ideation session with wider delivery team on 26th November to explore the concept of a org view.

Below the requirements have been broken down into the information that needs to be accessible to complete ID/CV checks.

#### Iterated ID/CV check requirements:
* Caller's full name - check against SRO/submitters for org
* Email address
* Workplace ID - if they caller doesn't have the correct ID, they would have to call back
* Organisation's address and postcode
* Claim Reference - if the query is in relation to a claim

If don’t possess one of these pieces then need to go through to the secondary check, where one of these need’s to be confirmed (this list is not exhaustive and potentially other alternatives):

* Check learner’s full name
* Check name of training course

Other information that needs to be accessible based off ticket:

* To check a claim reference does that mean need to see a list of all the claims/have a find claim function?
* Bank details are part of ticket requirement

#### Designing with flexibility built into the concept - organisation view

In the design we needed to consider how to display the information in a way that can be built up iteratively over time with new functionality being added. It needed to be usable on its own, but with a way to bring in other features that won’t affect usability. e.g. processing a claim issues we currently have of throwing everything in and is cognitively overwhelming.

>**We believe that** having the information needed for ID/CV can be broken down into the header and different tabs within the org view 
>**Will be a useful feature for** BSA staff
>**As it will** allow them the flexibility to conduct their process moving easily between sections but it also accomondates for future design features and scalability of the view.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="idea-1.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 1 of having a org view with overarching organisation details above then breaking the other functionality down into tabs</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="idea-2.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 2 of overview of flow through and where </figcaption>
  </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="idea-3.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 3 of breaking down the functionality to be modular and scalable</figcaption>
  </figure>
  </div>
</div>

This work was being done alongside the process a claim journey rework. Having the two journeys end up in the same overarching organisation view made sense as the claims sit under the whole organisation in the mental model. But they are different intentions of tasks so the routes into the service on the signposting page would stay seperate. 

>**We believe that** keeping the journey's seperate in the signposting page as to what they want to do
>**Will be a useful feature for** BSA staff
>**As it will** suit the different intentions they are coming with of process a claim, find a org, register a org, but still the journey's are cohesive as end up in same centralised org view with all the functionality available to them.

The process a claim journey still needs access to wider org view to help processors. Something to be tested as to the understanding of these two options. Depending on the route into the service of process a claim and find a org, we decided it would be helpful to land the user into specific places, also using the options like a quick link into where want to go in the service to complete their task.

>**We believe that** depending on what they search by lands them in a different place in the org view 
>**Will be a useful feature for** bsa staff 
>**As it will** follow their intentions e.g searching by claim ref will land them on that claim. 



### Perform ID/CV checks

>**We believe that** having organisation information in a header that’s always there
>**Will be a useful feature for** BSA staff
>**As it will** keep them orientated as everything else sits under that organisation

An idea was to whether have a place in the header to keep hold of who speaking to on the phone. We know this came out of research previously as something that would be helpful. 

#### Design crit - header

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="org-view-idea-1.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Org view idea 1 or having the organisation name large, then splitting up the details and the submitter info out into different sections</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="org-view-idea-2.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Org view idea 2 of combining all the organisation details to the left and then leaving space on the right to have option of selecting the user you are speaking to on the phone</figcaption>
  </figure>
  </div>
</div>

* Idea 1 has SRO details that are almost too visually prominent alongside header title due to use of summary card
* Idea 1 had others missing the SRO details on first look, not sure whether being in the grey box made it feel like ‘extra’ info rather than essential info
* Idea 2 I like the org and SRO info together - flows better for reading
* Idea 2 even without the ability to choose who you are talking to the organsiation of the information on the left feels clearner and easier to read
* Idea 2 with the selection of who speaking to aligns with something that came from users
* Idea 2 Maybe only relevant for CCS agents or processors that are performaing an outbound call
To think about:
* How to condense down the header with considerations of screen space used versus usefulness of what is included
* Who speaking to is not always helpful in every scenario, make it more contextually useful and prominent

#### Design crit - claims tab

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="find-a-claim-tab.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 1 of only find a claim</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claims.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 2 of displaying all the claims and ability to search</figcaption>
  </figure>
  </div>
</div>

Idea 1
>**We believe that** only giving option to find a claim without showing all the claims
>**Will be a useful feature for** BSA staff
>**As it will** be a required check to have a claim reference to hand so this is all that is required for scope of ticket

Idea 2
>**We believe that** displaying all the claims
>**Will be a useful feature for** BSA staff
>**As it will** give more scope in case they fail that check and have to proceed onto looking for a learner in which case still have access to claims. Does it need to have table sorting to be able to find a specific claim?

Decision: 
It was decided for the scope of this ticket the find a claim search without the claims table might be able to answer the user need to complete ID/CV and this is what we will take into testing to validate. 





#### Users tab

![Screenshot of the users tab showing SRO and users details ](users-tab.png "Screenshot of the users tab showing SRO and users details")

>**We believe that** putting users tab first
>**Will be a useful feature for** BSA staff
>**As** since only workplace id can be searched, it makes sense to land there, orientate themselves with who speaking to and then progress with the query.

>**We believe that** sectioning out the SRO from the submitters information in tables
>**Will be a useful feature for** BSA staff 
>**As** it will be easy to scan the page and understand the roles and information provided

>**We believe that** having a status on users 
>**Will be a useful feature for** BSA staff 
>**As** they will understand if the user has successfully registered or is still awaiting acceptance of the invitation.


#### States of invited and not registered SRO

We needed a design for the scenario of what if a organisation was searched that had a SRO that had been invited but not yet registered. 
- We decided they would still get into the organisation view with content added to say the SRO needs to accept the invite in a warning banner within the org header. 
- We would then utilise the users tab and the status' of users, with the SRO being labeled invited. We decided this would also be a good place to bring in the functionality of changing the SRO invited, taking it from the register a org journey.
- Thought of hiding the claims tab as there would never be any content in here, but that would mean only one tab, and we would have to make a design to have a single tab view which is more tech work also. So kept claims in.

## How we tested our ideas and what we found
- We tested the org view with CCS agents and processors week commencing 5th January 2025.
- The main themes from the playback:
  - They were able to conduct ID/CV within the organisation view.
  - There was a need to see all claims for a organisation, the assumption that search for a claim would meet the user need was disproven
  - They wanted to maintain a view of the selected claim as they navigated in and out of tabs
  - Current processes may not work for ASC - lack of IVR and not capturing Workplace ID early enough in the journey
  - There was confusion on the differences between the routes into the service
  - Confusion on whether they were in the service at a claim level or at the organisation level. Some content review will be needed to see if can help the user better orientate themselves.

## What we will do next
- Holding a post playback actions session with the wider delivery team to decide what actions to progress with.
- Next updates will be done in version 7 of the prototype.