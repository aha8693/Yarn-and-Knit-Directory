# Progress Log

## 2026-02-11
- Defined app concept: a yarn and knitting project organizer with three core areas:
  - Projects (FO, WIP, Planning)
  - Yarn Closet (in closet vs used up)
  - Interested Projects (Instagram/Ravelry links for future integration)
- Collected detailed field requirements for projects and yarn records.
- Discussed initial tech direction:
  - Frontend: React (JavaScript/TypeScript)
  - Backend/API: Python (FastAPI recommended for lightweight architecture)
  - Database: PostgreSQL recommended (MySQL still acceptable)
- Agreed to keep MVP lightweight and scalable for possible future subscription features.
- Requested to push code to git; git operations could not proceed from current folder because it was not detected as a git repository at that path.

## Next Steps
1. Confirm the repository root path and remote configuration.
2. Commit current project files.
3. Push to remote branch.
4. Start MVP scaffolding (auth, Projects, Yarn Closet, Interested Projects tabs).

## 2026-02-12
- Started MVP frontend scaffolding.
- Created a React + Vite app shell for the authenticated experience.
- Added post-login UI with three tabs:
  - Project
  - Yarn Closet
  - Interested Project
- Added first-pass display cards listing required fields for each tab.
- Added responsive baseline styling for desktop and mobile.
- Next: wire these sections to real forms and state, then connect to backend APIs.
- Migrated styling to Tailwind CSS + daisyUI and removed reliance on handcrafted CSS rules.
- Replaced static tab field checklists with working MVP form UIs and local state handling:
  - Project tab: add project form + saved project preview list
  - Yarn Closet tab: add yarn form + grouped saved lists (In Closet / Used Up)
  - Interested Project tab: add interest form + saved interest preview list
- Kept layout fully responsive with framework classes only.
- Verified frontend production build after form migration.
