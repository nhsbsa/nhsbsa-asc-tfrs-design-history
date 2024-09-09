---
title: Iterating how we present claims in tables and exploring claim types
description: To allow for the 60/40 claims and the introduction of the claim type concept we iterated the claims tables.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-05-21
modified: 2024-05-21
tags:
  - claims-version-9
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v9 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v9/) 
    Password: bsaasc123
---



## Why we did this work
Prior to looking at the new funding model we were introducing we wanted to do some light ground work to enable it's introduction. With this new funding model we now had different types of claims initially we called them:
- 100
- 60
- 40

Given the differences between these different types of claims we looked at the implications of introducing the concept of claim types into our service.

## What our ideas were
Firstly we had a hypothesis around the value that having this type on the claims tables might have:

>**We believe that** adding the claim type as a column on the claim tables
>**Will be a useful feature for** submitters
>**As it will** help them identify between 60 and 40 claims which have other similar data

However introducing another column into the table would cause legibility issues with the table due to text wrapping in cells. To resolve this we looked across the existing columns:
- Claim reference number
- Training
- Started date
- Learner
- 'Variable' date (depending on claim status table)

Out of these we felt that started date was the one that could be dropped, the value of this data was diminished when we removed the ability to add multiple learners to claim. As that point the started date allowed users to identify the date of the training event. However with a one learner per claim model combined with the fact organisation cannot claim for the same training and learner more than once this meant started date did not hold as much value to users in helping them identify claims.

After this we did some small tweaks to the column widths to minimise text wrapping for certain key columns such as dates and reference numbers. Given the length of training titles and learner names it wasn't feasible to prevent text wrapping but this was less of an issue due to the nature of these pieces of data. 

The result of these hypotheses was the following design:

![A screenshot taken from v9 of the prototype showing the claims table](v9-claims-table.png "The addition of claim type to the claims table in v9")

The final aspect was to communicate this claim type on the claim scaffold screen itself. We introduced an additional bit of content to the top of this screen, using the summary list component to communicate both the claim status and claim title. 

![A screenshot taken from v9 of the prototype showing the additional content on the claim scaffold screen](claim-summary.png "The additional content at the top of the claim scaffold screen in v9")

## How we tested our ideas and what we found
We ran usability testing with 5 users on these designs w/c 13th June to test the 60/40 designs, as part of this testing we also covered off the claim types work discussed above and the changes to the claims tables and small change to the claim scaffold screen. Users broadly understood the claim type and what they meant but only after they had viewed some claims. The removal of the started date from the table didn't introduce any new usability issues. 

The other interesting finding that was more related to the language of these claims types was that some users thought that once a 60 and 40 had both been approved it would then become a type 100 claim. However for the purpose of this post we will not go into any more detail on the content side of things as this will be covered in a separate post. 


## What we will do next
Overall we were happy with these changes however to ensure users who hadn't come across the different claim types before viewing the claims in a claims table we decided to add a key. This might happen when someone is new to the organisation and the organisation already has claims in progress. We added the key using a details component so that it wasn't constantly visible but those who might needs it still had easy access. This design can be found in v10.

![A screenshot taken from v10 of the prototype showing the key at the top of the claims tables](claim-summary.png "The key at the top of the claims tables in v10")
