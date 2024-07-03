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

So far the prototype only allows for TU claims to be submitted, we now want to bring in CPD claims. The expectation is that there are going to be less of these type of claims, so balancing user needs with coming up with a design flow that has the least amount of changes needed to the TU journey, with minimal technical effort. 

## Why we did this work

- [if applicable] Sprint goal and some background for the sprint
- [if applicable] Sprint numbers is spanning over multiple sprint
- CPD finding and discovery work
- TU claim journey has already been developed and tested and the amount of claims for CPD are going to be much lower in comparison. Taken this into consideration in the design process for CPD on balancing the needs for CPD against business priority and technical difficulty, to have the least amount of impact on the TU journey. 
- CPD were orginially included in claims prototype version (?) but then pushed down the priority roadmap, and taken out of the MVP as the research findings were that...
- Various parts of the CPD journey had to have further clarification of buisness requirements. The list stating what could activities could be claimed for that was tested in research round() was found to be quite confusing for users in that quite a lot of the sections overlapped and wasn't clear which option to select to add to claim. 


Requirements:
- adding CPD back into the prototype from previous version where it had it


## What our ideas were
- Providing visuals of Information architecture
- Including all interactions
- Wireframe and interface ideation
- Hypothesis

### Mental model of different types of claims

#### Hypothesis 1
>**We believe that** explaining both types of claim funding types before they start
>**Will be a useful feature for** submitters
>**As it will** set up the submitters mental model of TU versus CPD claims.

#### Hypothesis 2
>**We believe that** keeping the two different types of funding in two seperate places to manage
>**Will be a useful feature for** submitters
>**As it will** keep them more organised and clear in their minds of where to go to create and manage each type of claims. Also keeps it cleaner in the design as table headings for managing these claims will be different.


### Activity list

- list had many sections and options within which had been tested in previous UR and it was found that participants found the list long and confusing as much scope for overlap of activities and selecting the wrong one.

#### Hypothesis
>**We believe that** consolidating the list into the header sections with examples of activities
>**Will be a useful feature for** submitters
>**As it will** reduce complextitiy of which activity to select. 

- Also courses in this list require a evidence of completion and a start date to be submitted alongside but there was scope for people selecting another option instead of course then no evidence submitted. We had a session with the wider team to do a short activity to get to a consolidated list of CPD activities based on how we viewed the requirements. 

#### Hypothesis
>**We believe that** seperating out the question of whether a formal and education selection is a course onto a seperate screen
>**Will be a useful feature for** submitters
>**As it will** offer scope to explain we are asking because it needs evidence of completion, and offers scope to only require the evidence for formal and educational acitivities and if its not then don't. 


### Budget per learner

- Each learner once deemed eligible is allowed access to £500 of revalidation funding. Needed someway of displaying this information to the submitter.

#### Hypothesis
>**We believe that** adding a learner then displaying the budget available on the claim details screen
>**Will be a useful feature for** submitters
>**As it will** allow them to see all the information on a learner and also leaves the adding the learner jounrye as in with minimal disruption of adding the budget in earlier.

- We believe there are three pieces of information important for a submitter to know about a claim, the total remaining, the amount that is in pending for any other claims for this learner that are submitted and not yet approved or rejected, and what then is available for the submitter to make a claim for. 

#### Hypothesis
>**We believe that** giving a submitter a breakdown of a learners budget in available, pending and remaining
>**Will be a useful feature for** submitters
>**As it will** allow them to see all the information and able to digest a overview of what is happening for the learner on other claims.

- We believe if a claim has claims in pending that take up all the learners remaining budget they are still allowed to have claims submitted for them as there is a chance these claims will be rejected. 

#### Hypothesis
>**We believe that** being allowed to submit a claim for when a learner has still budget in pending claims
>**Will be a useful feature for** submitters
>**As it will** allow them to take action and still submit for sceanrio other claim is rejected rather than having to wait on that outcome then submit another claim. 

#### Hypothesis
>**We believe that** showing the no budget left screen after confirming claim details
>**Will be a useful feature for** submitters
>**As it will** allow them to still see the information about the learner on the claim details view and then the next screen not allowing will have further content to explain if a submitter doesn't understand the budget.


### Eligibility check

A new design question to consider was the business requirement that stated a learner must be eligible for CPD claims and this is something the submitter must acknowledge in their submission of the claim. Thinking about it with different options weighing pro and cons in technical difficulty and what the buisness is happy with came up with three options that then presented to the wider UCD team to see which one suited best.

Option 1
- Asking the submitter is the learner is elgigible by adding a simple checkbox on the declaration form at the end of the journey.

Pros
- Simple to add

Cons
- This check happens right at the end of journey after filled in all info only to find out not eligibile which will cause the user annoyance. 


Option 2
- Everytime you add a learner to a claim, whether existing or new, we add a screen where we ask the submitter if the learner is eligibile for CPD funding.

Pros
- Simple to add
- Handles longevity of maybe learner becoming no longer eligble

Cons
- A repetitive action you have to do every time you add same earner to a CDP claim. Caveat this with the amount of claims made are going to be few so this may not happen a lot.
- Backend will have to save the budget on every learner as it needs to be a running total


Option 3
- Everytime you add a existing or new learner to a claim for their first CPD claim, then we ask if they are elgibile, the backend will then furthermore remember the answer. If yes the learners budget gets set to £500. If no, then they can't be claimed for and budget remains £0.

Pros
- Slightly more logic but still pretty simple. Means not asking user same question over and over

Cons
- Backend will still have to save the budget on every learner as it needs to be a running total
- What if the eligibility of a user changes in the future, need to be able to change this and that would require further technical complexity.

Outcome
Weighing the fact the budget is only £500 and the low amount of claims we expect are going to happen, we will go further with option 2 as this repetitive check will happen few times, and it scopes for longevitiy in case the eligibility changes.


## How we tested our ideas and what we found

- Version number 10


## What we will do next
- Iterations on the CPD designs post user research playback.
- Content updates focusing on explaining need of evidence of completion for a course, the budget inelgibility for a learner .
- For closing comments on the UCD log, give some information on what the next steps are with this piece of work, are there any further iterations that could be made but may not be as high priority just yet, is there further research to be done on a certain part of the design. Talk about things you were not able to do as part of this design that you want to be raised at a later stage and how this has been documented to be revisited.

