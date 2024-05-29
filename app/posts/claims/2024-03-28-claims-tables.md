---
title: Exploring different ways to display lists of claims
description: With 60/40 claims on the horizon we explored different ways to present lists of claims to users.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-03-28
modified: 2024-05-06
tags:
  - claims-version-8
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---



## Why we did this work

We knew that in the near future we would need designs that accommodate 60/40 claims, part of the exploration work we were doing on 60/40 claims was drawing some concepts that we might have 3 different types of claim in the service for care skills funding; 100% claims, 60% claims and 40% claims. We were also considering a design hypothesis around how users might manage revalidation funding claims. 

>**We believe that** combining care skills claims and revalidation claims into a single area
>**Will be a useful feature for** submitters
>**As it will** better match their mental model about how want to manage these two groups of claims.

If this hypothesis was true then a table would be a more challenging design to present all these different types of claims have different data components. Therefore we wanted to explore this design challenge to help validate or invalidate the hypothesis above.

>**How might we** display 100, 60, 40 care skills claims and revalidation claims together in a single area.

## What our ideas were

We proceeded with design work with the idea of producing an alternative to the existing table view of claims. Then testing both options with users in a simple stripped back A/B test. The table designs represented the null hypothesis with the idea that questioning during UR to focus on the separation of different types of claims. The alternative option needed to be flexible enough to support all the different types of claims and questioning around it would be used to explore the users' needs to combine and manage these claims in a single area of the service.

After exploration of the GOV design systems and sub-systems of other departments we couldn't find any existing components that were suitable. Then after rooting through other service prototyping we came across some custom components we called 'list items' (a term taken from [Material Design's lists component](https://m3.material.io/components/lists/overview)):

![A screenshot from DfE service prototype showing list items](DfE-list-items.png "List items from a DfE service")

Due to the nature of these list items we felt that they would provide the flexibility to display different types of claims together by smaller changes to design of the list item that would still maintain an overall consistency on the page. they also allow for richer data to be displayed with less footprint than additional columns in a table. This evolved our hypothesis above to:

>**We believe that** using the list items to display care skills claims and revalidation claims together in a single list
>**Will be a useful feature for** submitters
>**As it will** help them manage all type of claims more effectively and better match their mental models.

## What we changed

The created a new list item design alongside our existing table view for the A/B testing in version 8 of the prototype:

![A screenshot from v8 of the prototype showing the table view.](table-view.png "Table view")

![A screenshot from v8 of the prototype showing the list items view.](list-view.png "List item view")

## How we tested our ideas and what we found
We ran A/B testing on these designs week commencing 6th May 2024. We found that the table view was still the preferred options for users, due to the more compact view and it being easier to scan. However it was unclear whether users would want to manage care skills claims and revalidation claims in the same areas of the service. 



## What we will do next
Given users heavily favoured the table view for some really key reasons, we decided to stick with the table view. This will force revalidation claims into a separate part of the service, which is the concept we finished alpha with but wasn't tested with users. Given revalidation claims won't be in scope of the MVP we explore in UR any issues that might arise from having care skills and revalidation claims in separate parts of the service. 

