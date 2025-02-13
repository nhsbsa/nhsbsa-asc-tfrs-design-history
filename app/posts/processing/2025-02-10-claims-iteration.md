---
title: Claims table and claim interaction WIP
description: The need to have all the claims accessible came from research
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-02-10
tags:
  - private-beta
  - processing-version-7
  - processing-view-org
aside:
  title:  Processing Prototypes
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
We first tested the org view with processors and css agents in February and we disproved the hypothesis that having the find a claim search to find a specific claim would solve the user need. 

It was found
- expectation that they would want to scan a table of all the claims to compare claims for similar training or learners.
- they would want the last opened claim to stay open and not clear when going between tabs

## What our ideas were

Add in claims table
- Couldn't have sort, but can have pagination as that's been added in by development on other tables now.
- All status's in one table, ordered by not yet processed, rejected and then approved.
  - we do know from research that the table will be most used by trying to scan between how claims for similar training was processed so not yet processed claims at the top might not be most useful. But if they werren't at the top they would get buried underneath approved and rejected claims. 
- second round or research said to Change submitted dates to processed, happy to have a line where no date present.
- ordering within the status', decided by dates, processed dates for approved and rejected, submitted date for not yet processed.

- they would want the last opened claim to stay open and not clear when going between tabs
- also decided with tech that the processing of a claim would remain with the answers saved until they click into another claim, then the session would refresh.

>**We believe that** 
>**Will be a useful feature for** 
>**As it will** 

![Screenshot of the new organisation notes tab ](notes-tab.png "Screenshot of the new organisation notes tab")

#### Job roles - CCS Agents

- hidden functionality to process the claims


## How we tested our ideas and what we found


## What we will do next
