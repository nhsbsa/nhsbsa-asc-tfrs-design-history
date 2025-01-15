---
title: Custom error state for the claim scaffold screen
description: With the unique use of the summary list on the claim scaffold screen, we needed to design a custom error state for this screen.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-21
modified: 2024-05-31
tags:
  - claims-version-8
  - manage-claims
aside:
  title:  Claims Prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---

## Why we did this work
The claim scaffold screen features a somewhat unique use of the summary list component. This screen allows users to add the relevant information to each section in a flexible way, at times suitable for the user. Our design decision log from alpha covers the rationale behind using summary lists in this way, rather than other patterns like the task list.

![A screenshot of the claim scaffold screen from v8 of the prototype](claim-scaffold.png "The claim scaffold screen")

We needed a way to handle users who try to click the "confirm details" button before completing the claim scaffold screen.

## What our ideas were
We identified two potential approaches to handle this scenario.

One approach was to prevent users from clicking the "confirm details" button until all the required information had been added, utilizing a disabled button state. However, upon further consideration, this didn't align with GDS’s approach of allowing users to submit forms with empty input fields and providing an error message to highlight the missing information.

The second, and more fitting, option was to use the error message and error summary approach. The error summary was straightforward and could follow the standard GDS approach. The error message itself was more complex. Typically, it consists of bold red text beneath the input field label with a red vertical bar spanning from the label to the input field. We had to adapt this pattern slightly for the summary list due to the way the label (key) and input (value) are presented horizontally on tablet and desktop, and vertically on mobile:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="summarylist-desktop.png" alt="Summary list component on desktop" style="width: 100%; height: auto;">
    <figcaption>Summary list component on desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="summarylist-mobile.png" alt="Summary list component on mobile" style="width: 100%; height: auto;">
    <figcaption>Summary list component on mobile</figcaption>
  </figure>
  </div>
</div>

To address this, we decided to place the error message above the summary list row, regardless of whether it's viewed on mobile or desktop. The error message would span the entire width of the summary list to prevent text wrapping and visual alignment issues. We applied the vertical red bar as usual, spanning both the error message and the entire summary list row it refers to. The final styling looked like this:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-desktop.png" alt="Summary list error on desktop" style="width: 100%; height: auto;">
    <figcaption>Summary list error on desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-mobile.png" alt="Summary list error on mobile" style="width: 100%; height: auto;">
    <figcaption>Summary list error on mobile</figcaption>
  </figure>
  </div>
</div>

Combining this with the error summary, we ended up with the following error state:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-state-desktop.png" alt="Claim scaffold error state on desktop" style="width: 100%; height: auto;">
    <figcaption>Claim scaffold error state on desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-state-mobile.png" alt="Claim scaffold error state on mobile" style="width: 100%; height: auto;">
    <figcaption>Claim scaffold error state on mobile</figcaption>
  </figure>
  </div>
</div>

## How we tested our ideas and what we found
Unfortunately, due to aggressive deadlines and higher-priority areas to test, we were unable to properly test this pattern before development or during private beta.

## What we will do next
We have agreed to monitor this closely during private beta and conduct further research if necessary to evaluate the effectiveness of the error patterns on this screen.