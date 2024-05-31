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

To use the service users organisations will need to be onboarded and in turn the users for the organisations will need accounts. The onboarding of organisations is the mechanism to ensure they are a legitimate organisation and the requirement for this and user authentication mean that we have the relevant checks in place to reduce fraud and ensure a more secure service.

An additional nuance of the organisation onboarding process is the 'signatory'. This signatory is a suitably responsible person in the organisation who sign the grants determination letter on it's behalf which allows the organisation to make use of the fund. For MVP the signatory would be the only user of the service for that organisation.

Due to a tight deadline for the private beta launch the process for organisation onboarding and the account creation process for signatories was heavily tech driven. A core part of this was the use of the Azure B2C technology for the authentication part of the process. This meant the design was heavily constrained by this technology and producing designs and a flow that would involve the most minimal amount of tech effort to develop.


## What our ideas were

This process for designing this journey began from a process flow formed by the business analyst and technical architect. This flow was deemed the most minimal effort to develop and is where the discussion with design then started. After reviewing this business process two small additions were agreed to allow users to check information they had inputted in certain places. This resulted in the following process flow:

![A screenshot from miro showing the initially agreed signatory onboarding process flow.](process-flow.jpg "Signatory onboarding process flow")

The onboarding of organisations, in particular the signatory of the organisation is formed of two core parts. The first part of the process is registering the organisation which is done by a BSA processor. This would trigger an email to be sent through to the the signatory which initiates the second part of the process where they setup there login details and complete account setup in the service. 

One of the key limitations of the authentication is the use of Azure B2C which has limitations on the styling and content that can be changed. Those options are limited to changing of the background colour behind the modal and the logo. It was highlighted as risks that:
- using Azure B2C may exclude or prevent some users accessing the service as it may not be accessible and does not align to GDS standards
- the different styling could erode trust in the service

Here is an example of the Azure B2C screen:
![A screenshot from the account creation of the prototype showing an example of a Azure B2C screen](azure-b2c.png "Azure B2C account creation")

As a team we had two main concerns firstly that the requirement for users to use the authenticator app as part of the authentication process would cause a key pain point in the journey which created the following hypothesis:

>**We believe that** using authenticator app as part of the authentication process
>**For** signatories
>**Will** exclude and prevent some users from signing up and accessing the service

The other concern we had was around the steps taken once in the service that requires the signatory to add in bank details. We were concerned that the signatory may not have this information to hand and the journey did not easily accommodate users leaving the process and returning. Our general hypothesis was:

>**We believe that** information needed for account setup will not held to hand by signatories and they will need to leave the journey to get that information returning at a later time to complete


Given the technical and delivery constraints we were under the decision was made by the product owner to proceed with testing the very simplistic transactional journey with users. We would then assess following the results of this round of usability testing to understand how we might proceed. 

![A screenshot from v8 of the prototype showing the verify details screen from the account creation journey for the signatory.](verify-details.png "v8 'verify details' screen from the account creation journey")

To view the version that was tested with users go to [v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) (password: bsaasc123)


## How we tested our ideas and what we found
We ran usability testing on this journey w/c 8 April 2024, we ran this with users some of which were signatories some of which were not. We found that
- users unsure where pre-populated data would come from
- authenticator app wasn't well understood and it would likely cause the most challenge and friction in the journey
- bank details wouldn't usually be to hand for the signatory they would need to get this from colleagues and therefore may need to leave the journey and co,me back to it

The results provided supporting arguments towards both our hypotheses, that users will struggle with the authenticator app and signatories may not have bank details to hand when completing this journey. 

## What we will do next
Despite evidence that showed the authenticator app would cause a pain point for users the technical architect didn't feel this was enough to go to the NSA BSA technical authority with to allow us to move away from the authenticator app which is the preferred standard. We agreed that we would monitor this during Private Beta to gain further evidence. 

We were also limited in exploring alterations to the journey flow to support users leaving to get the bank details and returning at a later time (for example by using a task list pattern). To try and accommodate the user behaviour we agreed to write copy in the invitation email to lay out what the signatory will need before starting the process. Additionally the journey progress would be saved so that if users returned at a later time they could pick up where they left off. 

We are aware that the entire onboarding process for organisations for the start of private beta will note scale well due to the lack of self service sign up options along with limitations on how this is initiated. As part of any work to address that we would look to iterate the existing account creation journey to better accommodate user behaviour. 

