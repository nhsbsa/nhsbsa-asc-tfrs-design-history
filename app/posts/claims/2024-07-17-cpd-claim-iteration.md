---
title: Iterating CPD claims
description: After conducting research on CPD claim designs, we needed to iterate on the outcomes of our many hypothesis' that went into the design, led by some buisness questions that needed answers.
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-07-17
tags:
  - private-beta
  - claims-version-11
  - revalidation-funding
aside:
  title:  Claims prototypes
  content: |
    [View claims v11 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v11/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

There were three key aspects of the CPD journey identified as not working and needing further iteration. The activity type, evidence of completion collection, and CPD eligibility. Worked through options of design and held workshop to discuss and crit with business.

## Why we did this work

- Sprint number ... 
- Sprint goal ... 

#### Goals of work:
- To improve upon parts of the user journey
- To clarify buisness stances on various parts of the journey.

## What our ideas were

### Activity List and capturing evidence of completion for courses.
- Out of UR there was lots of confusion for the submitters on which category their activity would come under, it was found it underhanded their confidence in using the service, and places the burden on the submitter. We had previously asked if they selected formal and educational as the type of activity then we would ask if it was a course and if so then in the claim scaffold we would ask for evidence of completion. The trouble was what if they selected the wrong category and they would never be asked for evidence when we need it and also the course might not always have evidence of completion and the submitter could easily select no for having evidence and the processor would never be able to check.
- Upon diving deeper into the motivation for categorising the activity type we discovered it was for reporting purposes. 
- The importance of capturing the evidence of completion also was to reduce fraud as revalidation claims are more open to being for any kind of activity.

We solved these issues in two ways:

#### Hypothesis 1
>**We believe that** moving the categorisation of the activity to the processing side of the journey
>**Will be a useful feature for** submitters
>**As it will** be easier to train processors on which category to group activities under so this reporting would be more reliable rather than taken from the inconsistencies of submitters selections.

#### Hypothesis 2
>**We believe that** removing the requirement for evidence of completion and adding a line in the declaration instead to mitigise fraud
>**Will be a useful feature for** submitters
>**As it will** cover all claims rather than basing the gathering of evidence on the inconsistent selection of formal and educational activity and then asking if its a course with some form of evidence of completion. As revalidation fund is more open to fraud this mitigates for all claims.

![A screenshot of start page explaining both types of claims"](cpd-declaration.png "A screenshot of start page explaining both types of claims")

### Learner eligibility
- For CPD claims we need to know the learner is eligible. Previously we had the unspecific question of simply asking 'is this learner eligible' every time added to a claim, whether existing or new, but that put the onus on the submitter to know what makes them eligible, and also because the specific scheme guidance hadn’t yet dictated what the criteria was for eligibility so we couldn't be more specific. 
- Questions on whether we needed to ask if eligible as there is no way for the processor to check, we marked this as a policy question which was decided yes.
- The scheme guidance then updated to dictate what makes a learner eligible so we were able to break down our vague question more specifically.

#### Hypothesis 1
>**We believe that** breaking down the eligibility question into two specific questions
>**Will be a useful feature for** submitters
>**As it will** take out the abiguity of them being unsure of what makes a learner eligible and at any point they answer no to a quesiton it will break them out the journey and not let them add a ineligible learner.

- First question is 'Is the learner registered with the NMC or HCPC?'. Options of yes, no, and a page of what to do, or we also decided needed a third option of what if they don’t know and we add guidance for them if they don’t to go find out. 
- Second question is 'Is the learner in an eligible role?' with roles specified, and same option of don't know.

![A screenshot of start page explaining both types of claims"](cpd-criteria-1.png "A screenshot of start page explaining both types of claims")

![A screenshot of start page explaining both types of claims"](cpd-criteria-2.png "A screenshot of start page explaining both types of claims")

![A screenshot of start page explaining both types of claims"](cpd-criteria-unsure-1.png "A screenshot of start page explaining both types of claims")

![A screenshot of start page explaining both types of claims"](cpd-criteria-ineligible.png "A screenshot of start page explaining both types of claims")


### Activity description
- Now that we removed the activity type question, the activity description increases in importance as this will be what displays in the table to help a submitter identify their claim in the future and the only thing that adds context to the claim.
- Limited to 80 characters, as decided short enough to make the submitter succinct in what they write and all fits in the manage claim table. It counts down character count to help the submitter know how many letters they have left. 

#### Hypothesis 1
>**We believe that** limiting the character count of the activity description the submitter's can add
>**Will be a useful feature for** submitters and processors
>**As it will** force the submitter to be succinct in what they type making it able to be displayed in the claims table to identify a claim.
<!-- // description -->
![A screenshot of start page explaining both types of claims"](cpd-description.png "A screenshot of start page explaining both types of claims")
<!-- // manage claims table -->
![A screenshot of start page explaining both types of claims"](cpd-description-table.png "A screenshot of start page explaining both types of claims")

### Budget
- We’ve updated the budget displayed as this was another section that came up in UR that needed a deeper dive into what information is important to the processor here, and a few edge cases that made displaying multiple pieces of info about budget of amount left, including submitted claims, complicated to understand.
- It’s important to show the submitter how much is left on the learner though, so reduced complexity until we do further research.
- Conversations on whether to allow claims to be submitted if learner already has claims that use budget submitted but not yet approved, or to allow not including pending. 

#### Scenarios identified that might lead to risks:
- Scenario 1: If multiple claims are submitted for one learner by multiple organisations, and if claim’s are not processed in order of time submitted, in different processor queue's, might org 2 get all the money and org 1 none if processor 2 gets to it first. Or org 2 gets all the reimbursement amount and org 1 the lesser remaining amount.
- Scenario 2: More than 1 claim for same learner are submitted and put in multiple different processor's queues, if first claim gets all the budget left the other processors might get to a claim that already has no budget left and all they are going to do is reject - can we auto reject?
- Scenario 3: Race condition multiple claims for same learner getting processed at the same moment by different processors (which is probs perhaps unlikely), might seem they have budget, both spend time processing a claim that only get told when go to submit that no budget left and unable to do so (is this a reject?) or need to go back again and recalculate reimbursement amount. First one there gets the money

#### Ideas for process around checking budget that could mitigate some of edge cases
- Accept risks
- Process claims in order
- All one learner's claims in one processor's queue
- Can processor see whole case file for a learner
- Show breakdown of pending claims in budget including of other orgs - lessens chances of lots of claims for one user that will end up rejected
- All subsequent claims after budget 0 auto rejected
- Can't submit claims if the amount in pending goes over total remaining budget left

#### Outcome
- Can't submit claims if the amount in pending goes over total remaining budget left
- Processing times quick so chances of closing off fund to other orgs are small
- Annoying to user to be stuck not being able to make claims but smaller risk than the other process issues
- If we get calls into the contact centre along the lines of "there's no funding left on this learner, but I've only had £300 worth of claims paid" it will either be a case of there are claims that have been submitted by your organisation that have been submitted but not yet processed, there are claims that have been submitted by another organisation that have been submitted but not yet processed, there are claims that have been submitted by another organisation that have been submitted and paid - the advisor won't know which scenario it is, and will only be able to give vague advice and say something like "processing times are around X number of days, check back after this point"

#### Examples of budget breakdown on learner:
- Learner A: Has no claims submitted, budget available would show as £500
- Learner B: Has £200 approved and no other submitted claims, budget available would show as £300
- Learner C: Has £200 approved, a £200 claim submitted but not yet processed, budget available would show as £100
- Learner D: Has £200 approved, a £300 claim submitted but not yet processed, budget available would show as no budget available

#### Hypothesis 1
>**We believe that** only showing the budget remaining after pending AND approved claims
>**Will be a useful feature for** submitters
>**As it will** be the only piece of budget information absolutely vital to their journey until we understand further what might be useful and why.

What we need to test:
- Whether it frustrates a submitter not being able to submit claims even though a pending claim for learner might be rejected, and they have to come back to check. Because claims can be submitted for a single learner from multiple organisations each submitter will have no knowledge without seeing a amount for pending claims of how many there are that have already been created. No ability currently to search their own claims tables to see if a learner has any other active claims from same organisation either, though that is on the future post MVP roadmap.

![A screenshot of start page explaining both types of claims"](cpd-filled-out-claim.png "A screenshot of start page explaining both types of claims")

### Content update of one activity per claim
- Content update at the top to try to mitigate the circumstance that people might try to combine multiple activities in one claim. This is a concern as now they don't have to select a type, instead its a free text box, so we need to re-enforce one activity per claim. If this isn't mitigated at this point it could mess up reporting for processors in the future if activities are combined into one. 
- We see a chance of people combining all their receipts into one file. 

#### Hypothesis 1
>**We believe that** specifying one activity per claim
>**Will be a useful feature for** submitters
>**As it will** re-enforce that need to submit one activity per claim, reducing likelihood people submit multiple activities in one claim, and less likely for claim to get rejected / mess up reporting.

What we need to test:
- What is the impact of combining multiple activities for a learner into one, would the processing team allow it?

## What we will do next
These updates got completed in the prototype in version 11, but then the funding policy changed and CPD claims were no longer going to be able to be claimed for. These updates were stripped out in version 12, which is the version that reflects the current live service.



