---
title:  Viewing uploaded evidence
description: Allowing submitters to view evidence they have uploaded to the service.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-08-20
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

## Why we did this work

Once a submitter uploads a file as a piece of evidence their is currently no way of viewing that file in the service. We identified a few possible scenerios that may mean an individual would benefit from viewing the evidence they uploaded:
- Following a claim rejection and the user wanting to review the evidence they uploaded against the rejection reasons
- Immediately after they have uploaded to serve a visual check they have picked the right file.
- When returning to finish working on a claim after some time has passed and may wish review what they uploaded to double check before submitting

From these we developed the following hypothesis:
>**We believe that** allowing submitter to view uploaded evidence
>**Will be a useful feature for** submitters
>**As it will** to review uploaded evidence for correctness

This was identified as a possible quick win opportunity and therefore we had to work on this in a restricted time frame and ensure development time was heavily weighted in any consideration. 

## What our ideas were
There were two core aspects to the design we needed to explore, the journey that a user would follow to view an uploaded file and how the viewing of the file mechanism would work. We explored the mechanism for viewing a file first as this would have a lot of dependencies on the technical implementation as given the time box we were working under we needed to explore this first in case there were technical constraints then set on the journey aspect.

We first review the mechanism that is used in the operational side of the service for the processors to view evidence in a claim. This opens the evidence file in another tab on the browser. Although we had concerns about this interaction the processors were used to this from another service they worked on and therefore given the tight timescales we were under this solution was appropriate for that context. However this wouldn't be the case for the submitters and we had initial concerns about pursuing this with this user group:
- Opening a file onto another tab will take users out of the service and isn't good practice
- More wide ranging technical proficiency may mean opening on a new tab causes increased confusion
- This requires user browsers to support the relevant file types

As a result of this we then explored other routes that we could take. There were three other core ideas we discussed:

#### Allowing the file to download to their machine to view
Pros
- Possible most accessible option out of the options explored
- Can be agnostic of technology we provide as it relies on the users software and given they likely provided the file in the first place it is likely they will have the software to view it.
- If we provided this alongside other options it would serve as a nice fallback for older browsers

Cons
- Possible security risks if file has somehow been corrupted or compromised.
- Takes them out of the service to view the file as they will need to view it from their downloads
- Users with low digital literacy may struggle with where the files has been downloaded to be able to view it

#### Convert every file to an image and display on the page
Pros
- Keeps the users within the service to minimise confusion
- Standardises the view of the files


Cons
- Multi-page PDFs would be challenging
- Would reduce accessibility of PDFs that have text in
- Less easy to manipulate (zoom etc) to review contents
- Would increase complexity of offering different file types in the future

#### Built-in and embedded file viewer 
Pros
- Keeps the users within the service to minimise confusion
- Standardises the view of the files
- Could support multiple file types

Cons
- Technically complex to do and would fall out of any time boxing for this work


As a result of this we made the decision to start with the same approach we use for the processors, while we knew this wasn't ideal, it was the most feasible option in the time we have available. However we decided we would take this to users and test the interaction to validate the issues we feel there would be with this approach and to further understand the risks.

The other aspect of the design to explore is the journey a user takes to view the uploaded evidence. There were two places where it felt this ability to view the file would be most useful:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="multi-payment.png" alt="A screenshot taken from v12 of the prototype showing evidence of payment multiple files pattern" style="width: 100%; height: auto;">
    <figcaption>The multiple evidence of payment pattern</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-evidence.png" alt="A screenshot taken from v12 of the prototype showing the evidence parts of the claim scaffold screen" style="width: 100%; height: auto;">
    <figcaption>The evidence shown on the claim scaffold screen</figcaption>
  </figure>
  </div>
</div>

We considered whether we could reuse the pattern from the processor app:

![A screenshot taken of the evidence sections of the processor app](processor-evidence.png "The evidence section when processing a claim")

However this pattern would not be transferable due to the nature of the summary list patterns also for evidence of payment we displayed multiple file names in the row. We explored other existing patterns in the GDS and departmental design systems. The options were limited and we opted to start with testing the use of the MOJ pattern which uses a link on the file name to act as the interaction. 

![A screenshot taken of the MOJ view a file pattern](moj-view-file.png "The MOJ pattern allows users to view the file by clicking on the file name")

The resulting designs we wanted to test were as follows (click on the file name open the file in a new browser tab):

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="multi-payment-v13.png" alt="A screenshot taken from v13 of the prototype showing evidence of payment multiple files pattern" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing evidence of payment multiple files pattern</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-evidence-v13.png" alt="A screenshot taken from v13 of the prototype showing the evidence parts of the claim scaffold screen" style="width: 100%; height: auto;">
    <figcaption>A screenshot taken from v13 of the prototype showing the evidence parts of the claim scaffold screen</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found
This work is awaiting validation and testing with users. The post will be updated once we have done this.


