---
title: 3 character minimum search
description: Post MVP. On advanced search, training and learner
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

conversation about sustainable design with 3 character limit - searches updates across all of them. Not a great use of resources to search against something every time. Problems are less about 


Discussions with tech (Sean Devlin) about minimum character limit on searches (advanced, select training and select learner), he's said his preference would be that NI number, course code and qualification number were searched on in full following the same logic of claim id that its "a "Random" set of characters mapping to a unique id" for improving tech performance massively in search. So minimum 3 character limit only applies now to learner name and training name. New content updated with nick, and also added to the advanced search training field that can search with course code and qualification number following that we do that already for select training

Tried to work out the logic of how Sean would do it in the backend, has to fit the formats of being a NI number etc for it to be searched against that table, validation before checked. 
Then the logic for the training input would be has to be in format of 603/2939/7 to search for a qualification, otherwise I think course code could be 4/5 letters so theoretically could be a name or a course code that they've typed to search against. But if less/more than 4/5 letters then only search against a name? 

## What our ideas were

Problem was in error handling, how far to take the line, because we want to help them but we don't want to assume about what they have typed in.
Discussed with mark that the way to handle mistakes in inputs with whole NI numbers/qual codes/course codes being required is not to call them a error as pretty hard to validate what the intention of user was when can type multiple things into one input box, but instead add it to the "improve search results" section.
1 - thinking to add "checking you have typed in whole NI number" line when typed something in learner box, same for "checking you have typed in whole qual number/course code" line when typed into training box.
2 - adding the improve search results stuff to training
2 - adding the improve search results stuff to learner search. Unsure on placement of this one and if weird under "add new learner" button

tweak the wording v slightly. If we put '(NI)' after 'National Insurance' in the hint text above the search fields, we could shorten the text below by just referring to NI number. Then on the advanced search screen we could combine the last 2 bullet points together. 

![A screenshot taken of the step by step navigation pattern](step-by-step.png "step by step navigation pattern")

## How we tested our ideas and what we found


## What we will do next

