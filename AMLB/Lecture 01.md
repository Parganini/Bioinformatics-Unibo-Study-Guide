---
exported: 2026-04-11T12:03:19.767Z
source: NotebookLM
type: report
title: "Lecture 1"
---

# Lecture 1



# Applied Machine Learning: Basic Course Study Guide

This study guide synthesizes the introductory material and fundamental concepts for the **Applied Machine Learning (AML) – Basic** course at the University of Bologna. It covers logistics, core definitions, the current state of the field, and the technical foundations of supervised and unsupervised learning.

---

## 1\. Course Overview and Logistics

The Applied Machine Learning – Basic module is a 4-CFU course designed for Master’s students in Bioinformatics and PhD candidates. It serves as a "portal" into data science, focusing on "expectations tuning" to move from theory to practical application.

### Instructors and Teaching Methodology

The course is led by **Prof. Daniele Bonacorsi**, a physicist with extensive experience at CERN, and **Dr. Luca Clissa**. The teaching approach is "artisan-like," prioritizing intuitions, best practices, and hands-on toolkits over purely theoretical proofs.

**Format:** Hybrid lectures (in-person for Bioinformatics students) consisting of frontal instruction and hands-on sessions using **Jupyter/Google Colab** notebooks.

**Structure:** Each hour is typically divided into 45 minutes of lecture followed by a 15-minute break.

**Programming:** While not a "programming course," it utilizes Python. Students are expected to have entry-level familiarity with Python or be willing to learn the basics.

### Assessment Methods

The final grade is a total of 30 points, divided equally into two components:

| Component | Points | Details |
| --- | --- | --- |
| Written Test | 15 | Multiple-choice questionnaire (online via EOL/Almaesami or paper). Open-material; focuses on conceptual understanding. |
| Project Work | 15 | Coding-based project. Evaluated on methodology, code quality, clarity, and documentation. Can be individual or in teams. |

**Key Rules:**

**Written Test:** Can be taken multiple times; the highest score is retained. Scores remain valid for one calendar year.

**Project Work:** Maximum of two submissions per project. If the second submission score is unsatisfactory, a new project must be proposed.

**Honors (30L):** Awarded for excellent performance in both components.

---

## 2\. Fundamental Definitions and Concepts

### Defining Machine Learning

Machine Learning (ML) is a sub-domain of Artificial Intelligence (AI). The course highlights three primary definitions:

**Arthur Samuel (1959):** Giving computers the ability to learn without being explicitly programmed.

**Tom Mitchell (1997):** A computer program is said to learn from experience **E** with respect to some task **T** and some performance measure **P**, if its performance on **T**, as measured by **P**, improves with experience **E**.

**Synthesized Definition:** A software system that improves through fitting data into a model over time based on an underlying hypothesis.

### The "Why Now?" of Machine Learning

ML concepts have existed for decades, but three factors led to the current acceleration:

**Big Data:** The rise of massive volumes of data characterized by the 4 Vs: Volume, Variety, Velocity, and Veracity.

**Hardware (GPUs):** The use of General-Purpose Graphical Processing Units to perform parallel calculations originally designed for gaming.

**Cloud Democratization:** Access to massive computing resources (e.g., AWS, Google Cloud) without needing to own the hardware.

### Data Science and the "Unicorn"

A Data Scientist is often described as a "unicorn" because the role requires a rare blend of three domains:

**Mathematics & Statistics.**

**Computer Science.**

**Domain Knowledge & Communication.**The course suggests that while a single "data scientist" may be rare, a **Data Science Team** effectively bridges these gaps.

---

## 3\. Types of Machine Learning

Learning algorithms are categorized based on how they process information:

### Supervised Learning

The machine is provided with a training set containing "labels" or "right answers."

**Regression:** Predicting a continuous output (e.g., housing prices based on square footage).

**Classification:** Predicting a discrete/categorical output (e.g., determining if a tumor is malignant \[1\] or benign \[0\]).

### Unsupervised Learning

The machine is provided with unlabeled data and must find structure on its own.

**Clustering:** Grouping data into cohesive categories (e.g., Google News grouping stories, social network analysis, or market segmentation).

**Non-Clustering:** Identifying structure in chaotic environments (e.g., the "Cocktail Party Problem," where an algorithm separates individual voices from a mixed recording).

### Reinforcement Learning

Learning occurs through a feedback loop of rewards and penalties (e.g., a robotic goalkeeper learning through trial and error).

---

## 4\. Univariate Linear Regression

Univariate linear regression is the simplest building block of ML modeling. It uses one input variable (x) to predict a target variable (y).

### Notation and Terminology

| Symbol | Meaning |
| --- | --- |
| $m$ | Number of training examples in the dataset. |
| $x$ | Input variables or "features." |
| $y$ | Output variable or "target." |
| $(x,y)$ | A single training example. |
| $(x^{(i)},y^{(i)})$ | The ith training example in the dataset. |
| $\theta_0,\theta_1$​ | Parameters of the model (intercept and slope). |

### The Hypothesis and Cost Function

**Hypothesis ($h$):** $h_{\theta}(x)=\theta_0​+\theta_1​x$. This function maps the input $x$ to a predicted $y$.

**Cost Function ($J$):** $J(\theta_0, \theta_1) = \frac{1}{2m} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$. This "Squared Error Cost Function" measures the accuracy of the hypothesis.

**Goal:** Minimize $J(\theta_0​,\theta_1​)$ to find the parameters $\theta_0$​ and $\theta_1​ that produce the "best fit" line for the data.

---

## 5\. Short-Answer Quiz

**Explain Tom Mitchell’s definition of Machine Learning using the example of a checkers-playing program.**

**Distinguish between Artificial Intelligence and Machine Learning as described in the course's "nested" pictorial definition.**

**Define "Supervised Learning" and provide one example of a regression problem within this category.**

**What is the "Cocktail Party Problem," and why is it considered an unsupervised learning task?**

**Describe the role of the "Cost Function" ($J$) in linear regression.**

**Why is the "Democratization of Cloud Computing" cited as a reason for the recent rise in ML adoption?**

**In the context of ML modeling, what is the difference between a "feature" and a "target"?**

**What characterizes a "Classification" problem in supervised learning?**

**Explain why "Domain Knowledge" is a critical component of the Data Science Venn diagram.**

**How does "Univariate Linear Regression" differ from more complex ML models mentioned in the slides?**

---

## 6\. Quiz Answer Key

In Mitchell’s definition, Task (**T**) is playing checkers, Experience (**E**) is the games played against itself, and Performance (**P**) is the probability of winning the next game. Learning occurs if **P** improves on **T** because of **E**.

AI is the broad field of automating tasks and decision-making; ML is a specific sub-domain used to implement AI. All ML is AI, but AI can exist without ML through explicit programming.

Supervised Learning involves training an algorithm on a dataset where the "correct" answers are already known. An example is predicting housing prices (regression), where the algorithm fits a line to historical sales data to predict continuous values.

The Cocktail Party Problem involves separating individual voices/signals from a chaotic recording. It is unsupervised because the algorithm is not given "labels" for the voices; it must find the underlying structure in the audio signals on its own.

The Cost Function measures the difference between the model's predictions and the actual data points. By minimizing this function, the algorithm finds the specific parameters ($\theta_0​$, $\theta_1$​) that create the most accurate model.

It allows individuals and small teams to rent massive, Google-scale data centers and computational power. This removes the barrier of needing expensive, proprietary hardware to run complex ML experiments.

A "feature" ($x$) is the input variable used to make a prediction (e.g., the size of a house). The "target" ($y$) is the actual output or value the model is trying to predict (e.g., the selling price).

A classification problem seeks to predict a discrete output set rather than a continuous range. Examples include binary outputs like "benign vs. malignant" or "spam vs. not spam."

Domain knowledge allows a data scientist to understand the context of the data (e.g., biology or physics). Without it, an algorithm might find patterns that are mathematically sound but scientifically irrelevant or misinterpreted.

Univariate regression is "univariate" because it relies on only one input variable (x). More complex models may be multivariate (many features) or non-linear (e.g., using higher-order polynomials or neural networks).

---

## 7\. Essay-Format Questions

**The Evolution of AI to Applied ML:** Discuss the historical shift from explicit programming to the "learning from experience" paradigm. Why is the latter more effective for tasks like spam filtering or image recognition?

**The "V" Factors of Big Data:** Analyze how Volume, Variety, Velocity, and Veracity have necessitated the move toward automated machine learning systems. How does "Applied ML" address the problem of data that humans cannot process manually?

**Supervised vs. Unsupervised Methodologies:** Compare and contrast these two approaches. In your essay, describe a scenario where a researcher might use unsupervised clustering before applying a supervised classification model.

**Mechanics of Linear Regression:** Detail the mathematical relationship between the hypothesis $h$, the parameters $\theta$, and the cost function $J$. Explain the conceptual process of "minimization" and why squared errors are commonly used.

**The Ethics of AI vs. Human Intelligence (HI):** Using the source material’s distinction between "Strong AI" and "Weak AI," argue for the "Integration" of intelligences. Why does the instructor emphasize that ML is about "automation of tasks" rather than "replacing humans"?

---

## 8\. Glossary of Key Terms

| Term | Definition |
| --- | --- |
| Big Data | Large datasets characterized by extreme Volume, Variety, Velocity, and Veracity. |
| Classification | A supervised learning task where the output is a discrete category (e.g., 0 or 1). |
| Clustering | An unsupervised learning method that groups unlabeled data points based on similarities. |
| Cost Function ($J$) | A mathematical formula (e.g., squared error) used to measure how well a model fits the training data. |
| Data Science | A multidisciplinary field combining math/statistics, computer science, and domain expertise to extract insights. |
| Feature | An input variable ($x$) used by a machine learning model to make predictions. |
| GPU | Graphical Processing Unit; hardware used to accelerate ML tasks through parallel processing. |
| Hypothesis ($h$) | The function or model produced by a learning algorithm to map inputs to outputs. |
| Parameters ($\theta$) | The internal variables ($\theta_0​$, $\theta_1​$) that a model adjusts to minimize the cost function. |
| Regression | A supervised learning task where the output is a continuous real-valued number. |
| Supervised Learning | A type of ML where the model is trained on data with known labels or targets. |
| Training Set | The historical dataset (m examples) used to "teach" a machine learning algorithm. |
| Unsupervised Learning | A type of ML where the algorithm finds hidden patterns or structures in unlabeled data. |
| Univariate | A model that uses only one independent variable to make predictions. |