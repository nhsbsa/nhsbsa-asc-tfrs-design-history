---
title: Scaling back MVP
description: With an aggressive delivery deadline fast approaching and an increasing amount of technical unknowns the decision was made by the product owner to scale back the MVP at the start of Beta.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-03-23
tags:
  - claims-version-8
  - claims-version-7
  - manage-claims
  - TU-100-claims
  - account-creation
aside:
  title:  Related content
  content: |
    [v7 claims prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v7/) 
    Password: ascbsa123

    [v8 claims prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: ascbsa123
---

With an aggressive delivery deadline fast approaching and an increasing amount of technical unknowns the decision was made by the product owner to scale back the MVP at the start of Beta. Across a couple of workshops attended by the entire product team a series of key decisions were made to cut out or scale back certain features for MVP. These product decisions were all logged in our project decision log held in Jira along with any associated risks and mitigations. We finished Alpha with v7 of the prototype, this version was not tested with users before these decisions were made and therefore changes were made in v8 of the prototype for future testing. As these decisions also impact design and explain how we moved from v7 to v8 and some of the changes are made.


## Using Azure B2C for authentication and account creation

#### Description
Azure B2C has limitations on how the UI can be customised, these limitations allow the designer to influence only the logo to be used and background colour of behind the login modals. Beyond this the styling does not align with GDS. The decision for MVP is to use this technology to provide the authentication mechanism for account creation and sign in and understand through Private Beta the impact the different styling might have on users perception of the service.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="sign-in.png" alt="A mock-up of the sign-in screen." style="width: 100%; height: auto;">
    <figcaption>A mock-up of the sign-in screen from v8 of the prototype.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="authenticator.png" alt="A mock-up of the authenticator setup screen." style="width: 100%; height: auto;">
    <figcaption>A mock-up of the authenticator setup screen from v8 of the prototype.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Reduced use of the service due to lower trust caused by authentication not looking fully consistent with a government service.
- Increased volume of calls to call centre questioning whether this is legitimate service. 
- Using Azure B2C may exclude or prevent some users accessing the service as it may not be accessible and does not align to GDS standards.  

#### Mitigations
None


## Remove eligible training list from service for MVP
A medium amount of work is required to further understand user needs and more work to design an appropriate mechanism to present this information to the user in a usable and easy to understand way. Due to tight deadlines and the effort required to design and develop this the decision was made to remove eligible training list from scope for MVP to focus on other higher priorities.

#### Screenshots

##### v7

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="before-you-start-v7.png" alt="v7 'before you start page'" style="width: 100%; height: auto;">
    <figcaption>Before you start page showing a link to the eligibility checker page.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="training-list.png" alt="v7 training list'" style="width: 100%; height: auto;">
    <figcaption>Eligibility checker page showing an initial concept for the training list with search and filter options.</figcaption>
  </figure>
  </div>
</div>

##### v8

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="before-you-start-v8.png" alt="v8 'before you start page'" style="width: 100%; height: auto;">
    <figcaption>Before you start page showing a link to the scheme guidance.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="scheme-guidance.png" alt="Scheme guidance" style="width: 100%; height: auto;">
    <figcaption>Scheme guidance showing a basic presentation of the eligible training list.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Increased number of calls to the contact centre about the eligible training list due to the scheme guidance list not presenting the eligible training list in a way users can easily understand and digest.
- Reduced uptake in the fund as users drop out at the awareness stage of the journey due to the scheme guidance list not presenting the eligible training list in a way users can easily understand and digest.
- Reduced uptake in the fund as users drop out at the awareness stage of the journey due to the scheme guidance not enabling users to explore the training list to find suitable training for their staff.
- Increased user frustration with the service as they can’t find the information they need within the service.

#### Mitigations
The service will provide a link to the scheme guidance on the 'before you start' page. The scheme guidance provides a digital version of the eligible training list.


## Remove paid status from MVP
By default we cannot get payment information from Integra without additional investigation and work. Due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="manage-claims-v7.png" alt="v7 'manage claims'" style="width: 100%; height: auto;">
    <figcaption>v7 Manage claims showing a paid status.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="manage-claims-v8.png" alt="v8 'manage claims'" style="width: 100%; height: auto;">
    <figcaption>v8 Manage claims without the paid status.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Increased volume of calls to call centre asking whether a claim has been paid.
- Increased volume of calls to call centre asking when to expect a payment for a claim.
- Increased user frustration with the service as they can’t find the information they need.

#### Mitigations
When a user submits a claim we inform them of the SLAs to expect on the confirmation screen. 


## Remove searching/filtering for MVP
User research has shown that submitters may save claims to come back to later (eg when the submitter wants to add evidence following completion of the training by the learner) or come back into the service to check on particular claims they have submitted. To enable this user need we implemented an ability for users to find a claim through a search. Due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="manage-claims-v7.png" alt="v7 'manage claims'" style="width: 100%; height: auto;">
    <figcaption>v7 Manage claims showing the search feature</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="manage-claims-v8.png" alt="v8 'manage claims'" style="width: 100%; height: auto;">
    <figcaption>v8 Manage claims without the search feature.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Submitter is unable to find the claim they were looking for and create a new claim resulting in duplicates.
- Submitters get frustrated having to manually scroll through claims to find what they are looking for resulting in reduced use of the service.


#### Mitigations
The issues and risks will be reduced at the start of private beta when there are fewer claims in the organisation’s view. However over time the risks will increase.


## Remove pagination for MVP
Due to the volume of claims we are expecting it is highly likely that the table that contains a list of claims will become quite large. To tackle this we introduced pagination however due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="pagination-v7.png" alt="v7 'claims table'" style="width: 100%; height: auto;">
    <figcaption>The bottom of a claims table in v7 showing pagination.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="pagination-v8.png" alt="v8 'claims table'" style="width: 100%; height: auto;">
    <figcaption>The bottom of a claims table in v8 without the pagination.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Submitters get frustrated having to scroll through large amounts of claims to find what they are looking for resulting in reduced use of the service.
- Submitters experience cognitive overload due to the volume of claims presented on a single screen.


#### Mitigations
The issues and risks will be reduced at the start of private beta when there are fewer claims in the organisation’s view.


## Remove multiple learners per claim for MVP
User research showed that for certain types of training organisations may send multiple learners on the same training and pay for them at the same time. To accommodate this the designs at the end of alpha allowed for multiple learners to be added to a claim. Due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-details-v7.png" alt="v7 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v7 claim details screen showing the ability to add multiple learners to a claim.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-details-v8.png" alt="v8 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v8 claim details screen that limits claims to a single learner.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Reduced uptake and use of the service due to frustration as submitters would have to create multiple claims that share a lot of the same information resulting in repeated data input.

#### Mitigations
None


## Remove ability to view uploaded evidence for MVP
A submitter uploads evidence to the service for a claim, the submitter may have large quantities of evidence files on their system due to the amount of training undertaken. To allow users the ability to check they had uploaded the correct evidence we had an ability for users to view the evidence that they had uploaded to a claim. Due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-details-v7.png" alt="v7 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v7 claim details screen showing the ability to view evidence uploaded to a claim.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-details-v8.png" alt="v8 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v8 claim details screen without this feature.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Submitters are more likely to submit claims with incorrect evidence resulting in increased rejections and money not being used from the fund as quickly as expected.
- Submitters have more claims rejected leading to frustration and reduced uptake of the service. 


#### Mitigations
None


## Remove training details for MVP
Through Alpha we were dealing with a training list the details of which were unknown however we had an indication of what the data looked like, the existing WDF course list. Originally the select training flow allowed submitters the ability to view details of the training before selecting it as a sense check to ensure they were selecting the right training. Due to tight deadlines and the effort required to develop this the decision was made to remove this screen from MVP to focus on other higher priorities.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="select-training-v7.png" alt="v7 'select training'" style="width: 100%; height: auto;">
    <figcaption>The v7 select training screen allowing the user to view details of the training option.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="select-training-v8.png" alt="v8 'select training'" style="width: 100%; height: auto;">
    <figcaption>The v8 select training screen without the ability for the user to view details of the training option.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Increase in rejected claims and user frustration due to incorrect training selection.
- Increased user frustration during selecting training as they are unsure which option to select particularly for qualifications with similar data.


#### Mitigations
Slightly revised presentation of training list with additional column headers shown to help reduce confusion and provide more data differentiators between rows.


## Remove claim history information for MVP
To show the history of the claim after it had been submitted we used the timeline component. This showed the submitted date, and outcome date (approved/rejected) and paid date. Due to tight deadlines and the effort required to develop this the decision was made to remove this from MVP to focus on other higher priorities. This resulted in this information only being visible in a very limited form on the manage claims tables.

#### Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-history-v7.png" alt="v7 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v7 claim details showing the timeline component to display claim history information.</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-history-v8.png" alt="v8 'claims details'" style="width: 100%; height: auto;">
    <figcaption>The v8 claim details without the timeline component.</figcaption>
  </figure>
  </div>
</div>

#### Risks
- Increase in calls to call centre asking about for this information.
- Increased user frustration with the service as they can’t find the information they need.


#### Mitigations
None

