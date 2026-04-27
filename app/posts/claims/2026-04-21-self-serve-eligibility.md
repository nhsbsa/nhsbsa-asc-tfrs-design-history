---
title: Helping self-serve users to understand eligibility
description: We need to support our users to access and register with the service independently by providing content to guide them through the process.
author:
  name: Martine Gallie (Content designer)
  url: 'mailto:hi.martine.gallie@nhsbsa.nhs.uk'
date: 2026-04-21
tags:
- private-beta
- self-serve
- claims-version-23
aside:
  title:  Claims prototypes
  content: |
    [View claims v23 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v23/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

Once the service moves to self serve, the onboarding journey in which users are supported into the service by operational staff will no longer be available. 

Instead, we need to support our users to access and register with the service independently by providing content to guide them through the process. 


## Why we did this work

Before they register with the service, users need to know whether their organisation is eligible. Users have also told us in research that they need concise information to help them easily understand if the service is right for their organisation.

If the eligibility journey is not clear, it will cause uncertainty for organisations. This in turn could increase operational workload because organisations need to email or phone our contact centre in order to clarify eligibility criteria. It will also cause frustration for users if they realise after registering that they are not eligible to make claims.

Eligibility is currently established via the expression of interest form. This is reviewed by operational staff who decide whether an organisation is eligible or not. This is:
- not scaleable
- operationally intensive 
- incurs a high cost per transaction

Without a self-serve eligibility process, the current model is not sustainable for a public service.

By offering a clear, concise self-serve eligibility journey, users should be able to register with confidence and minimal support, reducing operational input and cost per transaction.

## What our ideas were

Research with users who had not previously onboarded had surfaced some <a href="https://bsa2468.atlassian.net/wiki/spaces/ASCRS/pages/4617273447">insights around the onboarding journey (sprint 46)</a>: 
- organisations felt that they wouldn’t need a call with a processor to onboard as long as the process is simple.
- updating the ASC-WDS is a barrier to onboarding. 
- users needed concise information to help them decide whether it’s worth onboarding, such as which courses and which providers are eligible, who the SRO should be, and what the GDL is.

### How we gathered ideas
In order to generate some ideas about what the new eligibility should include and how it should look we held a workshop to brainstorm:
- what the content should include 
- which pieces of content should sit where
- what format it should be in

#### What the content should include

The first part of the workshop focused on brainstorming:
- what users say they need to know
- what we need users to know

#### Which piece of content should sit where

We then plotted these pieces of content we had identified onto a timeline to identify which content should sit before registration and which ones after.

#### What format the content should be in

In the final part of the workshop, we talked about what formats we could use for the new content. Possible formats included:
- start page
- step by step process
- video
- guidance page (like those we already have on the service)
- <a href="https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/">check a service is suitable pattern</a>
- microcontent on service
- email
- link to external content
- <a href="https://design-guide.publishing.service.gov.uk/frontend-templates/detailed-guide/">detailed guide</a>

The steps above allowed us to start building a content wireframe as shown below:

![A screenshot showing the content wireframe taken from a miro board.](content-wireframe.png "Content wireframe")

#### Follow up content/UX session

Content and UX then met to shortlist which format would be best suited for the eligibility content.

We narrowed it down to 2 possibilities – <a href="https://design-guide.publishing.service.gov.uk/frontend-templates/detailed-guide/">detailed guide</a> and <a href="https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/">check a service is suitable pattern</a> – and discussed the pros and cons of each.

In the end we used Figma to create:
- a detailed guide
![A screenshot showing the the detailed guide designs](detailed-guide.png "Detailed guide designs")

- a detailed guide with the ‘check a service is suitable’ pattern embedded as an eligibility checker
![A screenshot showing the the detailed guide with eligbility checker designs](eligibility-checker.png "Detailed guide with eligibility checker designs designs")

### Content crit with project team
Next we held a <a href="https://miro.com/app/board/uXjVJZ8QhF4=/?moveToWidget=3458764663247269945&cot=14">content crit</a> with the project team to look at the two options. 

The decision was made to go ahead with the detailed guide only. It was felt that the tech effort involved in building the eligibility checker did not warrant the limited value it would bring. We also felt that our eligibility criteria are quite simple and can be explained clearly using content only.

## How we tested our ideas and what we found

We tested our ideas with 3 people who were not currently signed up to the service and 1 local authority that had recently signed up. 

We used a combination of 5 second testing and highlighter testing to assess how well participants understood the content, and also to gauge the possible impact of self serve for users.

The main insights from this round of testing are below:
- Overall content tested really well, it was viewed as being clear and concise and helped users understand whether they would be eligible for the service
- Some evidence requirements did pose questions – we state they 'may' need to provide the evidence. More specifically - lease, proof of address
- Further context around the maximum reimbursement rate would provide extra clarity for users 
- Users did not  feel they needed an onboarding call based on this current journey – will continue to test that for registration
- At this point in the journey – knowing what you can claim for and how much is the most important information users are looking for
- Next round of self-serve research should continue to understand what impacts - if any – increasing evidence requirements and making onboarding an SRO only process will have

## What we will do next

The content was iterated and the following updates made:
- spelling out Oliver McGowan Mandatory Training the first time it appears on every page
- rewriting the reimbursement amount content to make it more positive and specific
- putting registration evidence requirements into 2 bulleted lists – one mandatory and one optional
- specifying that the evidence relates to the organisation rather than the individual

We will now retest the content, allowing people to self-select how they engage with it, along with the new registration screens. 

