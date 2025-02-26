---
title: Reducing the reliance on offline records
description: Iterating the process a claim journey to reduce the reliance on offline records
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-12-20
tags:
  - private-beta
  - processing-version-7
  - processing-view-a-claim
  - processing-process-a-claim
  - processing-claim-notes
relatedUserNeeds:
  - user-need-11
  - user-need-12
aside:
  title:  Processing Prototypes
  content: |
    [View claims v7 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v7/) 
    Password: bsaasc123

    Claim reference ID's
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)

## Why we did this work

At the moment it is currently taking an average of 6.2 days to process a claim through to conclusion. As part of research looking at the processing of a claim we identified a series of pain points related to reliance on offline records, criteria checks, and logs relating to claims. These offline processes contribute to increased processing time and frustration for processors.

The scope of the problems we wanted to try and address as part of this work:
- Claim information presentation is cognitively overwhelming
- Guidance on criteria checks held outside of service
- Rejection notes templates held outside of the service
- Claims notes stored in spreadsheets outside of the service. 
- Have to manually to record rejection reason outside of the service as well for analysis purposes

This combination of the problems made processing more challenging as processors relied on having multiple browser tabs open at the same time to access the various different out of service artefacts needed to do their jobs. Our overall hypothesis for this work was as follows:

>**We believe that** reducing the reliance on offline records 
>**Will be useful for** processors
>**As it will** reduce processing time, help improve consistency of claims processing and improve processor job satisfaction

## What our ideas were

When starting out with this work we had 4 early lower level hypotheses, these were either developed as part of the data gathering phase for this problem space or as part of two cross-team ideation workshops, from which ideas where generated review and then voted on.

#### Hypothesis 1

>**We believe that** bringing the criteria checks into the service
>**Will be a useful feature for** processors
>**As it will** make it easier for them to judge whether the evidence meets the criteria

#### Hypothesis 2

>**We believe that** bringing the criteria checks into the service
>**Will be a useful feature for** processors
>**As it will** improve consistency in how evidence is judged

#### Hypothesis 3

>**We believe that** allowing claim notes to be captured in the service
>**Will be a useful feature for** processors
>**As it will** allow to more easily view the notes specific to the claim they are processing

#### Hypothesis 4

>**We believe that** automatically generating rejection notes from failed criteria
>**Will be a useful feature for** processors
>**As it will** reduce the time spent finding and copying rejection reasons from other sources.

#### Hypothesis 5

>**We believe that** asking the submitters to provide how much they paid per learner
>**Will be a useful feature for** processors
>**As it will** reduce the time taken to identify the amount paid per learner in the evidence.

#### Hypothesis 6

>**We believe that** splitting the journey into two steps; understand the claim and context, assess the evidence against the evidence criteria
>**Will be a useful feature for** processors
>**As it will** reduce the cognitive load for user when processing claims by allowing them to focus in on just what they need to check.


Due to the priorities and the inter-dependencies between some of these ideas we decided to break up how we approached this work further. Initially we would just approach hypotheses 3 and 6 with other hypotheses falling under future work.

During the time progressing this design work another package of work started that was focussing on an organisation view for contact centre staff to support helping an organisation solve a problem quickly and help NHS BSA solve organisation related problems quickly. You can read about that work [Find a organisation and perform ID/CV checks](../find-org-and-do-check-design) design history post. As part of this work we looked at the potential mental models NHS BSA users may have of the information hierarchy of the service. Through this we developed the following hypothesis

>**We believe that** presenting a claim in the context of the organisation who submitted them
>**Will be useful for** processors
>**As it will** make it easier for them to orientate to the claim and organisation and understand relevant context

### Part 1 - Understand the claim and context

With this factored into our design thinking we approached the design with an emphasis on hypothesis 6, focussing on the "understand the claim and context" step to begin with. We presented this view within some early concepts for the org view. We had two core concepts, vertical tabs for each section of the claim and a continuous page of the claim contents with a sticky table of contents link pattern to the left. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="tabs.png" alt="A screenshot of idea 1 showing vertical tabs for each section of the claim" style="width: 100%; height: auto;">
    <figcaption>Idea 1 showing a vertical tabs</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="quick-links.png" alt="A screenshot of idea 2 showing a continuous page of the claim contents with a sticky table of contents link pattern to the left" style="width: 100%; height: auto;">
    <figcaption>Idea 2 showing the table of contents quick links</figcaption>
  </figure>
  </div>
</div>

After discussing these concepts as a team it was agreed that the vertical tabs option would be more usable. There were a couple additional amendments to these concepts that were actioned:
- the notes didn't need to be a separate tab as well as being included on the history tab and therefore the notes tab could be removed and the CTA to add a note moved to the claim header. 
- The claim header would benefit from some additional high level claim information such as learner and training.

A key aspect of this design was how quickly users could navigate between tabs so despite us using the [MoJ side navigation pattern](https://design-patterns.service.justice.gov.uk/components/side-navigation/) we looked to implement them like standard GDS tabs where the content is visually hidden for users and that status changes when tabs are interacted with this means the page doesn't have to reload each time the user clicks on a tab and speeds up navigation once in a claim.

After some tweaking of the designs the final concept looks like this and can be found in v7 of the processing prototype

![A screenshot of v7 of the prototype showing the changes made to the tab concept](v7-claim-view.png "Understand the claim and context design")

### Part 2 - Assess the evidence against the evidence criteria
By splitting out the two jobs-to-be-done we first needed a way of initiating the processing stage of the journey. To do this we opted to have a tab that's sue would be flexible. For not-yet-processed claims the tab would labelled process a claim and hold a CTA to start the processing step, once the claim has been process the tab would change to "Outcome" and show the outcome of the claim.

When it came to the processing of the claim the current design made use of two questions with radio options as answers that triggered conditional questions based on the radio option selected. 

![A screenshot of v5 of the prototype showing radio button with conditional fields](v7-claim-view.png "v5 of the processing prototype")

The key decision came as to whether the CTA to process the claim would initiate a journey within the page or take the user to separate screens for each stage of the processing journey. While the use of a separate flow might result in a less complex page you would lose all the context of the organisation, claim and associated information. 

As a result of this we had the following hypothesis:

>**We believe that** embedding the process a claim journey within the claim view 
>**Will be a useful feature for** processors
>**As it will** help them maintain the context of a the organisation, claim and associated information.

While this would be more complex we felt that given the users are professional users of the system that the benefits would outweigh the risk of problems stemming from complexity. 

The last steps of this part of the journey were dealing with the conditional questions, ideally these would be separated out onto different pages that would appear depending on the input from previous questions. Due to possible technical challenges of this and our interest in exploring interim solutions. We produced two versions. 

#### Version A
This involved the embedded questions and split out the different questions onto seperate screens.

![A screenshot of v7 of the prototype showing version A with the questions separated out.](version-a.png "v7 of the processing prototype - version A")

#### Version B
This involved the embedded questions but reused the same formatting of the questions from the existing solution where they all sit ona  single screen.

![A screenshot of v7 of the prototype showing version B with the questions all one screen.](version-a.png "v7 of the processing prototype - version B")

For both these versions we had consider how error handling, navigating to other tabs and pages would work as well as dealing with different claim types. 

#### Navigating within a claim
While a user is processing a claim and decides to navigate to another tab within that claim eg "History", the stage of the "process a claim" journey is maintained and when navigated back to that tab the user can pick up where they left it. 

#### Navigating with an organisation
While a user is processing a claim and decides to navigate to another page of the organisations eg "Users", the processing of a claim is reset 

#### Error handling
We decided it best for the error summary to appear at the top of the claim header and link to the relevant error message, if the user was on a different tab, when the error summary is pressed it would automatically take them to the "process a claim" tab and to the corresponding error message.

#### Claim types 
We dealt with this in the same way we have done in the previous versions, where we on'y show the data and information contained for that claim type.

## How we tested our ideas and what we found
Due to a de-prioritisation of this feature following design work but before usability testing. This as moved further down the roadmap. When we get back to this peiece of work in roadmap we will pick up testing at that point and update this post with findings and next steps. 
