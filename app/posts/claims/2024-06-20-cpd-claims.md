---
title: CPD claims
description: Expanding designs to allow for submitting CPD claims.
author:
  name: Hannah Williams
  url: '#'
date: 2024-06-20
tags:
  - claims-version-10
  - claims-cpd
aside:
  title:  Claims Prototypes
  content: |
    [View claims prototypes](https://adult-social-care-7fe9bafd955a.herokuapp.com/version-index?area=Claims) 
    Password: ascbsa123
---

So far the prototype only allows for TU claims to be submitted, as dictated by roadmap and priorities we now want to bring in CPD claims. The expectation is that there are going to be less of these type of claims, so the direction was to balance user needs with coming up with a design flow that has the least amount of changes needed to the TU journey, with minimal technical effort, to allow for less work and quicker delivery.

## Why we did this work

- Sprint number ... 
- Sprint goal ... 
- CPD usability testing was originally conducted in round 2 w/c December 11th in Alpha. 
- Various parts of the original CPD journey were highlighted in testing to need further iteration and many parts needed to have further clarification of buisness requirements. For example, the list stating what activities could be claimed for, tested in research round 2, was found to be quite confusing for users in that quite a lot of the sections overlapped and it wasn't clear which option the user should select to add to claim. 
- The TU claim journey has already been developed and tested and the amount of claims for CPD are going to be much lower in comparison. Taking this into consideration in the design process for CPD, balancing the needs for CPD against business priority and technical difficulty, to have the least amount of impact on the TU journey. 
- CPD was orginially included in claims prototype version (?) but then it was pushed down the priority roadmap, and taken out of the MVP.

### Goals of work:
- Bring CPD back into the prototype from the previous version where it had it, adapting it to fit updates to designs.
- Iterate on the points of friction we know from previous testing were issues, causing minimal disruption to TU journey.


## What our ideas were

### Mental model of different types of claims

- We believe there is much risk of confusion over the two types of claims available and what the difference will be of each funding pot and so which type the user selects. We believe content explaining the differences is critical for the submitter's early on in the claims journey.

#### Hypothesis 1
>**We believe that** explaining both types of claim funding types before they start
>**Will be a useful feature for** submitters
>**As it will** set up the submitters mental model of TU versus CPD claims.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

#### Hypothesis 2
>**We believe that** keeping the two different types of funding in two seperate places to manage
>**Will be a useful feature for** submitters
>**As it will** keep them more organised and clear in their minds of where to go to create and manage each type of claim. Also keeps it cleaner in the design as table headings for managing these two types of claims will be different.

![A screenshot of the screen signposting between TU and CPD claims"](signposting-claims.png "A screenshot of the screen signposting between TU and CPD claims")

### Activity list

- The activity list had many section categories and options within each to select from, it had been tested in previous UR and it was found that participants found the list long and confusing as much scope for overlap of activities and selecting the wrong one. 

![A screenshot of the original activity list from previous prototype version 3"](original-activity-list.png "A screenshot of the original activity list from previous prototype version 3")

- We had a session with the wider team to do a short activity to get to a consolidated list of CPD activities based on how we viewed the requirements. It was decided it was not a requirement of DH to report on this information of type of activity so we could be less specific in each selection.

#### Hypothesis 1
>**We believe that** consolidating the list into the header sections with examples of activities
>**Will be a useful feature for** submitters
>**As it will** reduce complextitiy of which activity to select. 

![A screenshot of the condensed activity list"](condensed-activity-list.png "A screenshot of the condensed activity list")

- Also courses in this list require a evidence of completion and a start date to be submitted alongside but there is then the risk that people will accidentally select another option instead of course and then no evidence of completion will be submitted. We decided to extract this question of whether it is a course out to then explain in the content that evidence of completion is required for this category.

#### Hypothesis 2
>**We believe that** seperating out the question of whether a activity selected as formal and education is a course onto a seperate screen
>**Will be a useful feature for** submitters
>**As it will** offer scope to explain we are asking because it needs evidence of completion if it is a course as no other categories require.

![A screenshot of the screen asking if a course"](course-check.png "A screenshot of the screen asking if a course")


### Budget per learner

- Each learner once deemed eligible is allowed access to £500 maximum of revalidation funding. We needed someway of displaying a learner's budget information to the submitter when adding them to the claim.

#### Hypothesis 1
>**We believe that** adding a learner then displaying the budget available on the claim details screen
>**Will be a useful feature for** submitters
>**As it will** allow them to see all the information on a learner and also leaves the adding the learner journey as is with minimal disruption to TU journey of adding the budget in earlier.

- We believe there are three pieces of information important for a submitter to know about a claim: the total remaining, the amount that is in pending for any other claims for this learner that are submitted and not yet approved or rejected, and what then is available for the submitter to make a claim for. 

#### Hypothesis 2
>**We believe that** giving a submitter a breakdown of a learners budget in available, pending and remaining
>**Will be a useful feature for** submitters
>**As it will** allow them to see all the information and able to digest a overview of what is happening for the learner on other claims, and how many more claims can potentially claim back for in the future.

![A screenshot showing breakdown of budget in claim"]( budget.png "A screenshot showing breakdown of budget in claim")

- We believe if a learner has claims in pending that take up all the learners remaining budget they are still allowed to have claims submitted for them as there is a chance these claims will be rejected. 
- Because other organisations can submit claims for same learner if didn't allow claims to be submitted as long as budget after approved claims then what if org 1 submits a claim that takes budget to max in pending claims then org 2 goes to submit a claim but see's no budget so they can't, if it gets rejected org 2 won't know budget has become available, and shuts off budget to most likely org 1 getting it.

#### Hypothesis 3
>**We believe that** being allowed to submit a claim for when a learner has still budget in pending claims
>**Will be a useful feature for** submitters
>**As it will** allow them to take action and still submit for sceanrio other claim is rejected rather than having to wait on that outcome then submit another claim. 

![A screenshot showing all budget in pending claims for learner"](pending-claims-budget.png "A screenshot showing all budget in pending claims for learner")

#### Hypothesis 4
>**We believe that** showing the no budget left screen after confirming claim details
>**Will be a useful feature for** submitters
>**As it will** allow them to still see the information about the learner on the claim details view and then the next screen not allowing will have further content to explain if a submitter doesn't understand the budget.

![A screenshot showing empty budget for learner"](no-budget-learner.png "A screenshot showing empty budget for learner")

![A screenshot showing no budget left for learner screen"](no-budget.png "A screenshot showing no budget left for learner screen")


### Eligibility check

A new design question to consider was the business requirement that stated a learner must be eligible for CPD claims and this is something the submitter must acknowledge in their submission of the claim. Thinking about it with different options weighing pro and cons in technical difficulty and what the buisness is happy with, I came up with three options that were presented to the wider UCD team to see which one was preferred.

#### Option 1
- Asking the submitter is the learner is elgigible by adding a simple checkbox on the declaration form at the end of the journey.

![A screenshot adding the eligibility check to the declaration"](eligible-check-declaration.png "A screenshot adding the eligibility check to the declaration")

Pros
- Simple to add

Cons
- This check happens right at the end of journey after filled in all info only to find out not eligibile which will cause the user annoyance. 


#### Option 2
- Everytime you add a learner to a claim, whether existing or new, we add a screen where we ask the submitter if the learner is eligibile for CPD funding.

![A screenshot adding the eligibility check to a seperate screen"](eligibility-check.png "A screenshot adding the eligibility check to a seperate screen")

Pros
- Simple to add
- Handles longevity of maybe learner becoming no longer eligible

Cons
- A repetitive action you have to do every time you add same earner to a CDP claim. Caveat this with the amount of claims made are going to be few so this may not happen a lot.
- Backend will have to save the budget on every learner as it needs to be a running total


#### Option 3
- Everytime you add a existing or new learner to a claim for their first CPD claim, then we ask if they are elgibile, the backend will then furthermore remember the answer. If yes the learners budget gets set to £500. If no, then they can't be claimed for and budget remains £0.

![A screenshot of figma wireframes showing the journey of only asking if eligible learner for cpd if being added to a CPD claim for the first time. This is flow if adding a new learner."](option-three-one.png "A screenshot of figma wireframes showing the journey of only asking if eligible learner for cpd if being added to a CPD claim for the first time")

![A screenshot of figma flow if existing learner whose already been added to a CPD claim previously"](option-three-two.png "A screenshot of figma flow if existing learner whose already been added to a CPD claim previously")

![A screenshot of figma flow if exisiting learner but only previously been added to a TU claim so needs to be asked if eligible again."](option-three-three.png "A screenshot of figma flow if exisiting learner but only previously been added to a TU claim so needs to be asked if eligible again.")

Pros
- Slightly more logic but still pretty simple. Means not asking user same question over and over

Cons
- Backend will still have to save the budget on every learner as it needs to be a running total
- What if the eligibility of a user changes in the future, need to be able to change this and that would require further technical complexity.

#### Outcome
Weighing the fact the budget is only £500 and the low amount of claims we expect are going to happen, we will go further with option 2 as this repetitive check will happen only a few times, and it scopes for longevitiy in case the eligibility changes.


## How we tested our ideas and what we found

- We had a lot of interesting insights on places in the journey we expected but also on some other things too.
- CPD was tested in Version number 10
- There is a lot of confusion of what revalidation funding covers, and the difference between TU and CPD funding.
- Confusion that with a TU they won't get full reimbursement but with a CPD claim they will, which the submitter will choose to claim for if the learner is eligible for both.
- Issues over entering national insurance number to search for a learner.
- Concerns over evidence of payment and whether this information is stored.
- The findings were that the activity list was still much too confusing to submitter's and led to doubt in actions to take in the claim's journey. Lots of likelihood that the wrong option will be selected. This is a buisness requirement

- Overall the research had generally positive feedback about being able to complete the process. The concerns and key barriers were relating more to the bigger picture procedural considerations of differences between TU and CPD claims and how to choose between.


## What we will do next
- Iterations on the CPD designs post user research playback.
- Content updates focusing on explaining need of evidence of completion for a course and the budget ineligibility for a learner.