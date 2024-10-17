---
title: Dealing with duplicate claims
description: The scheme rules dictate that a claim for each course will only be paid once per learner.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-15
modified: 2024-05-20
tags:
  - claims-version-8
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---



## Why we did this work
The scheme rules state that a claim will only be paid out once per training and learner combination. This means that organisation can't claim reimbursement for training that a learner takes more than once. We need to enforce this rule within our service.

## What our ideas were
Firstly we explored this rule being enforced on the processing of a claim. However we felt this would not be the best approach for two key reasons:
- The processor would need some mechanism to see all the other claims for that organisation which given the aggressive delivery deadline we were working towards this would be very challenging
- Trying to prevent this claim from being submitted in the first place would save time for the organisation and processing staff

With this in mind we then explored ways to prevent an organisation submitting a duplicate claim to begin with. The first idea was to perform a check when the submitter clicks the confirm details button on the claim scaffold screen. The check would involve looking at all claims in the submitted or approved state and looking for claims that match the training and learner of the claim the submitter is trying to submit. The reason why we wouldn't look at rejected claims is that no reimbursement has been made due to the rejection and therefore we should allow them to submit a new claim in that case. When exploring this idea we still felt this was not early enough to perform the check. At this stage the submitter has already spent time adding information and evidence to the claim we know that submitters are time poor so this still didn't feel like an acceptable solution.

After further thought the earliest we felt we could bring this check is to perform it when a learner is added to the claim. Since a claim will always have a training added first due to the nature of the user journey as soon as the learner is added we have the information we need to perform the check.

The final aspect to establish was the nature of the error we would present to users. We know we needed to explain to the user what issue they have encountered due to the nature of this issue for this we had the following hypotheses:

>**We believe that** showing the duplicate claim error on a separate screen rather than a error summary/message
>**Will be a useful feature for** submitters
>**As it will** help users better understand the details from the scheme rules that they have violated

>**We believe that** showing users with the claim ID of the duplicate claim
>**Will be a useful feature for** submitters
>**As it will** help users understand where the duplicate is located and identify where there mistake has occurred

The resulting screen design that we decided to present users following the check:

![A screenshot taken from v8 of the prototype showing the claim duplication screen](claim-duplication.png "The claim duplication screen from v8")

During technical refinement a further issue was identified and then clarified with DHSC that made enforcing this rule a lot more complex. This was the need to enforce this across organisations. Eg if org 1 submits a claim for training X and learner Y org 2 cannot also submit a claim for training x and learner Y. While this may not seem likely it is possible particularly due to the high turnover rate int he sector and the fact we have heard during user research in alpha that organisations will often decide to retrain staff feeling that any existing training was not sufficient. 

This new piece of information caused us to change tact with the information we decided to share. We had concerns about the information we could or should be showing between organisations and the risk of sharing information about a learner that may have a negative impact on how an organisation may perceive them. We decided to strip out some of the detail of the screen and took the following approach.

![A screenshot taken from stage showing the claim duplication screen](claim-duplication-v2.png "The claim duplication screen from stage environment")

## How we tested our ideas and what we found
Unfortunately due to aggressive deadlines we were unable to test this pattern properly before development or private beta. 


## What we will do next
We have agreed that this is something we will try and monitor during private beta and conduct further research as necessary if we find this screen to be occurring at a high frequency. 
