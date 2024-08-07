---
title: Helping users meet payment evidence requirements
description: Following a discovery during desk research we needed to shift to accommodate multiple pieces of payment evidence. 
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-16
modified: 2024-05-16
tags:
  - claims-version-8
  - evidence
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---



## Why we did this work

During routine reading of project material our content designer had a realisation:

>"an invoice doesn't proof an organisation paid for the training it only proves they were billed for it"

This may seem obvious with hindsight but given the chaotic journey the project has been on we had used an invoice as example of evidence of payment. This prompted a discussion with the wider team around what would actually prove that an organisation had paid for the training. Currently out service would accommodate a single piece of evidence of payment so the key question we had really was whether a single piece of evidence could actually meet all the necessary evidence requirements. Following these discussions we formed the following design hypothesis:

>**We believe that** allowing for multiple pieces of evidence of payment
>**Will be a useful feature for** submitters
>**As it will** increase the likelihood that claims can be approve.

Unfortunately due to time constraints we had two options either:

- test with users but without the time to develop the feature
- don't test users but with the time to develop the feature

Assessing the risks of either approach it was deemed that the higher risk was that not developing this feature would result in submitters not being able to submit claims with sufficient evidence. Therefore we proceed to design the feature without being able to test it before development.


## What our ideas were

After thinking around the hypothesis and considering we wouldn't be able to test the design before development we felt that the best way to accommodate this was to explore existing patterns in the design system or departmental sub design systems. The core principle was to use some sort of 'add to a list' or 'add another' pattern. Two examples of this pattern we came across were from the MoJ and HRMC sub design systems:

![A screenshot from the HRMC sub design systems of the 'add to a list' pattern.](hrmc-add-another.png "HRMC 'Add to a list' pattern")

![A screenshot from the MoJ sub design systems of the 'add another' pattern.](moj-add-another.png "MoJ 'Add another' pattern")

While researching component and pattern choices we then also discovered existing patterns for multiple file uploads, here are two screenshots showing parts of this pattern again from the HRMC and MoJ:

![A screenshot from the MoJ sub design systems of the 'multi file upload' pattern.](moj-multi-file.png "MoJ 'Multi file upload' pattern")

![A screenshot from the HMRC sub design systems of the 'multi file upload' pattern.](hmrc-multi-file.png "HMRC 'Multi file upload' pattern")

The obvious route was to use one of these existing patterns as they had already gone through some testing with users. After consideration we opted for the HMRC pattern as while it was split out into more steps than the MoJ pattern as we had a hypothesis that it would be easier to understand for our users than the MoJ pattern because it walks the users through the process. 

To further support users through the process we altered the pattern slightly and used elements of the 'Add to a list' pattern to ask users whether they wanted to add any more files. 

Due to some technical challenges we were not able to achieve two aspects of the original pattern, the 'uploading' status tags and the preview of the uploaded file. We had already previously captured the need for file preview in our backlog and since we didn't feel the the removal of the 'uploading' would have too much of an impact in the short term we decided to proceed despite these limitations. 

The final piece missing from the pattern was how to deal with the remove/delete action, we considered the standard GDS notification banner however we didn't feel this was suitable as the banner would be more directly relevant to the thing they're trying to do on that page. With that in mind we opted to use the MoJ banner component as this felt less intrusive as well. 

Here are some screenshots of the resulting designs from v8 of the claims prototype:

![A screenshot from v8 of the prototype showing the upload file function.](add-evidence.png "Upload file")

![A screenshot from v8 of the prototype showing the multiple files uploaded.](add-evidence-multi.png "Multiple evidence of payment files")


## How we tested our ideas and what we found
Despite not being able to test this with users before it moved into development we got the opportunity to test this in a round of UR testing w/c 6th May 2024. We took this opportunity so that we could get ahead of any issues that might arise at the start of private beta with this design. 

During this round of testing users were able to successfully complete the tasks and add multiple pieces of evidence with no issue. The primary finding was mainly users struggling to understand what files they would need to provide as evidence. This had been a challenge for us to articulate due to uncertainty, despite research, around what user could provide that meets pre-set requirements. 

## What we will do next
We will monitor this closely through private beta and look to address the ability for users to review evidence they have uploaded. Once we have a better understanding of evidence that users may actually provide for this we will look to address how we provide better contextual guidance for this as well. 

