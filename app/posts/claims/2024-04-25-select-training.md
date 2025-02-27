---
title: When and how users select training for a claim
description: Iterating how users select training to be more scalable and extensible to future requirements and accommodate the new published training list.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2024-04-25
modified: 2024-05-16
tags:
  - private-beta
  - claims-version-8
  - claims-start-a-claim
  - claims-training
  - 100-type-claims
  - 60-40-type-claims
  - policy-restrictions
aside:
  title:  Claims prototypes
  content: |
    [View claims v8 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v8/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

We had been given an agreed eligible training list for the care skills funding pot for the start of private beta. To date, we had made some assumptions and created a general structure for what we felt this data would contain and then designed around that. Now we had this new training list, and we needed to adapt how the training list is displayed in the select training screen to accommodate the new data structure.

Alongside this, when we removed the training details screen from the MVP designs, we were potentially now missing key information to identify the right training, so we needed to review what data we are presenting on the screen as well to ensure we have the right information needed to help users identify the right training.

Finally, we know that we will need to accommodate different funding models in the future. We need to consider changes to the journey that might better accommodate these possible changes.

## What our ideas were

Previously, we had taken the approach of grouping the data in a similar way to the WDF course list that we were using as a reference. However, this meant we had multiple groups of courses and then one large section of qualifications. 

![A screenshot from v8 of the prototype showing the courses and qualifications.](old-course-list.png "v7 Course and qualifications results")

One of the ideas we explored was to get rid of any form of grouping and treat all training as equal, whether it was a course or qualification. However, we felt it more likely that users would think about these as two separate sets of data. As well as that, it would be challenging due to the difference in data between courses and qualifications. For example, courses not having an awarding organisation or level and type. 

We then explored having two separate sections, one for courses and one for qualifications. This allowed for the slightly different data but meant we might lose some of the details from the course categories we previously used. To counter this, we added course category as a column in the course table. This meant courses would have code, category, and title in their table. We removed awarding organisation from courses as this was not available in the real data. 

For qualifications, we added in level and type, as along with awarding body, this was needed to differentiate between two qualifications with the same title and awarding organisation. On top of this, for qualifications, we decided to use "qualification" across the column headers to be more consistent with the section. 

Finally, we explored the idea of using max reimbursement amount in the table but due to the complexity of how it works and the possibility of misunderstandings around it, we decided to show it along with further explanations once the training had been added to the claim. We felt that given that users were at the stage of starting the claim—not exploring training options—they would have already come across this amount and explanation in the scheme guidance, and therefore leaving this out from the select training results felt appropriate.

This resulted in this design to be explored with users:

![A screenshot from v8 of the prototype showing the courses and qualifications.](new-course-list.png "v8 Course and qualifications results")

## How we tested our ideas and what we found

Although we weren't able to test this design before development due to the ongoing delivery deadlines we were battling, we were able to test them before release.

Users were able to complete the tasks we set them to make a claim. During the select training step, we found that some users didn't notice the two sections of courses and qualifications. Some weren't sure of the difference but said they would just check the completion certificate for what they were claiming for, so they didn't really find this an issue.

Most users said they would search by training title or code. Some users said they liked how flexible the search was in that you can just type a word in, and it will bring back any matches. They said this was useful as many pieces of training have similar titles.

The other interesting finding was around course category. Some users didn't see what value this would have in the table, while others felt they should be able to search against it. 

No users mentioned the lack of max reimbursement amount to be an issue.

### Additional User Insights

- **Users' awareness of sections**: While some users had difficulty noticing the two sections (courses and qualifications), they were generally able to navigate by checking the training completion certificate. To address this, we might consider improving the visual distinction between the two sections.
  
- **Course Category**: A portion of users felt the course category column was unnecessary in the table, while others expressed a desire to filter by it. We might explore ways to better highlight its relevance or incorporate a search feature.

## What we will do next

Our findings didn't suggest any major usability issues were introduced with these changes. Users were still able to complete the tasks in the same way they had before with no new usability issues. However, we will look to monitor this during private beta to ensure that this remains the case when users are actually using the service. 

We will also continue to explore ways to improve the visibility and utility of course categories, and possibly introduce more user-friendly ways to highlight or search by category. Furthermore, we will monitor user feedback regarding the max reimbursement amount to determine if it should be integrated into the select training screen or if further explanation is needed.
