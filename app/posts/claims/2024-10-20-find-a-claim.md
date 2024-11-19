---
title: Find a claim
description: Submitters need to be able to find a specific claim quickly from partail information
author:
  name: Hannah Williams
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-10-20
modified: 2024-10-20
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v11 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

## Why we did this work
During alpha a few options were tried to allow users to search and filter for claims in their dashboard, this was removed from the prototypes to help descope the complexity of the MVP. The need for users to be able to find a claim easily is still present.

## What our ideas were

I started by bringing back in what was previously implemented.

>**We believe that** allowing search and filter
>**Will be a useful feature for** submitters
>**As it will** help them narrow down on available information to find their claim easily.

I played the design back, but without clarity on specific uses, it felt a bit vague in what problems the search and filter were both trying to solve and felt like needed to zoom in on specific use cases. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="filter-no-search.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Filter applied but no search input entered</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="search-and-filter.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Filter and search applied</figcaption>
  </figure>
  </div>
</div>

I held a workshop to clarify the specific needs trying to solve to focus designs and expectations.
#### Few use cases that came out as to why a user might want to find a claim:
- Find an approved claim for financial reconciliation / verifying payment
- Check claim status / amount approved or paid
- Find a 60 claim to start the relevant 40 claim / to use that information for the 40 claim
- Find a 40 claim that requires action
- Find any claim no matter what status it is
- To complete an in progress claim
- Find all claims that haven't had evidence added so i can go through and add the evidence
- See what claims I made for a specific learner
- Extract the search results for a specific query e.g. to a .csv to see payments made within a date range
- Find all claims under specific conditions e.g. not yet submitted for a specific learner (combined search criteria)
- Check I claimed for all those people who attended that course
- See what claims made (i.e., all learners included)  for a specific course
- Download the files from the claim to be saved elsewhere
- A colleague has an issue and wants me to look at it
- Review someone else's work (check that they uploaded the right evidence)
- Review someone else's work (check that they submitted it on time)
- New person has joined the organisation and wants to learn more about the system
- To re-use existing information in another claim ("Person A and B went on the same course, let me see what I entered for Person A")
- To look at what evidence/ info provided for a course previously that I am claiming for again for a different learner

#### Potential info to search on that would be helpful:
- learner 
- claim id
- course name
- submitter name 
- claim type (100/60/40)
- reimbursement amount
- date of course / training date / date of claim submission
- claim status
- status change date
- date range
- with or without evidence

#### Played back current designs and asked people to crit current painpoints in the search and filter designs, baring in mind what the use cases were trying to solve:
- Table with filters is very congested on page
- Could the filters be hidden by default and opt in to show when the user wants to filter
- Content (ID, Date, etc) running onto multiple lines
- Keyword search could solve the find option, and the filters could be more of a follow on for "reporting" type stuff? could narrow down enough in search, and not so many claims to scroll?
- Accessibility e.g. someone using a screen reader would find it hard to navigate
- Table may be difficult to use on phones
- Data in table is hard to scan due to condensed display
- Will people know that the filters have changed automatically or could they be confused that they can't pick an option they've seen before?
- Long list (that will get longer over time?) for start date
- Is the start date claim start date/ training start date
- Not too sure the value of a start date

#### Also asked does the design answer the use cases identified? Other ideas to solve?
- It allows users to find specific claims
- It allows users to narrow into a claim with limited information about that claim
- It could enable reporting requirements in the future (unkown at this stage)
- Complexity not useful if an org has low volume of claims
- There is a 'not yet submitted' option - but no other filter re. what's missing eg., missing evidence specifically
- Is there a difference between not yet submitted and incomplete claims?
- Is there the ability for a sig (or submitter) to search by submitter name (e.g., to check work)

#### What are technical constraints?
- Multiple use cases represented - scope and prioritisation in the backlog (MVP thinking required)
- May be more complex technically e.g. if we needed to store various status change dates or derived values (cost vs benefit)
- Searching on multiple fields may bring back a lot of results (performance and usability)
- Applying filters (assuming no js) may lead to multiple searches per user (less page loads the better)
- Ongoing Maintainability - this page will need to keep in line with any changes to claims (e.g. status etc)
- May require a biggish architecture change if the number of claims were extended 


From use cases identified sort of two categories formed, one claim searching to do something on, v  group of claims exploration. Had to be careful here of ticket scope, determined this ticket is to fulfil the need of a user wanting to easily find one specific claim, rather than blurring and actually ending up more for reporting. From the current designs of a filter, it felt like from tech they thought uneccesary, and bridged into reporting. These findings came me a lot more to think about and refine search design with. 

Next design crit on 29/8/24 with 8 new designs of various layouts and content. Highlighted below are the differences in design details

Image 1
>**We believe that** adding a quick search for claim id on manage claims screen that will take them straight to claim if exists
>**Will be a useful feature for** submitters
>**As it will** help them find their exact specific claim if they already have this information to hand

Image 2-8
>**We believe that** a advanced search
>**Will be a useful feature for** submitters
>**As it will** help them easily find a claim that they don't have the speicifc claim id for, but do have bits of other information about the claim.

![A screenshot taken of the step by step navigation pattern](idea-1-2.png "step by step navigation pattern")

Image 2
- keywords typing input or a drop down
- input has risk of spelling mistakes bringing back 0 results
- single value selection
- having multiple columns, is that confusing?
- wording, is it a search or a filter?

Image 3
- maybe its only the learner and training name that are worthwhile searching, as status is something they are trying to find out so isn’t the question, its the answer
- is type something alone they would search for?
- selecting a date range, what type of date? if selecting submitted by, then thats all the claim status except not yet submitted

Image 4
- drop down on what type of date searching for

Image 5
- do we give them all the options and find out in research what is useful? 
- Is putting in single column less cognitively overwhelming

Image 6
- do we give them all the options and find out in research what is useful?
- drop down, but search within the dropdown. is it still a multiple select, what is the need here?
- is search dynamically technically complex?
- Overcomplicating starting point?

Image 7
- Design to allow function of multiple selection of training and learners, what is the user need to do this? Is that more reporting?

Image 8
- Multiple selection variation of design to be less disjointed the selections from the choices.
- Again what is the user need of multiple selection?

![A screenshot taken of the step by step navigation pattern](idea-3-4.png "step by step navigation pattern")
![A screenshot taken of the step by step navigation pattern](idea-5-6.png "step by step navigation pattern")
![A screenshot taken of the step by step navigation pattern](idea-7-8.png "step by step navigation pattern")

Outcome was to have two versions to take into testing. A (which is based off version 3 above)- a more simple search on learner and training, both optional. Or B (which is based off version 2 above) - one with more options. See which the users felt would be more helpful, which categories are more useful and also how they felt about the layout and date range, as that is something that is a custom component. Interesting them being optional, as not a normal GDS recommended thing wanted to see how users felt.

>**We believe that** testing options 2 and 3
>**Will be useful for** us to see what information the submitters need to find a claim
>**As they will** confirm our hypothesis' about what info is vital and which are nice to have's.

## How we tested our ideas and what we found

Outcome from testing to go with B
Remembering the point of work is to find a claim and not reporting and B touches on reporting
B had a lot of nice to have's, but A did the job.
*ADD RESEARCH*

## What we will do next
- Split into seperate pieces of work, claim id search on manage claims screen and advanced search of learner and training.
- Decided that sorting in tables will be brought in same time in the future as pagination