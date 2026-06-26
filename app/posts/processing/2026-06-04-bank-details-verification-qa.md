---
title: Verifying bank details - QA side
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

Bank details verification is currently a largely manual process involving multiple spreadsheets, offline communication and several teams. Around a year ago, the team explored opportunities to improve the process by reducing reliance on spreadsheets, preventing delays for organisations and processors, and bringing verification outcomes into the service. However, changes to delivery priorities meant the work was paused before any changes were implemented. We have now revisited the work to validate previous assumptions, understand whether the problem space has changed, and identify the most valuable improvements to take forward. 

#### Organisation side of the journey 

This work was approached by looking at both sides of the service and journey holistically (BSA and organisation), then the organisation side went into design and testing. The design process has been written up in a post detailing more into the decision on the approach for this piece of work and can be found on the claims side post <a href="/claims/bank-details-org">here</a>. How I then worked through the QA and processor side is detailed below.

## What our ideas were

The direction of this piece of work is to deliver a MVP that replaces 2 of the 3 spreadsheets that currently are part of the bank verification process. The first holds all the organisation bank details for the QA's to do the checks from that is updated with a weekly export from the service by the Digital Support team, and we will replace this with a OM task created and assigned to a QA once the org submits their bank details in the service. The last holds the results that the processors check when processing claims to see whether the details have been fully verified, and is a result we will now record and is visible in the service. Organisation's won't be able to submit claims until their details have been verified so this reduces the security risk of processor's potentially processing claims from unverified organisations. The offline issue resolution spreadsheet will continue to exist, with potential to iterate in the future. The hypothesis is that this is the minimum we can do to start delivering some value in this process.

### Clarified process to incorporate into designs

Sometimes if the result from AccessPay comes back as partial match, then the QA may reach out to the organisation for updated details or clarification. In some instances they may accept the partial match result as it may be a slight name mismatch and it shouldn't be a issue when payment is made. Bank details here would be verified at risk and this needs to be accounted for in our QA journey.

Additional business requirements:

What level of information must be captured in the service for audit purposes?
- Include screenshot of the accessPay result showing clearing the details entered (account number, sort code, buisness account, name) and the AccessPay result for those details
- A note is required if the details had a partial match but are being verified at risk, and if no match. This note is internal facing only to QA's, processor's won't be able to see the AccessPay results and notes, only the final outcome status of "verified" or "verification failed"

### Verifying bank details steps

- OM task created and assigned to a QA once the bank details have been submitted by a organisation
- The QA would go to the service and search using the workplace ID contained in the task
- The status of the bank details will be displayed in the service 
- A processor will only need to see the details with the account number masked and the bank details verification result. 
- Added a "Verify bank details" button that would be present only for a QA with role based access in the service
- The QA would do the offline AccessPay check with the details displayed in service. If the result is not a full match, this is resolved offline via email or phone with the organisation.
- Once they have the final match, they can then click "verify bank details" button and record the final outcome in the service.
- If the AccessPay result is a partial match, there may be instances the QA will ask for further clarification and accept verify the details at risk
- If the AccessPay result is a no match or unable to check, the QA can request updated details. Once provided and they successfully pass the AccessPay check, the QA can make a service desk request to update. Once they have been updated the QA will be informed, they can see the updated details in the service, and they can record the details as verified. 
- If the organisation doesn't respond to the offline communications, after a specific timeframe the QA can record it as verification failed.

#### Language 
Decided to use the language of the processor side and say "Not yet verified" instead of "submitted" on this side of the service. This is similar to what we do with claims of "Not yet processed" on processor side and "submitted" on claims side.

This meant had to change the design slightly with moving where we put the submitted date as it no longer worked next to the status like it does with verified and verification failed. It works well sometimes to have the design be slightly different for different states to make it stand out

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="qa-submitted.png" alt="QA view - Not yet verified bank details with option to verify" style="width: 100%; height: auto;">
      <figcaption>QA view - Not yet verified bank details with option to verify</figcaption>
    </figure>
      </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="processor-submitted.png" alt="Processor view - Not yet verified bank details with option to verify" style="width: 100%; height: auto;">
      <figcaption>Processor view</figcaption>
    </figure>
  </div>

</div>

### Ideas 

A few different elements to explore in designs
- How to ask the QA the question that leads to either a verified or verification failed result
- How to collect screenshot of accessPay result
- How to ask for additional information based on the AccessPay result e.g. a note is only needed for partial matches that have been verified at risk or a no match rejection.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="evidence-required.png" alt="Requirements for each result - conditional reveal" style="width: 100%; height: auto;">
      <figcaption>Diagram to visualise what is required for each result</figcaption>
    </figure>
  </div>
</div>

#### Option 1 - Step by step questions

First was simply asking "Should the bank details been verified?" With answers of yes or no, and a area to upload a screenshot. Then a lead on question of "is there any additional information" where they could explain why they have verified at risk or rejected.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="option-one-question.png" alt="Step 1 - Whether to verify" style="width: 100%; height: auto;">
      <figcaption>Step 1 - Whether to verify</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="option-one-screenshot.png" alt="Step 2 - upload screenshot" style="width: 100%; height: auto;">
      <figcaption>Step 2 - upload screenshot</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="option-one-additional-info.png" alt="Step 3 - add any additional info" style="width: 100%; height: auto;">
      <figcaption>Step 3 - add any additional info</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="option-one-check-answers.png" alt="Step 4 - check answers and what have uploaded" style="width: 100%; height: auto;">
      <figcaption>Step 4 - check answers and what have uploaded</figcaption>
    </figure>
  </div>
</div>

This option felt like overkill with so many screens for each part when it felt it could all be collected together and then reviewed. 


#### Option 2 - Reframing the question with the AccessPay result as the input

By making the final AccessPay result the input of QA's into the service, we can conditionally reveal additional inputs based off the result and let the service work out the final outcome. This design would all us also to capture and quantify the actual AccessPay result without having to dig into the notes attached. We also tried out placing al the inputs onto one screen. This is something we can dig into in UR as to whether this is cognitively overwhelming.

We took this idea forward as it would allow us to better track the data and also to manipulate what additional data we want. What the result is then translates to the final outcome of either verified or verification failed, similar to how we lead to a claims processing outcome. Important to remember that this is the final AccessPay result and outcome and all interim results are still kept offline. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="accesspay-result.png" alt="Input AccessPay result radio" style="width: 100%; height: auto;">
      <figcaption>Input AccessPay result - radio selection</figcaption>
    </figure>
  </div>
</div>

Scenarios and outcomes:

Below are potential scenarios that can play out in the bank details verification process, which shaped how we designed the screen. 

Scenario 1
- QA enters details into AccessPay
- AccessPay result of "Match"
- QA select "Full match" in service
- Uploads screenshot of accessPay "Full match" result
- Bank details are verified

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="full-match-input.png" alt="Full match - conditional reveal" style="width: 100%; height: auto;">
      <figcaption>Full match - conditional reveal</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-full.png" alt="Full match - confirm outcome" style="width: 100%; height: auto;">
      <figcaption>Full match - confirm outcome</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="full-match-verified.png" alt="Bank details - verified" style="width: 100%; height: auto;">
      <figcaption>Bank details - verified</figcaption>
    </figure>
  </div>
</div>

Scenario 2
- QA enters details into AccessPay
- AccessPay result of "Partial match"
- QA reaches out to organisation and they provide updated bank details
- QA enters new details into AccessPay
- AccessPay result of "Full match"
- QA submits a service desk request to update the details in the service
- The service desk request is actioned and completed 
- QA gets notified and can see updated details in service
- QA select "Full match" in service
- Uploads screenshot of accessPay "Full match" result
- Bank details are verified

(Same visual journey as Scenario 1 for what to input into service)

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
      <img src="partial-match-input.png" alt="Full match - conditional reveal" style="width: 100%; height: auto;">
      <figcaption>Partial match - conditional reveal</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-partial.png" alt="Partial match - confirm outcome" style="width: 100%; height: auto;">
      <figcaption>Partial match - confirm outcome</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="partial-match-verified.png" alt="Bank details - verified" style="width: 100%; height: auto;">
      <figcaption>Bank details - verified</figcaption>
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
      <img src="no-match-input.png" alt="No match - conditional reveal" style="width: 100%; height: auto;">
      <figcaption>No match - conditional reveal</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-no.png" alt="No match - confirm outcome" style="width: 100%; height: auto;">
      <figcaption>No match - confirm outcome</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="no-match-failed.png" alt="Bank details - verification failed" style="width: 100%; height: auto;">
      <figcaption>Bank details - verification failed</figcaption>
    </figure>
  </div>
</div>

On scenario 4 we clarified with ops and buisness that if the org hasn't responded but the access pay result shows as a partial match that we wouldn't be able to verify with caution, we should record them as a no match in the system but have the screenshot show the partial match. Currently if the QA has that scenario then the processors sheet shows as a no match until they have received confirmation from the org, even if its a partial match on the QA spreadsheet. This is to be watched in testing as it might mean we need to introduce a question of yes or no after to say whether to be verified or not depending on whether they've provided additional info.

#### Processor view

- Decision to hide the Access pay result from processors, including the fact the details may have been verified at risk. The "verification" or "verification failed" result is the only value necessary to display to processors. If the QA has decided to verify it, the processor can progress with processing the claim. The processor wouldn't have received a claim that didn't have its bank details verified, so checking the status is a step they can remove from their process.

- Account number is also always masked from processor. For a QA the account number is only masked when the details have been verified.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="processor-verified.png" alt="Processor view - verified" style="width: 100%; height: auto;">
      <figcaption>Processor view - verified</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="processor-failed.png" alt="Processor view - verification failed" style="width: 100%; height: auto;">
      <figcaption>Processor view - verification failed</figcaption>
    </figure>
  </div>
</div>

#### Questions that came out of a design crit of option 2

- Is there any need for the name of the QA that verified the bank details to be displayed on the processed bank details tab? This is to be tested in UR.
- What time period should OM task stay open in QA's pot without hearing back from org before they reject the bank details. This is for ops to determine process around.
- People found "submitted" on the QA side misleading so we changed to "Not yet processed" on the QA side to mirror the language used on the processor side of the service. Also used language like "QA's note" on the conditionally revealed inputs to re-enforce its internal facing only.

## How we tested our ideas and what we found

Went into testing Thursday 18th June with 4 band 4 processors who will be tasked with processing bank details.

Questions:
- Are users able to navigate into bank details to start the verification journey and, are they able to find the green button to start verifying?
- Are users able to navigate to verify bank details using the information they would typically receive from OM
- Does it make sense viewing the bank details and then engaging with a verify journey as a separate action.
- Is it overwhelming having all the conditionally revealed inputs on one screen?
- How would a user take a screenshot, do they understand they need to include the full screen and all the details entered as well as the AccessPay outcome
- How would they expect an organisation to amend a failed bank verification?
- Is it clear to users that this note is only seen by them. (But also still could be subject to freedom of information requests similar to any note they keep.)
- Does it make sense how the AccessPay results map to the final outcomes?
- If the organisation doesn't respond to offline communications, would they expect to record it as a no match AccessPay result?
- Using the processor side type language of "not yet verified" rather than submitted - is this expected?
- Would QA's want to see name of colleague who verified the details on the page 
- Was it expected that the processor's couldn't see the AccessPay results.

The findings:
- It fit the QA's process and flow and they understood how the outcomes mapped
- It would save the processor's reaching out to the QA's to confirm bank details verification status, it is expected processors only need to see the "verified" or "verification failed" status

## What we will do next

Post UR-analysis, no updates were needed. Designs of the organisation and processor side of the service have been handed over to tech to begin development. 