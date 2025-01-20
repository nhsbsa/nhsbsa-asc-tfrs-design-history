---
title: Dealing with duplicate claims
description: The scheme rules dictate that a claim for each course will only be paid once per learner.
author:
  name: Mark Portnell (Interaction designer)
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

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

The scheme rules state that a claim will only be paid out once per training and learner combination. This means that organisations can't claim reimbursement for training that a learner takes more than once. We need to enforce this rule within our service.

## What our ideas were

Initially, we explored enforcing this rule during the claim processing phase. However, we decided this wasn’t the best approach for two key reasons:
- The processor would need a mechanism to see all other claims for that organisation. Given the aggressive delivery deadline, this would be very challenging.
- Preventing the claim from being submitted in the first place would save time for both the organisation and processing staff.

With this in mind, we explored ways to prevent an organisation from submitting a duplicate claim. The first idea was to perform a check when the submitter clicks the "Confirm Details" button on the claim scaffold screen. This check would compare the submitted claim against those that are in a submitted or approved state, looking for matches in training and learner. Rejected claims wouldn’t be included in the check, as no reimbursement has been made for them, and therefore, submitters should be allowed to submit a new claim. 

After further consideration, we decided the earliest we could perform this check would be when the learner is added to the claim. Since the training is added first in the user journey, this would give us the necessary information to perform the check as soon as the learner is added.

The final aspect to establish was the nature of the error we would present to users. We knew we needed to clearly explain the issue due to the complexity of the rule. To address this, we had the following hypotheses:

>**We believe that** showing the duplicate claim error on a separate screen, rather than as part of an error summary/message  
>**Will be a useful feature for** submitters  
>**As it will** help users better understand the scheme rule violation they’ve encountered  

>**We believe that** showing users the claim ID of the duplicate claim  
>**Will be a useful feature for** submitters  
>**As it will** help users identify where the duplicate occurred and understand where their mistake happened  

This is the resulting screen design we decided to present to users following the check:

![A screenshot taken from v8 of the prototype showing the claim duplication screen](claim-duplication.png "The claim duplication screen from v8")

During technical refinement, a further issue was identified and clarified with DHSC, making enforcing this rule more complex. The issue was enforcing the rule across organisations. For example, if Organisation 1 submits a claim for Training X and Learner Y, Organisation 2 should not be allowed to submit a claim for the same training and learner. While this might not seem likely, it is possible, especially given the high turnover rate in the sector. User research in alpha also revealed that organisations often decide to retrain staff, believing prior training was insufficient.

This new information led us to reconsider the level of detail we should share between organisations. We were concerned about sharing learner information that could negatively affect how organisations perceive a learner. We decided to simplify the information shown and took the following approach:

![A screenshot taken from the stage showing the claim duplication screen](claim-duplication-v2.png "The claim duplication screen from the stage environment")

## How we tested our ideas and what we found

Unfortunately, due to aggressive deadlines, we were unable to properly test this pattern before development or private beta.

## What we will do next

We have agreed to monitor this during private beta and conduct further research as necessary if this screen appears frequently.
