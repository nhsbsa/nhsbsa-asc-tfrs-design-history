---
title: Validation logic for claims submitted outside of a 3-month period 
description: Implementing logic to prevent the submission of claims outside of a 3-month window.
author:
  name: Naomi MacKenzie (Interaction designer)
  url: 'mailto:hi.naomi.mackenzie@nhsbsa.nhs.uk'
date: 2026-11-04
modified: 2026-11-04
tags:
- private-beta
- claims-v27
aside:
  title:  Claims prototypes
  content: |
    [View claims v27 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v27/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [How does the rule apply to different claim types?](#how-does-the-rule-apply-to-different-claim-types)
--- [Our approach](#our-approach)
--- [One kick-out screen, multiple variations](#one-kick-out-screen-multiple-variations)
--- [Adding dynamic hint text to the relevant date input screens](#adding-dynamic-hint-text-to-date-input-screens)
--- [How we decided to test our ideas](#how-we-decided-to-test-our-ideas)
--- [Next steps](#next-steps)


## Why we did this work

Department for Health and Social Care (DHSC) introduced eligibility criteria requiring claims to be made within 3 months of learners completing their course or training.  Any claims being submitted for the first time outside of that period would therefore be rejected for reimbursement.  

To enforce this rule, processors must manually check course completion dates against claim submission dates. This is a time-consuming additional requirement among the various other checks processors already carry out per claim. We believe that this doesn’t need to be a manual process. By implementing validation checks within the service, we will be able to prevent claims outside of that period from being submitted altogether.  


## How does the rule apply to different claim types? 

We needed to first understand how the rule would apply to the different claim times, especially with the recent introduction of multiple learners. There is also the additional consideration that 60 claims do not have completion dates, so it was important to understand how the logic would apply.  

The rules apply as per the following: 

- For 100 claims with single learners, the completion date must be within 3 months of submission. 
- For 100 claims with multiple learners, only the completion date of the last learner to complete their course or training must be within 3 months of submission. 
- For 60 claims (which can only be for single learners), the start date or the payment date must be within 3 months of the claim being submitted. Validation checks would apply to whichever of the 2 dates is the most recent.  
- For 40 claims (which can only be for single learners), the completion date must be within 3 months of the claim being submitted. 


## Our approach 

### Exploring date input validation options

Initially, we considered adding an extra layer of validation logic behind the relevant date input screen to check whether the date entered is within 3 months. If invalid, it would trigger the error state when the user selects ‘Add to claim’. Handling it all in one screen would have bypassed the need for any new screens and the user would benefit from immediate contextual feedback if entering an invalid date. 

After some consideration we concluded it was not a viable option given several new complexities it would introduce. 

For example, if considering multiple learners with multiple completion dates, only one of the multiple learner completion dates needs to be within 3 months. This would require all completion dates to be on hand before the most recent one could be determined. For multiple learners with different completion dates, users enter them one by one. How can we do on-page validation if we do not know when they have completed adding all learners or are finished amending dates overall?  

Similarly, for 60 claims, only one of the dates from 2 separate input screens needs to be within 3 months for the claim to be valid. There isn’t a required input order, which makes applying our logic for on-page validation difficult.  


### Reusing existing patterns 

The complexities of on-page date validation gave us confidence that a kick-out screen approach would be the most suitable option. The screen would be triggered by selecting ‘Submit claim’ when there are invalid dates. In the claims app, a kick-out screen is already an established pattern for invalid claim submissions. For example, users see a version of this if they attempt to submit a duplicate claim for a combination of learners and training.  Users will see another version of this if we are missing their bank details.  

We decided to follow this approach for consistency purposes. We would allow the user to enter a date that is more than 3 months ago on the date input screen and the validation logic would only run to check it’s within 3 months when the user attempts to submit the claim, which leads to the kick-out screen. 


## One kick-out screen, multiple variations 
The output was one kick-out screen with dynamic content to account for the various claim scenarios. This consisted of: 
- Explanation text: explains the error in relation to the claim type. 
- Error summary: plays back the training and invalid date or date period 
- Next steps: nudging the user to check they’ve entered the correct dates or to delete the claim. 
- CTA section: follows on from the next steps to take user back to claim details or delete the claim (if applicable to the claim type). 

![An screenshot showing the core elements of the kick out screen: explanation text, error summary, next steps and a call-to-action section](kick-out-screen-breakdown.png "Core elements of the kick-out screen")

To address our user needs to be able to capture, reference, search, sort and filter notes, we focused on the following features for our MVP: 


### 100 claims kick-out screen variations

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="100-claim-single.png" alt="A screenshot of the kick-out screen variation for a single learner 100 claim" style="width: 100%; height: auto;">
      <figcaption>100 claims with a single learner and the completion date are outside of the 3-month period</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="100-claim-multi-shared-completion-date.png" alt="A screenshot of the kick-out screen variation for 100 claims with multiple learners with one single course completion dates" style="width: 100%; height: auto;">
      <figcaption>100 claims where there are multiple learners with different completion dates, all of which are outside of the 3-month period</figcaption>
    </figure>
  </div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="100-claim-multi.png" alt="A screenshot of the kick-out screen variation for 100 claims with multiple learners with different course completion dates" style="width: 100%; height: auto;">
      <figcaption>100 claims where all learners share the same completion date that is outside of the 3-month period</figcaption>
    </figure>
  </div>
</div>

### 60 claims kick-out screen variations
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="60-claim-start.png" alt="A screenshot of the kick-out screen variation for 60 claims with a start date that is more recent than the payment date." style="width: 100%; height: auto;">
      <figcaption>60 claims when the start date is more recent than the payment date but is outside of the 3-month period</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="60-claim-payment.png" alt="A screenshot of the kick-out screen variation for 60 claims with a payment date that is more recent than the start date" style="width: 100%; height: auto;">
      <figcaption>60 claims when the payment date is more recent than the start date but is outside of the 3-month period</figcaption>
    </figure>
  </div>
</div>

### 40 claim kick-out screen variation
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="40-claim.png" alt="A screenshot of the kick-out screen variation for a 40 claim" style="width: 100%; height: auto;">
      <figcaption>40 claims when the completion date is outside of the 3-month window</figcaption>
    </figure>
  </div>
</div>

## Adding dynamic hint text to the relevant date input screens

Previously on these specific date input screens, we had paragraph text between the legend and the hint text. By removing the paragraph text and updating the screen with dynamic hint text we could give users more relevant contextual information while aligning better with GDS guidance for this pattern. 

Another improvement we made was changing the date example from static to dynamic content. The example given is technically inaccurate as it’s more than 3 months in the past, and this could confuse users. By making it dynamic and defaulting to today’s date, we can ensure it’s always a valid example. This would also reduce risk of confusion and removes the need for technical teams to manually update the content every 3 months. 

### Date input screens with dynamic content examples:
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="date-100-single-or-40.png" alt="A screenshot of the date input screen variation for both 100 claims with a single learner and 40 claims" style="width: 100%; height: auto;">
      <figcaption>100 claims with a single learner of 40 claims</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="date-100-multiple.png" alt="A screenshot of the date input screen variation for a 100 claim with multiple learners" style="width: 100%; height: auto;">
      <figcaption>100 claims with multiple learners</figcaption>
    </figure>
  </div>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="date-60.png" alt="A screenshot of the date input screen variation for a 60 claim" style="width: 100%; height: auto;">
      <figcaption>60 claims</figcaption>
    </figure>
  </div>
</div>


## How we decided to test our ideas

We did not bring our ideas into a round of testing as the kick-out screen pattern we chose to use has already tested successfully in similar scenarios where there is missing or invalid claim details. While our content would be different, the interaction and screen layout would not be new. Additionally, we faced time and resource constraints due to other testing that needed to be prioritised. 


## Next steps

These designs have been handed over to development. We anticipate a reduction in the number of rejected claims. This is because users will no longer be able to submit claims that sit outside of the 3-month window. Once live, we will monitor future data insights to validate whether this has been successful.  

We expect these designs to bring value to processors by helping conserve the time and effort required to process a claim, and also, to users who might have otherwise unknowingly submitted one or more invalid claims and had to wait to be notified that their claim had been rejected. 

