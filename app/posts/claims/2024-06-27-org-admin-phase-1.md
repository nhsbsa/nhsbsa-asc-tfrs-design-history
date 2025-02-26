---
title: Enabling multiple users from an organisation
description: Enabling multiple users from an organisation means the signatory doesn't have to be the only submitter.  
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-06-27
modified: 2024-07-08
tags:
  - private-beta
  - claims-version-10
  - claims-manage-team-members
relatedUserNeeds:
  - user-need-6
aside:
  title:  Claims Prototypes
  content: |
    [View claims v10 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v10/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

For the start of private beta, a key constraint of the service was that it would only allow one user per organisation, this user was the signatory. Due to the delivery deadline and uncertainty around the legal aspect of the grant determination letter, our onboarding process for the start of private beta would need to have this signatory be the representative from the organisation who signs up and subsequently would be the only permitted user of the service from that organisation for day 1 of private beta. 

We know from research that there was a risk that in some organisations, the signatory may not also be a submitter, which posed a challenge and pain point in how that organisation might submit claims without changing their internal work allocation. To combat this, we looked to explore the idea of allowing the signatory to add other users from their organisation to the service. Internally in the project team, we called this delegated authority with the idea that the signatory, who had signed the GDL, could delegate other users who could act on their behalf to submit claims in the service.

## What our ideas were
We felt that the idea of multiple users representing the same organisation in a service wouldn't be a new concept in the GDS space, and given our ever-looming time pressures, we decided to explore what we could reuse from existing designs from other services. This research landed us at two HMRC services: HMRC Business Tax Account and MyHMCTS account. Both these services have some aspect to manage users for their organisation:

![A screenshot taken of the HMRC business tax account service.](business-tax-account.jpg "HMRC Business tax account")
![A screenshot taken of the HMRC MyHMCTS account service.](my-HMCTS-account.jpg "HMRC MyHMCTS account")

We felt that there were elements from both these designs that would help us address certain requirements of this feature for our service. 
- Both designs clearly showed the list of users and had clear CTAs
- The language of "team members" felt a lot more relatable for users than simply calling them "users."
- Showing status made us start to think about how we would manage the different states, particularly the states of the invite.
- The added touch of showing who you are and your role in the management of users also felt like it sat well with what we were trying to achieve.

The concept we decided to test with users was as follows:

![A screenshot taken of the manage team members screen from v10](v10-org-admin.png "v10 of the manage team members screen")

The remaining design challenge was the journey to get to this screen. We knew that in the future, there would potentially be other admin-type tasks that users with the correct permissions would be able to carry out. So, as usual, we wanted to design with extensibility in mind. We explored in sketches a few different ways to signpost this functionality, such as the use of tabs on the landing screen similar to the business tax account service or using navigation options in the page header. In the end, we opted for additional options on the service landing screen after login, as this would allow us to add further options in the future more easily and was generally more flexible. This resulted in this design:

![A screenshot taken of the sign posting for the manage team members screen from v10](org-admin-signposting.png "v10 showing the signposting screen")

## How we tested our ideas and what we found
We ran usability testing with 7 users on the designs w/c 26th June to understand what the barriers and facilitators were to successfully completing the 'org admin' task, as well as how users anticipated using the 'org admin' functionality in their own organisation. The findings were as follows:

### What were the barriers and facilitators to successfully completing the 'org admin' task?
- There were few difficulties in completing the organisational admin task.
- All users were able to invite a new user (John Smith) and re-invite two colleagues who had not yet responded to the invites.
- For the majority of participants, this took a minute or so, suggesting that this page works well for users.
- Most users correctly identified the 'last name' and 'first name' fields, but one user did not, entering the first name in the last name field (and vice versa). This user may have expected that the first field would be the first name. This may need some further testing and monitoring during Private Beta to establish if this is an ongoing problem.
- Part of the success may be due to the participants' familiarity with gov.uk patterns. Users reported that the actions felt similar to the ASC-WDS and DAS.
- There were two areas for improvement: firstly, allowing users to remove (delete) former team members. Users felt this would be useful if multiple users had been added but then left the organisation. Secondly, users suggested adding a "Re-invite All" button to re-invite multiple people at the same time. These could be added to the design backlog for future iteration.

### How did users anticipate using the 'org admin' functionality in their own organisation?

#### Submitters
A **submitter** is a person in the organisation responsible for entering and submitting claims. These users typically have direct interaction with the service and are responsible for entering relevant data (like claims) on behalf of the organisation.

- Most users expected multiple submitters within their organisations, though some thought there might only be one.
- Some users expressed concerns about having too many submitters due to the risk of users seeing personal information about other colleagues. One user suggested restricting access so that managers could only submit claims for their team (e.g., 40 people rather than 1,800 staff records).
- In one organisation, the user expected that service managers would submit claims with support from a central team. This was not a commonly suggested model—most participants suggested that they or their teams (HR, L&D) would complete the claims.

#### Signatories
A **signatory** is a person who officially represents the organisation in legal or formal matters, typically signing off on the grant determination letter (GDL). They do not necessarily sign off every claim, but they are the person who will be the point of contact for the service at an official level.

- The role of the **signatory** was not immediately clear to some users. Several believed that the signatory would need to sign off on every claim, but they were relieved to learn this was not the case. Others believed that the signatory could be multiple people, either one per child organisation or several within a parent organisation.
- The role of the signatory should be clearly communicated during onboarding to ensure the right person is selected for this task.
- Possible signatories identified by users included registered managers, business owners, or HR roles (e.g., HR Directors).

## What we will do next
Our findings didn't suggest there were any major usability issues that needed rectifying. The two new features that were identified have been added to the backlog. Following testing, we did make two small changes: we removed the column referring to role type, as this had become superfluous with some changes in scope. We also made a change to when the invite could be resent due to a technical constraint that was introduced late in the design process. This meant the final design for handover was this:

![A screenshot taken of the manage team members screen from v11](v11-org-admin.png "v11 of the manage team members screen")




