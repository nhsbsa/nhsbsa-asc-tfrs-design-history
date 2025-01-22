---
title: Scoping for MVP
description: First ideation session focusing on what we think the journey should look like, based off assumptions and hypothesis'. Aimed to get a first design out to take learnings off in research. 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-05-05
tags:
  - private-beta
  - processing-version-1
  - processing-find-a-claim
  - processing-process-a-claim
  - processing-claim-notes
  - 100-type-claims

aside:
  title:  Processing Prototypes
  content: |
    [View processing v1 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/prototypes/design/v1/) 
    Password: bsaasc123

    Claim reference ID's:
    Submitted: Z1Z-F1J6-3XF7-C
    Approved: Z8S-F1J6-4GH7-C
    Rejected: Z8S-F1J6-9VGH-C
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

We had a processing workstream kickoff with the wider product team to begin the processing a claim piece of work. After understanding the constraints and the scope of the journey from multiple buisness and tech perspectives, we had a in-person workshop with the UCD team. We explored ideas of how this journey could look, what are the needs and wants of the users and then stripped it back to the MVP of what we deemed necessary to complete a processing claim journey based off assumptions and hypothesis'. We tested this inital design flow w/c 22 April 2024.

## Why we did this work

We are on version 8 of the claim creation side of the journey and now need to create the journey to process the claims that organisations have submitted for their users.

>**How might we** give users the MVP functionality they need to process a claim.

## What our ideas were

Core questions we asked the UCD team to figure out the potential needs and wants of the processor to complete the task of processing a claim.

#### How does a processor find the claim they are wanting to process?

Our assumption is the processor will be given just the claim ID for the claim they need to process in Operations Manager. They will need to use this ID to search in our service for the claim. We don't believe this ID in OM is able to be a link so the processor will copy and paste the ID directly into our service's claim ID search box reducing mistakes.

>**We believe that** only the claim ID 
>**Will be needed for** processors to find the correct claim
>**As it will** allow them to search in our service and find their claim.

![A screenshot from the processing a claim prototype showing the search claim screen](claim-id.png "Claim ID search")

#### To be tested:
- Whether they copy and paste the claim ID or type it in themselves.
- Whether mistakes are made and then they have no other information to validate they have the correct claim so how likely is it they process the wrong claim.


#### What claim detail information does the processor need to see when they land on a claim?

Our starting assumption for this question is that the purpose of a processor is strictly to judge evidence of payment and completion against some criteria stating it's the correct training etc so the processor will only need to know any claim information during the questioning and they have no other purpose for more information on this claim details view. 

>**We believe that** only the claim status and the claim ID 
>**Will be useful information for** processors to process a claim
>**As it will** allow them to know they are in the claim they expect from the claim ID and there is no additional information neccessary for them at this point in the journey.

![A screenshot from the processing a claim prototype showing the initial view a processor lands in with no additional claim details](claim-details.png "Process a claim view")

#### To be tested:
- Whether users have any other purpose and needs for any additional information about the claim beyond information provided in criteria checks. 


#### How can a processor effectively view the multiple pieces of evidence?

We started out looking into how other services present new evidence and investigating technical constraints of showing in the view. We believed that opening in seperate tabs poses issues for the user with confusion over having multiple tabs open and losing track which is which piece of evidence and they may still have evidence open for other claims leading to incorrect processing. We looked into other services and it was a common pattern however to open in new tabs so we decided to use this approach and is something to investigate further in research.

>**We believe that** opening the evidence in new tabs
>**Will be useful information for** processors
>**As it will** allow them to view the evidence of payment and evidence of completion to complete their criteria checks and is a format already familiar to users.

![A screenshot from the processing a claim prototype showing the initial design of the list of evidence available to view](one-evidence-per.png "List of evidence to select to view")

![A screenshot from the processing a claim prototype showing the view of evidence opened with multiple tabs](evidence.png "Piece of evidence opened in tab")

#### To be tested:
- Whether opening files in new tabs will pose usability issues and add confusion of which evidence has been viewed. 

#### How can the processor check the evidence against the criteria?

As we have multiple pieces of criteria that multiple different pieces of evidence are needed to satisfy we had the initial question to answer of the way we presented the evidence to make it easy for processors of is it multiple criteria questions to review per piece of evidence or multiple pieces of evidence to view per each piece of criteria. We decided to present one question at a time for all the evidence as we hypthesised its less cognitive load to be looking for one thing rather than trying to spot many things at a time.

 We had also previously decided they needed the claim details only at the moment of reviewing the evidence with a criteria check so we incorportated the details dynamically into each question to make the cognitive load on the processor easier. 

>**We believe that** one question per page with all the evidence available and information about the claim incorporated into the question
>**Will be useful information for** processors
>**As it will** allow them to reduce cognitive load, making it easy for them to know what they need to compare and focus on each question at a time. 

![A screenshot from the processing a claim prototype showing one question per screen](one-evidence-per.png "One criteria question per screen with option to view any piece of evidence")

To be tested:
- Research to understand whether criteria checking with one question per page is usable

#### Cost per learner

We believe this is going to be a more difficult part of the journey for the processor as is less straight forward and requires some calculation. We believe we don't need to ask the processor to work it out unless the payment is legitimate so we have incorportated the input box for it into the yes selection of the criteria radio options. We have added some content to try to explain. We need to research more into the issues the processors will have with this cost.

>**We believe that** having the cost per learner calculation only available on yes selection of evidence of payment
>**Will be useful information for** processors
>**As it will** reduce need for difficult mental task when unneccessary if its a no answer.

![A screenshot from the processing a claim prototype showing the view of criteria check per view with cost per learner input for evidence of payment question](cost-per-learner.png "Cost per learner on yes selection")

To be tested:
- Research to understand how to help users identify cost paid by organisation as we believe this is a area with lots of potential for error.

#### Rejection notes

We believe a processor will want to capture a rejection reason for each no selection per piece of criteria as this is information that will inform the overall claim review to feed back to the claimant. We believe this information could be useful to add automatically to the notes section of a processing claim. 

>**We believe that** having a rejection note input per piece of criteria reviewed with a no 
>**Will be useful information for** processors
>**As it will** as this is information that will inform the overall claim review to feed back to the claimant.

![A screenshot from the processing a claim prototype showing the criteria check per view with rejection note input for each no selection](rejection-note-input.png "Rejection note on no selection")

#### To be tested:
- Research to understand how best to capture notes when criteria aren't met. 

#### How will the processor judge that a claim is approved or rejected?

With one question per page then they move to the next we believe a screen is needed to review all the criteria results. Since then we have the criteria review information of yes and no's we have the ability to logically work out whether a claim is approved or rejected based off the criteria radio selections. By having a flow that then leads to a predetermined outcome we believe we will speed up the processing of a claim.

>**We believe that** having a flow leading to a predetermined outcome
>**Will be useful information for** processors
>**As it will** allow them to focus on a single piece of criteria review, then the automatically generated result of approve or reject will remove a extra task for the processor to complete manually speeding the process.

![A screenshot from the processing a claim prototype showing the view to check your answers](check-your-answers.png "Check your answers with rejection notes, with ability to go back and change answer")

The outcome screen is a place we can summarise the outcome, and the next steps whether its a approval with reimbursement amount calculated and explained or a rejection with a summary of rejection notes. For the reimbursment amount there is a calculation that needs to happen of the amount reimbursed might not be the amount the submitter paid if it exceeds the maximum reimbursement for that particular training.

>**We believe that** automatically calculating the reimbursment amount based off the information the service will have received from the processor of the cost per learner and what we already know of the training maximum reimbursment amount
>**Will be useful information for** processors
>**As it will** take a burden off them as it is something we will have the capability to work out.

![A screenshot from the processing a claim prototype showing the criteria check per view with rejection note input for each no selection](claim-approved.png "Outcome screen - approval")

![A screenshot from the processing a claim prototype showing the criteria check per view with rejection note input for each no selection](claim-rejected.png "Outcome screen - rejection")

![A screenshot from the processing a claim prototype showing the criteria check per view with rejection note input for each no selection](claim-processed.png "Claim successfully processed viewed")

#### To be tested:
- Research to understand how users perceive prescriptive criteria checks that lead to a predetermined outcome.
- Do processors understand reimbursement amount calculations

#### What notes are useful for the processor to write/read back in the future?

We started off with the assumption that this is a feature that will be very valuable to processors, so they can leave context for future viewing on a claim, to log escalations, to add rejection notes, and it is a process that is currently done offline where have to manually log. Having it within the claim will make it more organised. We hypothesied on potential categories for the reasons notes might be added. We hypothesised organisation notes might be needed here to add higher level context to a claim, perhaps for fraud reasons but also cavieted that with would that be a process outside of this one of processing a single claim, surely a processor should just concentrate on the task of processing a single claim as unlikely they will be able to spot fraud at this level.

>**We believe that** adding the feature of notes
>**Will be useful information for** processors
>**As it will** allow them the flexibility to capture a lot of additional information about a claim for a variety of reasons.

![A screenshot from the processing a claim prototype showing view to add a note](notes.png "Add note view")

![A screenshot from the processing a claim prototype showing note categories](note-categories.png "Note categories")

#### To be tested:
- Where the categories are helpful, too many, what else might a processor need notes for? 
- Whose role is it to spot fraud, and should we include ability to talk about fraud within this section.


## How we tested our ideas and what we found
- We tested version 1 with 4 different users. 
- Participants felt they wanted to see more details about the claim to help orientate themselves on what the submitter has submitted and thought it was odd to not see anything else on this screen.
- People weren’t expecting a series of questions which led to confusion around the same evidence presented on each page.
- Business still weren’t providing clarity on what criteria was and a chance the criteria would change as process developed in live.
- Unclear to processers that comments left when a criteria wasn’t met would end up being passed to the submitter
- Rejection notes were more per piece of evidence, rather than per criteria, the update to combine the criteria into one question actually helps with then only one note being added per type of evidence
- Notes are helpful but too many categories were confusing to distinguish between.
- Cost per learner/reimbursement amount is difficult to calculate.

## What we will do next
Next steps are iterating the journey based on the user feedback in a new version 2.

