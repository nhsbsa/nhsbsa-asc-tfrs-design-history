---
title:   Edit a claim - submitter side (second iteration)
description: 
author:
  name: Hannah Williams (Interaction designer)
  url: 'mailto:hi.hannah.williams@nhsbsa.nhs.uk'
date: 2025-05-01
tags:
  - private-beta
  - claims-version-16
relatedUserNeeds:
  - user-need-4
  - user-need-2
  - user-need-6
aside:
  title:  Claims prototypes
  content: |
    [View claims v16 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/prototypes/design/v16/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)

## Why we did this work

At the start of this work, multiple conversations were needed to clarify requirements and define the scope for this second iteration. As the “edit a claim” feature progressed, it became clear that the work was more complex than initially expected. We had to prioritise essential user needs over nice-to-haves, helping shape what to deliver now versus later in the roadmap, with the goal of releasing a valuable feature quickly. This iteration builds on insights from the first round of user research and the internal business decisions outlined below.

### Policy questions
**Question:** 
How long are we allowing resubmissions for, and how does financial year play a part? Are we stopping on a system or processor level?
**Answer:** 
Will be stopped on the processor level so there is nothing we need to build into the design.

**Question:** 
Currently for a 60 claim, only 60 claim sections can be edited. For a 40 claim, only 40 claim sections can be edited. Question around how do we expect submitters to recover if a 40 claim is queried due to incorrect learner?
**Answer:** 
This is already a known constraint in production. Decision made that it is out of scope to fix it within edit a claim, as many policy answers are still needed.

### Scope question

**Question:** 
Is abandon/archive a claim in scope to allow the organisations to clean up their claims lists which they use as to do lists?
**Answer:** 
In a chat with tech they stated that making a new status for archive would be a relatively low effort. In an effort to not keep letting the scope of edit a claim grow, we balanced the fact that the issue this is trying to address grows bigger over time and so we can wait to see how big the issue becomes and bring it in later.

**Question:** 
Are we bringing the ability to handle ambiguity into scope? This feature would address a need that’s emerged: some organisations are including cover letters with their evidence or sending clarifications via email, which are then lost outside the service. The question is whether we should allow users to upload a supporting note or provide a way to add additional evidence for clarification.
**Answer:** 
We weighed the effort required for organisations to create cover letters and for tech to support multiple evidence uploads against adding a simpler component for a supporting note. The decision was to introduce a single supporting note that can be edited and updated, with visibility of the note in previous submissions. Editing the note alone is sufficient to resubmit a claim without needing to change other information. This is already a component that was designed in version 7, but not tested, so the design effort is low.



## What our ideas were

We held an in-person workshop with design and content, to come together to think about the problems around the claim scaffold screen. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="workshop-1.png" alt="A screenshot of the whiteboard during workshop reviewing current claim scaffold issues">
      <figcaption>Reviewing current claim scaffold screen issues</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="workshop-2.png" alt="A screenshot from the whiteboard during workshop working out the ideal order of consumption process">
      <figcaption>Thinking about the ideal order of information consumption</figcaption>
    </figure>
  </div>
</div>

The main issue we focused on was that the screen felt cognitively overwhelming—users didn’t know where to look first. We approached the day by asking: **What is the ideal order in which users should consume the information on this page**? We considered what the submitter needs to see every time versus only occasionally, and used those insights to prioritise elements of the design and guide the user through the page. 

Given that users have different workflows, the design also needed to allow for some flexibility. A recurring theme in user research was the desire to see "everything all on one page"—to view all information in context—so our challenge was to deliver that while keeping it digestible and easy to navigate.

#### Order of consumption:
1. **Orientation** - supply enough information so the user immediately knows they are viewing the correct claim.
2. **What do I need to do right now** - inform the user with what is most relevant based on the claim status and its current progress.
3. **Claim details** or **Claim history** - show both next as it's flexible on what the user might want to do at this point, see the current claim or view its history.
4. **What happens next** - inform the user of what happens once completed any outstanding actions.

### Re-organised content and visual hierarchy

>**We believe that** prioritising content based on the user's journey and intent
>**Will be a useful feature for** organisation / submitters 
>**As it will** reduce the cognitive overload while still allowing them to complete their task

![A 40 claim sent back for editing](40-sent-back-for-edit.png "A 40 claim sent back for editing in the new layout")


#### Orientation

![Orientation](orientation.png "Order of consumption 1.Orientation")

>**We believe that** displaying the claim ID, status, date relevant to status and a snapshot of max reimbursement amount in the orientation section of a claim
>**Will be a useful feature for** organisation / submitters 
>**As it will** match the idea of what’s shown in the claims table for them to identify the correct claim. Also we included the max reimbursement amount because we saw this as part of orientation as then they know what is the potential outcome of the task at hand



#### Immediate relevance

![Immediate relevance](immediate-relevance.png "Order of consumption 2.Immediate relevance")


>**We believe that** the next section showing immediately relevant information based on the claim of the status
>**Will be a useful feature for** organisation / submitters 
>**As it will** contain clear callouts for current required actions with a focused view on “what do I need to do now?”

- For claims **sent back for editing**, the page would feature a clear action title: "Edit claim and resubmit." It would display the required edits added by processors—previously referred to as the "query note" (as shown in the screenshot above). This section would also include relevant links to support users at this stage, such as guidance on evidence requirements or a link to contact the BSA helpline if they're unsure about next steps.

- For **approved** claims, additional content would appear above the alert box, expanding on the maximum reimbursement amount and providing more detailed information about how much the user will receive. The alert box would also include information on when they can expect to be paid.

![Approved claim](40-relevance.png "Approved claim")

- For **rejected** claims, the page would display all rejection reasons and include a link directing users to the dispute process.

![Rejected claim](60-relevance.png "Rejected 60 claim")

- In response to the recommendation of **"Review the layout so relevant information for the claim type in question is more prominent (ie. 40 claims)"**, we initially considered placing the relevant query note directly next to the corresponding section—such as alongside the 40 claims section. However, this approach conflicted with our new concept of keeping the key information box consistently at the top of the page. Instead, we added a jump link from the top box to the relevant section. While this creates some separation between the information and its context, we'll test this in user research to see if it poses any usability issues.

![Sent for editing 60 claim](60-relevance-edit.png "Sent for editing 60 claim")



>**We believe that** keeping this box consistent across all claim statuses
>**Will be a useful feature for** organisation / submitters 
>**As it will**  mean the user will always have a consistent way to know their next steps. So even though the user’s intent changes according to the status of the claim, this is a place they know to look to find out what to do now.



#### Claim details or claim history

Next, we needed to introduce flexibility within the claim hierarchy. Once users confirm they are in the correct claim and understand their purpose, they should be able to navigate easily based on their intent—whether to view current claim details or explore the claim history.

We aimed to balance users’ desire to see everything on one page with the need for a clear hierarchy. To achieve this, we streamlined the claim history by removing excess content, turning it back into an “at a glance” feature that supports the main claim details. Other user needs related to claim history were addressed through a different design approach.


#### Claim history

With the introduction of edit a claim, claim history becomes more important as the claim’s journey grows more complex—expanding from a simple timeline of created, submitted, and outcome to include back-and-forth interactions between organisations and processors.

We held a workshop to clarify the key needs for claim history and how designs could better support them. The main needs identified were:
- comparing what’s changed
- checking previous submissions to understand past actions
- understanding the claim’s context and journey
- knowing all reasons for sending claim back and what to avoid
- improving processing quality and reducing turnaround time

Issues with the current design included:
- cognitive overload from showing all information at once
- current query note was not prominent enough, and the historical query notes were drawing attention too early
- difficulty comparing information between submissions
- lack of visibility for the latest transaction; all history treated equally
- visual clutter, worsened by numerous blue links
- concerns about long histories making the page overly lengthy or cluttered
- especially complex for 60/40 claims with multiple back-and-forth updates


![Idea 1](idea-1.png "Initial idea 1 - Adding in a comparison claim component to more easily see what has changed between claims, the current claim is always on the left")

![IDea 2](idea-2.png "Initial idea 2 - Stripping the timeline out of the homescreen also to reduce visual clutter")


Both of these compare claims components allow side-by-side viewing and place the query note in context, so only one query appears outside the main screen. However, it limits users to viewing two claims at a time and still presents a lot of information on screen. We considered using jump links to reduce visible content, but risked important details being missed. 

There’s also concern whether users would understand having the current claim on the left and find it repetitive to view entire claims side by side when usually only a few details change. Overall, it still didn’t seem like the most effective way to compare claim history.

We decided that, rather than trying to answer the needs all together, to split them up into different parts of the design. 
1. The need to see dates and journey of a claim is the highlevel **timeline**
2. The need to compare and understand what had changed in a new **table claim comparison component**


**Timeline**

![Claim history timeline](claim-history.png "Claim history - timeline")

- Stripped out all blue links
- Goes back to its intended purpose which is to be an at-a-glance feature with dates, users and states
- No historical query notes means only one claim details and one query note on the main screen
- Stripping back the content to bare minimum hopefully draws the eye less

**Table claim comparison component**

![Claim history timeline](100-comparison.png "Comparison table - 100 claim")

- You can navigate to this component by selecting the "View previous submissions" link within the claim details section.
- This component focuses on showing the claim’s context and journey, addressing shortcomings in the previous design that displayed elements in isolation—for example, the query note is only useful next to its relevant submission.
- The new claim submission comparison component lets users view the current draft alongside edits made so far, with a scrollable interface to track changes over time. A highlight feature draws attention to values that have changed over time.
- Finding a solution that meets user needs while being accessible has been challenging. Tables generally meet WCAG standards, and the scrollable pane complies with WCAG 1.4.10 Reflow. However, highlighting differences must be used carefully, as overuse can increase cognitive load, especially for screen reader users.
- The above will be a key focus for testing. The current design aims to balance usability and accessibility, but alternatives like showing only changed rows instead of full claims will also be considered.


#### Supporting note

![Supporting note](supporting-note.png "Supporting note")

Following the decision to include a supporting note to address ambiguity, we added a row within the claim details for it, rather than putting it in its own separate section like in version 7. The “Add supporting information” link opens a separate page with a free-text box for input. In 60/40 claims, each part has its own note section. The field is optional as not all submissions will require extra information. We’ll test whether users understand the purpose of this space or if further guidance is needed.

#### What next 

![What happens next](what-happens-next.png "Order of consumption 4.What happens next")

The final section is a clearly defined “What happens next?” area, acting as a guide for future steps.

In response to the recommendation to better understand scenarios where users edit and save a claim for later, we:
- Updated button language to “Save edits and come back later” for a needs editing claim.
- Plan to monitor user behaviour—currently, these claims will appear in the queried list
- If needed, we may highlight edited claims at the top of the queried list for better visibility

#### Content updates
- Focused on stripping out and simplifying content to reduce cognitive overload.
- Collaborated closely with Martine (content designer) to align content and UX for a cohesive design.
- Updated the status for queried claims to “Sent back for editing.”
- Still testing different status text variations in research to improve clarity.
- Removed the related links section; instead, we’ve embedded key links contextually— evidence requirements guidance is now within the edits box, along with BSA contact details where support might be needed.
- Simplified claim history by removing repeated words like “claim,” leaving only key statuses: queried, submitted, approved.
- Still exploring how to handle potentially long query notes. We’re assessing average note length to decide whether to display them in full or design for the 1,000-character limit. Since this is critical info, we’re cautious about using reveal components, which are often missed by users.

#### Reimbursement amount
We moved reimbursement amount details out of the main view—key info now appears in the orientation section and approved claims box, with the rest accessible via a separate page link. This reduced visual clutter while ensuring users get the right information at the right point in their journey


## How we tested our ideas and what we found

### Who we tested with
6 participants:​
- 5 SROs and submitter​
- 1 submitters only​

Range of organisations:​
- 1 small, 3 medium, 2 large (range of staff 15-20k)​
- Type of care: residential, day, community

### How we tested
- Task-based moderated usability testing with ASC org users​
- Pre-task semi-structured interview questions​:
  1. What is the best language to use for this feature?
  2. Is claim history essential for users to be able to successfully edit and resubmit a claim?
  3. Can users understand what they need to do to complete the task and re-submit a "sent back for editing" claim?
  4. Do users know what information to add into/ how to use supporting notes to support their submission?
  5. Is it clear to users where to go and what to do if they are unsure about how to re-submit a queried claim?
- Post-task follow up questions​
- A language activity asking "What is the best language to use for this feature, so it is clear to users what this status is and what they need to do?"
- Scenarios: one with the table comparison feature and one without to find out how much of an issue not developing this right away would be, as the priority is getting the feature out into the sector the sooner the better.

### What we found

- Post UR playback and analysis we found that most of our design hypotheses and decisions were validated. Users found it usable, it worked as they expected, and it solved lots of the problems that came from the first iteration.
- Minor tweaks are required, mainly around content. 

![Final design](final-6040.png "Final design")


**Previous submissions link:** 

UR testing found that the link to view the previous submissions could be lost as it was over by the relevant claim part rather than where the users expected to find it by the claim history.

- It felt like previous submissions were to do directly with the claim history so the link was put within that section.
- An issue for a 60/40 claim was that there would be two links next to each other so we needed to decide what order to put them in. If we put 60 first then 40 in order would that  mean users read the timeline the wrong way?
- We heard in the scenario where participants edited a  40 part that they don’t need to see the 60 previous submissions. For a “needs action” 60/40 claim we now just show the link for the part that they are editing.
- In all other statuses, if there’s more than one submission we show both, in order of 60 then 40.

**Error messaging:** 

Currently when a user tries to resubmit a claim without making any edits only the error box at the top would display. Because we couldn’t be granular about which part of the claim needed changing, we couldn’t link to a specific part of the claim.

- Options were to highlight the whole claim details, but that didn’t feel right when not everything needed changing. Also, in a 60/40 claim, there was already a timeline element in the claim details component. This could be visually confusing with an error also highlighted.
- Reading threads in git and asking in the UX design community, I got inspiration that, when the error popped up, the question the user would ask would be “What do I need to change?”. Linking to the edit claim and resubmit blue box therefore makes sense as the place to direct the user to. If we directed them straight down to the claim details we would actually be directing their attention past this box.

![Error when no fields updated](error-6040.png "Error when no fields have been updated")

**Pre-populated text inputs:** 
When changing information the inputs now display the previously entered information to reduce the chance of another mistake.

![Information inputs retaining previously entered values](input-info.png "Information inputs retaining previously entered values")

**Status name and description:** 
Analysis of the language used by participants in the UR for the first iteration identified some key terms for us to test in the second iteration. The phrases we tested were:
  - sent back for editing 
  - needs changing
  - needs action
  - needs editing

As this playback slide from the second round of UR shows, “needs action” worked best for participants. It made it clear that the claim would only be processed once the submitter took action.

![Playback screenshot](needs-action.png "Playback screenshot")

To clarify that it was the submitter that needs to take action, the following description was added on the ‘Manage claims’ screen: “Claims sent back by processors because they need some edits before they can progress.” (UR participants also said that the term ‘sent back’ helped them to understand that the submitter needed to take action.)

#### New rejection status description

To help processors distinguish between “needs action” and “rejected” claims, we also added this new description for rejected claims on the “Manage claims” screen: “Claims that have been rejected and therefore cannot be edited and resubmitted.”

#### New guidance pages

As the look of the service is now changing significantly, we decided that this was a good time to retire the videos that were created to support users with starting a new claim and what evidence to provide. 

Instead we have created 3 new web pages:
- What evidence you need to provide
- Help with starting a new claim
- How we calculate reimbursement amounts (this replaces the reimbursement content that was removed from the claim details screen to reduce cognitive load)

These will be easier to maintain as we continue to iterate the service.

## What we will do next

This work has now been handed over to the BA's to write tickets and gone into development. 