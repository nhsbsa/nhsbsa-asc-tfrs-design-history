---
title: Advanced search - multiple learners 
description: Revisting the advanced search feature, considering it with the updated multiple learners claim model
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2026-03-19
tags:
- private-beta
- multiple-learners
- advanced-search
- claims-version-22
aside:
  title:  Claims prototypes
  content: |
    [View claims v22 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v22/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)


## Why we did this work

Advanced search is to enable users to find claims and learners more easily using enhanced search filters. It had previously been ideated, designed and tested during early private beta (V15) but never went into development. This piece of work was to re-work what we previously had done based on what still worked, and considering it with the updated multiple learner model. 

## What our ideas were

This is the design tested previously with single learner claims. 


Started off the approach by considering what still worked and what needed to change for multiple learners. Put together a MVP design and held a meeting to get agreement on some assumptions.

IDEA 1 - MVP 
Matched learners one name with the additonal count of learners column 

Search by learner and course name in previous design 
- They can search for claim id on the previous page or search for claims by status in the individual status tables. 
- Believe learner and training is still what is next useful to search by on a single or multiple learner claim.

Sort is out of scope
- And unnecessary because

No pagination 
- Because we are encouraging the use to whittle down through refining their search inputs instead

LEarners column
- Ok to not display names if searched by training because if they knew learner name they would have searched for it, so doesn’t add anything to show learners 
- Show learner name if searched for it as it confirms its found the right learner with full name as could be multiple matches

From the meeting and talking with tech it was pointed out the rules on input have now changed on where we search for training and learner to add to a claim and we are wanting to apply the same logic to search behaviour here too to keep consistent.
Update:
- Removal of 3 minimum character limit, it means more likely to have multiple name matches, how to display a long list of names and how to display this in the learners column as we assume they will want confirmation 

IDEA 2 - 
matched learners column highlighting name matches
- Display list of matched learners
- Highlight the matched elements 
- Has to be a full NI number and if that matched it would be only on elearner so ok to just display the name not the NI number.
- Added course code so can apply the highlight to the code and training matches also.
Issues:
- Could be multiple matches to input and how to display them in the matched learners column

Update from tech is it can be partial match on all elements including NI number. How to display that in the matched learners column as just showing the name related isn't helpful when its matched the NI number of the learner instead, showing both of these in the same column gets overwhelming.
Tried to find out some info from UR and tech to understand if can get enough value from MVP just showing leanrer count. 


The previous UR findings were:
* No one chose to use the 'advanced search' option while they had the claim reference number.
* When no claim ID - Most users understood the role of advanced search in finding a claim, clicking this option immediately after realising they could not search by claim ID.
* The majority of users used the name of learner and course fields for their advanced search. This was for various reasons including that it was 'easier' to remember learner names; they would have access to NI number as part of the role; and that this information would be easy to obtain.
* Some users felt that date range and claim status would be useful if they were missing certain pieces of information (i.e. name) but knew the rough date of the qualification or claim submission.

Tech:


3 amigos meeting held to find out if enough value from just showing count of learners and they are encouraged to type in the whole value.
UR said no that having to go into claim to confirm the learner would be frustraing and wondered whether we could have sepearte input boxes so we know exactly what vlaue they have search for. 

IDEA 4
inbetween idea
- have a drop down of the matched leaeners
- lose the highlight 
- alphabetcial 
- is this enough 


Final validation rules:
- It partially matches the name or NI of a learner from the start
- 

Next thing to consider was ordering of the claims
- How do users search next for there and expect things to be ordered
  Based off different scenarios might change how they expect things to be ordered

  Ur say for some scenarios they don't have the evidence to say one way or the other
- 
Is sort better?
Is sorting by status then training good enough, not the best user experience but will do. 

## What we will do next

Questions
- should we test this as we have outstanding questions 
- Is sort better? If do sort should be just have filters to to whittle down claims.

Perhaps this piece of work points to needing to ask a bigger question and think about how users find claim more holistically, including the manage claims buckets claims sit in and search by claim id. Maybe we scrap and have all the claims on a page and they use filters to whittle down would work better

Question to decide is where on pritotityes this work is to test and to consider as a whole based on reduced team size incoming. 

