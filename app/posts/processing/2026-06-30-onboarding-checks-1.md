---
title: Checking registration details in the service
description: To register an organisation and onboarder must check the registration details the SRO has provided and record the outcome in the service.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-06-04
tags:
  - private-beta
  - processing-version-15
  - self-serve-onboarding
  - onboarding-checks

aside:
  title:  Processing prototype
  content: |
    [View processing v15 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/processing/v15/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

As part of the work we are doing to allow SRO to self serve onboarding an organisation onto the service the process will still require a member of the operational team checking the registration details the SRO has provided. The people doing these checks we will call onbaorders. We did some work to get agreement on the high level process onboarders will be following in reviewing the registration details provided by the SRO. 

There are multiple steps to this process which has been captured in a [confluence page](https://bsa2468.atlassian.net/wiki/x/IQCTigE)">. While the outcome of each steps will be recorded it was deicided that this will be kept in the MS form for now and only the overall decision will be recorded in the service. 

The design will need to present all the registration details provided by the SRO along with information pulled back from the ASC-WDS and allow the onboarder to input the decision which could be one of three options:
- Register
- Register at risk
- No to register

## What our ideas were
We approached the design in a similar way to how we approached the inital designs of the claim processing screen at the start of Beta. Although similar in some ways to the existing pre-verification process this will still be a somewhat new process for the operatioanl team. It is likely that as we learn more about the effectiveness of current checks at combatting fraud that these checks may change and evolve over time. This gives us two guiding principles for the design of these screens:
- Flexibility - ensure the designs are neutral enough that they could remain the same even if the checks process were to evolve.
- Minimise development complexity - try to keep the development compleixty of screens as low as possible to ensure we can deliver and learn in live as quickly as possible

Reusing the same patterns we had for the inital claims processing journey resulted in the following journey:
1. Search for registration details
2. Review information
3. Input decision
4. Confirm outcome

We decided to split the inputting of the decision screen out so that the user has to click on a CTA on the registration details screen to be able to input the decision. This would allow the journey to better align with the new claims processing journey and bank verification process. This meant we had 4 core screens to design.

### Search for registration details
We felt the best approach would be to reuse the the existing "register an organisation" option on the service landing page for the processors as our launch point as although the rest of the joruney will be different this is same start the current journey has for onboarding. Since we couldn't use the ASC-WDS workplace ID as a unique reference we made some alteration to refer to a new registration reference that the onboarder will use to find the registration details that have been received.

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="landing-page.png" alt="A screenshot from v15 showing the landing page with slightly adapted content" style="width: 100%; height: auto;">
      <figcaption>Landing page</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="enter-ref.png" alt="A screenshot from V15 showing the enter a registration reference page" style="width: 100%; height: auto;">
      <figcaption>Enter the registration reference</figcaption>
    </figure>
  </div>
</div>

We felt that it was important to differentiate on the landing page that find an organisation was only for registered organisations. We tackled this by changing the supporting description. The register an organisation description was also updated to refer to the new process where an outcome is recorded. 

### Review information

In keeping with the design used for the initial claims process we used summary lists in a single column to present the registration details provided by the SRO along with information returned from the ASC-WDS based on the workplace ID provided. The onboarders will have to compare different parts of the information provided as well as comparing against external services such as companies house. Similar to the choice made to only record the overall decision in the service to ensure flexibility of process we felt that laying out the information to favour what needs to be compared would also hinder this flexibility. In addition we had the following hypothesis:

>**We believe that** arranging data by source and type
>**Will be a useful feature for** onboarders
>**As it will** reduce confusion about where each bit of data came from without reducing the ability to compare

![A screenshot from v15 showing the registration details presented in a summary list](unprocessed.png "Registration details")

Instead of allow the onboarder to immediately input the decision we decided to place a call to action to allow that:

>**We believe that** placing the decision input behind a CTA
>**Will be a useful feature for** onboarders
>**As it will** improve consistency with other journeys they follow in the service.

We also decided to elevate more information that is returned from the ASC-WDS that hasn't been shown in the service before in particular:
- CQC location ID - this means we don't need to ask the SRO to provide this reducing repeated input of information
- Number of workplace employees
- Service provided
- Service category

>**We believe that** providing this additional informataion
>**Will be a useful feature for** onboarders
>**As it will** improve there ability to make informed onboarding decisions

As there could duplicate names for information in differetn summary lists, for example organisation name provided by the SRO and the organisation name returned from the ASC-WDS we decided to align our language with the ASC-WDS when refering to the information returned. This meant using the term "workplace".

>**We believe that** using the term workplace
>**Will be a useful feature for** onboarders
>**As it will** differentiate entities that the ASC-WDS refers to

### Record decision

The design for the decision involved a single question with the three options. With our content designer, we explored two different content choices, looking at "register" vs "onboard" we decided that in keeping existing language refering to this joruney we would stick with register as a more appropriate choice.

For the register at risk option we decided to add some additional hint text as:

>**We believe that** provided an explanation of what register at risk entails
>**Will be a useful feature for** onboarders
>**As it will** show the difference with the reigster option

In addition we used a conditional reveal for the notes associated with the no option as well which aligns with how we have implemented this approach in the claims process. The resulting design is as follows:

![A screenshot from v15 showing the registration details screen witht he ability to record a decision](unprocessed.png "Record outcome")

### Confirm outcome

As a final confirmation this screen just checks the onbaorder is happy with their decision before the outcome is recorded and organisation is potentially registered. 

>**We believe that** asking for confirmation
>**Will be a useful feature for** onboarders
>**As it will** reduce the risk of mistakes and incorrectly registering organisations

The resulting designs were as follows:

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-risk.png" alt="A screenshot from v15 showing the confirmation screen for the register at risk option" style="width: 100%; height: auto;">
      <figcaption>Confirm outcome - register at risk</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="confirm-no.png" alt="A screenshot from V15 showing the confirmation for not to register" style="width: 100%; height: auto;">
      <figcaption>Confirm outcome - not to register</figcaption>
    </figure>
  </div>
</div>

### Registration outcome

The final step would bring the onbaorder back to the registration details screen this time showing the outcome results with a tag associated with outcome. We did consider whether, for organsiations who are registered, whether to land them on the organisation view page we decided against this as we felt it better to have the registrations as seperate entities that can be reviewed but link to and from the organsiation. With this in mind we added the view organsiation button for registered organisations to take the onboarder through to the organisation view. 

![A screenshot from v15 showing the registration details for a registered at risk organisation](registered-at-risk.png "Registration details - registered at risk")

## How we tested our ideas and what we found
We ran a round of usability testing with 5 members of the operational team that conduct the currrent onboardign checks. We aimed to understand:

- whether users are able to use the system to record the outcome
- whether the proposed registration information is sufficient for onboarders to decide whether to onboard an organisation, and what, if any additional information would they be looking for

Our headline findings were:
- The quantity of information displayed in the designs was managable, users praised being able to see everything on one page
- There was delight around the information being displayed upfront, and the time saved no longer having to find this information was highlighted
- ​Users identified where they may need to use existing processes, particularly for register at risk or rejection outcomes where a spreadsheet and communication with orgs may be needed
- Register at risk status was praised, this is what users expected to see displayed on the organisations details once registered and onboarded – Expect it to be flagged next to the organisation name in the claim journey

While no major usability issues were found onboarders are very set on needing defined criteria to make a decision. This aligned with findings during the work we did to agree upon the high level onboarding checks process. A key takeaway was the need to agree on how the individual checks inform an overall onboarding decision.

Further details can be found in the <a href="https://nhsbsauk.sharepoint.com/:p:/r/teams/UserResearchLibrary/_layouts/15/doc2.aspx?sourcedoc=%7B47FC41F6-12A3-40A9-B246-F21C633EC796%7D&file=Self%20Serve%20Internal%20round%201%20-%20%20Bank%20and%20pre%20verification%20checks.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&wdOrigin=OFFICECOM-WEB.APPGALLERY%2CAPPHOME-WEB.JUMPBACKIN&wdPreviousSession=3e85b55c-984f-4f62-b399-495a64b22049&wdPreviousSessionSrc=AppHomeWeb&ct=1783349715744">playback deck</a>.

## What we will do next
Due to the lack of major usability issues we will make ready the designs for the development handover addressing any edges cases, error handling and validation needed. We have also agreed that the wider team need to clearly define how the individual checks inform the overal decision. We are tryign to get agreement on who should have responsibilty for this. We will work with the operational and fraud teams as needed to help with this. 