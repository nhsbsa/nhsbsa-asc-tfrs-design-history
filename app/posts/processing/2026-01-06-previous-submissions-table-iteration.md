---
title: Comparing previous submissions - multiple learners (processing side)
description: Introduction of multiple learners on a claim means we needed to update our designs for comparing what has happened on previous submissions
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2026-01-06
tags:
  - private-beta
  - processing-version-13
  - multiple-learners
relatedUserNeeds:
  - user-need-11
  - user-need-12
aside:
  title:  Processing prototype
  content: |
    [View processing v13 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v13/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As the service has evolved to support multiple learners on a single claim, we needed to update the designs for comparing changes between previous submissions. Below are the earlier designs for the claim page, including the claim timeline and the link to the “compare previous submissions” tables—version 19 for the submitter side of the service prototype and version 11 for the processor side.

Previously, the comparison table was designed to work for both processors and submitters in order to reduce development time. However, we needed to ensure that the design continued to balance the distinct needs of both user groups.

A multi-learner claim can include an unlimited number of learners, each with their own completion date and completion certificate as evidence. Attempting to display all of this information within the existing table design risks overwhelming both the page and the user.

#### Processor side 
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claims-link-submissions.png" alt="A screenshot from V11 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>V11 - Claim details link</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="processing-table-v11.png" alt="A screenshot from V11 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>V11 - Previous submissions table</figcaption>
    </figure>
  </div>
</div>

#### Submitter side
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claims-link-submissions.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>V19 - Claim details link</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="submitter-table-v19.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>V19 - Previous submissions table</figcaption>
    </figure>
  </div>
</div>


## What our ideas were

We ran an in-person ideation session with the design team to explore how the claim history and claim timeline currently work for single-learner claims, how those needs change for multi-learner claims, and where requirements differ between submitter and processor users.

We also revisited earlier concepts for comparing changes between submissions to understand what still worked and what no longer scaled.

#### What users need (single-learner claims)
As with single-learner claims, users need to:
- Compare what has changed between submissions
- See what was previously submitted and understand why it was not accepted, so they can adjust future submissions
- Understand the wider context and journey of the claim
- Get a quick, high-level overview through a timeline without being overwhelmed by detail
- Feel confident they understand the claim and the actions they are taking

#### What changes with multi-learner claims
Multi-learner claims introduce additional complexity. Users now need to:
- Understand relationships between multiple learners on the same claim
- See how a learner has changed over time
- Identify which learners were removed in previous submissions
- Be guided through potentially large volumes of changes
- Quickly find what has happened without unnecessary cognitive effort

#### Where the current designs fall down
The existing designs do not scale well to multi-learner claims because:
- The volume of information increases significantly (learner details, completion dates, evidence, outcomes, and notes)
- There is no clear way to show removed learners
- Comparing evidence for a specific learner becomes difficult due to the number of file links
- Changes to learner names are hard to track while maintaining links to the same evidence and completion dates
- Notes increase in number and may be required per learner, often with associated actions

### Framing the problem: How Might We statements

We translated these needs into “How Might We” statements to guide the design direction for both user groups

#### Submitter side

- How might we guide submitters through large volumes of information?
- How might we help submitters understand why a previous claim was not approved?
- How might we provide a high-level understanding of the claim’s journey at the moment it’s needed?
- How might we give submitters confidence that they are taking the right actions?

#### Processor side
- How might we make it easy to see what has changed between submissions?
- How might we surface the most important information at each stage of processing?
- How might we use context to make information easier to understand?
- How might we design solutions that scale to support multiple learners?
- How might we clearly show requested edits for each submission, in context?
- How might we retain detailed information for individual learners while supporting comparison?

#### Shared needs
- How might we balance seeing everything with focusing on what matters most?
- How might we make it easy to check whether requested edits have been actioned
- How might we make reviewing evidence quick and simple?

Finally, we questioned whether the designs need to support two distinct views: one for seeing information in context during submission and processing, and another for understanding the bigger picture across all submissions (for example, in a comparison table). We agreed this was something to explore further through user testing.

#### Exploring comparison approaches

We explored alternative ways of comparing information and narrowed our thinking to two main directions

### Idea 1 - Timeline

The timeline works well as a high-level overview of a claim’s journey, but on its own it felt insufficient for understanding detailed changes. We explored whether we could combine the timeline with elements of the comparison table, allowing users to see what changed in the context of each submission. The idea was to surface high-level changes first, then let users drill down into more detail as needed

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="timeline.jpg" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>Timeline that users can dig into with details components</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="breakdown-timeline.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>Timeline breakdown with elements expanded</figcaption>
    </figure>
  </div>
</div>

Pros:
- Makes it easy to see what has changed at a glance 
- Supports layered information, showing changes in context without overwhelming the user
- Helps users orient themselves within the claim’s journey

Cons: 
- Requires users to actively dig for detailed information
- Makes it harder to quickly compare changes across multiple submissions, particularly when reviewing evidence

This idea wasn't giving the whole picture and it was quite hard to compare overall changes, which is something the original submissions table comparison did well. 

### Idea 2 - Submission history table iteration

We identified the original table as the most effective way for users to scan and digest information, but it needed to be redesigned to avoid overwhelming users with multiple learners information. On the claim details screen, we had solved a similar challenge by moving detailed multi-learner information to a separate screen and showing only a high-level summary on the main page. 

>**We believe that** applying the same pattern - showing summary values in the first comparison table, then allowing users to drill down to a dedicated page for detailed learner changes
>**Will be a useful feature for** users
>**As it will** break down complex information into a familiar, manageable structure

#### Previous submissions table
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="all-table.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>100 claim - Previous submissions table viewing all values</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="edits-table.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>Applying edits filter</figcaption>
    </figure>
  </div>
</div>

#### Learner comparison submissions table
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="learners-all.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>100 claim - Previous submissions table viewing all values</figcaption>
    </figure>
  </div>
</div>

#### Previous submissions features 
- Filter for changes: Users can narrow the table to show only what has changed, while still having the full context available to understand the bigger picture.
- Summary-first structure: The comparison table mirrors the claim’s structure. Learner completions appear as summary rows with a button to drill down into detailed learner tables.
- Learner summary rows: Provide an overview including change counts, completion dates, evidence, and learners on the claim. In the detailed learner tables, these values are broken down per learner, with individual completion notes.
- Navigation aids: Name jump links on the left, separated into active and removed sections, make it easier to locate specific learners.
- Persistent filters: Filters remain active when navigating between tables, and reset only when returning to the main claim view.
- Edited flags: Summary values highlight changes at a high level, helping users spot edits even when learner counts or date ranges remain the same.
- Claim dates included: Dates remain visible on the learner submissions table to provide context.
- Single-learner claims: For single-learner claims, the design remains unchanged to avoid unnecessary complexity.
- Support for 60/40 claims: Works for claims split into multiple parts, showing history for each section individually.

#### 60/40 claims
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="60-table.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>60 claim - just showing values for a 60 claim</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="40-table.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>40 claim</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found

Went into testing pre christmas.

## What we will do next

Findings and actions:

- They want to see what has changed during the processing. This was a ptoentail idea we had considered before as to whether a need by should we hihglight during the processing if something has specifially changed and link them out to the table.
