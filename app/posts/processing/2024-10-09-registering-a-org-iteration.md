---
title: Registering a organisation iteration
description: A number of security risks were identified, work to handle signatory invites sent to the wrong email address
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-08-25
tags:
  - processing-version-5
  - process-a-cpd-claim
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

Three journey flows developed, id's to search to force down particular journeys in the prototype:
- New org (type in "G03944234"), add a signatory and invite them and org. 
- A invited not registered signatory (type in "B02944934"), can send a new invite or edit details to send new
- Registered signatory (type in "D18946931"), which just displays information

## Why we did this work

There have been cases where the wrong email address has been entered during the registration, resulting in the signatory invitation being sent and exposing the risk of someone outside of the organisation gaining access.

## What our ideas were

>**We believe that** displaying the organisation and invited or registered signatory details
>**Will be a useful feature for** processors and css staff
>**As it will** help them to complete customer verification with the person calling before discussing any details of the account

>**We believe that** displaying the email address of invited signatory
>**Will be a useful feature for** processors and css staff
>**As it will** help them to verify if is correct

Where it is incorrect, they must be able to handle the following two scenarios:
- The user hasn’t completed registration
- The user has completed registration and gained access to the organisation

>**We believe that** allowing the processor to update the details on the invited and not yet registered signatory and resend the invite which will deactivate the previously sent email
>**Will be a useful feature for** processors and css staff
>**As it will** help them correct any errors

>**We believe that** setting the expiry of a time of a email invitation to 24 hours
>**Will be a useful feature for** processors and css staff
>**As it will** reduce the reduce someone gaining access to the organisation in the event the invitation is sent to the wrong email

For the scenario of a completed registration of a incorrect person we contemplated adding a option to deactivate the account within the service seeing it as a quick win, then follow up with internal processes for incident management. I had questions on what would be next steps on a deactivation, do we then let them invite a new signatory in the service? Held a workshop with the delivery team to come to agreement.

#### Post workshop 24th October a few updates agreed:

![A screenshot taken of the current journey showing question mark over the deactivated registered signatory flow](current-journey-register-org.png "Current journey showing question mark over the deactivated registered signatory flow")

Scenario: An organisation has in the past been registered with a signatory. The signatory has then been deactivated. What actions are allowed next?

- Do we want to purely deactivate the signatory and end it there.
- Do we want to allow them to add a new signatory?
- When deactivated and we exit the flow, then they re-enter and enter the workplace id, what are they presented with as they will have no registered signatory? Is the org still "registered" without one, what does it mean to be registered?
- Do we show information of deactivated account history?

![A screenshot taken of option 1 of how to handle the deactivated signatory flow](option-1.png "Option 1")
- The organisation has been registered and currently have an active signatory. The staff deactivate the signatory. Give a option to add a new signatory which takes them to the signatory sign up.
- The organisation has previously been registered but then had the signatory deactivated. The staff has then gone out of the flow and entered the workplace ID again. A screen of "the org is registered but needs a new signatory" is shown, showing details of deactivate signatory and a button to sign up the new one. Question is the organisation still "registered" without a active signatory?

![A screenshot taken of option 2 of how to handle the deactivated signatory flow](option-2.png "Option 2")
- The organisation has been registered. The staff wants to deactivate the signatory. Give a option to add a new signatory which takes them to the signatory sign up.
- The organisation has previously been registered but then had the signatory deactivated. The staff has then gone out of the flow and entered the workplace ID again. With no active signatory the flow takes them straight to check org details are correct screen replicating the flow of if the organisation had never been registered and go through sign up flow again.

Pros of option 1 are that it adds context to what has happened previously with the organisation, displaying the deactivated signatory history and showing option to add a new one. 

#### Outcomes
- The conversations led to the "quick win" solution actually opening up more questions than originally thought. 
- Remove the "quick win" solution of adding "deactivate" functionality, show the details of signatory/org and leave it to the processor to raise concerns. Instead research into the offline process for solving this currently as needs more exploration.
- A invited and not yet registered signatory can have both name and email updated which will involve a new invite to be sent for these details to be updated

## How we tested our ideas and what we found
- To be tested with users week of 11th November.
