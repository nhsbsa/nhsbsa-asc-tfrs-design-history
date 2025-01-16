---
title: Complete a ID/CV check
description: Once a organisation has been found, BSA staff need to be able to verify who they are speaking to before they are they able to process a query
author:
  name: Hannah Williams
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-26
tags:
  - processing-version-6
  - org-view
  - design
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---
## Why we did this work

As part of the work to help organisations and BSA staff resolve organisation-related problems quickly, this is the second part of my ticket to give BSA staff functionality to complete the ID/CV check so then they can progress with the query within the centralised organisation view. Important while doing this piece of work to bear in mind the wider scope and potential future features to make sure we design in a way that is scalable and maintainable.

![A diagram of high level activity flow of journey detailing what information is needed ](high-level-activity-flow.png "A diagram of high level activity flow of journey detailing what information is needed")


#### Considerations to keep in mind:
* The ID/CV checks aren’t going to be a recorded process, we will display the information and they then do the checks verbally. This view, where the find a organisation flow lands, needs to support this process providing the information necessary.
* How might we help CCS agents maintain sight of who they are speaking to from an org as this was a user need that came out during Alpha that staff forget who is on the phone.
* How might we cater to different users priorities in this wider org view as this view is going to support many different user journeys including processing of a claim, as well as resolving queries, so the ID/CV check isn’t necessary to every journey that lands a user on this screen.
* How to show the right information at the right time?
* 


Held a second ideation session with wider delivery team on 26th November to explore the concept of a org view.

Below the requirements have been broken down into the information that needs to be accessible to complete ID/CV checks.ID/CV check requirements:
* Check a claim reference number
* Check organisation name
* Check first line of address
* Check postcode of org
If don’t possess one of these pieces then need to go through to the secondary check, where one of these need’s to be confirmed (this list is not exhaustive and potentially other alternatives):
* Check submitter’s full name
* Check submitter’s email address
* Check learner’s full name
* Check name of training course
Other information that needs to be accessible based off ticket:
* To check a claim reference does that mean need to see a list of all the claims/have a find claim function?
* Bank details are part of ticket requirement


In design need to consider how to display the information in a way that can be built up iteratively over time with new functionality being added. It needed to be usable on its own, but with a way to bring in other features that won’t affect usability. e.g. processing a claim issues we currently have of throwing everything in and is cognitively overwhelming.

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


This work was being done alongside process a claim reworking. Thought of to bring the two journeys to end up in the same place made sense as the claims sit under the whole organisation. 

Left as two routes in as the intentions the different users are coming in via are different but still the journey’s are cohesive as they end up in the same centralised org view and still have all the functionality available to them. The process a claim journey still needs access to wider org view to help processors. Something to be tested as to the understanding of these two options. 


Perform ID/CV checks


We believe that having organisation information in a header that’s always thereWill be a useful feature for BSA staffAs it will keep them orientated as everything else sits under that organisation

An idea was to whether have a place in the header to keep hold of who speaking to on the phone. We know this came out of research previously as something that would be helpful. But the design made it difficult as to capture so this is something to validate the need with in research.

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


View org details for ID/CV check
* Idea 1 has SRO details that are almost too visually prominent alongside header title due to use of summary card
* Idea 1 had others missing the SRO details on first look, not sure whether being in the grey box made it feel like ‘extra’ info rather than essential info
* Idea 2 I like the org and SRO info together - flows better for reading
* Idea 2 even without the ability to choose who you are talking to the organsiation of the information on the left feels clearner and easier to read
* Idea 2 with the selection of who speaking to aligns with something that came from users
* Idea 2 Maybe only relevant for CCS agents or processors that are performaing an outbound call
To think about:
* How to condense down the header with considerations of screen space used versus usefulness of what is included
* Who speaking to is not always helpful in every scenario, make it more contextually useful and prominent

We believe that having the header take up not too much spaceWill be a useful feature for BSA staffAs it will not overwhelm. 

Two option in claims 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claims.png" alt="text" style="width: 100%; height: auto;">
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


1. With all the claims in a table 
2. Just the find a claim 

1. 
We believe that only giving option to find a claim without showing all the claimsWill be a useful feature for BSA staffAs it will be a required check to have a claim reference to hand so this is all that is required for scope of ticket
2. 
We believe that displaying all the claimsWill be a useful feature for BSA staffAs it will give more scope in case they fail that check and have to proceed onto looking for a learner in which case still have access to claims. Needs to have table sorting?


We believe that putting user tab firstWill be a useful feature for BSA staffAs only workplace id can be searched, it makes sense to land there, orientate themselves with who speaking to and then process 