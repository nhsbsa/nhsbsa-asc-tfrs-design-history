---
title:   Edit a claim - submitter side (second iteration)
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-05-01
tags:
  - private-beta
  - claims-version-16
relatedUserNeeds:
  - user-need-4
  - user-need-2
  - user-need-6
aside:
  title:  Claims prototypes
  content: |
    [View claims v16 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v16/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

Multiple conversations needed to happen at the start of this piece of work to get answers to requirement questions and also to clarify scope of what we are tackling in this second iteration.

### Policy questions
**Question:** 
How long are we allowing resubmissions for, and how does financial year play a part? Are we stopping on a system or processor level?
**Answer:** 
Will be stopped on the processor level so nothing we need to build into the design

**Question:** 
Is abandon/archive a claim in scope to allow the organisations to clean up their claims lists which they use as to do lists.
**Answer:** 
Involved a chat with tech understanding the difficulty and effort involved. Result was effort would be they already have a archived status for not yet submitted deleted claims. Couldn't reuse because we want a difference between showing the archived edited ones, and the deleted not submitted ones. Effort for making a new status is low. Archiving a claim grows in usefullness as a feature with time as claims lists fill up. 

**Question:** 
Currently for a 60-claim, only 60 claim sections can be edited. For a 40 claim, only 40 claim sections can be edited. Question around how do we expect submitters to recover if a 40 claim is queried due to incorrect learner?
**Answer:** 
This is already a known constraint in production. Decision that it is out of scope to fix it within edit a claim, as many policy answers are still needed.

### Scope questions

#### View previous submissions

As this redesign to better address the needs 
The user needs:
- I need to be able to see who else in my organisation had previously (re)submitted a claim so I can gather some more contextual info. 
- I need to be able to understand/ see what I submitted previously that wasn't accepted so I don't make the same mistake again.


- Supporting notes

This iteration builds on insights from the first round of user research (UR) and the above internal business decisions. Had to prioritise some user needs over others as what to what was necessary and what is a nice to have, using this to think what comes now and what comes later in the roadmap with the priority to get this feature out the door and helping users. 


## What our ideas were

Held a in person workshop with design and content, to come together to thing about the problems aroung the claim scaffold screen. 

- SCREENSHOTS OF DAY'S DESGINS

The main issue we were thinking about was the fact the screen was cognitievly overwhelming and user's didn't know what to look at first. 
The concept we approached the day with what is the order of consumption of the information we want on this page for the user. What does the submitter need to know every time vs. only sometimes and how can we use these answers to prioritise parts of the design and lead the user through. Especially since we know user's all like to do things slightly differently we needed to allow the design to still allow some flexibility. "All on one page" is a statement we have heard a lot during the user research that they want to see everything all together and in context so it was how to deliver this but in a digestible way.

Order of consumption:
1. Orientation
2. What do I need to do right now / what is most relevant to the user based on the claim status.
3. Claim details or maybe they want to go to the claim history at this point to see context
4. What happens next

### Re-organised Content and Visual Hierarchy

>**We believe that** prioritising content based on the user's journey and intent
>**Will be a useful feature for** organisation / submitters 
>**As it will** 

#### Orientaiton

>**We believe that** for orientation user's need to see Claim ID, status, date and snapshot of max reimbursement amount
>**Will be a useful feature for** organisation / submitters 
>**As it will** match the idea of what’s shown in the claims table for them to identify the correct claim. Also we included the max reimbursement amount because we saw this as part of orientation as then they know what is the potential outcome of the task at hand 

- SCREENSHOTS

#### Immediate relevance

>**We believe that** the next section showing immediately relevant information based on the claim of the status
>**Will be a useful feature for** organisation / submitters 
>**As it will** contain clear callout's for current required actions with a focused view on “what do I need to do now?”

- SCREENSHOTS

    * For edit it would be a clear action of edit claim and resubmit. Displaying the edits needed notes added by processors during processing, previously called query note. 
    * for approved claims would be content around how much they are going to get in more detail and when can expect to be paid it
    * For rejected claims it would show rejection reason but also point them to the dispute process with a link
    * For a 60/40, if need to answer a 40 query it would have a jump link to that section of the claim to action. 

>**We believe that** keeping this box consistent across all claim status'
>**Will be a useful feature for** organisation / submitters 
>**As it will** means the user will look to this to always know their next steps. So even though intent is different of the user based off the status of the claim, this is a place they know to look to to find out what to do now. 

For the recommendation of: Review the layout of relevant information for the claim type in question is more prominent (ie. 40 claims), - Thought about moving query note nearer to part 40 if that’s what to do with, but that doesn’t work with new concept of what to do on page box at the top. Instead added a jump link to the 40 part, still a bit of a disconnect as seperate parts of page but see if ok


#### Claim details or claim history

Next some flexibility here in the claim hierarchy now they know they are in the correct claim and they know their purpose in how they can now navigate round to support different intentions.Do they want to see the current claim details or go to explore the claim history?

A balance to support the users wanting everything on one page still but adding more hierarchy was to strip a lot of the content out of the claim history and turn it back into a at a glance feature to support the claim details, and to answer the other user needs we were trying within the claim history to design for it in a different way. 

#### Claim history

We believe as that's when the journey becomes more complex and need it to understand. Before edit the claim history timeline would only have max 3 entries.

Held a workshop to disect the actual needs we were trying to answer with the claim history. These came out:
- To compare what's changed
- to check what has been previously submitted so that they can compare this with was last submitted and understand why this has not been accepted previously
- to understand the context of the claim and the journey it's been on
- to understand all the reasons why a claim still hasn't been accepted and what 'not' to do
- Improving quality of processing and reducing claim processing times

What was wrong with current design to consider:
- cognitive overload, shows everything all at once rather than guiding them through the information
- Draws their attention too early [when the query note relevant to the current claim isn't obvious enough on the screen?]
- Not being able to easily compare info between submissions
- latest transaction lacks visibility, everything in history given same hierarchy of importance
- Visually 'clutters' the page (in addition to the 'change' blue links text too though)
- What happens if there's a long list of history updates? Is it collapsable or makes the page really long?
- May be a lot of info in the claim history - especially for 60/40 claims in particular when both parts of the claim could be sent back multiple times
Chronology? Processor testing revealed a minority of users viewed the history with bottom entry being most recent

* Iniital ideas 
To have the compare previous versions to the current button, means can have side by side. Places the query note into context with the claim in seperate view, means only ever one query not on main screen then. 
Issues - still a lot on the screen, can we use jump links to move bits out and remove about of information in view? Issues with then bits being missed, its all still important. question over the comparison component as to wheter it would be understood, and its a lot of repetitive information. Didn't seem like the most effective way of comparing the claim hisotry. 

Decided that rather than try to answer the needs all together, to split up into different parts of the design. 
1. need to see dates and journey of a claim is the highlevel timeline
2. need to compare and understand what had changed in a new component 


1. 
Displays names and dsates and submissions
no blue links
no historical query notes, means only one claim details and one query note on the main screen
Strip back the content to bare minimum, hopefully draws the eye less
the timeline goes back to its intended purpose which is to be a at a glance feature

2. 
Table multiple claim comparison component
- This one is about understanding the claims context and journey and the previous design which showed each of these bits in isolation wasn’t actually fulfilling this need or showing things in context e.g. the query note is only helpful next to the submission it was relevant to 
- developed this new claim submission comparison component 
- Ability to see current draft and what you have edited so far, but also this is a scrollable element so can scroll back through and see how the values have evolved over the journey and the edits requested are there to see 
- The highlight component is there to draw attention to the values that have changed 
- It is a interesting one as has been tricky to find a solution that simultaneously meets user needs and is accessible. Tables are generally accessible in terms of WCAG, and the scrollable pane which enables two dimensional scrolling still meets WCAG 1.4.10 Reflow. The tricky part is how to highlight the differences, which that element could be an issues as the Home office do say to use it in moderation as overuse reduces efficacy and can cause necessary mental load, especially for people using screen readers. 
- Defo one to explore in testing as current hypothesis is the current design should meet user needs and is accessible, so shall find out! Alternative is to only show rows of values in table that have changed rather than the full claims 

#### Supporting note

Also added into the claim the ability to add a supporting note.
We know there is a need around helping solve ambiguity and right now lots of orgs attach a cover letter into the evidence or send in email which can then be lost in the trail in the claim. 
Discussions of whether to bring this need into scope, and whether to solve it with ability to add additional file, or add supporting note to the design, which was a concept we had in version 7 of the prototype that got removed. We believed the effort to create and add a cover letter would be the same effort as bringing this element into the design, still to have a content update, but leads to a free text box, where user can add one per submission and update it on each additional submission. 


#### What next 
1. At the bottom then the same element of sort of future Steps:
    * Clearly defined section at the bottom: “What happens next?”

For the recommendation of : Scenarios in which users would edit and save a claim for later need to be further understood to help identify which list a claim of that type should live in and what information they need to see
- change language of buttons to say save edits and come later
- Monitor behaviour and so far think should be in queried, if behaviour shows needs further thought could flag edited claims in queried table to have at top  


#### Content adjustments
- [ ] Main thing was what can we strip out and simplify to take away some of the overload 
- [ ] Working closely with Martine, our content designer, on the design of this view of how content and UX work hand in hand to make a design work. 
- [ ] Updated status for queried claims which is now sent back for editing. 
- [ ] Still a lot of questions over this status text so going to take a few variations into research to try to keep getting it closer 
- [ ] Main thing also was removing the related links section, moving them instead into where we think the user is going to need that information when, e.g. check evidence requirements in the edits box, or contact us if you can’t, so signposting them to BSA when needed. 
- [ ] Claim history we also took out lots of repeated words such as claim, and made just queried, submitted, approved 
- [ ] Potential for long query notes in the edits needed scenario box at the top are still undergoing exploration as we want to know the average length of this note and whether the majority are just a few sentences so ok to show the whole thing on this screen or if up to the 1000 character limit we need to design for that. Because this is such vital information to the action needed to take on this screen, components which  reveal details have lots of research that user’s miss this so reluctant to use. 

#### Reimburseamount amount
- Removed reimbursment amount information and moved into some information in orientation part of screen, and the box for approved claims, and then the rest on a seperate page via link, because it meant we could remove a large bit of visual content helping to reduce clutter, and offering the right amount of information at the right point of the journey that they want to find it


### How we tested
- Task-based moderated usability testing with ASC org users​
- Pre-task semi-structured interview questions​
- Post-task follow up questions​
- Scenario: 

### What we found 

### UR recommendations



## What we will do next








