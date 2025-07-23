---
title: Find a claim exploration
description: Submitters need to be able to find a specific claim quickly from partial information
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-10-20
modified: 2024-10-20
tags:
  - private-beta
  - claims-version-13
  - claims-manage-claims
  - claims-find-a-claim
aside:
  title:  Claims prototypes
  content: |
    [View claims v11 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work
During alpha a few options were tried to allow users to search and filter for claims in their dashboard, this was removed from the prototype to help descope the complexity of the MVP. The need for users to be able to find a claim easily is still present.

## What our ideas were

We started by bringing back in what was previously implemented to see how it fit with newer updates to the service.

>**We believe that** allowing search and filter
>**Will be a useful feature for** submitters
>**As it will** help them narrow down on available information to find their claim easily.

We played the design back to the wider delivery team, but without clarity on specific uses, it felt a bit vague in what problems the search and filter were both trying to solve and felt like needed to zoom in on specific use cases. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="filter-no-search.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>No filter applied or search input entered, the filter options only display options for what claims are available</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="search-and-filter.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Filter and search applied, the filter options reduce by results that come out from the search</figcaption>
  </figure>
  </div>
</div>

We held a workshop to clarify the specific needs trying to solve to focus designs and expectations.
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

#### Potential info to search on that could be helpful:
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

#### Played back current designs and asked people to crit current painpoints in the search and filter designs, baring in mind what the use cases stated above were trying to solve:
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

#### What are technical constraints involved in bringing in a search and filter?
- Multiple use cases represented - scope and prioritisation in the backlog (MVP thinking required)
- May be more complex technically e.g. if we needed to store various status change dates or derived values (cost vs benefit)
- Searching on multiple fields may bring back a lot of results (performance and usability)
- Applying filters (assuming no js) may lead to multiple searches per user (less page loads the better)
- Ongoing Maintainability - this page will need to keep in line with any changes to claims (e.g. status etc)
- May require a biggish architecture change if the number of claims were extended 


From the use cases identified, two categories formed. Searching for a single specific claim to take action on, and  exploration of a group of claims. Here we had to be careful of ticket scope as this ticket is to fulfil the need of a user wanting to easily find one specific claim, rather than blurring and actually ending up more for reporting. From the current designs of a filter, tech detailed it was more difficult and time consuming to implement and leaned more into solving the reporting use case meaning unneccesary for the scope of this ticket. 

Next design crit on 29/8/24 with 8 new designs of various layouts and content building on the outcomes of previous workshop. Highlighted below are the differences in design details

Image 1
>**We believe that** adding a quick search for claim id on manage claims screen that will take them straight to claim if exists
>**Will be a useful feature for** submitters
>**As it will** help them find their exact specific claim if they already have this information to hand

Image 2-8
>**We believe that** a advanced search
>**Will be a useful feature for** submitters
>**As it will** help them easily find a claim that they don't have the speicifc claim id for, but do have bits of other information about the claim.

![A screenshot taken of the step by step navigation pattern](idea-1-2.png "step by step navigation pattern")
![A screenshot taken of the step by step navigation pattern](idea-3-4.png "step by step navigation pattern")
![A screenshot taken of the step by step navigation pattern](idea-5-6.png "step by step navigation pattern")
![A screenshot taken of the step by step navigation pattern](idea-7-8.png "step by step navigation pattern")

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

Outcome was to have two versions to take into testing. A (which is based off version 3 above)- a more simple search on learner and training, both optional. Or B (which is based off version 2 above) - one with more options. See which the users felt would be more helpful, which categories are more useful and also how they felt about the layout and date range, as that is something that is a custom component. Interesting having the fields being optional as this is not normally GDS recommended but we wanted to see whether users found it beneficial or confusing.

>**We believe that** testing options A and B
>**Will be useful for** us to see what information the submitters need to find a claim
>**As they will** confirm our hypothesis' about what info is vital and which are nice to have's.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="research-a.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Option A</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="research-b.png" alt="text" style="width: 100%; height: auto;">
    <figcaption>Option B</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found
- We spoke to 4 people as part of this round of user research
-  The main purpose of the user testing was to understand how users searched for claims with different information to hand​ and understand users used the different search and filter fields available
- In the first task, users were given the claim ID, the name of the learner and the name of the course. They were asked to find these claims in the system.​ This step was the same for both version A and version B.
- Once users landed on the correct page, the majority of users were able to search for a claim using the claim ID. Users were able to identify the field to search and entered the claim reference that they were provided with by researchers. No one chose to use the 'advanced search' option while they had the claim reference number.​
- In the second task, users were not given a claim ID, but they were given the name of the learner and the course. In Version A, users could search for learner name or NI number and/or course name, and in Version B, other fields were included. ​
- Most users understood the role of advanced search in finding a claim, and clicked this option immediately after realising they could not search by claim ID.
- ​The majority of users used the name of learner and course fields for their advanced search. This was for various reasons including that it was 'easier' to remember learner names; they would have access to NI number as part of the role; and that this information would be easy to obtain.

#### Searching or reporting?
- Users tested many of the fields as part of the test, but did not use them to search to complete the task. Some users felt that date range and claim status would be useful if they were missing certain pieces of information (i.e. name) but knew the rough date of the qualification or claim submission.
- While users were interested in using the search fields, analysis shows that they were predominantly concerned with their usefulness in reporting. ​For example, one user wanted to use the date search field to check how many claims were submitted in a time period for auditing purposes. ​Others suggested that they would report on activity per financial year using this search page, or use the information in the table to update a training matrix.​
- 

#### Outcome
- Research suggests users would use the advanced search function to 'report' on activity, rather than search for a claim. Therefore, although all users felt that Version B was better, this was not based on its ability to search, and therefore the simplified Version A would meet their needs of finding a claim.

- Outcome from testing to go with B
- Remembering the point of work is to find a claim and not reporting and B touches on reporting
- B had a lot of nice to have's, but A did the job.

## What we will do next
- Split the find a claim piece into seperate pieces of work. Claim id search on manage claims screen could be first ticket and then advanced search of learner and training would be another.
- Decided that sorting in tables will be brought in same time in the future as pagination.