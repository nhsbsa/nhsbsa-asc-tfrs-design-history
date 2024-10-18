---
title: Custom error state for the claim scaffold screen
description: With the unique use of the summary list on the claim scaffold screen, we needed to design a custom error state for this screen.
author:
  name: Mark Portnell
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-01
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
The claim scaffold screen features a somewhat unique use of the summary list component. The nature of this screen allows users to add the relevant information in each of the sections in a flexible way and at times suitable for the user. Our design decision log from alpha covers the decision that led to the use of summary lists in this way as opposed to other patterns such as the task list. 

![A screenshot of the claim scaffold screen from v8 of the prototype](claim-scaffold.png "The claim scaffold screen")

We needed a way of dealing with users who try and click the "confirm details" button before they have completed the claim scaffold screen.

## What our ideas were
There were two routes we identified in how we could deal with this scenario.

One was to prevent the user from being able to click the "confirm details" button until all the required information had been added. Utilising a disabled button state until the final bit of information is added. However after further consideration this did not seem in keeping with GDS's approach with all question pages of allowing using to submit forms with empty input fields and then providing an error message highlighting the missing field inputs. 

The other option, that felt the most appropriate to explore further, was to utilise the error message and error summary approach. The error summary was quite straight forward and we could use the standard GDS approach. The error message was more complex. Conventionally it consists of bold red text sat below the input field label with a red vertical bar spanning from the input field label to the input field. We had to adapt this pattern slightly for the summary list due to the way the summary list 'label' (key) and 'input' (value) are presented horizontally in tablet and desktop but vertically in mobile:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="summarylist-desktop.png" alt="Summary list component in desktop" style="width: 100%; height: auto;">
    <figcaption>Summary list component in desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="summarylist-mobile.png" alt="Summary list component in mobile" style="width: 100%; height: auto;">
    <figcaption>Summary list component in mobile</figcaption>
  </figure>
  </div>
</div>

For this we opted to place the error message above the summary list row whether in mobile or desktop. The error message would span the entire width of the summary list so that we don't have text wrapping over a line and presenting visual alignment issues. The vertical red bar we opted to then follow the similar rules to how this is usually applied, we placed this spanning the error message and the entire of the summary list row it refers to. The resulting styling then looked like this:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-desktop.png" alt="Summary list error in desktop" style="width: 100%; height: auto;">
    <figcaption>Summary list error in desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-mobile.png" alt="Summary list error in mobile" style="width: 100%; height: auto;">
    <figcaption>Summary list error in mobile</figcaption>
  </figure>
  </div>
</div>

Combining this with the error summary resulted in the following error state:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-state-desktop.png" alt="Claim scaffold error state in desktop" style="width: 100%; height: auto;">
    <figcaption>Claim scaffold error state in desktop</figcaption>
  </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
  <figure>
    <img src="error-state-mobile.png" alt="Summary list error in mobile" style="width: 100%; height: auto;">
    <figcaption>Claim scaffold error state in desktop</figcaption>
  </figure>
  </div>
</div>


## How we tested our ideas and what we found
Unfortunately due to aggressive deadlines and other higher priority areas to test we were unable to test this pattern properly before development or private beta. 

## What we will do next
We have agreed that this is something we will try and monitor during private beta and conduct further research as necessary as to the effectiveness of the error patterns on this screen. 

