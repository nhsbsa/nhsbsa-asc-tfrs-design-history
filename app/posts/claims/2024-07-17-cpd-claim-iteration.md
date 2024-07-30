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
>**As it will** be easier to train them on how to categorise activities to get more useful reporting than the inconsistencies that will come from overlap in category understanding by submitters.

![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

#### Hypothesis 2
>**We believe that** removing the requirement for evidence of completion and adding a line in the declaration instead to mitigise fraud
>**Will be a useful feature for** submitters
>**As it will** cover all claims rather than basing the gathering of evidence on the inconsistent selection of formal and educational activity and then asking if its a course with some form of evidence of completion.

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

