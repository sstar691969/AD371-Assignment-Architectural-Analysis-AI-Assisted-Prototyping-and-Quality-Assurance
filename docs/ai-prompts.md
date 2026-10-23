# AI Prompt Log — JupyterLab Architecture Explorer

## Project Overview

**Project:** JupyterLab Architecture Explorer  
**AI tool:** ChatGPT  
**Purpose:** To assist with architectural analysis, Python prototyping, automated testing, documentation, and quality assurance.

## Prompt 1: Understand the Assignment Requirements

**Prompt:**

“Help me complete this assignment: Architectural Analysis, AI-Assisted Prototyping, and Quality Assurance. Explain the assignment requirements and help me identify the steps needed to analyze a real-world application's architecture, create a proof of concept, and test the implementation.”

**Purpose:** To break the assignment into manageable tasks and identify the required deliverables.

## Prompt 2: Select the Project Approach

**Prompt:**

“I chose the JupyterLab architecture analysis option using Python analysis in JupyterLab and a static web dashboard deployed to DreamHost. Help me plan the project structure and deliverables.”

**Purpose:** To establish the project direction and plan the Python model, dashboard, documentation, tests, and deployment.

## Prompt 3: Analyze JupyterLab's Architecture

**Prompt:**

“Help me analyze JupyterLab's architecture. Identify its architectural style, major components, responsibilities, communication boundaries, and data persistence. Use official Jupyter documentation and distinguish verified facts from assumptions.”

**Purpose:** To develop an architectural model based on JupyterLab's documented design.

## Prompt 4: Build the Python Architecture Model

**Prompt:**

“Help me create `src/architecture.py` for the JupyterLab Architecture Explorer. Define a list of architecture components with an ID, name, category, responsibility, and source URL. Add a `get_components()` function that returns independent copies of the component records and a `find_component(component_id)` function that returns a matching component or `None`.”

**Purpose:** To implement a small Python proof of concept that represents the architecture components.

## Prompt 5: Write Automated Tests

**Prompt:**

“Help me write pytest tests for `src/architecture.py`. Test that components are available, every component has the required fields, an existing component can be found, an unknown component returns `None`, and modifying the returned component list does not change the original list.”

**Purpose:** To check the Python model's expected behavior and basic data protection.

## Prompt 6: Verify the Tests

**Prompt:**

“Help me verify the project tests using `uv run pytest -v`. Explain the test results and identify any failures that need to be corrected before submission.”

**Purpose:** To confirm that the automated tests execute and report their results accurately.

## Prompt 7: Create the Web Dashboard

**Prompt:**

“Help me create a static JupyterLab Architecture Explorer dashboard that presents the main architecture components, their responsibilities, and a conceptual workflow. Make it understandable to a beginner and clearly label the workflow as conceptual rather than a verified live request trace.”

**Purpose:** To make the architecture analysis accessible through the deployed website.

## Prompt 8: Review the README

**Prompt:**

“Review my README for the JupyterLab Architecture Explorer assignment. Check that it accurately describes the project, architecture, component model, setup instructions, tests, limitations, AI tools, and prompts. Do not claim that features, tests, or files exist unless the repository confirms them.”

**Purpose:** To improve documentation accuracy and ensure the README reflects the actual implementation.

## Prompt 9: Review AI Contributions and Limitations

**Prompt:**

“Help me document how AI assisted with this project. Explain which parts were AI-assisted, what I verified or customized, and how I checked AI-generated architectural claims against official sources. Identify any claims that remain hypotheses or need additional verification.”

**Purpose:** To demonstrate critical evaluation of AI-generated content rather than accepting it without review.

## Prompt 10: Check the Assignment Against the Rubric

**Prompt:**

“Evaluate my JupyterLab Architecture Explorer project against the assignment rubric. Review architectural analysis, README and AI prompt documentation, application functionality, QA testing, and video presentation. Identify missing evidence and recommend the highest-priority corrections without guessing about unverified work.”

**Purpose:** To identify gaps before submission and prioritize improvements based on the grading criteria.

## Evaluation and Reflection

ChatGPT helped organize the assignment, develop the initial Python architecture model, design automated tests, plan the dashboard, and improve documentation. AI-generated claims about JupyterLab's architecture must be checked against official documentation. The Python tests verify the behavior of the local component model; they do not independently prove that the model fully represents JupyterLab's real implementation.

Before submission, I should verify that the README and prompt log match the actual repository, rerun the tests, inspect the deployed dashboard in different viewport sizes, check the browser console for errors, and demonstrate the QA process in the project video.
