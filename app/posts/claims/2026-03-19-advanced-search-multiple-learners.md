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
--- [What we will do next](#what-we-will-do-next)


## Why we did this work

Advanced search is to enable users to find claims and learners more easily using enhanced search filters. It had previously been ideated, designed and tested during early private beta (V15) but never went into development. This piece of work was to re-work what we previously had done based on what still worked, and considering it with the updated multiple learner model. 

## What our ideas were

This is the design tested previously with single learner claims. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="old-design-name.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Search with learner name</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="old-design-ni.png" alt="The add another learner screen showing content related to the impact for a 60/40 claim" style="width: 100%; height: auto;">
      <figcaption>Search with training and NI number</figcaption>
    </figure>
  </div>
</div>


Started off my approach by considering what still worked and what needed to change for multiple learners. Put together a MVP design and held a multidisciplinary team meeting to get agreement on some assumptions.

### IDEA 1 
Showing the matched learner name with the additonal count of learners column 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-1.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Search with learner name</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-1-training.png" alt="The add another learner screen showing content related to the impact for a 60/40 claim" style="width: 100%; height: auto;">
      <figcaption>Search with training</figcaption>
    </figure>
  </div>
</div>

Assumptions: 

#### Search by learner and course name in previous design 
- They can search for claim id on the previous page or search for claims by status in the individual status tables. 
- Believe learner and training is still what is next useful to search by on a single or multiple learner claim.

#### Sort is out of scope
- And unnecessary because

#### No pagination 
- Because we are encouraging the use to whittle down through refining their search inputs instead

#### Learners column
- Ok to not display names if searched by training because if they knew learner name they would have searched for it, so doesn’t add anything to show learners 
- Show learner name if searched for it as it confirms its found the right learner with full name as could be multiple matches


From discussions with the tech team it was pointed out the rules on input have now changed on elswhere we search for training and learner to add to a claim and we are wanting to apply the same logic to search behaviour here too to keep consistent.

Update:
- Removal of 3 minimum character limit, it means more likely to have multiple name matches, how to display a long list of names and how to display this in the learners column as we assume they will want visual confirmation in the UI of who specifically is on the claim.

### IDEA 2 
Matched learners column, highlighting name matches and training matches

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-2.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Highlight matched inputs</figcaption>
    </figure>
  </div>
</div>

- Display list of matched learners and then the additional learner count
- Highlight the matched elements 
- The validation around the Ni number is that it has to be a full one entered to matched and so it would be only be to one learner. Assumption then is that its ok to just display the name not the NI number.
- Added course code so can apply the highlight to the code and training matches also.
- Content update with bullet points under the search results header on how they can whittle it down, encouraging the user to type in more characters.


#### Validation update
- Clarified the current search validation behaviour with the tech team on how we do it on select learner and training currently since wanting to keep it consistent across the service. It was determined there is no validation on the inputs i.e. it doesn’t have to match the format of a NI number to be searched against that to produce the results.
- This means there is no way of telling whether they have searched name or NI so trying to show both in the table of what has matched is potentially overwhelming

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-2.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Showing the design if we tried to show both the name and the NI number for each learner</figcaption>
    </figure>
  </div>
</div>

### Discussions

A solution could be to not have the matched learners column and the mvp just show the number of learners on a claim.  

The question is will that mean they will be annoyed to not see the learners and doesn’t give value? How risky is this based on what we know and can reasonably hypothesis?

The hypothesis would be that if they knew the learner they would have searched for it, therefore the claims brought up will be for that learner? Otherwise they are just looking for a claim for a course in a certain state and learners in their mental model of searching are irrelevant. 

What do we know about how users search?

Do users usually search by just first name therefore a lot of claims will be brought back and they will have to go digging into each to find if its the right person? 
- Asked tech to see if we can find out more information on what terms they usually search in select learner search, but that is not info we currently collect and it would be hard to distinguish what the intention of what the inputs were, would have to analyse by eye. 
- Asking UR what was behaviour in previous advanced search, we don’t have much on whether its likely to be partial or whole thing they type in

The previous UR findings were:
* No one chose to use the 'advanced search' option while they had the claim reference number.
* When no claim ID - Most users understood the role of advanced search in finding a claim, clicking this option immediately after realising they could not search by claim ID.
* The majority of users used the name of learner and course fields for their advanced search. This was for various reasons including that it was 'easier' to remember learner names; they would have access to NI number as part of the role; and that this information would be easy to obtain.
* Some users felt that date range and claim status would be useful if they were missing certain pieces of information (i.e. name) but knew the rough date of the qualification or claim submission.
- Most likely coming in for a learner on a claim

Is it a hypothesis that they will search the same way, or will how we design this feature change behaviour, if they aren’t finding their claiming typing in first name, will they start typing in both?

Also unlikely they will search using partial NI number as who will know that off the top of their head, likely to only bring back one result. 

#### 3 Amigos
Held a 3 amigos chat with tech, PM, UR and design, to decide whether for the design of not displaying matched learners to work do they need to search for full name to ensure results are whittled down enough to be useful or does it not deliver enough value? 

UR says it doesn’t give enough value by not seeing the name on a claim
- Most likely they are coming in to find a claim for a learner
- They might not know last name or it be too complicated to type so likely it would be a partial input search

### IDEA 3

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-4-match-name.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Match learner name</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-4-match-training.png" alt="The add another learner screen showing content related to the impact for a 60/40 claim" style="width: 100%; height: auto;">
      <figcaption>Match training</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-4-ni.png" alt="The add another learner screen showing content related to the impact for a 100 claim" style="width: 100%; height: auto;">
      <figcaption>Match NI (full match)</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="idea-4-match-ni.png" alt="The add another learner screen showing content related to the impact for a 60/40 claim" style="width: 100%; height: auto;">
      <figcaption>Match NI (partial match)</figcaption>
    </figure>
  </div>
</div>

- The number of learners is a details component revealing the names of matched learners if searched for a learner input
- showing also names of all other learners on claim
- no highlight 
- alphabetical lists 

Discussion with UR is the design with details component showing matching and also then other learners works as a in-between as they can dive into each details on this screen rather than going through to the claim. We know from previous UR people used the details component within the claim when testing ML so they are familiar. The one question would be how much of a pain - if any - is searching for a NI and not getting a return of Ni. However, a assumption would be it's more than likely they would have both the NI and name to hand.

On the confirmation aspect its the same as we had it in the previous single learner design also that if they searched a NI number it would just display the learner name and this tested ok. Could also safely assume what they've typed in (which if is a NI number its most likely is the full thing), and its a direct match to the learner name we show. Not the slickest experience searching through drop downs but good enough?


### Final validation rules:
- Only matches if letter is start of first or last name or NI number, doesn’t match the middle of a name
- NI doesn’t match if it has gaps 


### Ordering of the claims

Once they've typed in their inputs, how do users next search and expect results to be ordered? Considered a few different scenarios as they change how they expect things to be ordered:

If they've searched by ONLY training input which could be NAME or CODE e.g. Oliver McGowan or OMMT
- would they expect it to be ordered by training name or code, then claim status if a few training names are the same?

If they've searched by both training and learner
- is it the same as training above as thats something they can visually see 

If they've searched by ONLY learner e.g. Roy
- would they then be looking at training name or claim status (what if they don't know the training)

#### UR
- Previously had good feedback on ordering by status of learners within a claim but not convinced that feedback directly translates to this use case.
- Generally speaking, when people search for a course during research sessions the sense was they are generally firstly focused on the name of that course as that's usually how it's ordered as is? followed by the training provider
- If the user has only searched by learner, UR don't think they've got enough evidence on this to confidently say either way
- Ideally you could search the name then sort the columns

#### Decision 

Since we don't have enough evidence on certain scenarios as to what works best, decided to sort by status and then training name within each status, as something that works across all input combinations

Hypothesis is if they've search by training then most likely they will have typed in enough of the name to have whittled down the results to a few so not ordering by training name won't be too much of a problem. Also the scenario that they've come to advanced search when they don't know which bucket their claim is in, sorting by status will help

## What we will do next

### Questions
- Should we test this as we have outstanding questions to validate around how users search and.
- Is column sorting a better experience for users? If we do sort should we also consider filters that can be applied to to whittle down claims?
- Perhaps this piece of work points to needing to ask a bigger question and think about how users find claim more holistically, including the manage claims buckets claims sit in and search by claim id. Maybe we scrap and have all the claims on a page and they use filters to whittle down would work better?

Question to decide next is where on priorities this work is to test and to consider as a whole based on reduced team size incoming. 

