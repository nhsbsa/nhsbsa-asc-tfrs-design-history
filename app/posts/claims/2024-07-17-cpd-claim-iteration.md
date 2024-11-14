---
title: Iterating CPD claims
description: After conducting research on CPD claim designs, we needed to iterate on the outcomes of our many hypothesis' that went into the design, led by some buisness questions that needed answers.
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
![A screenshot of start page explaining both types of claims"](start-claim-explanation.png "A screenshot of start page explaining both types of claims")

### Budget
- We’ve updated the budget displayed as this was another section that came up in UR that needed a deeper dive into what information is important to the processor here, and a few edge cases that made displaying multiple pieces of info about budget of amount left, including submitted claims, complicated to understand.
- It’s important to show the submitter how much is left on the learner though, so reduced complexity until we do further research, and now just show the budget of claims that are approved, not including claims yet to be processed. Since organisations can submit claims as long as there is still budget not including pending this is the only piece of information completely necessary to the journey.

#### Hypothesis 1
>**We believe that** only showing the budget remaining after approved claims, not including pending,
>**Will be a useful feature for** submitters
>**As it will** be the only piece of budget information absolutely vital to their journey into we understand further what might be useful and why.

What we need to test:
- Whether it frustrates a submitter not knowing how likely a claim is to be approved or rejected. Because claims can be submitted for a single learner from multiple organisations each submitter will have no knowledge without seeing a amount for pending claims of how many there are that have already been created. No ability to search their own claims tables to see if a learner has any other active claims from same organisation either.
**check - i think we changed it to only allow claims to be submitted if have budget?

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



