---
title: Claims table and claim interaction
description: The need to have all the claims accessible came from research
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-02-10
tags:
  - private-beta
  - processing-version-7
  - processing-view-org
relatedUserNeeds:
  - user-need-13
aside:
  title:  Processing prototypes
  content: |
    [View processing v7 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v7/) 
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
          Rejected: Y6M-5DYB-TRCL-A
---

## Why we did this work
We first tested the org view with processors and css agents in February and we disproved the hypothesis that having the find a claim search to find a specific claim would solve the user need. The actual user expectation was they would want to see all the claims so they could understand what was happening with the organisation as a whole.

## What our ideas were

### Add in claims table

UR Insight:
- Processors would be less likely to  be looking at not yet processed claims in the table as they'd be more likely to always search for a claim to process based on the ID provided by OM.
- The user needs we have for browsing the table would relate more to processed claims. When thinking about the way to order the claims it would be helpful to search either via date for QAs to assess the most recent ones or via course title (but we think that could be an unexpected column to be ordered by). 

>**We believe that** having all the status's of claims in one table
>**Will be a useful feature for** BSA staff
>**As it will** allow them to compare between all claims in one view

>**We believe that** ordering the claims by not yet processed, rejected then approved
>**Will be a useful feature for** BSA staff
>**As it will** allow the not yet processed claims to not get buried under many processed claims, even though they might not be the claims the user is most likely looking for. 

### Change submitted date column to processed date

Second round of research produced the insight to change submitted dates column to processed dates as this would be more helpful to scan to find a specific claim, and the users are happy to have a line where there is no processed date present for not yet processed claims. 

Sorting has been pushed down the roadmap to implement on the tables but the claims table is able to be paginated as that's something tech have now implemented in the service.

>**We believe that** ordering each the claims within each status by submitted date for the claims not yet processed, and most recent rejected/approved date for processed claims
>**Will be a useful feature for** BSA staff
>**As it will** show the more recent claims on the first page of paginated table, which will be more likely to be the claims they want to see.

### Claim tab interation

In the UR the user's stated they would expect the last opened claim to stay opened when clicking between tabs. 

>**We believe that** keeping the opened claim open when clicking between tabs
>**Will be a useful feature for** BSA staff
>**As it will** mean they don't have to keep re-searching for it when they are orientating themselves with the other information in the other org view tabs.

>**We believe that** if the processor has begun processing the claim, then maintaining the information they have typed in e.g. rejection reasons
>**Will be a useful feature for** BSA staff
>**As they can** click between tabs to find other information they need to help in the claim processing and not have to start the processing again. 

It was agreed with tech that if the user clicked into another claim then this is when the session and cached data would clear.


#### Job roles - CCS Agents
With the introduction of job roles into the service, the functionality to process a claim is hidden for CCS agents. For ease of giving tech more work, we have just hidden the processing radio buttons on the screen, this means for the CCS agents the information of a claim is all squished to the left side. We agreed that if tech have time they will make it two thirds width for CCS agents.

## What we will do next

To bear in mind for future iterations:
- We know from research that the claims table will be most used by trying to scan between how claims for similar training was processed so not yet processed claims at the top might not be most useful. Because we don't have column sort yet this is something we've had to accept in the design for now, but something that can be revisted in the future.