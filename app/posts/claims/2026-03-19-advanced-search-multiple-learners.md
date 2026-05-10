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


I started by reviewing what still worked from the original approach and identifying what needed to change to support multiple learners. From there, I created an MVP design and facilitated a multidisciplinary team discussion to align on key assumptions and agree on the initial direction.

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
- Users could already search by claim ID on the previous page or filter claims by status within the individual status tables
- Learner and training/course name were still considered the most useful search criteria for both single-learner and multi-learner claims

#### No column sort or pagination 
- We are encouraging the user to whittle down results through refining their search inputs instead

#### Learners column
- Learner names did not need to be displayed when users searched by training/course, as the assumption was that users who knew the learner’s name would search for it directly. In those cases, displaying learner names added limited value
- When users searched by learner name, the full learner name would be displayed to help confirm they had found the correct learner, particularly where multiple matches could exist

During discussions with the engineering team, it was highlighted that the input rules used elsewhere in the product for searching learners and training when adding to a claim had since changed. To maintain consistency across the user experience, the same search logic and behaviour would also need to be applied here.

Update:
- Removing the three-character minimum search limit increases the likelihood of multiple learner name matches. This raised new considerations around how to display longer lists of learner names within the learners column, while still giving users clear visual confirmation of who was included on a claim

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

One proposed solution was to remove the matched learners column entirely and, for the MVP, display only the number of learners associated with a claim.

One proposed solution was to remove the matched learners column entirely and, for the MVP, display only the number of learners associated with a claim. The key question was whether removing learner names would reduce the feature’s usefulness or create frustration for users. 

Based on existing assumptions, the hypothesis was that:
- If users knew the learner, they would search for them directly, meaning the returned claims would already be relevant to that learner.
- If users were searching by course and claim state instead, learner names were less important within their mental model of the task.


This raised further questions around actual search behaviour:
- Do users typically search using only a first name or partial name input, resulting in many matching claims that require further investigation?
- Or do they generally provide enough information to narrow results effectively?

To better understand this, the engineering team was asked whether existing search data could reveal common input patterns from learner search flows. However, this data was not currently captured in a way that could reliably identify user intent without manual analysis

Previous user research on advanced search showed that:
- Users did not use advanced search when they already had a claim reference number.
- When no claim ID was available, users quickly understood advanced search as the appropriate route to find a claim.
- Most users searched using learner name and course fields, largely because learner names were easier to remember and readily available.
- Date range and claim status were seen as secondary filters when users lacked learner details.

These findings suggested that users were most commonly searching for claims connected to a learner, rather than browsing claims more broadly.

There was also discussion around whether search behaviour itself might change depending on the design. For example, if users could not easily identify the correct learner from results, would they adapt by entering fuller names instead of partial searches?

It was considered unlikely that users would search using partial NI numbers, as these are difficult to remember and would typically return very few matches anyway

#### 3 Amigos
Held a 3 amigos chat with tech, PM, UR and design, to decide whether for the design of not displaying matched learners to work do they need to search for full name to ensure results are whittled down enough to be useful or does it not deliver enough value? 

The outcome from user research was that removing learner names significantly reduced usefulness:
- Users were most likely entering the flow to find a claim for a specific learner.
- Users might only know or enter a first name, particularly if a surname was difficult to spell or unavailable.
- Partial-input searching was therefore considered a realistic and common behaviour.

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

- Display the number of learners as a details component that expands to reveal matched learners when a learner search input has been used
- Also display the names of all other learners associated with the claim
- No highlighting of matched terms 
- Learners listed alphabetically 

Discussion with user research suggested this approach provided a useful middle ground. Users could inspect learner names directly from the search results without needing to open each claim individually. Previous multi-learner testing had also shown that users were already familiar with using details components within claims.

One consideration was the experience of searching by NI number and not seeing the NI reflected in the results. However, the assumption was that users would typically have both the learner name and NI number available when searching.

From a confirmation perspective, this aligned with the previous single-learner advanced search design, where searching by NI number only surfaced the learner’s name in results, which had previously tested well. It was also considered reasonable to assume that NI number searches would generally be exact matches, giving users confidence that the returned learner was correct.

While searching through expandable lists was not considered the most seamless interaction, it was viewed as sufficient for the MVP.

### Final validation rules:
- Only matches if letter is start of first or last name or NI number, doesn’t match the middle of a name
- NI doesn’t match if it has gaps 

### Ordering of the claims

After users entered search inputs, there were several considerations around how results should be ordered depending on the search scenario

#### Scenarios considered

Training-only search
For searches using only training name or code (e.g. “Oliver McGowan” or “OMMT”):
- Would users expect ordering by training name or code?
- If multiple training names matched, would claim status become the next most useful ordering factor?

Training and learner search
When both training and learner inputs were used:
- Would ordering by training still make the most sense, as this was the most visually identifiable information

Learner-only search
For searches using only a learner name:
- Would users care more about training name or claim status?
- What happens if they do not know the training associated with the learner?

#### User research feedback 
User research highlighted that:
- Previous positive feedback around ordering learners by status within claims did not necessarily translate directly to this search experience.
- During research sessions, users searching for courses generally focused first on the course name, as this is commonly how course lists are organised elsewhere
- There was not enough evidence to confidently determine preferred ordering behaviour for learner-only searches
- Ideally, users would be able to both search and sort columns independently

#### Decision 

Due to limited evidence across some scenarios, the decision was to:
- Order claims by status first
- Then order by training name within each status group.

This approach was considered the most consistent across all search combinations

The hypothesis was that:
- Users searching by training would likely enter enough of the course name to reduce the result set significantly.
- Sorting primarily by status would also support the common scenario where users were unsure which claim bucket their claim belonged to.


## What we will do next

### Outstanding questions
- Should this design be tested further to validate assumptions around user search behaviour
- Would column sorting provide a better experience?
- If sorting is introduced, should additional filters also be considered to help users narrow down claims more effectively?
- Perhaps this piece of work points to needing to ask a bigger question and think about how users find claim more holistically, including the manage claims buckets claims sit in and search by claim id. Maybe we scrap and have all the claims on a page and they use filters to whittle down would work better?

The next step is to determine the priority of this work, particularly in the context of upcoming team size reductions and broader roadmap considerations. 

