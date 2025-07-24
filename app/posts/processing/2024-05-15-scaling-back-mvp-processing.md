---
title: Scaling back MVP (Processing)
description: Due to MVP decisions we stripped back many of the design decisions to accommodate quicker technical delivery. 

author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-05-15
tags:
  - private-beta
  - processing-version-3
  - processing-process-a-claim
  - processing-claim-notes
  - 100-type-claims
aside:
  title:  Processing prototypes
  content: |
    [View processing v3 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v3/) 
    Password: bsaasc123

          Claim reference's to test:

          100
          Submitted: Z1Z-F1J6-3XF7-A
          Approved: Z8S-F1J6-4GH7-A
          Rejected: K93-SK68-3S2K-A

          60
          Submitted: WR5-R2P4-DSL4-B
          Approved: R4Y-NL7G-D967-B
          Rejected: NLE-BMDT-68ZI-B

          40
          Submitted: R7J-NC3G-D967-C
          Approved: R4Y-NL7G-D967-C
          Rejected: K92-HD52-7GD9-C
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What we removed](#what-we-removed)
--- [Next steps](#next-steps)

## Why we did this work

With an aggressive delivery deadline fast approaching and tight time to technically deliver, the decision was made to simplify the processing a claims journey as much as possible to have the things the users need to execute but less less effort by tech. 

In a workshop attended by the entire product team a series of key decisions were made to cut out or scale back certain features for this journey. These product decisions were all logged in our project decision log held in Mira along with any associated risks and mitigations. The extended journey is in V2 of the prototype, this version was untested with users before these decisions were made so changes were made in V3 of the prototype. V3 has been tested with 4 users in the week commencing 15 May 2024.


## What we removed

Here is the new scaled back landing view of a claim in the processing a claim prototype journey:

![A screenshot from the processing a claim prototype showing claim details view](claim-details-v3.png "Claim details view of a unprocessed claim")

### Remove claim notes

Notes are decided not to be necessary to the core user journey to process a claim.

#### Risks

- We know this is a feature highly valuable to a processor as will need to still be captured somewhere. 
- Loss of the system notes means no knowledge of timeline of approved or rejected states. 

#### Mitigations

- Will be moved to a offline process. 
- Date of approval or rejection added to status under claim id.
- Added the date that the claim was either rejected or approved to the status tag at the top of the claim view. This is to mitigate the loss of the system generated notes where the date a claim was approved or rejected was captured, giving a processor context to the history of the claim. 

![A screenshot from the processing a claim prototype showing claim details view](approved-claim.png "Approved claim with success banner and date on status")


### Remove multiple screens

Multiple screens becomes more technical effort. Condensing into as few as possible by combining the critiera questions onto claim details screen for MVP and incorporating the reimbursement amount and rejection notes into a conditional input on criteria radio button input rather than on a seperate screen. Removed edit rejection notes from the outcome screen as considered easy enough to go back to the unprocessed claim screen, edit notes and click continue again.

#### Risks

- This is a lot of load on the processor on one screen but also since the criteria check questions have become less specific then its still a maximum of two questions and one input per selection.
- We know the reimbursement amount is highly risky in getting correct so having it on the same view with a radio button conditional means less space to explain and less focus given to getting this correct.

#### Mitigations

- Training will be given on calculating the reimbursement amount and iterations on the content.
- Because its one question and one rejection note for all the criteria per evidence type it doesn't have too much impact.

![A screenshot from the processing a claim prototype showing claim details view](claim-details-yes.png "Claim details view with yes checked radio selections")

![A screenshot from the processing a claim prototype showing claim details view](claim-details-no.png "Claim details view with no checked radio selections")


### Remove save claim ability 

Removed ability to save claim mid processing for MVP as is a feature deemed nice to have rather than absolutely necessary.

#### Risks

- Processors might find a claim's evidence more complex to work out whether checks off criteria or they have a query over the reimbursement amount so they might have done some involved work on the screen already and have to abandon to come back to start again which they will find inconvenient.  

#### Mitigations

- Processors will be aware they need to complete their checks in one go.

## Next steps

Future research:
- Research to understand the impact of MVP changes


Future Research outcomes:
- People expected it to be one claim in two parts rather than our hypothesis of two claims with a link. Chronicled for later reflection


