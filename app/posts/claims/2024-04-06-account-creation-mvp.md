---
title: Account creation for signatories
description: With a tight delivery deadline for the launch of private beta the organisation onboarding was heavily driven by technical constraints.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-06
modified: 2024-04-15
tags:
  - claims-version-8
  - account-creation
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---

## Why we did this work

To use the service, organisations must first be onboarded, and users within those organisations will need accounts. Onboarding ensures that the organisations are legitimate, and the user authentication process helps reduce fraud and maintain a secure service.

An additional aspect of the organisation onboarding process is the **signatory**. This person is a responsible representative from the organisation who signs the grants determination letter on behalf of the organisation, enabling them to access the fund. For MVP, the signatory would be the only user of the service for their organisation.

Due to tight deadlines for the private beta launch, the organisation onboarding and signatory account creation process was heavily driven by technology. The use of Azure B2C for authentication meant the design was constrained by the technology, and the goal was to minimise the technical effort required to develop the solution.

## What our ideas were

The design process began with a flow defined by the business analyst and technical architect. This flow was chosen to minimise development effort, and design work started from there. After reviewing the business process, we agreed to add two small elements allowing users to verify their inputted information at certain stages. This resulted in the following process flow:

![A screenshot from Miro showing the initial signatory onboarding process flow.](process-flow.jpg "Signatory onboarding process flow")

The onboarding process consists of two main steps: 
1. Registering the organisation, done by a BSA processor, which triggers an email to the signatory.
2. The signatory then sets up their login details and completes their account setup.

A key limitation was Azure B2C, which restricts how much styling and content can be changed. The customisation options are limited to changing the background colour of the modal and the logo. We identified the following risks:
- Azure B2C may not be fully accessible and doesn’t align with GDS standards, which could exclude some users.
- The different styling could erode trust in the service.

Here is an example of the Azure B2C screen:

![A screenshot from the account creation prototype showing an example of an Azure B2C screen.](azure-b2c.png "Azure B2C account creation")

As a team, we had two main concerns:
1. The use of the **authenticator app** as part of the authentication process could create a key pain point in the journey. This led to the following hypothesis:

   > **We believe that** using an authenticator app as part of the authentication process  
   > **For** signatories  
   > **Will** exclude or prevent some users from signing up and accessing the service.

2. The requirement for the signatory to input **bank details** raised concerns. We were worried that they may not have this information at hand and that the journey didn’t easily support users leaving and returning later to complete it. Our hypothesis here was:

   > **We believe that** signatories will not have the necessary information for account setup readily available,  
   > **And they will need to leave the journey** to gather that information and return later to complete it.

Given the technical and delivery constraints, the product owner decided to proceed with testing this minimal transactional journey with users. We would then assess the results from usability testing to determine how to proceed.

![A screenshot from v8 of the prototype showing the 'verify details' screen from the account creation journey.](verify-details.png "v8 'verify details' screen from the account creation journey")

To view the version that was tested with users, go to [v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) (password: bsaasc123).

## How we tested our ideas and what we found

We ran usability testing on this journey during the week commencing 8 April 2024. We tested with a mix of signatories and non-signatories and found the following:
- Users were unsure where pre-populated data would come from.
- The authenticator app wasn’t well understood and would likely cause the most friction in the journey.
- Signatories did not typically have their bank details to hand, so they would need to retrieve it from colleagues, requiring them to leave the journey and return later.

The results supported both of our hypotheses: users would struggle with the authenticator app, and signatories would need to leave the journey to gather bank details.

## What we will do next

Despite evidence suggesting that the authenticator app would cause pain points for users, the technical architect felt that it wasn’t sufficient to approach the NSA BSA technical authority to remove the authenticator app, as it is the preferred standard. We agreed to monitor this during private beta to gather further evidence.

We were also limited in exploring changes to the journey flow to support users leaving the process to get bank details and returning later (for example, using a task list pattern). To address this, we decided to include guidance in the invitation email about what the signatory would need before starting the process. Additionally, we ensured that the journey progress would be saved so users could return to where they left off.

We are aware that the entire onboarding process for organisations in private beta will not scale well due to the lack of self-service sign-up options and the limitations of how the process is initiated. As we work on improving the process, we plan to iterate on the existing account creation journey to better accommodate user behaviour.


