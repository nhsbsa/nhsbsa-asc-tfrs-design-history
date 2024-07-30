---
title: Iterating CPD claims
description: Many decisions needed to be made
author:
  name: Hannah Williams
  url: '#'
date: 2024-07-17
tags:
  - claims-version-11
  - claims-cpd
aside:
  title:  Claims Prototypes
  content: |
    [View claims prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Claims) 
    Password: ascbsa123
---

There were three key aspects of the CPD journey identified as not working and needing further iteration. The activity type, evidence of completion collection, and CPD eligibility. 

## Why we did this work

- Sprint number ... 
- Sprint goal ... 


Goals of work:
- To improve upon parts of the user journey
- To clarify buisness stances on various parts of the journey.


## What our ideas were

### Activity List and capturing evidence of completion for courses.
- Out of UR there was lots of confusion for the submitters on which category their activity would come under, underhanded their confidence in using the service, and burden was all on submitter. We had previously asked if they selected formal and educational as the type of activity then we would ask if it was a course and if so then in the claim scaffold we would ask for evidence of completion. The trouble was what if they selected the wrong category and they would never be asked for evidence when we need it and also the course might not always have evidence of completion and the submitter could easily select no for having evidence and the processor would never be able to check.
- Upon diving deeper into the motivation for categorising the activity type we discovered it was for reporting purposes. 
- The importance of capturing the evidence of completion also was to reduce fraud as revalidation claims are more open to being for any kind of activity.

We solved these issues in two ways:

#### Hypothesis 1
>**We believe that** moving the categorisation of the activity to the processing side of the journey
>**Will be a useful feature for** submitters
>**As it will** be easier to train processors on which category to group activities under so this reporting would be more reliable rather than taken from the inconsistencies of submitters selections.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

#### Hypothesis 2
>**We believe that** removing the requirement for evidence of completion and adding a line in the declaration instead to mitigise fraud
>**Will be a useful feature for** submitters
>**As it will** cover all claims rather than basing the gathering of evidence on the inconsistent selection of formal and educational activity and then asking if its a course with some form of evidence of completion. As revalidation fund is more open to fraud this mitigates for all claims.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Learner eligibility
- For CPD claims we need to know the learner is eligible. Previously we had the unspecific question of simply asking is this learner eligible every time added to a claim, whether existing or new, but that put the onus on the submitter to know what makes them eligible, and was because the specific scheme guidance hadn’t yet dictated what the criteria was.
- Questions on whether we needed to ask if eligible as there is no way for the processor to check, we marked this as a policy question which was decided yes.
- The scheme guidance then updated to dictate what makes a learner eligible so we were able to break down our vague question more specifically.

#### Hypothesis 1
>**We believe that** breaking down the eligibility question into two specific questions
>**Will be a useful feature for** submitters
>**As it will** take out the abiguity of them being unsure of what makes a learner eligible and at any point they answer no to a quesiton it will break them out the journey and not let them add a ineligible learner.

- First question is 'Is the learner registered with the NMC or HCPC?'. Options of yes, no, and a page of what to do, or we also decided needed a third option of what if they don’t know and we add guidance for them if they don’t to go find out. 
- Second question is 'Is the learner in an eligible role?' With roles specified.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Activity description
- Now removed the activity type question, description is very important as this will be what displays in the table to help a submitter identify their claim in the future and the only thing that adds context to the claim.
- Limited to 80 characters, as decided short enough to make the submitter succinct in what they write and all fits in the manage claim table. It counts down character count to help the submitter know how many letters they have left. 

#### Hypothesis 1
>**We believe that** limiting the character count of the activity description the submitter's can add
>**Will be a useful feature for** submitters and processors
>**As it will** force the submitter to be succinct in what they type making it able to be displayed in the claims table to identify a claim.
<!-- // description -->
![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")
<!-- // manage claims table -->
![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Budget
- We’ve updated the budget displayed as this was another section that came up in UR that needed a deeper dive into what information is important to the processor here, and a few edge cases that made displaying multiple pieces of info about budget of amount left including submitted claims complicated to view and understand.
- It’s important to show the submitter how much is left on the learner though, so reduced complexity until we do further research this value the budget of claims that are approved, not including claims yet to be processed. Since organisations can submit claims as long as there is still budget not including pending this is the only piece of information completely necessary to the journey.

#### Hypothesis 1
>**We believe that** only showing the budget remaining after approved claims, not including pending,
>**Will be a useful feature for** submitters
>**As it will** be the only piece of budget information absolutely vital to their journey into we understand further what might be useful and why.

What we need to test:
- Whether it frustrates a submitter not knowing how likely a claim is to be approved or rejected. Because claims can be submitted for a single learner from multiple organisations each submitter will have no knowledge without seeing a amount for pending claims of how many there are that have already been created. No ability to search their own claims tables to see if a learner has any other active claims from same organisation either.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Declaration TODO
- Has the added line in the declaration which has been added to mitigate fraud. 

#### Hypothesis 1
>**We believe that** specifying one activity per claim
>**Will be a useful feature for** submitters
>**As it will** re-enforce that need to submit one activity per claim, reducing likelihood people submit multiple activities in one claim, and less likely for claim to get rejected / mess up reporting.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")


### Content update of one activity per claim
- Content update at the top to try to mitigate the circumstance that people might try to combine multiple activities in one claim as now they don't have to select a type instead a free text box, need to re-enforce one activity per claim. Will mess up reporting for processors if combine activities into one. 
- We see a chance of people combining all their receipts into one file. 

#### Hypothesis 1
>**We believe that** specifying one activity per claim
>**Will be a useful feature for** submitters
>**As it will** re-enforce that need to submit one activity per claim, reducing likelihood people submit multiple activities in one claim, and less likely for claim to get rejected / mess up reporting.

What we need to test:
- What is the impact of combining multiple activities for a learner into one, would the processing team allow it?

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Content update re-enforcing funding types TODO
- updated signposting page that offers some content explaining the difference between revalidation funding and care skills
- Adding revalidation wording to enforce knowledge of which kind of claim looking at and 'add new revalidation claim'
- In each status we’ve also had some content updates just trying to help the submitter understand the revalidation funding and what is expected back

#### Hypothesis 1
>**We believe that** specifying one activity per claim
>**Will be a useful feature for** submitters
>**As it will** re-enforce that need to submit one activity per claim, reducing likelihood people submit multiple activities in one claim, and less likely for claim to get rejected / mess up reporting.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Content update of cost TODO
- Add cost which specifies more on what can and can’t claim for 

#### Hypothesis 1
>**We believe that** specifying one activity per claim
>**Will be a useful feature for** submitters
>**As it will** re-enforce that need to submit one activity per claim, reducing likelihood people submit multiple activities in one claim, and less likely for claim to get rejected / mess up reporting.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

#### Outcome
Weighing the fact the budget is only £500 and the low amount of claims we expect are going to happen, we will go further with option 2 as this repetitive check will happen few times, and it scopes for longevitiy in case the eligibility changes.


## How we tested our ideas and what we found

- We had a lot of interesting insights on places in the journey we expected but also on some other things too.
- CPD was tested in Version number 10
- There is a lot of confusion of what revalidation funding covers, and the difference between TU and CPD funding.
- Confusion that with a TU they won't get full reimbursement but with a CPD claim they will, which the submitter will choose to claim for if the learner is eligible for both.
- Issues over entering national insurance number to search for a learner
- Concerns over evidence of payment and whether this information is stored.
- The findings were that the activity list was still much too confusing to submitter's and led to doubt in actions to take in the claim's journey. Lots of likelihood that the wrong option will be selected. This is a buisness requirement

- Overall the research had generally positive feedback about being able to complete the process. The concerns and key barriers were relating more to the bigger picture procedural considerations. 


## What we will do next
- Iterations on the CPD designs post user research playback.
- Content updates focusing on explaining need of evidence of completion for a course, the budget inelgibility for a learner .
- For closing comments on the UCD log, give some information on what the next steps are with this piece of work, are there any further iterations that could be made but may not be as high priority just yet, is there further research to be done on a certain part of the design. Talk about things you were not able to do as part of this design that you want to be raised at a later stage and how this has been documented to be revisited.

