---
title: Removing bank details from the SRO onboarding journey
description: To better support the possibility of self-serve onboarding and facilitate more automated bank details checks.
authors:
    - name: Mark Portnell (Interaction designer)
      url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
    - name: Martine Gallie (Content designer)
      url: 'mailto:hi.martine.gallie@nhsbsa.nhs.uk'
date: 2025-03-07
modified: 2024-04-28
tags:
  - private-beta
  - claims-version-13
  - onboarding
  - claims-account-creation
  - claims-bank-details
aside:
  title:  Claims Prototypes
  content: |
    [View claims v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v15/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As part of the work we have been doing to explore ways to enable a more self serve approach to onboarding we identified that changing the input of bank details from being tied to the account creation steps of an SRO to being position within the service may provide a number of benefits. We had the following two hypotheses:

>**We believe that** seperating out the bank details input from the onboarding journey
>**Will be a useful feature for** SROs
>**As it will** simplify the journey and make it easier to get into the service 

>**We believe that** separating out the bank details input from the onboarding journey
>**Will be a useful feature for** SROs
>**As it will** mean that SROs won't be hindered getting into the service if they don't have bank details to hand 

On top of this there were two strategic reasons why we wanted to explore this work:

- Would better support both automated and semi-automated bank details checks that are currently being explored.
- Would better support the ability for orgs to edit bank details

As a result we chose to test concepts with users to explore these hypotheses.

## What our ideas were

Due to the time-boxing of this exercise we had limited time to explore too many ideas in the design phase. Our starting ideas were:

1. Give the option to add bank details during onboarding if they want to, (they can choose to add them later though)
2. Remind users while using the service that they won't be able to submit claims until bank details are added.
3. SROs will have the ability to add the bank details through any notifications about bank details. Submitters will be informed to speak to their SRO.
4. Bank details would need to 'live' somewhere at an organisation level.

Our starting choice was the introduction of the [service navigation component](https://design-system.service.gov.uk/components/service-navigation/). This would contain 2 core pages:
- Manage claims
- Organisation details

and then two additional pages for SRO users
- Manage team
- Bank details

This route would allow us to do away with the funding pot signposting page that, since the removal of revalidation funding (CPD) from the service last year had become superfluous. 

![A screenshot of the signposting page from v12 of the prototype](signposting-page.png "Superfluous signposting page")

We proposed using the notification banner to inform users of missing bank details. This would persist on the manage claims screen until the SRO has added them. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="SRO-landing-screen.png" alt="A screenshot taken of the landing screen for an SRO in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>SRO service navigation design</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-landing-screen.png" alt="A screenshot taken of the landing screen for a submitter in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Submitter service navigation design.</figcaption>
  </figure>
  </div>
</div>

As you may notice we added some additional organisation information to the header. We know in the future we may have to support organisation switching for users who manage multiple organisations potentially as part of a parent child structure. We have taken this pattern from the [Claim funding for mentor training](https://itt-mentoring-beta-94341ca35a2c.herokuapp.com/) who have a similar challenge where users are responsible for multiple organisations. Another benefit of this alongside the addition of the organisation details tab was that it would have the potential to better support ID/CV during calls to the contact centre as it would make information required for aht process more easy to access in the service. As we have previously heard that it is often a challenge for users to dig out their organisation workplace ID when calling the contact centre.

![A screenshot of the new organisation details page from version 15 of the prototype](organisation-details.png "Organisation details page")

We reused the design to input bank details from the onboarding journey as this is a standard GDS pattern for bank details. 

We used a standard summary list pattern to present the bank detail back to the user.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="empty-bank-details.png" alt="A screenshot taken of the bank details screen without bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Bank details page before adding bank details</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="full-bank-details.png" alt="A screenshot taken of the bank details screen with bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>Bank details pager after adding bank details.</figcaption>
  </figure>
  </div>
</div>

As we are still waiting on decision surrounding the automation of bank details checks, we need to design to support two possible routes:
- Automated check where response can be provided immediately following input.
- Semi-automated check where the response from the check would be delayed from input and provided later.

As a result we felt having a separate tab showing the bank details would support both options depending on what decision is made. As automated checks could be provided on the bank details input page itself in real-time and then the screen where we present the bank details once they have been inputted could be iterated to include any form of checks and responses that come back to the user.

The final aspect of the design would be to prevent users from submitting claims when bank details have not been added. This would apply for both users types however the SRo would have the option to add bank details at that point if they wished. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="SRO-missing-bank-details.png" alt="A screenshot taken of the screen preventing the SRO from submitting claims if the organisation doesn't have bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>The screen a SRO would see when trying to submit a claim when the organisation is missing bank details</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="submitter-missing-bank-details.png" alt="A screenshot taken of the screen preventing a submitter from submitting claims if the organisation doesn't have bank details in v15 of the prototype." style="width: 100%; height: auto;">
    <figcaption>The screen a submitter would see when trying to submit a claim when the organisation is missing bank details</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found

### Who we tested with
7 participants:​
- 6 SROs and submitter​
- 1 submitters only​

Range of organisations:​
- 3 small, 3 medium, 1 large (range of staff 10-750)​
- Type of care: residential, day, community and domiciliary care

### How we tested
- Task-based moderated usability testing with ASC org users​
- Pre-task semi-structured interview questions​
- Post-task follow up questions​
- Themed and affinity sorted data​
- Scenario: You have/ Your SRO has signed up your organisation to the scheme, but have/has not yet added any details of where your claim reimbursements can be paid to.

### What we found: the headlines
- All users completed bank details successfully and thought the flow was 'straightforward'​
- It was acceptable for users to be able to create claims (but not submit them) prior to adding bank details​
- Separating bank details from the onboarding flow is useful as users may not have access to bank details when onboarding to the service​
- Most participants missed the 'important' information banner initially​
- Who can add or see these details? – it should only be the SRO​
- Tabs were welcomed by users as a way to navigate the service and generally met user expectations of what they'd find within them​
- After adding bank details all users clicked on the claims tab as their 'next' thing to do – it was positively rated that the tab title was always there​
- Participants thought there should be different levels of access for tabs, with submitters not thought to need access to the bank details and manage team tabs as they wouldn't be expected to add or view bank details or invite users

### UR recommendations
1. Content and design changes could be made to both SRO and submitter 'add bank details' banners to make them clearer visually and that action is required​
2. SRO users need more reassurance of what they can do and see is different to what their submitters can do and see​
3. SRO users need more information about 'what happens' next in the verification process​
4. Consider content review of the 'adding bank details' page e.g., sort code and name on account​
5. Consider the difference between the needs of those who are SROs + submitters and those who are submitters only – more hand holding is likely required for submitters only
6. Explore the possibility of more than one bank account for organisations with multiple locations

## What we will do next
Following our review of the recommendations and agreeing actions to take forward we agreed the following for each of the recommendations above:
1. Due to the notification banner being a standard GDS component we didn’t feel there was enough evidence yet to iterate the design of the whole banner. However we felt there was opportunity to iterate the content within it to try and increase clarity.

    GOV.UK [guidance on notification banners](https://design-system.service.gov.uk/components/notification-banner/) says: ‘You can use h3 headings in [the banner] to help structure your content.’ On this basis, we iterated the banners to call out the fact that action is needed, which we believe will have more impact:

    ##### SRO submitter
    ![A screenshot of the iterated notification banner for the SRO](SRO-banner-iteration.png "The iterated version of the notification banner for the SRO")  

    ##### Submitter
    ![A screenshot of the iterated notification banner for a submitter](submitter-banner-iteration.png "The iterated version of the notification banner for a submitter")  

2. Iterate the content on the manage team, bank details and inputting of bank details screen to clarify who can do and see what and how bank details are used and stored securely by BSA.

    We added content to all three screens to make it clear that the SRO is the only person in their organisation who is able to add or view bank details, add submitters and sign the GDL.

    ##### Manage submitters (previously ‘Manage team’)
    ![A screenshot of the new manage submitters screen content](manage-submitters.png "The iterated manage submitters content")  

    ##### Bank details
    ![A screenshot of the new bank details content](bank-details.png "The iterated bank details content")  

    ##### Bank details input
    ![A screenshot of the new bank details input content](bank-details-input.png "The iterated content on the bank details input screen")  

3. Iterate the content on the 'what happens next' section to better illustrate the process to users as well as exploring adding an additional email to the existing verification process to confirm the outcome whether successful or not to SROs. It was recognised that this content would need further iteration as the process to verify bank details will soon be iterated as well.

    The content was rewritten to clarify the process used to verify bank details.
    
    It was recognised that this content would need further iteration as the process to verify bank details will soon be iterated as well.

    ![A screenshot of the new content above the call to actions on the bank details input screen](cta-section.png "The iterated content above the call to action on the bank details input screen")  

4. Iterate the hint text around the two mentioned input fields to better clarify to users what is expected.

    ##### Name on the account text input
    We requested data showing what people are entering into the account name input in order to validate the decision to change the hint text. This showed that the most common error people make is to enter the organisation name on the bank name incorrectly.

    The hint text was changed to emphasise the need to enter the organisation name correctly:

    [hint text] Enter the name of your organisation exactly as it appears on the account

    ##### Sort code text input
    As per [GOV.UK bank details guidance](https://design-system.service.gov.uk/patterns/bank-details/), we will let users enter their sort code in whatever format is familiar to them, allowing for spaces, hyphens and dashes.

5. Given this recommendation is broader than just bank details we will add to the backlog a task to review the onboarding experience and support given to submitters and iterate as needed.
6. Given the effort to support multiple bank accounts for a single organisation and the limited evidence of this need to date we agreed that further evidence of this would be required before we would take this forward. 