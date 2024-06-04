---
title: User research iterated designs
description: Testing the first iteration assumptions
author:
  name: Hannah Williams
  url: '#'
date: 2024-05-10
tags:
  - processing-version-1
  - process-a-claim
aside:
  title:  Processing Prototypes
  content: |
    [View processing prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Processing) 
    Password: ascbsa123
---

On feedback from research that happened w/c 15 May 2024 we iterated the design. Before we could test these updates though we had a product owner decision that needed to scale even further back to meet delivery deadlines. That’s why this is V2, next updates in V3.

## Claim details updates

#### Assumption: 
- No additional information not directly linked to criteria checking is needed to be seen by a processor.

#### Finding:
- Users wanted to see more details about the claim to help orientate themselves on what the submitters has submitted

#### Iteration on design:
Adding organisation and claim details

- From round of user research users wanted to see more information on a claim to orientate themselves within it. The inclusion of information like the submitter’s name and email would be useful if the processor wanted to get in contact with the submitter to query something, advise on something not right in the claim etc. 
- Decided not the processor’s job to spot fraud as that’s more high level above one claim. The job here is to process a single claim. 
- Research needed to understand whether the claims details presented help orientate users on what the claim is for and by whom. 

#### Screenshots:




## Criteria checks against evidence

#### Assumption: 
- Users would be helped by a single question per view.

#### Finding:
- People weren't expecting a series of questions with led to confusion around the evidence presented on each page

#### Iteration on design:
Combined criteria onto a single screen
- Due to lack of complete criteria definitions and the complexity identified for MVP this was stripped back to a single quesiton with the complete checks being moved offline
- Added error states to criteria. 
- Research needed to understand whether combining the critiera onto one screen improves usability

#### Screenshots:





## Cost per learner / reimbursement amount

#### Assumption: 
- That the explanation provided would help users understand cost per learner against reimbursement amount.

#### Finding:
- Confusion between total cost paid by organisation for an invoice vs what was paid per learner

#### Iteration on design:
- Hypothesis this is still going to cause some trouble so this needs to remain on its own screen. Only present if result is approve. 
- Research needed to understand whether seperating out the reimbursement question reduce the liklihood of errors.

#### Screenshots:



## Rejection notes

#### Assumption: 
- Would want to write rejection notes per criteria. 

#### Finding:
- it was unclear to processers that comments left when a criteria was met would end up being past to the submitter
- processors would want to edit messages before they were sent to submitters 

#### Iteration on design:
- 

#### Screenshots:
- 



## Notes

#### Assumption: 
- Would want system notes and many categories to choose from as many purposes for notes.

#### Finding:
- too many categories were confusing
- notes are helpful

#### Iteration on design:
- more simplified categories to see which are useful
- Hypothesis system generated are helpful. So there is a history log of status updates. 

#### Screenshots:
- 



## Confirmation screen

#### Assumption: 
- Would be wanted to know processing was complete success

#### Finding:
- confirmation screen was of limited use and processors were keen to check that the caim status has been updated 

#### Iteration on design:
- Hypothesis confirmation screen is unnecessary. Doesn’t tell anything. Removed and pass user back to the claim screen with updated status and success banner. 
- Research needed to understand whether removing the confirmation screen and landing the users back on the claim screen met user expectations

#### Screenshots:
- 



## Save and exit

#### Assumption: 
- Would be wanted to know processing was complete success

#### Finding:
- confirmation screen was of limited use and processors were keen to check that the caim status has been updated 

#### Iteration on design:
Hypothesising processor might begin processing then as multiple tasks to complete and costs to work out they might go away and come back, annoying to have to start again. Button the save and exit needed. 

#### Screenshots:
- 


---------

- register an org will not be tested with users before release due to time pressures and low risks given this nature of the process
