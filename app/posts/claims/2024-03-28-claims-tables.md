---
title: Exploring different ways to display lists of claims
description: With 60/40 claims on the horizon we explored different ways to present lists of claims to users.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-03-28
modified: 2024-05-06
tags:
  - private-beta
  - claims-version-8
  - claims-manage-claims
  - 100-type-claims
  - 60-40-type-claims
relatedUserNeeds:
  - user-need-1
aside:
  title:  Claims prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

We knew that in the near future we would need designs to accommodate 60/40 claims. As part of our exploration of 60/40 claims, we considered the possibility of having three different types of claims in the service for care skills funding: 100%, 60%, and 40% claims. We were also exploring a design hypothesis for how users might manage revalidation funding claims.

> **We believe that** combining care skills claims and revalidation claims into a single area  
> **Will be a useful feature for** submitters  
> **As it will** better match their mental model of how they want to manage these two groups of claims.

If this hypothesis was true, a table might not be the best design to present all the different types of claims, as they each have different data components. Therefore, we wanted to explore this design challenge to help validate or invalidate our hypothesis.

> **How might we** display 100%, 60%, and 40% care skills claims and revalidation claims together in a single area?

## What our ideas were

We proceeded with design work, aiming to produce an alternative to the existing table view of claims. We planned to test both options with users through a simple A/B test. The table design represented the null hypothesis, with a focus on the separation of different types of claims during user research. The alternative option needed to be flexible enough to support all claim types and help us explore users’ needs to combine and manage these claims in a single area of the service.

After reviewing the GOV.UK design systems and other departmental prototypes, we couldn’t find any existing components that were suitable. However, after exploring other service prototypes, we discovered custom components called 'list items' (a term taken from [Material Design's lists component](https://m3.material.io/components/lists/overview)):

![A screenshot from DfE service prototype showing list items](DfE-list-items.png "List items from a DfE service")

Due to their nature, we felt that these list items would offer the flexibility needed to display different types of claims together. We could make small design changes to the list items while maintaining consistency on the page. Additionally, they allow for richer data to be displayed with a smaller footprint than adding additional columns to a table. This led us to evolve our hypothesis:

> **We believe that** using list items to display care skills claims and revalidation claims together in a single list  
> **Will be a useful feature for** submitters  
> **As it will** help them manage all types of claims more effectively and better match their mental models.

## What we changed

We created a new list item design alongside the existing table view for A/B testing in version 8 of the prototype:

![A screenshot from v8 of the prototype showing the table view.](table-view.png "Table view")

![A screenshot from v8 of the prototype showing the list items view.](list-view.png "List item view")

## How we tested our ideas and what we found

We ran A/B testing on these designs during the week commencing 6th May 2024. We found that users still preferred the table view, due to its more compact design and ease of scanning. However, it was unclear whether users would want to manage care skills and revalidation claims in the same area of the service.

## What we will do next

Given that users strongly preferred the table view for its key advantages, we decided to stick with it. This means that revalidation claims will be placed in a separate part of the service, following the approach we used in alpha (although this was not tested with users). Since revalidation claims are not in scope for the MVP, we will explore any issues that may arise from keeping care skills and revalidation claims in separate areas of the service during user research.