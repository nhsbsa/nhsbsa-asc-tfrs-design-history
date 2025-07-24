---
title:  Viewing uploaded evidence
description: Allowing submitters to view evidence they have uploaded to the service.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-08-20
tags:
  - private-beta
  - claims-version-13
  - claims-evidence
relatedUserNeeds:
  - user-need-3
aside:
  title:  Claims prototypes
  content: |
    [View claims v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)

## Why we did this work

Once a submitter uploads a file as a piece of evidence, there is currently no way to view that file in the service. We identified a few scenarios that may mean an individual would benefit from viewing the evidence they uploaded:
- Following a claim rejection, and the user wanting to review the evidence they uploaded against the rejection reasons
- Immediately after uploading, to serve as a visual check to ensure they picked the right file
- When returning to finish working on a claim after some time has passed and they may wish to review what they uploaded to double-check before submitting

From these, we developed the following hypothesis:

> **We believe that** allowing submitters to view uploaded evidence  
> **Will be a useful feature for** submitters  
> **As it will** help them review uploaded evidence for correctness

This was identified as a possible quick-win opportunity. Therefore, we worked on this in a restricted time frame and ensured that development time was heavily weighted in any consideration.

## What our ideas were

There were two core aspects to the design we needed to explore: the journey that a user would follow to view an uploaded file, and how the viewing of the file mechanism would work. We explored the mechanism for viewing a file first, as this would have a lot of dependencies on the technical implementation. Given the time box we were working under, we needed to explore this first to identify any technical constraints before defining the journey.

### Reviewing the existing mechanism

We first reviewed the mechanism used in the operational side of the service for processors to view evidence in a claim. This opens the evidence file in another tab on the browser. Although we had concerns about this interaction, the processors were used to this from another service they worked on. Given the tight timescales, this solution was appropriate for that context. However, this wouldn't be ideal for submitters, and we had initial concerns about pursuing this approach for this user group:
- Opening a file in a new tab takes users out of the service, which isn't good practice
- Users with varying technical proficiency may find opening files in new tabs confusing
- This requires user browsers to support the relevant file types

As a result, we then explored other routes:

### Option 1: Allow the file to download to their machine to view
**Pros:**
- Likely the most accessible option out of those explored
- Agnostic to the technology provided, as it relies on the user's software, and since they likely provided the file in the first place, they should have the necessary software to view it
- Can serve as a fallback for older browsers

**Cons:**
- Possible security risks if the file has been corrupted or compromised
- Takes the user out of the service to view the file, as they would need to view it from their downloads
- Users with low digital literacy may struggle with finding the downloaded file

### Option 2: Convert every file to an image and display on the page
**Pros:**
- Keeps users within the service to minimize confusion
- Standardizes the view of the files

**Cons:**
- Multi-page PDFs would be challenging
- Reduced accessibility for PDFs with text
- Less easy to manipulate (zoom, etc.) to review contents
- Increases complexity of offering different file types in the future

### Option 3: Built-in and embedded file viewer
**Pros:**
- Keeps users within the service to minimize confusion
- Standardizes the view of the files
- Could support multiple file types

**Cons:**
- Technically complex to implement and would fall outside the time constraints for this work

As a result of these considerations, we decided to start with the same approach used for processors. While we knew this wasn't ideal, it was the most feasible option given the available time. However, we decided to test this with users to validate the potential issues with this approach and further understand the risks.

### Exploring the journey for viewing uploaded evidence

The other aspect of the design to explore was the journey a user would take to view the uploaded evidence. There were two places where this feature would be most useful:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="multi-payment.png" alt="A screenshot from v12 of the prototype showing the evidence of payment multiple files pattern" style="width: 100%; height: auto;">
    <figcaption>The multiple evidence of payment pattern</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-evidence.png" alt="A screenshot from v12 of the prototype showing the evidence parts of the claim scaffold screen" style="width: 100%; height: auto;">
    <figcaption>The evidence shown on the claim scaffold screen</figcaption>
  </figure>
  </div>
</div>

We considered whether we could reuse the pattern from the processor app:

![A screenshot of the evidence sections of the processor app](processor-evidence.png "The evidence section when processing a claim")

However, this pattern would not be transferable due to the nature of the summary list pattern used. Additionally, for evidence of payment, we displayed multiple file names in the row. We explored other existing patterns in the GDS and departmental design systems. The options were limited, so we opted to start by testing the use of the MoJ pattern, which uses a link on the file name to act as the interaction.

![A screenshot of the MoJ view file pattern](moj-view-file.png "The MoJ pattern allows users to view the file by clicking on the file name")

The resulting designs we wanted to test were as follows (clicking on the file name opens the file in a new browser tab):

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="multi-payment-v13.png" alt="A screenshot from v13 of the prototype showing evidence of payment multiple files pattern" style="width: 100%; height: auto;">
    <figcaption>A screenshot from v13 of the prototype showing evidence of payment multiple files pattern</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="claim-evidence-v13.png" alt="A screenshot from v13 of the prototype showing the evidence parts of the claim scaffold screen" style="width: 100%; height: auto;">
    <figcaption>A screenshot from v13 of the prototype showing the evidence parts of the claim scaffold screen</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found
This work is awaiting validation and testing with users. The post will be updated once we have done this.