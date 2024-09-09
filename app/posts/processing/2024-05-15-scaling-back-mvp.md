---
title: Scaling back MVP
description: Due to MVP decisions we stripped back many of the design decisions to accommodate quicker technical delivery. 

author:
  name: Hannah Williams
  url: '#'
date: 2024-05-15
tags:
  - processing-version-3
  - process-a-60-claim
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

With an aggressive delivery deadline fast approaching and tight time to technically deliver, the decision was made by … to simplify the processing a claims journey as much as possible to have the things the users need to execute but less less effort by tech. 

In a workshop attended by the entire product team a series of key decisions were made to cut out or scale back certain features for this journey. These product decisions were all logged in our project decision log held in Mira along with any associated risks and mitigations. The extended journey is in V2 of the prototype, this version was untested with users before these decisions were made so changes were made in V3 of the prototype. V3 has been tested with 4 users in the week commencing 15 May 2024.


## Remove claim notes

Notes are decided not to be necessary to the core user journey to process a claim.

#### Risks

- We know this is a feature highly valuable to a processor as will need to still be captured somewhere. 
- loss of the system notes means no knowledge of timeline of approved or rejected states. 

#### Mitigations

- Will be moved to a offline process. 
- date of approval or rejection added to status under claim id.


#### Screenshots



## Remove multiple screens

Multiple screens becomes more technical effort. Condensing into as few as possible by combining the critiera questions onto claim details screen for MVP, removed seperate screen for capturing reimbursement amount and returned it in a conditional input on criteria radio button input. 

#### Risks

- This is a lot of load on the processor on one screen but also since the criteria check questions have become less specific then its still a maximum of two questions. 
- We know the reimbursement amount is highly risky in getting correct so having it on the same view with a radio button conditional means less space and focus given to getting this correct.

#### Mitigations

- Training will be given on calculating the reimbursement amount and iterations on the content.

#### Screenshots



## Remove save claim ability 

Removed ability to save claim mid processing for MVP is a feature deemed nice to have rather than absolutely necessary so removed.

#### Risks

- Processors might find a claim's evidence more complex to work out whether checks off criteria or they have a query over the reimbursement amount so they might have done some involved work on the screen already and have to abandon to come back to start again which they will find inconvinient.  

#### Mitigations

- Processors will be aware they need to complete their checks in one go.

#### Screenshots



## Remove adding rejection notes on a seperate page

As the screens are condensed into one view, the rejection note's are also incorportated into the claim screen criteria check radio buttons conditional input on selection of no. This means there is one rejection note for evidence of payment criteria check and one for completion. 

#### Risks
- Quite a lot happening in one part of the screen

#### Mitigations
- Because its one question and one rejection note for all the criteria it doesn't have too much impact.


#### Screenshots


## Add rejected/approved date to status tag

Added the date that the claim was either rejected or approved to the status tag at the top of the claim view. This is to mitigate the loss of the system generated notes where the date a claim was approved or rejected was captured, giving a processor context to the history of the claim. 

#### Screenshots


------


Future research:
- Research to understand the impact of MVP changes


Future Research outcomes:
- People expected it to be one claim in two parts rather than our hypothesis of two claims with a link. Chronicled for later reflection


