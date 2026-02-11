# Yarn and Knit Directory

A web app to organize knitting and yarn life in one place.

## Vision
Create a personal directory app where users can:
- Track finished, in-progress, and planned knitting projects.
- Track yarn inventory (available and used up).
- Save interesting patterns/projects for later from sources like Instagram and Ravelry.

## Core User Flow
1. User logs in on the first page.
2. After login, user sees three main tabs:
- Project
- Yarn Closet
- Interested Project

## Tab 1: Project
Displays all projects grouped by status:
- FO (Finished Object)
- WIP (Work in Progress)
- Planning

### Project Fields
- Name of project (required)
- Picture
- Pattern link
- Yarn used in this project / color / LOT
- Needle used
- Meter/grams used
- Gauge
- Dimensions of finished project:
  - Total length
  - Armhole
  - Bust width
  - Arm length

## Tab 2: Yarn Closet
Tracks yarn stash and usage status.

### 2-a. Yarn Not Yet Used (In Closet)
- Name of yarn
- Brand
- Picture
- Color
- Fiber types
- Meter/grams
- Typical needle recommendation
- Gauge
- Cost per 100 grams / total cost
- Link to yarn
- Links to related projects where this yarn is used

### 2-b. Yarn Already Used Up
- Name of yarn
- Brand
- Picture
- Color
- Fiber types
- Typical needle recommendation
- Gauge
- Cost per 100 grams / total cost
- Link to yarn
- Links to related projects where this yarn is used

## Tab 3: Interested Project
Stores patterns/projects user wants to try later.
- Typical sources: Instagram and Ravelry
- Initial version: manual link saving
- Future version: direct integration with Instagram and Ravelry APIs (TBD)

## Tech Stack Direction
Current ideas:
- Frontend: JavaScript + React
- Backend: Python
- DB: MySQL

Recommended lightweight MVP stack:
- Frontend: React + Vite
- Backend/API: FastAPI (Python)
- Database: PostgreSQL (or MySQL if preferred)
- Auth: JWT-based login
- Image storage: cloud object storage (S3-compatible)

## Product Constraints and Goals
- Keep app lightweight and not over-engineered.
- Design backend/db so subscription features can be added later.
- Support growth from personal usage to larger user base.

## MVP Scope (Phase 1)
- Authentication (login/register)
- Project CRUD with FO/WIP/Planning filter
- Yarn Closet CRUD with in-closet/used-up states
- Interested Project CRUD (manual links)
- Basic image upload support

## Future Scope
- Instagram integration for saving interesting posts
- Ravelry integration for pattern import
- Subscription and billing support
- Advanced search/filter and analytics
