---
title: Deleting submitters
description: We know there is high turnover in the sector in many roles and this includes the submitter
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-08-20
modified: 2024-09-19
tags:
  - private-beta
  - claims-version-13
  - claims-manage-team-members
relatedUserNeeds:
  - user-need-6
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
Senior Responsible Officers (SROs), previously called Signatories, can invite up to 9 additional submitters to use the service on behalf of the organisation. We identified a few scenarios where a submitter invited by an SRO might no longer need access to the service:

- A mistake was made when entering the submitter's email address, which was missed during the check screen.
- The submitter has left the organisation.
- The submitter has been acting fraudulently within the service.

As a result of these scenarios, we formed the following hypothesis:

> **We believe that** allowing SROs to delete submitters  
> **Will be a useful feature for** SROs  
> **As it will** help them manage access to the service for their organisation.

Due to the responsibilities of the SRO and the fact that they are the only user type who can currently add team members, only the SRO can delete team members. They cannot delete themselves, as an organisation always needs an SRO, and the process for changing an SRO is more complex and will be addressed separately.

## What our ideas were
Currently, an SRO can view a list of their team members, separated into two sections: "registered" and "invited." The "registered" section shows those team members who have been invited and completed registration, while the "invited" section shows those who have been invited but haven’t completed registration yet. All the details are shown in the tables, and there is no feature to view a team member in more detail.

![A screenshot from v12 of the prototype showing the manage team members screen](v12-manage-team.png "The manage team members screen from v12")

Given this current design, the natural starting point was to add another action to the action column to allow the SRO to delete users. For registered users, since there is no existing action, this should be relatively straightforward. We can use the same styling as the 'Resend Invite' action for consistency. However, since there is already an action for invited users, this became more complicated. Looking at GDS components, it made sense to reuse the same styling used in the summary list when multiple actions are present. This involves using a vertical line between actions:

![A screenshot of the summary list component with multiple actions](summary-list.png "The summary list component with multiple actions in a row")

For more context on why we avoided using the red warning button in the design, refer to the design history post for the 'Delete a Claim' feature.

![A screenshot from v13 of the prototype showing the manage team members screen with the delete submitter action](v13-manage-team.png "The manage team members screen from v13 showing the delete submitter action")

Similar to the 'delete a claim' feature, we felt that asking for confirmation from the SRO was necessary to prevent accidental deletions.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirmation-reg.png" alt="A screenshot from v13 of the prototype showing the delete registered user confirmation" style="width: 100%; height: auto;">
      <figcaption>A screenshot from v13 of the prototype showing the delete registered user confirmation</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirmation-inv.png" alt="A screenshot from v13 of the prototype showing the delete invited user confirmation" style="width: 100%; height: auto;">
      <figcaption>A screenshot from v13 of the prototype showing the delete invited user confirmation</figcaption>
    </figure>
  </div>
</div>

Once the team member has been deleted, we return them to the manage team members screen and provide a confirmation in the form of a banner to indicate the success of the action. We opted to use the MoJ banner rather than the standard GDS notification banner, as this has been consistently used in other parts of the service where it has been well-received.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="banner-reg.png" alt="A screenshot from v13 of the prototype showing the registered user deletion banner" style="width: 100%; height: auto;">
      <figcaption>A screenshot from v13 of the prototype showing the registered user deletion banner</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="banner-inv.png" alt="A screenshot from v13 of the prototype showing the invited user deletion banner" style="width: 100%; height: auto;">
      <figcaption>A screenshot from v13 of the prototype showing the invited user deletion banner</figcaption>
    </figure>
  </div>
</div>

In terms of content for this feature, several factors had to be considered:
- Deleting a registered user would actually deactivate them. This is for audit purposes, as we still need a record of the actions they took.
- If the user is invited, they would be deleted from the service and the invite link would be disabled to prevent further registration.
- Once a user has been deactivated, they cannot be reactivated. If they return, they would need to be invited as a new user.

As a result, we used different content depending on whether the user was deleting a registered or invited user. The action was labeled "Delete user" for registered users and "Cancel invitation" for invited users. This content was adapted on the confirmation screen, where we ask the SRO to confirm the action using yes/no options.

## How we tested our ideas and what we found
We spoke to 4 participants as part of this round of user research. All sessions were conducted over MS Teams and lasted for an hour. After gathering background information (device used, digital literacy, organisation size), we asked participants to complete 4 tasks. One of these tasks was related to deleting a user. Participants were provided with a colleague's name and asked to remove them from the service.

All participants found the task "easy" and "straightforward" to do, completing it quickly.

Reasons cited by participants for deleting a user included:
- The user left the organisation.
- The user changed roles.
- The user moved to a different location within the parent organisation.
- Suspected fraudulent activity.

Similar to the 'delete a claim' feature, the primary disadvantage perceived by users was accidentally deleting a user and then having to re-add them. Another potential disadvantage was needing to re-add users if they returned to the organisation and not having their record available once deleted. However, the two-step process was believed to reduce the likelihood of these issues.

One user suggested that only the SRO should have the ability to add or delete users, as they are the most familiar with who should have access. This restriction is built into the feature.

Overall, the information on the second screen was sufficient to confirm the user being deleted. Users acknowledged that, since there are fewer submitters than learners, duplicate names are less likely. One user suggested adding "job role" to the information provided, but this was not considered essential for identifying the user.

Overall, this validated our hypotheses and design thinking.

## What we will do next
This feature will move into development, and we will continue to monitor its usage during private beta. While the addition of "job role" on the final screen was suggested by one user to increase confidence in deleting the correct user, it was not deemed necessary based on the overall feedback. This will be monitored further during private beta.