---
title: Comparing previous submissions - multiple learners (submitter side)
description: Introduction of multiple learners on a claim means we needed to update our designs for comparing what has happened on previous submissions
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-11-24
tags:
- private-beta
aside:
  title:  Claims prototypes
  content: |
    [View claims v21 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v16/) 
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


#### V19 previous designs for submitter side
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

The ideas for the submissions table have been detailed in this blog post on the processing side. 

#### V21 New designs

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="table-all.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>View previous submissions table</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="table-changes.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>Applying filter to whats's changed</figcaption>
    </figure>
  </div>
</div>

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="learners-all.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>View learner comparison table</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="learners-changes.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>Applying filter to whats's changed</figcaption>
    </figure>
  </div>
</div>


Additional design for submitter side:

#### Timeline

We questioned whether the timeline was primarily surfacing metadata such as submission count, creation dates, and authorship — much of which already exists in the previous submissions table — and whether these elements could instead be abstracted into the claim details page (for example, by showing a submission count), allowing the timeline to be removed altogether. However, we recognised that the timeline and the submissions table serve different but complementary needs: the timeline provides a fast, high-level understanding of the claim’s journey, while the table supports deeper comparison. We therefore decided to keep both concepts in play and validate their usefulness through testing

#### Content

- Changed content on links to be more obvious where they are leading to e.g. "View claim timeline", "View claim history"

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="claim-details-links.png" alt="A screenshot from V19 - Claim details link" style="width: 100%; height: auto;">
      <figcaption>Claim details with updated links</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="timeline.png" alt="A screenshot from V19 - Previous submissions table" style="width: 100%; height: auto;">
      <figcaption>Timeline screen</figcaption>
    </figure>
  </div>
</div>

## How we tested our ideas and what we found

Going into testing week commencing 12th January 2026. 

Questions focusing on:
- Is the timeline still useful when removed from the claim details to its own seperate screen, no longer "at a glance".

