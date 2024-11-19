---
title:  Search - sustainable design choices
description: Implementing a minimum 3 character requirement on all search inputs to handle moving pagination and table sorting to further down roadmap
author:
  name: Hannah Williams
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2024-11-01
modified: 2024-11-01
tags:
  - claims-version-13
aside:
  title:  Claims Prototypes
  content: |
    [View claims v11 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v13/) 
    Password: bsaasc123
---

## Why we did this work

The introduction of a three-character minimum search limit emerged during advanced search design discussions. Initially, users could search with a single character, which had potential to produced lengthy result lists requiring pagination and table sorting features to be a higher priority to help the user work through results. These features are more technically complex and time-consuming to implement though so this prompted a consideration of the trade-offs between usability and roadmap priorities. It was decided that users likely have sufficient information to input at least three characters, making this a minimal inconvenience to users, while dramatically reducing number of results. Pagination and sorting were deprioritized and added to the backlog for post-MVP implementation across the service.

>**We believe that** implemeting a 3 character minimum limit
>**Will be a useful feature for** both tech and submitters
>**As it will** narrow down the search results 

## What our ideas were

- For the quick find a claim search on the manage claims screen, tech required full claim ID matches, disallowing partial matches. This was for reasons to reduce the load on the database searching.
- Within the advanced claim search a learner could be searched with name or National Insurance number. Training could be searched with name, course code or qualtification number. 
- The question was raised what is the tech considerations in allowing a 3 character minimum limit for learner name, NI numbers, titles, training course codes, and qualification numbers, as this would be a partial search and whether the same logic as the claim id needed to be applied. The decision needed to balance technical feasibility with user needs embracing a sustainable design approach.
- Tech said name could be 3 characters, but prefered approach would be full matches for NI Numbers, Course Code and qualification Number. This was because searching across every field for every input which is a great use of resources to search against something every time. The backend instead will have to validate the input is in the format of a NI number, code or qualifitcation number before then searching against that field in the database. 
- They are a "Random" set of characters mapping to a unique id. So in theory, a partial search isn't needed because if they know some of it they should know all of it as would have to have to hand.
- We had the question of how do we handle errors around these inputs in the frontend, as it will involve a assumption over what we think they have typed in to return a specific helpful error. We decided not to call them a error as pretty hard to validate what the intention of user was when can type multiple things into one input box, but instead add it to the "improve search results" section with a hint to check spelling.
- Did the same changes in the select training and select learner flow of making a new claim to make it consistent across the service.

This design is based off a few hypothesis we will look to bring up in testing.

>**We believe that** requiring partial matching for learner name and training name
>**Will be a useful feature for** submitters
>**As it will** allow them to search for key words they know but not the full exact title which might be quite long.

>**We believe that** requiring full matching value for Claim ID, NI number, Course code and Qualification number
>**Will be a useful feature for** tech and submitters
>**As it will** improve the tech performance dramatically as reduces the number of results, will only search if the value matches valid format of each respective type, and for submitters they will likey have the full value to hand if they have even a small part of it. 

>**We believe that** providing a error for empty states
>**Will be a useful feature for** submitters
>**As it will** mean no searching happens for tech unless something to search against

>**We believe that** providing a error for if either field has more than 0 but less than 3 characters
>**Will be a useful feature for** tech and submitters
>**As it will** mean no searching happens for tech unless something worthy to search upon and 3 characters is a reasonable limit to request users to know to not be inconvinient and still fulfills being a quick search for them.

![A screenshot taken of the step by step navigation pattern](step-by-step.png "step by step navigation pattern")

## How we tested our ideas and what we found
- To be tested


