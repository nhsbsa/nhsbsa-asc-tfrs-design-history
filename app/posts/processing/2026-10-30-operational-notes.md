---
title: Revisiting an operational notes feature
description: Iterating the design following research with users and some new requirements.
author:
  name: Naomi MacKenzie (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-10-30
modified: 2026-10-30
tags:
- private-beta
- processing-v18
aside:
  title:  Processing prototypes
  content: |
    [View processing v18 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v18/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [Previous research](#previous-work-in-this-area)
--- [Understanding the problem](#understanding-the-problem)
--- [Ideating together](#ideating-together)
--- [Ideation workshop next steps](#ideation-workshop-next-steps)
--- [Designing the notes feature](#designing-the-notes-feature)
--- [Testing our ideas](#testing-our-ideas)
--- [Next steps](#next-steps)


## Why we did this work

By doing this work, we aim to reduce reliance on a dedicated notes spreadsheet by centralising valuable claim and organisation  related information all within the service. We expect to reduce the time and effort required by operational staff to write, audit and reference notes related to claim and organisational updates. 

Processors, QAs and CCS agents use notes to capture a wide variety of information about an organisation and its claims, covering subjects such as processing decisions, errors, issues and amendments. What’s captured in these notes also acts as an audit trail of communication between operational staff. 

Currently, notes are documented outside of the service. They are primarily captured in a dedicated notes spreadsheet but also in other subject specific spreadsheets, such as onboarding and fraud. This means that processors, QAs and CCS agents must cross-reference several sources in disparate places to ensure they have the full picture for processing claims and supporting organisations. 

## Previous work in this space

An initial concept for [organisation notes](../org-notes) was developed back in version 6 of the processing app. It was concluded that the feature would not add enough value. Reasons for this decision included a feeling of a disjointed experience between the adding of a note and referring to it, a lack of obvious distinction around the types of notes that could be made and how they would appear in the service, and to who. For these reasons it was deprioritised until further resource could be dedicated to it. 

With more capacity now in the team and an even stronger use case for notes within the service, we have been able to reference these learnings and revisit the feature. 

## Understanding the problem

We held an initial in-person kick-off session with operational staff in Blackpool to understand their current ways of working with notes. The day was split into two workshops, the first with lead processors (QAs) and the second with processors. 

Both sessions followed the same format, aiming to understand: 

- When they make notes 
- What information and level of detail would be captured by a note 
- When would a note be reviewed and interacted with 
- How would they find relevant notes  
- Expectations of how they should be able to access notes in the service 

Following the Blackpool sessions, we had a much clearer idea of the problem with current note processes. The pain points experienced by operational staff while processing and auditing claims has amplified as the service continues to grow with more organisations onboarding and more claims being submitted. 

For example: 

- The spreadsheet continues to scale as more notes are added, which makes it slow to load and frustrating to navigate. 

- The expectation of what is captured during the note taking process has increased. Processors are required to manually input supporting metadata before they write the content of a note. For example, the date the note was captured, claim number, workplace ID, organisation name and postcode. Overall, the process of adding what might be a simple note is tedious and time-consuming. 

- Everything in the spreadsheet is editable, which means it’s possible to accidentally manipulate the data of someone else’s note without noticing. 

- BSA email addresses, which contain ciphers, are shown alongside notes rather than author names. This makes it difficult for colleagues to identify each other’s notes within the spreadsheet without pre-requisite knowledge and familiarity. 

## Ideating together

Following the kick off session, the team met up in Leeds to begin ideating. We set out with the objective to generate ideas and concepts around how we might develop a note feature within the service. This feature would need to allow operational staff to easily capture their working processes, decisions, concerns and any other claim or organisation related detail all in one centralised place.  

Together, we reviewed our findings around current note taking processes, previous research and our problem statement. We then used these to generate How might we (HMW) statements, for example:  

- How might we reduce the noise of notes? 
- How might we allow processors to quickly acknowledge actioned notes? 
- How might we extract information from notes to create useful at a glance features? 
- How might we enable processors to find notes more easily? 

We then themed our HMWs and used them as a prompt for crazy 8 sketching - a rapid ideation approach where each participant sketches 1 idea in 1 minute and repeats 8 times. The goal is to come up with creative and distinct ideas without being blocked by time to overthink them. We then dot voted and discussed which ideas to move forward with. 

![A screenshot showing the address input screen with a new optional address line 3](address-new.png "The address inpout screen design")

## Ideation workshop next steps
Our next step was to identify the scope of the notes feature, as any dedicated notes section created within the service would be unlikely to capture every level of documentation that is currently being captured.  

We held a workstream kick off session within the LDSS team to align on our understanding of the problem, relevant business requirements and initial technical considerations. This included an impact versus effort exercise to prioritise our problems within our scope. 

We then worked with the Funding operations team to determine what type of note should be facilitated by the proposed note feature and what should be facilitated by another process.  

## Designing the notes feature 

Designs were mocked up in Figma and taken to a design crit with the multidisciplinary team before they were iterated on and added to the coded prototype.   
To address our user needs to be able to capture, reference, search, sort and filter notes, we focused on the following features for our MVP: 

### Distinction between organisation notes and claim notes

- Organisation notes are accessed via the ‘Notes’ tab in the service navigation.  They encompass all notes for that organisation, including claim related notes. 

- Claim notes are accessed via the ‘Claims’ tab in the service navigation, selecting a specific claim, then interacting with the ‘More claim actions’ button menu. 

- The ‘More claim actions’ button menu is an MoJ component we introduced to the claim view page that allows more CTAs to be included without overcrowding the header of the page. For example, ‘Add a new note’, ‘View claim notes’ and ‘View claim history’ are hidden within the collapsible menu.  

Approaching the design of this combined screen we reused content from our existing GDL signing screens and incorporated the declaration content that was already in the journey.

![A screenshot showing the new declaration screen that combined GDL signing content with the existing declaration content](declaration-new.png "New declaration screen")

### Adding a note

- Users can add two types of notes, an organisation note or claim note – depending on which part of the service they are in.  

- Adding a note opens a new window where the user can write the content of the note and assign a relevant category. Opening the note in a new tab means that the user can still reference the information on screen without losing their place, for example if processing a claim and they need to reference their progress to mention a specific learner and course. 

- Categories added to a note are dependent on the note type. 

### Filter, sort and search notes

- We used the MoJ filter pattern to allow users to sort notes, search by keyword, and filter by note category. The filter can also be used to exclude claim notes at an organisation level. 

### Note metadata

- Each note contains a set of metadata: the note author, their role, a date and time stamp, a unique note ID, and when viewing a claim note view overall ‘Notes’, the claim reference too. 


## Testing our ideas

We held 6 sessions with operational staff over the course of 1 week. This included 2 QAs, 3 processors and 1 CCS agent. 

Our research aimed to test the overall usability of the notes feature and understand whether it would meet the needs of our users who regularly create notes as part of their role. To do this we also needed to understand whether the accompanying functionality, including the ability to filter, search, sort and reply, also fulfilled those needs. 

### Key research findings

- The notes feature has been highly anticipated for some time by operational staff and was very well received in testing. 

- The reasoning behind separating claim notes and organisation notes was logical for everyone despite some initial contemplation by a couple of users. 

- Filtering was used intuitively to find specific note categories and types. 

- When viewing all notes asked to identify a - laim note from an organisation note, rather than spotting the claim reference in the note metadata, QAs and processors typically would scan the content of the note to make the distinction. 

- Users would like to be able to search for specific claim references and note authors. This was included in the metadata, which was not searchable. 

- Note ID was not commented on by any user. It was unclear what their expectations of this would be and whether it would add any value. 

Overall, findings strongly suggested that there would no longer be a need for a dedicated notes spreadsheet and the feature would ease frustrations and improve processor efficiency. 

## Next steps
As notes received resoundingly positive feedback without flagging any concerns, we concluded that an additional round of user testing would not be required. 

Our next iteration will focus on enhancing what’s already been designed and minor tweaks.  

