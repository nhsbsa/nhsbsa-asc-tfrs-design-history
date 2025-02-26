---
title: Iterating how we present claims in tables and exploring claim types
description: To allow for the 60/40 claims and the introduction of the claim type concept we iterated the claims tables.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-05-21
modified: 2024-05-21
tags:
  - private-beta
  - claims-version-9
  - claims-manage-claims
relatedUserNeeds:
  - user-need-1
aside:
  title:  Claims Prototypes
  content: |
    [View claims v9 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v9/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

Before implementing the new funding model, we conducted preliminary groundwork to prepare for its introduction. With the new model, different types of claims were introduced, initially categorized as:
- 100
- 60
- 40

Given the differences between these claim types, we assessed the implications of integrating claim types into our service.

## What our ideas were

We hypothesized that adding the claim type as a column in the claims table would be beneficial:

> **We believe that** adding the claim type as a column in the claims table  
> **Will be a useful feature for** submitters  
> **As it will** help them distinguish between 60 and 40 claims, which share similar data.

### Overcoming Potential Issues

Introducing another column to the table posed potential legibility challenges due to text wrapping in cells. To address this, we evaluated the current table columns:

- Claim reference number
- Training
- Started date
- Learner
- Variable date (depending on claim status)

We decided to remove the "started date" column, as its value decreased after removing the ability to add multiple learners to a claim. With the updated structure (one learner per claim) and the inability to claim for the same training and learner more than once, the started date was no longer crucial in identifying claims.

To minimize text wrapping, we adjusted column widths, particularly for dates and reference numbers. However, some text wrapping was unavoidable for training titles and learner names, which we deemed less problematic given the nature of this data.

The resulting design included the claim type in the claims table:

![A screenshot taken from v9 of the prototype showing the claims table](v9-claims-table.png "The addition of claim type to the claims table in v9")

Additionally, we displayed the claim type and status at the top of the claim scaffold screen, using the summary list component for better visibility.

![A screenshot taken from v9 of the prototype showing the additional content on the claim scaffold screen](claim-summary.png "The additional content at the top of the claim scaffold screen in v9")

## How we tested our ideas and what we found

We conducted usability testing with 5 users during the week of June 13th to evaluate the 60/40 claim types, the updated claims table, and the changes to the claim scaffold screen.

### Key Findings:

- Users understood the claim types after reviewing some claims.
- Removing the "started date" from the claims table did not introduce any new usability issues.
- Some users initially believed that once both 60 and 40 claims were approved, they would merge into a 100-type claim. (This specific aspect will be addressed in a separate post focusing on content and language.)

## What we will do next

While the changes were well-received, we identified a potential gap: new users or users unfamiliar with the claim types might need guidance. To address this, we added a key to explain the claim types in the claims table. The key is accessible via a "details" component, making it easy for users to access without cluttering the interface.

This change will be incorporated into version 10.

![A screenshot taken from v10 of the prototype showing the key at the top of the claims table](claim-summary.png "The key at the top of the claims table in v10")
