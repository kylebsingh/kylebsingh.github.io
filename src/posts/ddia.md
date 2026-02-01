---
layout: layouts/post.njk
title: Notes on 'Designing Data-Intensive Applications'
description: 'Notes on "Designing Data-Intensive Applications" by Martin Kleppmann.'
date: 2026-02-01
tags: notes,ddia,system-design
---

Designing Data-Intensive Applications (DDIA) by Martin Kleppmann is widely regarded as one of the best books on system design and data engineering. It provides a comprehensive overview of the key concepts and techniques used in modern data-intensive applications. The book is broken into three main parts: Foundations of Data Systems, Distibuted Data, and Derived Data.

# Part I. Foundations of Data Systems

## 1. Reliable, Scalable, and Maintainable Applications

- Many applications today are data-intensive as opposed to compute-intensive.
- Many data-intensive application need to:
    1. Store data (databases)
    2. Remember results of exppensive operations (caches)
    3. Allow users to query data (search indexes)
    4. Sebd nessages to other processes, handle asynchronously (stream processing)
    5. Periodically crunch a large amount of accumulated data (batch processing) 
- There are so many technology options for each of these tasks, and each has its own tradeoffs. It is important to understand the tradeoffs of each option to make informed decisions.

### Thinking about Data Systems


### Reliability
#### Hardware Faults
#### Software Errors
#### Human Errors
#### How Important Is Reliability?