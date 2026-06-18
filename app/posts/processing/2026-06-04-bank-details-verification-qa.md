---
title: Verifying bank details 
description: Exploring how we can improve the bank details verification process by reducing reliance on manual spreadsheets, preventing delays for organisations and processors, and bringing key verification outcomes into the service
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2026-06-04
tags:
  - private-beta
  - processing-version-15
  - bank-details-verification

aside:
  title:  Processing prototype
  content: |
    [View processing v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v15/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

Bank details verification is currently a largely manual process involving multiple spreadsheets, offline communication and several teams.

The existing journey requires organisations to enter their bank details into the service, after which checks using the AccessPay API are completed outside the service by operational teams, with potential back and forth communication happening with orgs over the phone or email. Updates are made using service desk requests or additional clairification is recorded in a spreadsheet. Results are then manually transferred between spreadsheets before being made available to claim processors who are processing claims. They may begin processing while bank details are still unverified. 

More into the decision on the approach for this piece of work can be found on the claims side post <a href="../claims/bank-details-org">here</a>.

## What our ideas were

The direction of this piece of work is to deliver a MVP that replaces 2 of the 3 spreadsheets that currently are part of the bank verification process. The first holds all the organisation bank details for the QA's to do the checks from and we will replace this with a OM task created and assigned to a QA once the org submits their bank details in the service. The last holds the results that the processors check when processing claims to see whether the details have been fully verified and is a result we will now record in the service. Organisation's won't be able to submit claims until their details have been verified so this reduces the security risk of processor's potentially processing claims from unverified organisations. The offline issue resolution spreadsheet will continue to exist, with potential to iterate in the future. The hypothesis is that this is the minimum we can do to start delivering some value in this process.

### Clarified process to incorporate into designs

Sometimes if the result from AccessPay comes back as partial match, then the QA may reach out to the organisation for updated details or clarification. In some instances they may accept the partial match result as it may be a slight name mismatch and it shouldn't be a issue when payment is made. Bank details here would be verified at risk and this needs to be accounted for in our QA journey.

Additional business requirements:
What level of information must be captured for audit purposes?
- Need screenshot of the accessPay result showing clearing the details entered (account number, sort code, buisness account, name) and the AccessPay result for those details
- A note is required if the details had a partial match but are being verified at risk anyway, and if no match. This note is internal facing only to QA's, processor's won't be able to see the AccessPay results and notes, only the final outcome status of "verified" or "verification failed"

### Verifying bank details steps

- OM task created and assigned to a QA once the bank details have been submitted by a organisation
- The QA would go to the service and search using the workplace ID contained in the task
- The status of the bank details will be displayed in the service 
- A processor will only need to see the details with the account number masked and the bank details verification result. 
- Added a "Verify bank details" button that would be present for a QA with role based access in the service
- The QA would do the offline AccessPay check with the details displayed. If the result is not a match, this is resolved offline. Once they have the final match, they can they click "verify bank details" button and record the final outcome in the service.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="submitted-bank-details.png" alt="Bank details not yet added - SRO only" style="width: 100%; height: auto;">
      <figcaption>Bank details - submitted with option to "verify"</figcaption>
    </figure>
  </div>
</div>

### Ideas 

Explored two ways of asking the question that leads to either a verified or verification failed result.

1. Should the bank details been verified? With answers of yes or no. Then a lead on question of is there additional information / upload screenshot. 

Or 

2. What is the final AccessPay outcome? Then conditional reveals based on the answer. 

We went with option 2 as this allows us to capture the actual AccessPay result without having to dig into the notes attached. Allows us to better track the data and also to manipulate what additional data we want. What the result is then translates to the final outcome of either verified or verification failed, similar to how we lead to a claims processing outcome. Important to remember that this is the final outcome and all interim results are still kept offline. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="verify-bank-details.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Verify bank details screen - QA only </figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="access-pay-results.png" alt="Requirements for each result - conditional reveal" style="width: 100%; height: auto;">
      <figcaption>Requirements for each result - conditional reveal</figcaption>
    </figure>
  </div>
</div>

Scenarios and outcomes:

Scenario 1
- QA enters details into AccessPay
- AccessPay result of "Match"
- QA select "Full match" in service
- Uploads screenshot of accessPay "Match" result
- Bank details are verified

Scenario 2
- QA enters details into AccessPay
- AccessPay result of "Partial match"
- QA reaches out to organisation and they provide updated bank details
- QA enters new details into AccessPay
- AccessPay result of "Match"
- QA submits a service desk request to update the details in the service
- The service desk request is actioned and completed 
- QA gets notified and can see updated details in service
- QA select "Full match" in service
- Uploads screenshot of accessPay "Match" result
- Bank details are verified

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="verify-full-match.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Verify bank details screen</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-full.png" alt="confirm outcome screen" style="width: 100%; height: auto;">
      <figcaption>confirm outcome screen</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="full-match-verified.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Final outcome</figcaption>
    </figure>
  </div>
</div>

Scenario 3
- QA enters details into AccessPay
- AccessPay result of "Partial match"
- QA reaches out to organisation and they provide clarification
- QA decides to accept the partial match details
- QA select "Partial match" in service
- Uploads screenshot of accessPay "Partial" result
- QA adds additional note explaining why the partial match details are still to be verified
- Bank details are verified

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="verify-partial-match.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Verify bank details screen</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-partial.png" alt="confirm outcome screen" style="width: 100%; height: auto;">
      <figcaption>confirm outcome screen</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="partial-match-verified.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Final outcome</figcaption>
    </figure>
  </div>
</div>

Scenario 4
- QA enters details into AccessPay
- AccessPay result of "No match" or "Unable to check"
- QA reaches out to organisation
- QA and org can't reach a resolution or the organisation does not respond (for a to-be determined timeframe)
- QA select "No match" in service
- Uploads screenshot of accessPay "No match" or "Unable to check" result
- QA adds additional note explaining why they couldn't verify details
- Bank details are verification failed

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="verify-no-match.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Verify bank details screen</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-no.png" alt="confirm outcome screen" style="width: 100%; height: auto;">
      <figcaption>confirm outcome screen</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="no-match-verified.png" alt="Verify bank details screen - QA only" style="width: 100%; height: auto;">
      <figcaption>Final outcome</figcaption>
    </figure>
  </div>
</div>

On scenario 4 we clarified with ops and buisness that if the org hasn't responded but the access pay result shows as a partial match that we wouldn't be able to verify with caution, we should record them as a no match in the system but have the screenshot show the partial match. Currently if the QA has that scenario then the processors sheet shows as a no match until they have received confirmation from the org, even if its a partial match on the QA spreadsheet. This is to be watched in testing as it might mean we need to introduce a question of yes or no after to say whether to be verified or not depending on whether they've provided additional info.

Held a crit and two questions appeared:
- Is there any need for the name of the QA that verified the bank details to be displayed on the processed bank details tab? This is to be tested in UR.
- What time period should OM task stay open in QA's pot without hearing back from org before they reject the bank details. This is for ops to determine process around.
- Questions around content - We changed from submitted status to "Not yet processed" on the QA side to mirror the language used on the processor side of the service.



## How we tested our ideas and what we found

Going into testing Thursday 18th June. 

## What we will do next

Review the designs post UR analysis and iterate any actions.