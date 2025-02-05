---
index: 8
layout: fellow
title: Retroactive Impact funding for Journalists
fellowName: Devansh
cohort: 3
country: India
lat: 12.9716
lon: 77.5946
image: /content/fellowship/Devansh/devansh-headshot.jpg
description: Devansh is exploring retroactive funding for citizen journalists using the hypercerts standard.
tags:
  - asia-south
  - impact
  - funding
  - 2023-cohort-3
---

## Devansh Mehta

Devansh Mehta, co-founder of [VoiceDeck](https://voicedeck.org/), is interested in mapping out public good impact space. Impact methodologies and markets for environmental use cases are well-documented mechanisms, but sometimes ‘impact’ wanders into more subjective territory: Investigative journalism, for example, is undoubtedly a public good. How can the real work of journalists be documented and valued in a way that fits into the right funding mechanism? Devansh will work with citizen journalism newsrooms to explore methodologies of impact documentation using the [hypercerts standard,](https://hypercerts.org/) with an aim to find a good mechanism of retroactive funding for positive social outcomes.

### [Interview at Devconnect 2023](https://youtu.be/42ukRSN0-ms?si=4T4ud4CDUmIkPsii)

# Piloting Journalism Impact Certificates, a new blockspace frontier

*The following is an update from Next Billion Fellow Devansh Mehta and his initiative [VoiceDeck](https://voicedeck.org/)*

I began my next billion fellowship with a simple question: can we get journalism outlets to record impact from their stories onchain?

I had published stories at the investigative newsroom Organized Crime and Corruption Reporting Project and also worked for 5 years at community media outlet CGNet Swara. Both newsrooms bemoaned the lack of a feedback loop between creating tangible outcomes from their stories and generating revenue.

So I began to explore how blockchain can be applied to an existing financing mechanism in the social sector: outcome based funding.

The most prominent outcome funding instrument is social impact bonds, where an investor provides upfront capital that is repaid with interest by the outcome funder if targets are achieved. Since taking off in 2010, there have been only about 300 impact bonds raising around 750 million USD to serve 2.5 million people globally.


![A visual representation of how impact bonds work from the Stanford Social Innovation Review https://ssir.org/articles/entry/a_critical_reflection_on_social_impact_bonds](https://storage.googleapis.com/ethereum-hackmd/upload_a807961e50ac6836555db517cbbd307e.png)


Despite their innovation, outcome funding has had relatively low uptake for 3 main reasons:

1) Organizations focus on easy to achieve outcomes at the expense of more difficult ones

2) Only deep pocketed funders use them since there are high setup costs, with one study finding a required ticket size of at least USD 20 million to be viable

3) Risk of overpayment of outcomes that may have occurred even without the intervention or insufficiently capture meaningful change

With the right architecture, could impact bonds overcome these shortcomings and become accessible to many more funders and social enterprises? 

From 2017, I had been exploring different revenue models for investigative reporting, including WhatsApp API, Bluetooth distribution and paying readers to listen to advertisements. 

In August 2021, I stumbled upon the concept of a non-fungible token: using a Blockchain to create unique digital objects. Similar to a chair existing uniquely in the physical world, it was now possible to give media artifacts a distinct existence. I saw that this could be applied to social impact bonds to replicate key features like single sale of outcomes while lowering setup costs and need for big funders.

Think of the experience of buying a tshirt. You can go to a shop, inspect for quality and purchase it directly. Now imagine that same experience for buying impact. You can see some past verified outcomes, look at the price at which it was achieved & then purchase it. 

Blockchain powered outcome funding could become a new approach to social sector fundraising by shifting from an existing service contract model (grants or donations) to a disruptive product sales approach via impact certificates.

## Standing on the Shoulders of Giants

The idea of impact certificates was first brought up in 2014 by Paul Christiano on the Effective Altruism forum. He saw it as a coordination mechanism, bringing together people with the ability to undertake a project, means to fund it, and knowledge to evaluate it, premised around creating positive feedback loops between impact creation and revenue generation.

![Funding Flywheel with Impact Certificates](https://storage.googleapis.com/ethereum-hackmd/upload_39d68f98054e596978ae20bbfc754f7e.png)

Even back then, Paul [proposed](https://paulfchristiano.medium.com/certificates-of-impact-34fa4621481e) the use of a blockchain to solve the issue of double spending, where the same impact might be sold multiple times. However, it wasn’t until hypercerts launched last year that a clear standard for impact certificates came into existence.

As part of the fellowship, I attended the global investigative journalism conference in Gothenburg to get feedback from journalists on outcome based funding for their past investigations. Seeing some initial [validation](https://x.com/TheDevanshMehta/status/1708818000093294810) of the idea at the conference, I drew up a prototype that got awarded $10,000 in funding!

$9000 was from a virtual hackathon organized by Funding the Commons, which also connected him with a designer and developer to work on VoiceDeck.

The remainder came from a mini-forecasting challenge by Scott Alexander, a leader in the Rationalist community. More than the money, success was getting the project [feature](https://www.astralcodexten.com/p/impact-market-mini-grants-results?hide_intro_popup=true) on Scott Alexanders widely read blog, Astral Codex Ten. Scott wrote that VoiceDeck being unfinished at the time led to a lower prize amount of only $1000 due to “normal human tendencies to doubt bizarre and hyper-ambitious things”. This showed interest in onchain impact certificates from communities outside web3.

## Version One

I was put in touch with a team called Pollen Labs, a self-described “product accelerator”, who were able to offer design, product, and development expertise in getting a working model built and deployed for the impact certificates. 


The collaboration started with a design sprint with three social enterprises bringing their past impact onchain. The end result was a clear depiction of how the funding system would work for both the organizations and their backers.

![Funding System Design](https://storage.googleapis.com/ethereum-hackmd/upload_48d1de4ec58f2f2dcc5ea2361b31ea09.png)

The organizations had diligently recorded past outcomes from their stories on their website, such as getting a human trafficker arrested, suspending a teacher stealing from a lunch program for children and more. My job consisted of pricing those individual impacts, quantifying their benefit and bringing them onchain for purchase by customers.

## Marketplace Launch

At the end of the fellowship, the Pollen Labs team delivered a testnet where 27 impact reports were quantified and brought onchain. The proof of concept showed that outcome based funding for any social enterprise is possible if they have a system for recording impact from their programs, which can then be brought onchain as hypercerts.


In November 2023, the marketplace hit Optimism mainnet. I gave a talk at Devcon about the support provided in the EVM ecosystem to manifest an idea, from Gitcoin quadratic funding rounds that keep the mission alive, to hackathons for recruiting team members, to direct grants and next billion fellowship type programs for acceleration.

Since launch, 13 supporters have bought $125 in impact certificates. The repo has had 2 prominent forks for taking outcome funding to other domains.  A writeup on our implementation of outcome based online donations was [published](https://dl.acm.org/doi/abs/10.1145/3678884.3687146) at a top peer reviewed conference called Computer Supported Cooperative Work (CSCW), effectively showcasing blockchain use cases to internet researchers outside web3.

![A look at the marketplace for buying impact created by citizen journalism
](https://storage.googleapis.com/ethereum-hackmd/upload_af874230af1545217fb9230c8bfc89a3.png)

Going ahead, the plan is tapping into three markets for driving buying pressure for the impact certificates: existing media funders; algorithmic funding platforms like gitcoin, octant or public nouns type onchain DAOs; & the gift card market. 

Every impact certificate has space for its buyers to write a comment showing their gratitude to a person on a special occasion. Why give a material gift to someone when you can buy an impact advancing a cause they care about?

On that note, if you liked this article you can leave a comment expressing your appreciation by buying an impact certificate (for any amount) at [app.voicedeck.org](http://app.voicedeck.org)

*Special thanks to Nidhi Harihar for reviewing the draft and providing comments*
