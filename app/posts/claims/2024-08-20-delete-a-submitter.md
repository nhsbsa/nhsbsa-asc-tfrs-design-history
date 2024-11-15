---
title: Deleting submitters
description: We know there is high turnover in the sector in many roles and this includes the submitter
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-08-20
modified: 2024-09-19
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

## Why we did this work
Senior Responsible officers (SROs), previously called Signatories can invite up to 9 additional submitters to use the service on behalf of the organisation. There are few scenerios that we identified that might mean that a submitter who was invited should no longer have access to the service:
- There was a mistake made by the SRO on the submitters email address that was missed despite the check screen.
- The submitter has left the organisation
- The submitter has been acting in a fraudulent way within the service

As a result of these scenarios we formed the following hypothesis:
>**We believe that** allowing SROs to delete submitters
>**Will be a useful feature for** SROs
>**As it will** help them manage access to the service for their organisation

Due to the responsibilities of the SRO and the fact they are the only user type that can currently add team members it follows that only the SRO can delete team members. They cannot delete themselves as the organisation always needs an SRO and the problem space around changing an SRO is more complex and therefore we will tackle separately.

## What our ideas were
Currently an SRO can view a list of their team members separated into two sections 'registered' and 'invited'. 'Registered' show those team members that have been invited and completed registration and 'invited' shows those that have been invited but haven't completed registration yet. All the details are shown in the tables and therefore there isn't any feature to view a team member in a more detailed way. 

![A screenshot taken from v12 of the prototype showing the manage team members screen](v12-manage-team.png "The manage team members screen from v12")

Given this current design the natural starting point was to add another action to the action column in the design to allow the SRO to delete users. For registered users given there is no existing action this should be relatively straight forward and we can use the same styling for what is used for 'Resend Invite' for consistency. However given there is already a action for invited users this became a bit more difficult. Looking across GDS components it made sense to reuse the same styling that is used in the summary list when there is two actions. This involves using a vertical line between multiple actions:

![A screenshot taken of the summary list component with multiple actions in a row](summary-list.png "The summary list component with multiple actions in a row")

See the design history post for delete a claim for why we avoided using the red warning button in the design for this work as well.

![A screenshot taken from v13 of the prototype showing the manage team members screen featuring the delete submitter action](v13-manage-team.png "The new manage team members screen featuring the delete submitter action from v13")

Similar to the work we did around delete a claim, we felt asking confirmation from the SRO was needed to avoid accidental deletions.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="confirmation-reg.png" alt="A screenshot taken from v13 of the prototype showing delete a registered user confirmation" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing delete a registered user confirmation</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="confirmation-inv.png" alt="A screenshot taken from v13 of the prototype showing delete a invited user confirmation" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing delete a registered user confirmation</figcaption>
  </figure>
  </div>
</div>

Once the the team member has been deleted we return them to manage team members screen and provide a confirmation to the user in the form of a banner to convey the actions success. We opted to use the MoJ banner rather than the standard GDS notification banner, as this would be consistent with the how we have chosen between the two types in other parts of the service where it has tested well.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="banner-reg.png" alt="A screenshot taken from v13 of the prototype showing delete a registered user banner" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing delete a registered user banner</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="banner-inv.png" alt="A screenshot taken from v13 of the prototype showing delete a invited user banner" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing delete a registered user banner</figcaption>
  </figure>
  </div>
</div>

In terms of the content for this feature there was a few factors that had to be considered:
- The deleting of a registered user would actually just deactivate them, this is for audit purposes as would still, need a record of them to understand the actions they took. 
- If the user is invited they would be deleted from the service and the invite link would be disabled so that they wouldn't be able to complete registration.
- Once a user has been deactivated they can't be reactivated they would just be invited as if they were a new user. 

As a result of this the content for to convey this information meant we needed different content depending on whether the user was deleting a registered user and deleting an invited user. We therefore opted with 'Delete user' for the action involved with a registered user and 'Cancel invitation' for the action involved with an invited user. This content is then adapted on the confirmation screen where we ask a yes/no question using the CTA's to answer to. 

## How we tested our ideas and what we found
We spoke to 4 people as part of this round of user research. All of these sessions were conducted over MS Teams. The Teams calls were an hour long. After gathering some background information (device being used, digital literacy, organisation size) we asked participants to complete 4 tasks. One of those tasks was based around deleting a user. Users were provided with a colleague name, and asked to remove them from the service.​

All users found this task 'easy' and 'straightforward' to do, completing it quickly.

Reasons highlighted by participants as to why they would delete a user included: 
- If the user left the organisation​
- If the user changed roles​
- If the user moved to a different location within the parent organisation​
- Suspected fraudulent activity

Similarly to the delete claim function, the primary disadvantage perceived by users would be accidentally deleting a user and then having to re-add them. Other disadvantages would be having to re-add users if they returned to the organisation and 'not having their record to hand' once they'd been deleted'. However, the two step process was believed to reduce the likelihood of this happening.​

There a was an assumption by one user that only the senior responsible officer (SRO) would know who should be added to the system as users, and be able to add and delete users. They thought it was important to restrict access to edit and delete users based on roles.​ This restriction is included in the feature.

Overall, the information on the second screen was thought to be sufficient to confirm the user being deleted. There was acknowledgment from the users that it was likely there would be less submitters than learners, therefore, they would be less likely to have duplicate names. One user suggested adding 'job role' to the information provided, but this did not seem essential to identify the user.

Overall this validated our hypotheses and design thinking. 

## What we will do next
This feature will move into development and we will monitor it's usage further during private beta. Despite finding that the addition of 'job role' to the final page may increase user's confidence that they are deleting the correct user. This was only suggested by one user, who still felt fairly confident the existing information was sufficient and therefore we didn't feel this required further action and would be monitored further in private beta. 



