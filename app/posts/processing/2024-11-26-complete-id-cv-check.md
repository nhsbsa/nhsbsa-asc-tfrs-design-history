---
title: Complete a ID/CV check ideation
description: Once a organisation has been found, BSA staff need to be able to verify who they are speaking to before they are they able to process a query
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-26
tags:
  - processing-version-6
  - org-view
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

## Why we did this work

As part of the work to help organisations and BSA staff resolve organisation-related problems quickly, this is the second part of my ticket to give BSA staff functionality to complete the ID/CV check so then they can progress with the query within the centralised organisation view. Important while doing this piece of work to bear in mind the wider scope and potential future features to make sure we design in a way that is scalable and maintainable.

![A diagram of high level activity flow of journey detailing what information is needed ](high-level-activity-flow.png "A diagram of high level activity flow of journey detailing what information is needed")

## What our ideas were

Considerations to keep in mind:
- The ID/CV checks aren't going to be a recorded process, we will display the information and they do the checks verbally. This view, where the find a organisation flow lands, needs to support this process providing the information necessary. 
- How might we help CCS agents maintain sight of who they are speaking to from an org as this was a user need that came out during Alpha that staff forget who is on the phone.
- How might we cater to different users priorities in this wider org view as this view is going to support many different user journeys including processing of a claim, as well as resolving queries, so the ID/CV check isn't necessary to every journey that lands a user on this screen.
- How to show the right information at the right time?

Held a second ideation session with wider delivery team on 26th November to explore the concept of a org view.

Below the requirements have been broken down into the information that needs to be accessible to complete ID/CV checks.
ID/CV check requirements:
- Check a claim reference number
- Check organisation name
- Check first line of address
- Check postcode of org

If don't possess one of these pieces then need to go through to the secondary check, where one of these need’s to be confirmed (this list is not exhaustive and potentially other alternatives):
-  Check submitter's full name
- Check submitter's email address
- Check learner's full name
- Check name of training course

Other information that needs to be accessible based off ticket:
- To check a claim reference does that mean need to see a list of all the claims/have a find claim function?
- Bank details are part of ticket requirement

As a team we considered how to display/group this information in a way that can be built up iteratively. It needs to be usable on its own, but have a way to bring in other features that won’t affect usability e.g. processing a claim issues we currently have of throwing everything in and is cognitively overwhelming. 

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


## How we tested our ideas and what we found

Held a design crit of overall journey combining find a org and doing the ID/CV checks with found organisation. Worked in parallel with process a claim journey work as we think tie together once found the organisation.

#### Find a organisation

>**We believe that** adding a new option for a find a organisation
>**Will be a useful feature for** BSA staff
>**As it will** suit the different intentions they are coming with still, but still the journey's are cohesive as end up in same centralised org view

>**We believe that** in idea 1 of having seperate input fields for each input
>**Will be a useful feature for** tech
>**As it will** reduce technical processing

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="signposting-page.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>View of adding in new option to find a organisation.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="find-org-idea-1.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 1 of finding a organisation flow, letting the user select a option to search by workplace ID, email address or claim ID.</figcaption>
  </figure>
  </div>
</div>

>**We believe that** in idea 2 of having seperate input fields for each input
>**Will be a useful feature for** BSA staff
>**As it will** be more screen reader friendly

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="find-org-idea-2.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Idea 2 of breaking down the selection of what to search by into seperate screens. First you choose a option.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="find-org-idea-2-part-2.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Then you enter the information.</figcaption>
  </figure>
  </div>
</div>

#### Perform ID/CV checks

>**We believe that** having organisation information in a header that's always there
>**Will be a useful feature for** BSA staff
>**As it will** keep them orientated as everything else sits under that organisation

>**We believe that** offering adding option to say who is on phone
>**Will be a useful feature for** BSA staff
>**As it will** help them keep track of who speaking to


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

#### Outcomes to consider for further design development:

Find a organisation
- Email search may give multiple results in the future as multiple organisations could have the same SRO. If this something to use now if a risk to change in the future to being a indirect search with results, and would have to alter how we handle?
- Having seperate fields for each find a org input is less of a issue for tech as no partial matches, but means it is harder to give specific errors. 
- Option 2 for find a org is more screenreader friendly

View org details for ID/CV check
- Idea 1 has SRO details that are almost too visually prominent alongside header title due to use of summary card
- Idea 1 had others missing the SRO details on first look, not sure whether being in the grey box made it feel like 'extra' info rather than essential info
- Idea 2 I like the org and SRO info together - flows better for reading
- Idea 2 even without the ability to choose who you are talking to the organsiation of the information on the left feels clearner and easier to read
- Idea 2 with the selection of who speaking to aligns with something that came from users
- Idea 2 Maybe only relevant for CCS agents or processors that are performaing an outbound call

To think about:
- How to condense down the header with considerations of screen space used versus usefulness of what is included
- Who speaking to is not always helpful in every scenario, make it more contextually useful and prominent
 

## What we will do next
- Take ideas through to the prototype which allows some finessing of the finer details, seeing those smaller interactions of the design as a whole flow.