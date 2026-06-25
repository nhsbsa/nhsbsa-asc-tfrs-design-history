---
title: Verifying bank details 
description: Exploring how we can improve the bank details verification process by reducing reliance on manual spreadsheets, preventing delays for organisations and processors, and bringing key verification outcomes into the service
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2026-06-01
tags:
- private-beta
- bank-details-verification
- claims-version-25
aside:
  title:  Claims prototypes
  content: |
    [View claims v25 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v25/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

Bank details verification is currently a largely manual process involving multiple spreadsheets, offline communication and several teams. Around a year ago, the team explored opportunities to improve the process by reducing reliance on spreadsheets, preventing delays for organisations and processors, and bringing verification outcomes into the service. However, changes to delivery priorities meant the work was paused before any changes were implemented. We have now revisited the work to validate previous assumptions, understand whether the problem space has changed, and identify the most valuable improvements to take forward.

#### Existing journey 

The existing journey requires organisations to enter their bank details into the service, after which checks are completed outside the service by operational teams with potential back and forth communication happening with orgs over the phone or email. Results are then manually transferred between spreadsheets before being made available to claim processors who have to check the result before they can process claims. Org's can currently submit claims before their bank detail have been verified. 

The current journey is:
- 2 API checks that happen at different points of the journey (AllPay and AccessPay)
- SRO inputs bank details into the service
- On confirm, check happens using the AllPay aPI that just verifies legitimate combination of inputs, doesn’t verify legitimate bank account. If they pass they can submit.
- Orgs can now submit claims
- Weekly the Digital support team export organisation's bank detail information from the service and save into a sharepoint document
- Info is exported to another spreadsheet for QA’s to do the checks
- QA enters info into AccessPay portal, and receive either a result of "Full match, partial match, unable to check, no match"
- If a issue, QA contacts the org offline to receieve clarification or updated details. Interim results are recorded in the QA spreadsheet with notes. 
- If details need to change, QA makes a service desk request to change
- Final results get entered into another spreadsheet where processors of claims can see whether the details are verified or not when processing claims. Somethings the result will be empty if the check hasn't yet been completed.
- The details of the organisation are displayed in the service visible only to the SRO. There is no indication whether they are verified. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="v22-bank-details.png" alt="Single learner - duplicate claim error" style="width: 100%; height: auto;">
      <figcaption>Current bank details tab - SRO only</figcaption>
    </figure>
  </div>
    <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="current-journey.png" alt="Single learner - duplicate claim error" style="width: 100%; height: auto;">
      <figcaption>Current journey api checks</figcaption>
    </figure>
  </div>
</div>

Spreadsheets:
1. Spreadsheet of bank details entered by orgs exported out of the service weekly
2. Spreadsheet QA's do the checks from and record any results and communications into, along with any further details required from the org
3. Spreadsheet processors check for verification result

This creates several problems:

- Reliance on multiple spreadsheets increases the risk of manual error.
- Organisations can begin submitting claims before their bank details have been fully verified, potentially causing delays later in the process.
- Claim processors may begin processing claims before verification is complete, creating operational and security risks.
- Organisations have limited visibility of the status of their bank details and may be unaware that further action is required.
- Operational teams spend time managing exports, spreadsheets and service desk requests

#### Previous investigations

As this work had previously been explored by a different team, we began by running a workstream kickoff session to ensure everyone had a shared understanding of the current process, problem space and any changes since the previous discovery work. We mapped the end-to-end process, reviewed previous research and operational knowledge, and validated whether the original assumptions remained accurate.

Some understanding of the current processes around how each AccessPay result is processed and followed up, especially around the unhappy paths, was needed, to be accounted for in the new designs.


| AccessPay result | Next steps |
| -------- | -------- |
| Match | Marked as verified in spreadsheet. No email is sent to organisation. |
| Partial match | QA gets in touch with organisation offline. If just needs further clarification and it's something small like a slight name mismatch, it could be verified at risk with partially matched details. If updated details are needed, new one's are provided by org and entered into AccessPay. Once a full match, QA makes a service desk request to update the details.  |
| Unable to check | Treated same as no match and QA gets in touch with org to get new details |
| No match | QA gets in touch with org to get new details. If no sucessful details are provided, could then be rejected. Any submitted claims would be rejected with rejected bank details as the reason. |

A chance the org doesn't respond to offline communications to resolve issues.

## What our ideas were

After mapping the current process, we explored several approaches ranging from full automation to a smaller MVP

### Full automation

The first option was to bring the entire verification process into the service.

Under this approach, organisations would receive verification results immediately and be able to update their bank details themselves if required.

This would provide the best user experience and remove much of the manual operational process. However, we identified several challenges:

- The current verification API cannot support the volume of verification requests required.
- There is wider work underway looking at bank verification across multiple services.
- Delivering a fully automated solution would require significant development effort and did not feel appropriate for an MVP
- Considerations from fraud of letting organisations’s edit their own bank details

### Partial automation

- This would be keeping a human touch of the QA's in the service and not just relying on API's. 
- Question is, what is the balance of how much off the offline journey to bring into the service.
- A key area of consideration was the "unhappy path". While successful verification of "match" is relatively straightforward, failed or inconclusive verification results of "partial match", "unable to check" and "no match" often require investigation, evidence gathering and communication between QA teams and organisations.


#### Ideas

- OM task

Remove the first spreadsheet and instead have a OM task created and assigned to a QA once bank details have been submitted by a organisation. The task would contain the workplace ID of the org to check and the QA would go into the service to find the details 

> **We believe that** introducing a OM task for bank details verification
> **Will be a useful feature for** QA's and organisations
> **As it will** would reduce delays in bank details being checked from the weekly export and reduce chances of manual errors in export of details across two spreadsheets

- Bank verification status and outcome

Introducing in a new status that shows the state of the bank verification checks of either "Not yet added" "Not yet processed (for QA's) / Submitted (for organisations)", "Verified", "Failed verification". 

> **We believe that** introducing this status into the service
> **Will be a useful feature for** QA's and organisations
> **As it will** make it clear to org's, SRO's and future processors whether the details have been verified and they don't have to consult offline spreadsheets or emails, and it saves phonecalls from the org to the BSA staff to confirm the state of their details.

- Submission upon verification

Org's can start filling in claims but they can't submit until their bank details have been verified.

> **We believe that** allowing organisation's to only submit claims upon verification of bank details
> **Will be a useful feature for** QA's and processors
> **As it will** reduce the need for processor's to check spreadsheets and reach out to QA's to confirm status as they wouldn't recieve tasks to process claims for org's haven't been verified. It also reduces the security risk of perhaps approving claims without bank details being verified.

> **We believe that** allowing organisation's to only submit claims upon verification of bank details
> **Will be a useful feature for** SRO's and organisations
> **As it will** reduce delays for getting money back for claims and introduces more visibility into the process and stage bank details verification is up to, giving more indication in content around expectations.

- Edit bank details 

The QA will still recieve a OM task to check a organisation's details. The result will then be entered into the service with a status and note if futher information is required, and the organisation will update the details providing additional evidence themselves into the service.

> **We believe that** allowing the QA to enter unhappy path results into the service and send it back to the organisation to update
> **Will be a useful feature for** QA's and organisations
> **As it will** replace the spreadsheets and bring all communication into the service to fulfill audit purposes, as well as reduce the need for a lot of offline communciation

We also explored options where verification outcomes would be surfaced in the service while some issue resolution activities remained offline.

- QA's updating details in the service after offline communication with the SRO to resolve the issues and get new details.

> **We believe that** allowing the QA to update the details
> **Will be a useful feature for** QA's and organisations
> **As it will** reduce delays of waiting for service desk updates

We worked closely with operational colleagues and business analysts to understand:
- Whether QA colleagues should be able to update bank details directly in the service and any security risks.
- How evidence and decision-making around results and needs for updates would be recorded for audit purposes.
- Whether service desk requests would still be required and what function they play in audit trail.
- Whether organisations should be able to update their own bank details following a failed verification check.
- What information needs to be retained for audit purposes.
- Whether email correspondence provides a sufficient audit trail or if we bring into service do we need to provide ways to record evidence and reasoning.
- Whether claim processors need visibility of correspondence or only the final outcome.
- How often verification issues occur and how often organisations need to update bank details to understand how much of a issue and value our different levels of solutions can bring.

Through these discussions we found that:
- There was desire to deliver edit of bank details, but this would take longer and bringing in issue resolution into the service would introduce significant complexity in making sure we fully replace the second spreadsheet which is where lots of the audit trail is recorded.
- Many verification issues are resolved through clarification rather than changes to bank details.
- Some of the proposed functionality could overlap with future cross-service bank verification work.

### MVP approach

We held a scoping session and agreed that the first iteration should focus on delivering the smallest change that would provide meaningful value. Replacing a bit of the process, then can iterate to bring in more, as we aren’t saying this design is the perfect solution as that would probably be closer to full automation, but what’s the minimum we can do that brings value. If we went with bringing in edit into this first iteration with editing of details and uploading evidence and notes in the service, then it will take longer. 

The proposed MVP would:
- Surface final bank verification outcome in the service. 
- Show status for "not yet added", "submitted/not yet processed", "verified" and "verification failed" leaving anything to do with problem states offline. 
- Use banners to inform organisation's of what they should expect to happen next based on the status of their bank details
- Include date of submission/verification/failure to help frame timelines of expectations and context
- Prevent organisations from submitting claims until verification is complete which prevents claim processors from processing claims for organisations that have not been verified.
- Remove the need for the first and third spreadsheet currently used in the process
- Keep the existing offline process for resolving verification issues. This is what was captured in the second spreadsheet. All the interim results will be documented the same as now. Keeps it clear where each part of the process is happening by not bringing it just partly into the service. 
- If need to update details, the QA will submit a service desk request. Once the request has been completed then the QA will be informed and they will go and record the verified result in the service.

Some business process clarifications:
- If a organisation does not respond to email requests for additional information or updated details, it is a reject after a to-be agreed upon timeframe.
- Organisation's should still be able to access the service if they have been rejected but not submit claims. 

#### Final designs to go into testing 

Not yet added

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-not-yet-added.png" alt="Bank details not yet added - SRO only" style="width: 100%; height: auto;">
      <figcaption>Bank details not yet added - SRO only</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-not-yet-added-banner.png" alt="Manage claims screen with banner reflecting bank details status" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - SRO</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="add-details.png" alt="Add bank details - SRO only" style="width: 100%; height: auto;">
      <figcaption>Add bank details</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="submitter-not-yet-added.png" alt="Manage claims screen with banner reflecting bank details status" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - Submitter</figcaption>
    </figure>
  </div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-missing-submit.png" alt="Error when submitting claim without adding bank details" style="width: 100%; height: auto;">
      <figcaption>Error when submitting claim without adding bank details</figcaption>
    </figure>
  </div>

</div>

Submitted

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-submitted.png" alt="Bank details submitted - SRO only" style="width: 100%; height: auto;">
      <figcaption>Bank details submitted - SRO only</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-submitted-banner.png" alt="Manage claims screen with banner reflecting bank details status" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="submitter-submitted.png" alt="Manage claims screen with banner reflecting bank details status - submitter role" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - submitter</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-unverified-submit.png" alt="Error when submitting a claim and bank details have only been submitted but not yet verified" style="width: 100%; height: auto;">
      <figcaption>Error when submitting a claim and bank details have only been submitted but not yet verified</figcaption>
    </figure>
  </div>
</div>



Verified

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-verified.png" alt="Bank details verified - SRO only" style="width: 100%; height: auto;">
      <figcaption>Bank details verified - SRO only</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-verified-banner.png" alt="Manage claims screen with banner reflecting bank details status" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - SRO and submitter</figcaption>
    </figure>
  </div>
</div>

Verification failed 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-failed.png" alt="Bank details verification failed - SRO only" style="width: 100%; height: auto;">
      <figcaption>Bank details tab with verification failed - SRO</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-failed-banner.png" alt="Manage claims screen with banner reflecting bank details status" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - SRO</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="submitter-failed.png" alt="Manage claims screen with banner reflecting bank details status - submitter role" style="width: 100%; height: auto;">
      <figcaption>Manage claims screen with banner reflecting bank details status - submitter</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="sro-failed-submit.png" alt="Error when trying to submit with failed bank details" style="width: 100%; height: auto;">
      <figcaption>Error when trying to submit with failed bank details</figcaption>
    </figure>
  </div>
</div>

Worked closely with content around the language in this flow and the new status. 

## How we tested our ideas and what we found

This approach addresses the most significant user and operational risks while allowing us to learn before investing in more complex functionality. User research focused on understanding:

- Whether users understood the different verification states.
- Whether the proposed banners and status messages clearly communicated what was happening.
- Expectations around verification timescales.
- Whether organisations preferred being prevented from submitting claims until verification was complete.
- How organisations expected to be notified when verification was successful.
- What users expected to happen if there was a problem with their bank details.
- Whether organisations would rely on email communication if issues needed to be resolved outside the service.
- Whether users wanted visibility of verification dates and status history.
- We also explored how organisations interpreted the different stages of the journey and whether there was - sufficient clarity around when they could begin submitting claims.
- Testing is ongoing and will help us understand whether the proposed MVP provides enough visibility and reassurance while maintaining a simpler solution for the first iteration.

{# #### Who did they test with
X Participants:
X x band X processors
X x band X processor / QA #}

#### How did they test

Moderated usability testing sessions and semi structured interview questions

### Findings:

Analysis of the UR findings revealed a desire for edit bank details functionality to be available to organisations. The recommendation action was to review the scope for this feature, and it's priority revisited in the roadmap. Everything else in the designs functioned as expected.

## What we will do next

Focus turns to the designs on the QA side.