---
title: Iterating post research insights
description: Off the back of user research we iterated on designs, not able to be validated as moved to MVP version swiftly.
author:
  name: Hannah Williams
  url: '#'
date: 2024-05-12
tags:
  - processing-version-2
  - process-a-claim
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---
Version 2 Claim ID's
Submitted: Z1Z-F1J6-3XF7-C
Approved: Z8S-F1J6-4GH7-C
Rejected: K93-SK68-3S2K-C

## Why we did this work

On feedback from research that happened w/c 15 May 2024 we iterated the design. Before we could test these updates though we had a product owner decision that needed to scale even further back to meet delivery deadlines. These iterated claim details designs are in V2 then the stripped back updates are in V3.

## What our ideas were

### Claim details
#### Assumption: 
- No additional information is needed by the processor when they land into the claim, just the claim status and the claim ID the processor typed in. The processor’s task will be to judge the evidence by the criteria and information we give per question and they have no other purpose for more information on this claim details view.
#### Finding:
- Participants felt they wanted to see more details about the claim to help orientate themselves on what the submitter has submitted and thought it was odd to not see anything else on this screen.
#### Iteration on design:
- Iterating on what details to include and the layout of presenting this information. We asked ourselves the key question of 'What claim information does the processor need to process a claim?' 
- The inclusion of information like the submitter’s name and email would be useful if the processor wanted to get in contact with the submitter to query something, advise on something not right in the claim etc.
- We decided it was not the processor’s job to spot fraud when processing a claim as that’s more high level above one claim. The job here is to process a single claim.
- We tried various layouts to make the notes functionality all fit on one screen.

![A screenshot from the processing a claim prototype showing the unprocessed claim view](unprocessed-claim.png "Process a claim view")

#### To test:
- Understand whether the claims details presented help orientate users on what the claim is for and by whom.

### Criteria updates
This centers around how to help a processor process a piece of evidence against a set of criteria.
#### Assumption: 
- Our initial assumption was users would be helped by a single question per view
- We also had the knowledge that there was going to be multiple criteria against which to judge but we didn't know it specifically yet, so we designed to allow for multiple questions.
#### Finding:
- People weren’t expecting a series of questions which led to confusion around the same evidence presented on each page
- Business still weren't providing clarity on what criteria was and a chance the criteria would change as process developed in live.
#### Iteration on design:
- Combined criteria for each type of evidence into single question. Due to lack of complete criteria definitions and the complexity identified for MVP this was stripped back to a single question on a different screen with the complete checks being moved offline.

![A screenshot from the processing a claim prototype showing the evidence review screen with yes selection](evidence-yes-selection.png "Evidence review - yes selection")

![A screenshot from the processing a claim prototype showing the evidence review screen with no selection](evidence-no-selection.png "Evidence review - no selection with single rejection note")

#### To test:
- Research needed to understand whether combining the critiera onto one screen improves usability.

### Rejection note per piece of criteria
#### Assumption: 
- Processor would want to write a rejection note for each criteria question
#### Finding:
- Unclear to processers that comments left when a criteria was met would end up being passed to the submitter
- Processors wanted to edit messages before they were sent to submitters 
- Rejection notes were more per piece of evidence, rather than per criteria, the update to combine the criteria into one actually helps one note be added
#### Iteration on design:
- Also added edit rejection note view

![A screenshot from the processing a claim prototype showing reviewing of evidence of payment with one question and one rejection note](evidence-no-selection.png "Evidence review - no selection with single rejection note")

![A screenshot from the processing a claim prototype showing the claim outcome screen for a rejection](claim-rejected.png "Claim outcome - rejection showing notes, one for payment, one for completion")

![A screenshot from the processing a claim prototype showing the edit rejection notes screen](edit-rejection-notes.png "Edit rejection notes")


#### To test:
- Research needed to understand whether combining the critiera onto one screen improves usability.


### Notes
#### Assumption: 
- Would want categories to choose from as many purposes for notes.
#### Finding:
- Too many categories were confusing
- Notes are helpful
#### Iteration on design:
- More simplified categories to see which are useful
- Hypothesis system generated are helpful. So there is a history log of status updates.

![A screenshot from the processing a claim prototype showing the add note screen](add-note.png "Add note")

#### To test:
- 


### Confirmation screen
#### Assumption: 
- Would be wanted to know processing was complete success
#### Finding:
- Confirmation screen was of limited use and processors were keen to check that the claim status has been updated 
#### Iteration on design:
- Hypothesis confirmation screen is unnecessary. Doesn’t tell anything. Removed and pass user back to the claim screen with updated status and success banner. 
- Research needed to understand whether removing the confirmation screen and landing the users back on the claim screen met user expectations

![A screenshot from the processing a claim prototype showing the process a claim view for a approved claim](processed-claim.png "Processed and approved claim view")

#### To test:
- 


### Cost per learner / reimbursement amount
#### Assumption: 
- That the explanation provided would help users understand cost per learner against reimbursement amount.
#### Finding:
- Confusion between total cost paid by organisation for an invoice vs what was paid per learner
#### Iteration on design:
- Hypothesis this is still going to cause some trouble so this needs to remain on its own screen. Only present if result is approve. 
- Research needed to understand whether seperating out the reimbursement question reduce the liklihood of errors.
#### Screenshots:
We beieve that a processor working out the cost per learner and thus the reimbursement amount is going to be a very tricky part of the journey, very prone to errors, with a big risk as could end up entering more money than the claimant is entitled to and BSA will be paying out more than meant to. We believe seperating this calculation out onto a seperate page to focus the processor on the task with more room for the content to guide through the stabs a initial first design aiming to maximise correct calculations.

>**We believe that** having the cost per learner calculation on a seperate page with descriptive content
>**Will be useful information for** processors
>**As it will** to increase chances of accurate calculations.

![A screenshot from the processing a claim prototype showing the search claim screen](reimbursement-amount.png "Reimbursement amount")

To be tested
- Research to understand how to help users identify cost paid by organisation. 


### Save and exit
#### Assumption: 
- Would be wanted to know processing was complete success
#### Finding:
- confirmation screen was of limited use and processors were keen to check that the caim status has been updated 
#### Iteration on design:
Hypothesising processor might begin processing then as multiple tasks to complete and costs to work out they might go away and come back, annoying to have to start again. Button the save and exit needed. 

![A screenshot from the processing a claim prototype showing the search claim screen](unprocessed-claim.png "Claim ID search")

## How we tested our ideas and what we found

- Prototype URLs and version numbers must be provided as part of the UCD log
- User testing feedback
- URLs to Miro boards and prototypes where any iteration history is documented

## What we will do next
- For closing comments on the UCD log, give some information on what the next steps are with this piece of work, are there any further iterations that could be made but may not be as high priority just yet, is there further research to be done on a certain part of the design. Talk about things you were not able to do as part of this design that you want to be raised at a later stage and how this has been documented to be revisited.
