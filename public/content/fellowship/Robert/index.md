---
index: 21
layout: fellow
title: "Proof of Impact: Social Activation"
fellowName: Robert
cohort: 5
country: United Kingdom
publishedDate: March 10, 2026
lat: 55.8642
lon: -4.2518
image: /content/fellowship/Robert/robert-headshot.jpg
description: Robert Cowlishaw is an aerospace engineer researching zero-knowledge proofs, trusted execution, and satellite imagery for automatic and verifiable emergency response systems.
storyHook: "More images don't mean more truth. Without verifiable provenance and processing, institutions default to waiting — exactly when victims need speed."
bio: |
  ## Robert Cowlishaw

  **Robert Cowlishaw** is a Distributed Technologies Developer and Aerospace Engineer. He has a masters in Aero-Mechanical Engineering and is completing his PhD on the topic of Automating and Decentralising Satellite-based Emergency Mapping for Natural Disaster Response. He also has extended knowledge in distributed systems and Earth Observation from his work developing the first DAO for coordinating satellites in-orbit.
tags:
  - satellite
  - ai
  - emergency-response
  - zero-knowledge
  - trusted-execution
  - climate
  - 2025-cohort-5
---

Climate change is making natural disasters both more frequent and more severe, yet the systems that turn early signals into coordinated response and timely financial relief still move too slowly. When minutes matter, the people who respond and the organisations that fund recovery often find themselves navigating processes that are opaque, fragmented, and frustratingly brittle.

Two constraints show up again and again. The first is uncertainty about evidence: reports and mobile imagery can arrive quickly, but it is rarely clear whether they are authentic, complete, or analytically reliable. The second is the bottleneck of centralised approval, where emergency protocols and insurance processes depend on layered sign off, specialist review, and manual validation before action or payouts can begin.

The result is a set of predictable failure modes. Mobilisation happens late, resources get misallocated, liquidity arrives after the most critical window has passed, and trust erodes between governments, NGOs, insurers, and communities who have already been hit hardest.

## The credibility crisis

Generative AI has changed the nature of the problem by making fabrication and manipulation cheap, fast, and convincing. A flood depth can be exaggerated, a bridge can be made to look collapsed, and a crowd can be made to appear injured, all with realism that can fool both the public and time pressed operators. In the middle of a fast moving event, even a small number of plausible fakes can distort decisions in ways that are difficult to unwind.

The impact is practical rather than theoretical. Teams can be diverted to the wrong locations, protocols can be activated prematurely, severity estimates can become unstable, and legitimate citizen reporting can suffer from a cry wolf effect. Once doubt spreads, institutions often respond by slowing down and adding verification steps, which can mean hours or days lost.

It is also important to note that manipulation is not always malicious. Everyday edits such as compression, cropping, or enhancement filters can quietly change the signals that machine learning models depend on. In other words, more imagery no longer automatically means more truth. Without verifiable provenance and verifiable processing, the safest organisational default becomes waiting, precisely when disaster victims cannot afford delay.

## Social Activation

Social Activation is a natural disaster data insurance platform designed to bring real world impact on chain without relying on traditional oracles. Instead of asking anyone to trust an intermediary report, it combines hardware backed attestation with zero knowledge machine learning to prove two things: that evidence came from a genuine capture on real hardware, and that a public model produced a public output correctly from a private input.

At the heart of the approach is a trust minimised pipeline that treats authenticity and analytics as verifiable claims, not assumptions. Evidence can remain private, models can remain public and auditable, and outputs can be shared in a form that is useful for response and markets. The chain then becomes a place where verification is enforced consistently, and where only validated submissions can update shared state.

This is what enables a catastrophe index that is tamper evident and stakeholder neutral. Over time it can capture how an event evolves, where impacts are concentrated, and how confidence changes as more verified submissions arrive. Instead of a single authority deciding what is true, the system encourages convergence on proof backed measurements that different stakeholders can rely on.

## Why am I interested in this subject?

My interest comes from practical experience rather than abstract fascination. During my PhD in Scotland, I worked on satellite based emergency mapping and explored how it could be improved using web3 technologies. Over just three years, I watched the number of disasters rise while the operational systems meant to support response remained outdated and slow.

Web3 looked like a promising way to scale the infrastructure needed in these moments, but satellites brought real constraints. Computational capacity onboard is limited, and because of expense and institutional design it can be difficult to test frequently or deploy upgrades quickly. That pushed me towards a more widespread and even more decentralised layer of sensing and computation, one that is closer to the people affected: mobile phones.

That is why I started this project, and why the Ethereum Foundation NextBillion Fellowship became such a meaningful catalyst. It provided space to expand the idea, stress test the architecture, and develop the work with a clearer path towards real world deployment.

## The building blocks

To make Social Activation trustworthy under adversarial conditions, the design leans on three complementary proofs that make the system expensive to game. An attacker would need to forge sensor bound evidence, fake where it was captured, and produce valid analytics outputs, all while generating proofs that verify publicly. Each submission becomes a compact evidence packet: a commitment to the captured data, a set of proofs, and a signed time stamped record that can be checked by anyone.

### Authenticity

The first proof focuses on authenticity, and it deliberately avoids the arms race of pixel based fake detection. The goal is to prove that an image originated from a genuine camera capture path on real hardware, and that the content analysed later is the same capture rather than an edited variant. On supported smartphones, a hardware isolated security module can attest to the capture event and bind it to a cryptographic commitment computed at capture time. If the image is altered later, the commitment no longer matches and the link breaks.

### Location

The second proof addresses location, which is hard because GPS can be spoofed and privacy matters. Rather than publishing precise coordinates, the system can commit to a coarse region such as a grid cell or municipality boundary, which is often sufficient for triggers. Location confidence can be strengthened by combining multiple signals such as GPS accuracy radius, hashed Wi-Fi fingerprints, barometric trends, and motion patterns, and then proving in zero knowledge that the capture belongs inside a specific approved region. The chain learns "inside region R", not the user's exact latitude and longitude.

### Integrity

The third proof ensures inference integrity using zero knowledge machine learning. The input image stays private and off chain, the model is public and committed so it can be audited and versioned, and the output is public in a form that can drive action such as a damage class, severity score, or trigger flag. A proof attests that the public output is the correct result of running the committed model on the committed private input, without revealing the image itself. Verification on chain can be deterministic and fast, which is essential if the system is to support rapid activation.

Just as importantly, verification works in two environments. On-chain verification enables automatic, rules based action such as parametric insurance payouts when thresholds are met, with enforcement that is consistent and hard to override. Off-chain verification supports adoption, integration, privacy aware access control, and audit requirements for partners who need to validate claims without trusting a single operator. The chain becomes the settlement and activation layer, while off chain systems provide operational interfaces.

## Why three proofs are enough to be robust

Each proof blocks a distinct attack class, but the real strength is composability. The same committed capture anchors authenticity, location, and inference, so an attacker cannot cheaply swap inputs or reuse proofs without being detected. Breaking one part is not enough, because the system demands a coherent chain of verifiable claims.

This also changes how we think about trust. Instead of trusting individual reports, the system is built to trust converging, proof backed measurements aggregated over space and time. When combined with sensible thresholds and agreement rules, this approach can reduce false triggers, limit basis risk, and give stakeholders a shared evidence base that remains credible even when the information environment is noisy.

## Roadmap

The first active deployment is being built around AlertCalifornia, a public wildfire camera network operating more than 1,700 cameras across California. This is the first prototype running inside a real, statewide use case.

The goal is straightforward: produce verifiable wildfire confirmations that institutions can rely on during fast-moving events. Instead of depending purely on centralised dashboards or manual interpretation, the system generates proof-backed wildfire detections that can feed into response workflows and, eventually, automated triggers.

In practical terms, this phase is about operational performance. Can the system handle continuous camera feeds at scale? Can it maintain low latency during peak fire season? Are false positives and false negatives within acceptable bounds? How do costs behave under sustained load?

If the California deployment proves robust, the natural expansion is toward a broader "AlertWest" model covering the western seaboard. But the immediate milestone is clear: demonstrate reliability across the existing 1,700-camera network before expanding geography.

The second workstream focuses on property-level damage verification. After disasters, money often moves slowly because claims and aid require documentation, review, and layered approval. This project is about making damage claims faster to validate and easier to audit.

The current work centres on producing verifiable damage attestations that can be used by insurance companies and charitable organisations. For insurers, the aim is to pre-validate claims and reduce fraud risk while accelerating legitimate payouts. For charities, the aim is to demonstrate that donated funds are being directed to genuinely damaged households, with a clear audit trail.

This phase is less about technical novelty and more about integration. It requires working with insurers on acceptable output formats, with NGOs on reporting standards, and with auditors on what constitutes sufficient evidence. The success metric is simple: can this materially reduce claim processing time and increase transparency in fund allocation?

### Near-term priorities

Over the coming period, the focus is tightly scoped:

- Full operational deployment across the AlertCalifornia camera network.
- Measured benchmarking of performance during wildfire season.
- Pilot partnerships with at least one insurer and one charitable organisation for damage verification.
- Clear public reporting on reliability, cost, and observed edge cases.

## How can you help

This is an open source project, which means progress depends on people who care about building credible, privacy preserving infrastructure for crisis response. If you are interested in contributing, the most helpful starting points are improving the capture and verification pipeline, working on proving performance and cost reductions, expanding peril models and evaluation, and shaping partner friendly tooling such as dashboards and audit explorers.

If you would like to get involved, you can explore the code and documentation on [GitHub](https://github.com/social-activation), and join the discussion community on Telegram and on the website [terramesh.xyz](https://www.terramesh.xyz). Even feedback on threat models, governance design, or what would make this usable inside real responder and insurer workflows can have an outsized impact.

## Conclusion

Natural disasters are accelerating, and the cost of hesitation is measured in lives, livelihoods, and lost time. At the same moment, the information environment is becoming harder to trust, not because people are less well intentioned, but because synthetic media and routine manipulation make evidence fragile by default. If institutions can no longer trust what they see, they slow down, and the people who need help first pay the price.

Social Activation is an attempt to rebuild speed and trust together. By treating authenticity, location, and inference as verifiable claims, it becomes possible to coordinate from a shared evidence base without relying on a single gatekeeper or a single oracle. The goal is simple: get from evidence to action to liquidity faster, more fairly, and with credibility that holds up under pressure. If we can make that work at scale, we can give responders and communities something they rarely get in the first hours of a crisis: confidence that acting quickly is also acting correctly.
