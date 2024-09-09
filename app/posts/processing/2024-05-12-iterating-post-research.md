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

On feedback from research that happened w/c 15 May 2024 we iterated the design. Before we could test these updates though we had a product owner decision that needed to scale even further back to meet delivery deadlines. These iterated claim details designs are in V2 then the stripped back updates are in V3.


## Why we did this work

We did a round of user research on processing and iterated based off feedback.

## What our ideas were

### Claim details
#### Assumption: 
- no additional information is needed by the processor when they land into the claim, just the claim status and the claim ID the processor typed in. The processor’s task will be to judge the evidence by the criteria and information we give per question and they have no other purpose for more information on this claim details view.
#### Finding:
- participants felt they wanted to see more details about the claim to help orientate themselves on what the submitter has submitted and thought it was odd to not see anything else on this screen.
#### Iteration on design:
- iterating on what details to include and the layout of presenting this information. We asked ourselves the key question of 'What claim information does the processor need to process a claim?' 
- The inclusion of information like the submitter’s name and email would be useful if the processor wanted to get in contact with the submitter to query something, advise on something not right in the claim etc.
- We decided it was not the processor’s job to spot fraud when processing a claim as that’s more high level above one claim. The job here is to process a single claim.
- We tried various layouts to make the notes functionality all fit on one screen.
#### Screenshots:
- 
#### To test:
- Understand whether the claims details presented help orientate users on what the claim is for and by whom.

### Criteria updates
This centers around how to help a processor process a piece of evidence against a set of criteria.
#### Assumption: 
- our initial assumption was users would be helped by a single question per view
- We also had the knowledge that there was going to be multiple criteria against which to judge but we didn't know it specifically yet, so we designed to allow for multiple questions.
#### Finding:
- people weren’t expecting a series of questions which led to confusion around the same evidence presented on each page
- Buisness still weren't providing clarity on what criteria was and a chance the criteria would change as process developed in live.
#### Iteration on design:
- Combined criteria for each type of evidence into single question. Due to lack of complete criteria definitions and the complexity identified for MVP this was stripped back to a single question on a different screen with the complete checks being moved offline.

#### Screenshots:
- 
#### To test:
- Research needed to understand whether combining the critiera onto one screen improves usability.

### Rejection note per piece of criteria
#### Assumption: 
- Processor would want to write a rejection note for each criteria question
#### Finding:
- unclear to processers that comments left when a criteria was met would end up being passed to the submitter
- processors wanted to edit messages before they were sent to submitters 
- rejection notes were more per piece of evidence, rather than per criteria, the update to combine the criteria into one actually helps one note be added
#### Iteration on design:
- Also added edit rejection note view

#### Screenshots:
- 
#### To test:
- Research needed to understand whether combining the critiera onto one screen improves usability.



### Notes
#### Assumption: 
- Would want categories to choose from as many purposes for notes.
#### Finding:
- too many categories were confusing
- notes are helpful
#### Iteration on design:
- more simplified categories to see which are useful
- Hypothesis system generated are helpful. So there is a history log of status updates. 
#### Screenshots:
- 
#### To test:
- 


### Confirmation screen
#### Assumption: 
- Would be wanted to know processing was complete success
#### Finding:
- confirmation screen was of limited use and processors were keen to check that the claim status has been updated 
#### Iteration on design:
- Hypothesis confirmation screen is unnecessary. Doesn’t tell anything. Removed and pass user back to the claim screen with updated status and success banner. 
- Research needed to understand whether removing the confirmation screen and landing the users back on the claim screen met user expectations
#### Screenshots:
- 
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
To be tested
- Research to understand how to help users identify cost paid by organisation. 


### Save and exit
#### Assumption: 
- Would be wanted to know processing was complete success
#### Finding:
- confirmation screen was of limited use and processors were keen to check that the caim status has been updated 
#### Iteration on design:
Hypothesising processor might begin processing then as multiple tasks to complete and costs to work out they might go away and come back, annoying to have to start again. Button the save and exit needed. 
#### Screenshots:
- 

## How we tested our ideas and what we found

- Prototype URLs and version numbers must be provided as part of the UCD log
- User testing feedback
- URLs to Miro boards and prototypes where any iteration history is documented

## What we will do next
- For closing comments on the UCD log, give some information on what the next steps are with this piece of work, are there any further iterations that could be made but may not be as high priority just yet, is there further research to be done on a certain part of the design. Talk about things you were not able to do as part of this design that you want to be raised at a later stage and how this has been documented to be revisited.




--------




---------

- register an org will not be tested with users before release due to time pressures and low risks given this nature of the process
