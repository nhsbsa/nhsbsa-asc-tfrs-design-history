---
title: Registering a organisation iteration
description: A number of security risks were identified, work to handle signatory invites sent to the wrong email address
author:
  name: Hannah Williams
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

## Why we did this work

#### handle signatory invites sent to the wrong email address

There have been cases where the wrong email address has been entered during the registration, resulting in the signatory invitation being sent and exposing the risk of someone outside of the organisation gaining access.
Currently BSA staff are not able to manage this scenario, they need to be able to:
Complete customer verification with the person calling before discussing any details of the account
See the email address that was invited so they can verify if it is correct
Where it is incorrect, they must be able to handle the following two scenarios
The user hasn’t completed registration - they can update the email address and resend the invitation
The user has completed registration and gained access to the organisation - they can deactivate the account that has been invited and follow internal processes for incident management
The expiry time of the signatory email is currently set to 24hrs, it will also be reduced to reduce the risk of someone gaining access to the organisation in the event the invitation is sent to the wrong email

Current journey:
BSA user enters the workplace ID
2.1 User invited but hasn’t registered
2.2 User invited and has registered

Out of Scope
Automatically pausing claims and the ability to un-pause claims

Signatory invite email expiry
- Reduce the expiry of the invitation link on the signatory email from 24hrs to Xhrs

User invited but not registered
- BSA staff can continue to resend the invite to the current email address (where the email address was correct)
BSA staff can see the organisations name and address so they can complete customer verification
BSA staff can see the signatory last name, first name and email address
BSA staff can edit the signatory email address
If the signatory email address is edited:
Update the signatory email
Deactivate the previous invitation link
Send a new invitation email with a new link to the new email address

User registered
- BSA staff can see the organisations name and address so they can complete customer verification
BSA staff can see the signatory last name, first name and email address
BSA staff can deactivate the signatory user account 

#### Post workshop 24th October a few updates agreed:

![A screenshot taken of the step by step navigation pattern](current-journey-register-org.png "Current journey")
Questions:
- Scenario: An organisation has in the past been registered with a signatory. The signatory has then been deactivated. What actions are allowed next
- Do we want to purely deactivate the signatory and end it there.
- Do we want to allow them to add a new signatory?
- When deactivated and we exit the flow, then they re-enter and enter the workplace id, what are they presented with as they will have no registered signatory? Is the org still "registered" without one, what does it mean to be registered?
- Do we show information of deactivated account history?

![A screenshot taken of the step by step navigation pattern](option-1.png "Option 1")
Scenarios to consider in option 1: 
- Scenario 1 - The organisation has been registered and currently have an active signatory. The staff deactivate the signatory. Give a option to add a new signatory which takes them to the signatory sign up.
- Scenario 2 - The organisation has previously been registered but then had the signatory deactivated. The staff has then gone out of the flow and entered the workplace ID again. A screen of "the org is registered but needs a new signatory" is shown, showing details of deactivate signatory and a button to sign up the new one.

![A screenshot taken of the step by step navigation pattern](option-2.png "Option 2")
Scenarios to consider in option 2: 
- Scenario 1 - The organisation has been registered. The staff wants to deactivate the signatory. Give a option to add a new signatory which takes them to the signatory sign up.
- Scenario 2 - The organisation has previously been registered but then had the signatory deactivated. The staff has then gone out of the flow and entered the workplace ID again. With no active signatory the flow takes them straight to check org details are correct screen replicating the flow of if the organisation had never been registered and go through sign up flow again.

Outcomes
- Remove the "quick win" solution of adding "deactivate" functionality, show the details of signatory/org and leave it to the processor to raise concerns. Research into the offline process for solving this.
- a invited and not yet registered signatory can have both name and email updated which will involve a new invite to be sent for these details to be updated
- backs and cancels to keep user feeling like moving forward
- Three journey flows developed (id's in brackets below to test in prototype)
new org (type in "G03944234"), add a signatory and invite them and org. 
a invited not registered signatory (type in "B02944934"), can send a new invite or edit details to send new
registered signatory (type in "D18946931"), which just displays information

Call to discuss final design, updates in miro, questions gone with Stevie and Sami to discuss further business concerns over ability to allow editing of signatories and resending of invites


## What we did



