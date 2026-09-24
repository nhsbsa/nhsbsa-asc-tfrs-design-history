---
title: Iterating the designs for self serving organisation registration and accessing multiple organisations
description: Iterating the design following research with users and some new requirements.
author:
  name: Mark Portnell (Interaction designer)
  url: 'mailto:hi.mark.portnell@nhsbsa.nhs.uk'
date: 2026-07-20
modified: 2026-08-15
tags:
- private-beta
- self-serve-onboarding
- claims-version-26
- claims-version-27
aside:
  title:  Claims prototypes
  content: |
    [View claims v26 prototype](https://adult-social-care-7fe9bafd955a.herokuapp.com/claims/v24/) 
    Password: bsaasc123
---

Contents
--- [Why we did this work](#why-we-did-this-work)
--- [What our ideas were](#what-our-ideas-were)
--- [How we tested our ideas and what we found](#how-we-tested-our-ideas-and-what-we-found)
--- [What we will do next](#what-we-will-do-next)


## Why we did this work

Our previous design work to enable [self serving organisation registration](../self-serve-registration) and [allowing users to access multiple organisations](../self-serve-manage-orgs) showed several usability issues that meant we still didn't quite have the designs good enough to move into development. The issues:

### Self serving organisation registration
- Investigate whether we can pull CQC registration numbers from the ASC-WDS API has users may have multiple of these and this would reduce duplication of information input
- Explore how to support additional address lines for organisations who may require an address line 3

On top of these there was some additional requirements that needed to be addressed:
- Organisations have to provide two pieces of proof of address and these must be two different document types
- SROs have to sign the GDL during the registration journey

### Allowing users to access multiple organisations
- Iterate the manage orgs screen to ensure users are able to understand they are looking at an organisational focused screen
- Iterate the design to make navigating back to the 'My organisation' screen clearer to single organisation users
- Iterate how we display the status of organisations who are 'active' but awaiting bank verification
- Explore options for how the journey could address the differing needs of single or mutliple organisation users

The plan would be to iterate the designs and then test with the users one final time the end to end of the entire self serve onboarding to validate our iteratations. 

## What our ideas were

### Self serving organisation registration

#### Investigate whether we can pull CQC registration numbers from the ASC-WDS API has users may have multiple of these and this would reduce duplication of information input

Following investigation the ASC-WDS API that we use provides the CQC location ID that is associated with the ASC-WDS workplace ID. As a result we made the decision to not ask for CQC information from the organisation and instead use the API to get this and surface it to the operational staf that are reviewing the registration requests. Thus reducing the duplication of information input across services. 

#### Explore how to support additional address lines for organisations who may require an address line 3

The Address pattern already includes an optional address line 2, our intial thinking was that the simplest solution would be to just add another optional field for address line 3. However in the interest of ensuring we explored all possible route we opened up a conversation about introducing an address look up to our service to capture the organisations address. 

As the address will have to be a UK address an address lookup would be the preferred approach from a usability perspective following discussions with tech team and PO this would be additional effort compared to just capturing the address using input fields. We agreed that this would be put on the backlog as an improvement but for our MVP we would just capture the address using input fields as per the existing design.

![A screenshot showing the address input screen with a new optional address line 3](address-new.png "The address inpout screen design")

#### Organisations have to provide two pieces of proof of address and these must be two different document types

Given we have a list of document types they have to choose from and each document has to be different we proposed capturing the document type along with the document. This would allow us to prevent users from trying to submit two documents of the same type but also help the operational team quickly identify what type of document has been provided. 

Our starting point for this was to follow the initial one question per page model, the idea would be that once the user selects a type for the first document we wouldn't display that option for the second document preventing them from selecting it to beging with. We believed that Keeping the inputs on two seperate pages would reduce cognitive load on users. The content between the two screens would be largely the same. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="address-proof-1-new.png" alt="The screen asking for the first proof of address, requesting the document type and the file upload" style="width: 100%; height: auto;">
      <figcaption>First proof of address</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="address-proof-2-new.png" alt="The screen asking for the second proof of address, requesting the document type and the file upload" style="width: 100%; height: auto;">
      <figcaption>Second proof of address</figcaption>
    </figure>
  </div>
</div>

#### SROs have to sign the GDL during the registration journey

We explored two seperate placements for this:
- Adding as an additional step before the check your answers screen
- Combining it with the current declaration that occurs after the check your answers screen

Following discussion, it didn't feel appropriate placing it before the check your answers screen as it isn't really a bit of data input and it fit better as a final declaration by the user before they submit their registration details. 

Approaching the design of this combined screen we reused content from our existing GDL signing screens and incorporated the declaration content that was already in the journey.

![A screenshot showing the new declaration screen that combined GDL signing content with the existing declaration content](declaration-new.png "New declaration screen")

### Allowing users to access multiple organisations

#### Iterate the manage orgs screen to ensure users are able to understand they are looking at an organisational focused screen

Our design was initially framed around 'My organisations' with each summary card showing an organisation they are part of along with the SRO. 

In research users often confused the context of the screen, and despite the header stating 'My organisations', would interpret the cards as person information rather than people. We felt that this confusion stemmed from a lack of page context along with the SRO's name showing in the card with no reference to the user on the page. To combat this confusion we proposed two key changes:

##### 'My organisations' to 'My account'
First was to frame the page around the user. Shifting from just being about the users organisations to combining it with account details. The hypothesis was that this would provide the context first to the user - this page is about them. Then we would list their organisations splitting registered orgs and reigstrqtions in progress to allow for better information structure.

##### Removing SRO information
Our hypothesis was that removing the SRO's information from the organisation cards would help avoid confusion that other people's name might cause and allow the user to better oriente around the organisation name in the card rather than any people names. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="my-organisations-old.png" alt="A screenshot of the the initial 'My organisations screen' design" style="width: 100%; height: auto;">
      <figcaption>'My organisations' design</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="my-account-new.png" alt="A screenshot of the new 'My account' screen design" style="width: 100%; height: auto;">
      <figcaption>New 'My account' design</figcaption>
    </figure>
  </div>
</div>

#### Iterate the design to make navigating back to the 'My organisation' screen clearer to single organisation users

Research showed that users more commonly looked to go into the organisation details tab to switch to another organisation or get back to My organisations. After this some also would click on the My account in the header. The "change organisation' link was clearly being missed. 

With the changes we have made to reframe the 'My organisations' screen into the 'My account' we were wondering whether this would estbalish a mental model on login that 'My account' is where a list of my organisation sit and therefore to change organisation the user just need to get back to 'My account'. Although we could make more substantiable changes to the header of the service while a user is in the organisation we wanted to avoid this due to the increased development and testing effort this would entail. So we decided to test the design just without the 'Change organisation' link to see if users were able to successfully get back to the 'My account' screen when they needed to change organisation.

![A screenshot showing the manage claims screen for an organisation with the 'change organisation' link removed](manage-claims-new.png "Updated design")

#### Iterate how we display the status of organisations who are 'active' but awaiting bank verification

We explored a couple of different ways of approaching this problem:
- Add an additional state before 'active' to illustrate that bank details are still needed.
- Add a notitication banner component into the organisation card for which they are the SRO and use content similar to what is shown on the manage claims screen
- Add a notification banner component to the top of the screen listing all orgs, for which the user is the SRO, that haven't got bank details added

We didn't feel that adding an additional state would be clear enough for users, particularly in communicating what actions they needed to take. Then although adding a banner to the organisations card may address that issue this could potentially add a lot of visual noise to the page if they had multiple organisations in this state. As a result we opted to go with the notification banner at the topmof the screen. The benefit of this solution was that we could also use the same approach for other states that prevent users from submitting claims, such as missing GDL signatures and incomplete SRO changes. 

![A screenshot showing the new My account screen with a notification banner for bank details](my-account-new.png "My account screen with notification banner")

#### Explore options for how the journey could address the differing needs of single or mutliple organisation users

We know from research that most users will only have a single organisation that they will access in the service, because of this the My account screen serves little value and if anything adds an extra step to a process for a user that we know is already very time poor. However all users will usually go through a state of having one organisation before adding more even though that might be a brief period of time. The My account page therefore still has value.

Given the changes to 'My account' we wondered where we still needed a different approach for single vs multiple organisation users. We felt testing this again to see if it would still be an issue would be a good starting poin. Then if it was still an issue, the least effort approach we could think of for this problem was to land users with only one organisation directly into the manage claims screen for that organisation. This would mirror the existing service approach. Any user that has more than one organisation would land on the My account screen. By dealing with this logic programatically we reduce any detail to create further variation of the design to reduce effort both to create but also maintain. 

## How we tested our ideas and what we found
We ran 7 sessions of usability testing with SROs, 4 of which worked at organisations with multiple ASC-WDS accounts. Our broad aims were to
- test the full end-to-end journey of self serve onboarding
- understand if design iterations improved navigation back to the 'My account' screen as well as assessing overall understanding of the page

Our high level findings were as follows:
- As expected from previous testing, overall usability when registering an organisation from eligibility through to submitting an organisations details tested well, users felt they would be able to complete reigstration unaided 
- Understanding of the 'my account' page improved, the previous confusion between an individual or organisation level view appeared to be resolved 
- Despite design iterations from previous testing, navigating back to the 'My Account' screen continues to be an issue​
- ​Most users continued to question the need to see the 'My Account' page first, after logging in​
- Links to the GDL need to be more direct in both the eligibility content and at the point of agreeing to its terms​

Further details can be found in the <a href="https://nhsbsauk.sharepoint.com/:p:/r/teams/UserResearchLibrary/_layouts/15/doc2.aspx?sourcedoc=%7B8a528c90-f3b9-4e3a-b5f4-37e170d15e1d%7D&action=edit&wdPreviousSession=903bd29c-0285-d8f2-5cf6-cc7f198bfe29">playback deck</a>.

## What we will do next
Following the playback of the research findings we held an actions meeting to agree what we would take forward and iterate and what we would park for future improvements. All of the key findings above we felt we could address to some degree.

#### Despite design iterations from previous testing, navigating back to the 'My Account' screen continues to be an issue​
Research showed two main issues reamining users not seeing 'My account' in the header and users still looking in the Organisation details tab. We made two key changes to tackle this, the first was quite simply adding some content for users in the Organisation details tab telling users to go to the 'My account' page to change organisation. 

![A screenshot showing the Organisation details tab with the new content at the bottom](org-details-new.png "Organisation detail tab")

The second change was much more significant. We had an item in our backlog to update to the more recent version of the GOV Frontend this would involve a number of changes one of them was to update our header structure and how we use the GOV header and service navigation component so that we are aligned with GDS guidance. We opted to bring the changes to the header area into this work. The structure of the new header area was then as follows:
1. GOV header - we opted to leave the sign out button in here right aligned as we know in the future we will move to GOV One Login which places the sign out in this location. 
2. MOJ organisation switcher - we removed the switching link as testing showed this wasn't spooted by users. 
3. Service navigation - now includes the service name and existing service tabs with the addition of the My account link added as well seperate to the main navigation elements.
4. Phase banner

![A screenshot showing the header area structure](header-area-new.png "New header area structure")

Although we didn't test this with users, midway through the round of research when realising the navigation wasn;t working we showed users a variation of this design to get thoughts and users found the 'My account' link more visible so we felt that this was a low risk change to make without testing. 

#### ​Most users continued to question the need to see the 'My Account' page first, after logging in​
Given we have found this to still be an issue we opted to go with the idea mentioned above where we land users with only one organisation directly into the manage claims screen for that organisation.

#### Links to the GDL need to be more direct in both the eligibility content and at the point of agreeing to its terms​
We made some minor content changes to try to maintain clarity while also be able to link directly to the relevant GDLs. 

<div style="display: flex; flex-wrap: wrap; gap: 1rem;">
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="declaration-new.png" alt="A screenshot of the declaration screen design we tested" style="width: 100%; height: auto;">
      <figcaption>'Declaration screen' design we tested</figcaption>
    </figure>
  </div>
  <div style="flex: 1; max-width: 48%;">
    <figure>
      <img src="declaration-iteration.png" alt="A screenshot of the iterated declaration screen design that includes direct links to the GDLs" style="width: 100%; height: auto;">
      <figcaption>Iterated 'Declaration screen' design</figcaption>
    </figure>
  </div>
</div>

We handed over the designs with the iterations to development with intention of closely monitoring these changes once they are released.