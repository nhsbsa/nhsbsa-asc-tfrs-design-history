---
title:   Edit a claim
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-03-24
tags:
  - private-beta
  - processing-version-8
  - processing-edit-a-claim
relatedUserNeeds:
  - user-need-10
aside:
  title:  Processing prototypes
  content: |
    [View processing v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v8/) 
    Password: bsaasc123

          Workplace ID to test:
          B02944934

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

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

This work is part of the roadmap to ready to reduce the volume of claims that are being rejected. One of the problems identified was the additional time, effort, and frustration that is being caused for both submitters and processors by the requirement of creating a new claim each time a claim has been rejected rather than the expectation of being able to correct any mistakes on an unsuccessful claim and re-submit. 

At the beginning, we needed clarity on the terms edit and pend in the context of this work to ensure everyone was referring to the same stages of the process. To address this, I created a diagram on the screen to visually represent the journey, minimizing reliance on language and clearly illustrating the specific parts we were discussing. 

We defined the scope to focus on the latter stage (numbered 2). The initial phase of resolving uncertainties (numbered 1) through questions would remain an offline task. Our goal was to address what happens after the outcome is determined—specifically, what actions can be taken when a claim does not meet the criteria.

## What our ideas were

### Duplicated claim or edit of the same claim?

If the issue stemmed from the time spent re-entering information, we considered addressing it by allowing claim duplication. This would generate a new claim with a unique claim ID, eliminating the need to input the same details again. We determined that it was part of the same claim lifecycle, meaning the focus should be on enabling edits within the existing claim rather than creating a new one.

### Editing the same claim options

We explored two options:

#### Option 1: Introducing a Third Decision State
We could introduce a third option alongside "Approve" and "Reject"—something like "Allow Edits" (or another term that best fits the context).
A key question was whether the processor could reliably determine at that moment if the claim was a hard rejection or if it could be corrected. If they misjudged, the claim might either get stuck in a pending state or be rejected prematurely, leaving the organization without a way to dispute the decision.
#### Option 2: Treating It as a Rejection with Reopening Rights
The other option was to reject the claim as the answer to does it pass the criteria is technically a no even if could potentially be turned into a approval with updates. Then the submitter could have the option to reopen their claim if they wanted to edit. 
This would remove the burden from being on the processor at the time of processing deciding whether the org would be able to action a claim, but the challenge here was that a rejected claim might not be in its final state, as it could be revised and resubmitted. This raised concerns about how it would impact reporting.

Both options had their pros and cons. Part of our design process is to make an informed decision, form a hypothesis, and test it in User Research to validate our assumptions.

#### Decision & Assumptions
We chose to introduce the extra option to allow edits, assuming that processors, at the point of assessment, could reliably decide whether a claim should be actioned or rejected. To address open questions, we made the following assumptions:

- Disputed rejections wouldn't be handled within this system. Instead, they would be escalated through a backend live support ticket.
- The volume of claims that submitters would want to delete instead of resubmitting would be low. As a result, those claims would remain in the "queried" state.
- The claim reference would remain the same throughout the process. This would allow us to pause work items in OM, with tasks automatically resuming when the claim reappears as active in the output file.

### First design iteration

There's two sides of this work, here I am detailing the processor side where they need to highlight in some way a claim needs editing. Then there is the submitter/org side where they receive the feedback and update the claim as necessary to get it closer to a approval. Link to that post <a href="../claims/edit-a-claim">here</a>.

#### Current design usability issues

I began by trying to make edit a claim work in our current view, as this would enable quicker devliery. 

![Previous process a claim view](process-claim-old.png "Previous process a claim view")

Integrating the edit functionality required adding more elements to a view that wasn’t designed to be iterative. It already has usability issues and isn’t fully GDS-compliant due to past "quick win" decisions. With the additional logic and complexity introduced by editing a claim, the current view simply can’t support the required functionality. This raised a key question: has this screen reached its limit?

A redesign was previously considered when notes were introduced, but it was deprioritized due to technical effort and never tested. Here is a <a href="../processing/claim-view-iteration">post</a> that details this redesign.

With more features on the roadmap, the current view is reaching a breaking point. This challenge will keep recurring—so at what point do we decide it’s time for a fundamental change? 

We’ve decided to bring the processing view redesign back into scope, allowing us to apply the same scalability principles used in the org view to ensure it can support future features.

### Redesign - Tabs

New layout breaking down into tabs to make the information more digestible and less cognitively overwhelming than having it all in the view at once. 

![New claim view broken down into tabs.](process-tab.png "New claim view broken down into tabs")

#### Process a claim tab
- The process a claim journey follows a one question per page model aligned with GDS principles. 


![Evidence of payment check - step 1](evidence-payment-check.png "Evidence of payment check - step 1")

- Each decision point leads to a tailored journey:
- Does it meet evidence of payment criteria?
  - Yes: Moves to the cost-per-learner screen, continuing through the processing journey to either the evidence of completion review (for a 100% claim) or the outcome screen (for a 60/40 claim).
  - Needs Action: Prompts the processor to provide a reason before continuing the journey.
  - Rejection: Breaks the user out of the flow to provide a rejection reason before moving to the outcome screen. This assumption requires testing to confirm whether users expect to exit the process at this point or would expect to complete processing in the event of a dispute.

![Cost per learner - step 2](cost-per-learner.png "Cost per learner - step 2 of a claim that has met payment evidence criteria")

![Check completion - step 3](completion-check.png "Check completion - step 3")

>**We believe that** following the one question per page model aligned with GDS principles 
>**Will be a useful feature for** claim processors
>**As it will** ensures they only see relevant information at each stage reducing the cognitive load

>**We believe that** following a linear model
>**Will be a useful feature for** claim processors
>**As it will** allow us to tailor the flow based on what answers they select, streamlining the process to the necessary questions.

![Payment did not meet criteria reason](payment-rejection-reason.png "Alternative route of payment did not meet criteria reason leading to a rejection")

![Queried evidence review reason](confirm-reject.png "Alternative route of payment did not meet criteria reason leading to a queried state")


>**We believe that** having the other tabs available to see further details while processing and maintaining where the processor is up to in the journey
>**Will be a useful feature for** claim processors
>**As it will** allow them the flexibility of checking additional infomation if necessary at no cost to their progress of processing.

As I was analysing some of the reasons outlined in the R2R for when a claim would be pended or rejected a few questions arose into which step of the processing flow these issues would come to light and whether they would fit into the question categories of evidence of payment or completion or would be within a additional category. I added in a extra question at the end of the flow to find out if processor's would ever use it.

![Any other reason to reject claim check - step 4](other-reason-check.png "Any other reason to reject claim check - step 4")


>**We believe that** adding in a extra question in the processing flow of "Should this claim be rejected for any other reason"
>**Will be a useful feature for** claim processors
>**As it will** capture any other criteria they have to check against that might mean a claim is rejected.

**To test**
- Whether this new linear model fits the processing flow. We want to find out where it deviates but also to consider whether that is a good or bad thing. Particularly because processor’s are already used to a certain more flexible design of this processing flow and this is a change.  
- Whether the new question for any other reasons a claim should be rejected is useful, especially at the end of the journey.


<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-approve.png" alt="A screenshot from v13 of the prototype showing the delete registered user confirmation" style="width: 100%; height: auto;">
      <figcaption>Confirm approve</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="outcome-approved.png" alt="A screenshot from v13 of the prototype showing the delete invited user confirmation" style="width: 100%; height: auto;">
      <figcaption>Outcome approved</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-queried.png" alt="A screenshot from v13 of the prototype showing the delete registered user confirmation" style="width: 100%; height: auto;">
      <figcaption>Confirm query</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="outcome-queried.png" alt="A screenshot from v13 of the prototype showing the delete invited user confirmation" style="width: 100%; height: auto;">
      <figcaption>Outcome query</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-reject.png" alt="A screenshot from v13 of the prototype showing the delete registered user confirmation" style="width: 100%; height: auto;">
      <figcaption>Confirm reject</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="outcome-rejected.png" alt="A screenshot from v13 of the prototype showing the delete invited user confirmation" style="width: 100%; height: auto;">
      <figcaption>Outcome reject</figcaption>
    </figure>
  </div>
</div>

#### Claim history tab


![Claim history tab - 100 claim](history-tab-100.png "Claim history tab - 100 claim")

>**We believe that** adding the claim history
>**Will be a useful feature for** claim processors
>**As it will** gives a full audit trail of the claim, including who submitted each version of a claim and re-signed the declaration on what date. 

>**We believe that** including all the dates from a claim including training, payment, start, completion as well as claim lifecyle dates
>**Will be a useful feature for** claim processors
>**As it will** put the whole claim into context for the processor.

>**We believe that** adding the claim history
>**Will be a useful feature for** claim processors
>**As it will** allow them to gain full context of a claim and it's history, especially on resubmitted claims to see the prevous query notes and then how a organisation has actioned it, if failed again it lets them see it need to be more specific in the next note. 

![View previous claim submission](view-claim.png "View previous claim submission")

![View rejection note](view-rejection-note.png "View rejection note")


**To test**
- Whether displaying the previous submissions and the notes is enough for the processor to be able to compare the differences, or we need to show the changes broken down in a more granular way. 


#### Details tab

![Details tab](details-tab.png "Details tab")


>**We believe that** having a tab for just claim details and grouping into sections
>**Will be a useful feature for** claim processors
>**As it will** give more room to give more information about a claim e.g max reimbursement amount. And is easier to digest.


#### Evidence tab

![Evidence tab](evidence-tab.png "Evidence tab")


>**We believe that** grouping the evidence together
>**Will be a useful feature for** claim processors
>**As it will** easily accessed, and also on occasion the evidence has been uploaded into the wrong section.

>**We believe that** the evidence opening in new tabs
>**Will be a useful feature for** claim processors
>**As it** is still behaviour they are used to from other services.

#### Outcome tab

![Outcome tab](outcome-approved.png "Outcome tab")

>**We believe that** showing process a claim or outcome tab based on whether the claim is yet to be processed
>**Will be a useful feature for** claim processors
>**As it will** guide them towards what state the claim is in and whether any action is needed.

#### Alternate Designs

We had some questions over which designs a processor would prefer so we decided to implement one in the prototype and show screenshots of the alternative to see if that would be preferred.

Design 1

![Alternative questions](alternativeOption1.png "Alternative questions for determining whether to allow edits - part 1")

![Alternative questions](alternativeOption1Part2.png "Alternative questions for determining whether to allow edits - part 2")


>**We believe that** breaking down the question further 
>**Will be a useful feature for** claim processors
>**As it will** reduce confusion over the meaning of the options of rejection and allow edit


Design 2

![Extracting processing questions out to modal](alternativeOption2.png "Extracting processing questions out to modal")


>**We believe that** extracting the processing flow questions out into a modal
>**Will be a useful feature for** claim processors
>**As it will** mean they can navigate all the information in the tabs to find out what they need and not having duplication of information.



## How we tested our ideas and what we found

We divided this work into two aspects: the submitter's journey of editing a claim and the processor's workflow. Each was explored and tested separately, as both were complex and required sufficient time for research, design, and testing. The user research discussion guides for each were extensive, reinforcing the need for a focused approach.

The processor side of the research commenced 26th March and was conducted with 6 participants. 


## What we will do next

- Analysis, playback workshop with the wider team to work together to get to recommendations to take forward, then next iteration of designs and research round two.