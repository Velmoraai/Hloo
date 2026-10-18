# JEE Ascension V6.6 — Global Phase Plan and Unit Coverage

Adaptive JEE command system.

## V5.7 changes
- Removed Weakness Bank, Question Log, and Revision pages.
- Added a dedicated Missed-Deadline Backlog.
- Added Daily Report: productive time, tasks completed, XP earned, target progress, activity history.
- Added Monthly Stats: six-month XP, productive-time, and task graphs plus a detailed table.
- Added editable daily and monthly XP targets.
- Activity logging powers the reports from task completion and productive timer XP.
- Existing unit/test deadlines, Reality Check, Priority Engine, Time Core, Test Hub, Progress Board, To-Do, and Course Library remain.

## GitHub Pages
Upload `index.html`, `style.css`, `app.js`, and `README.md` to the root of the repository. The tracker data stays in browser localStorage; do not upload exported JSON backups.


## Final verification
- Full V5.x feature set retained from the last complete codebase.
- Course Library URLs are real links; Add/Edit/Delete are implemented once each.
- Unit chapter checklist supports Add/Edit/Delete/Complete/Undo.
- Algebra checklist includes Sets, Relations & Functions, Complex Numbers, Quadratic Equations, Sequence & Series, P&C, Binomial, Matrices & Determinants, Statistics, Probability.
- Missed unit/test deadlines create backlog entries automatically.
- New missed deadlines deduct the configured XP penalty once and record the deduction.
- Existing localStorage key remains `jeeAscensionV5` so replacing the code does not intentionally create a new data store.


V6.1: Chapter-by-chapter unit checklist is now visible in both Deadline Radar and Progress Board. Checklist completion drives unit completion percentage and deadline urgency.


V6.2 adds editable subtasks to every To-Do task. Each task shows a live progress bar and completed/total count; subtasks can be added, checked, renamed, and deleted. Existing tasks are migrated with an empty subtasks list and existing tracker storage remains compatible.


V6.3 fixes the subtask buttons: task and subtask IDs are now quoted safely in inline event handlers, so Add, checkbox toggle, Edit, and Delete handlers receive valid arguments.


V6.4 fixes the Progress Board chapter-add control. The same unit checklist is rendered in both Progress Board and Deadline Radar; their add-chapter inputs now have separate IDs so each button reads the visible input. The button audit also checks that inline handlers resolve to defined functions, all rendered element IDs are unique, and renaming/deleting a unit deadline keeps its chapter data consistent.


## V6.5 — Daily backlog XP decay
- Replaces the new-deadline one-time XP hit with a recurring deduction for each unresolved backlog item.
- Default rate: 20 XP per active backlog item per calendar day; change it in Settings.
- The first daily deduction occurs the day after an item enters the backlog. If the tracker is not opened for several days, missed daily deductions are caught up on the next visit.
- Resolving an item stops future deductions. Reopening it restarts counting from the current date rather than charging for resolved days.
- XP cannot fall below zero; each item tracks penalty days and the actual XP deducted.
- Existing tracker storage key remains `jeeAscensionV5`. Existing historical one-time deductions are not refunded or repeated. Legacy active backlog items begin daily tracking from the first day V6.5 sees them; no historical daily deductions are backfilled.


## V6.5.2 — Backlog completion fix
- Completing a unit or test now automatically resolves its linked missed-deadline backlog item, stopping future daily XP deductions.
- If a unit/test is reopened after being auto-resolved, its linked backlog item becomes active again and daily counting restarts from the current date.
- Manually resolved backlog items remain resolved.
- Rechecked daily catch-up, same-day duplicate prevention, unit/test completion, reopening behavior, and manual resolution.


V6.5.2 fix: deleting a unit deadline or test now resolves its linked automatic backlog item, preventing further daily XP deductions from an item whose source was deleted. Existing XP history and the localStorage key remain unchanged.


## V6.5.3 — Original-deadline-based backlog penalties
- Newly detected automatic backlog items use their original unit/test deadline as the penalty date anchor.
- Daily XP deductions begin the calendar day after the original deadline, not the day the tracker first notices the missed deadline.
- If the tracker is closed, the next visit catches up daily deductions from the original deadline through the current date.
- Existing backlog items created by earlier versions are not retroactively recalculated; their recorded penalty dates and history are preserved.
- Existing localStorage key remains `jeeAscensionV5`.


## V6.5.4 timer persistence fix
- The running timer state is checkpointed to local storage every second and when the page is hidden or unloaded.
- If the app is reopened/reloaded while a timer is active, its elapsed time continues to be calculated from the saved start timestamp and the display-refresh interval is restored.
- Pausing saves one session and clears the active timer; resetting clears it without recording a session.
- Existing tracker data key and screens are preserved.

Note: this is a client-side timer. Browser/OS force-termination and storage restrictions can still affect any web app; keep using the tracker’s Export JSON backup for important data.


## V6.6 — Global Phase Plan and complete unit coverage
- Added a dedicated Phase Plan tab with Phase 1 (Class 11) and Phase 2 (Class 12) across Maths, Physics, and Chemistry.
- Phase 2 chapter checkboxes remain locked until every Phase 1 chapter is checked across all subjects.
- Phase Plan, Deadline Radar, and Progress Board share the same chapter completion state; progress is not duplicated.
- Updated unit deadlines and added Physics units that were missing: Properties of Matter, Electrostatics & Current Electricity, Magnetism, EMI & AC, Optics, Modern Physics, EM Waves & Semiconductors, and Experimental Physics Parts A/B.
- Expanded chapter lists for Mechanics, Properties of Matter, Thermal Physics, Waves & Oscillations, all six Chemistry units, and the existing Maths units.
- Existing localStorage key remains `jeeAscensionV5`; stored XP, tasks, timer sessions, tests, chapter completion, and backlog are retained. Existing chapter statuses are preserved; missing chapters are appended unchecked.
- Timer persistence fix from V6.5.4 is retained.
- Phase dates are planning targets and the chapter lists remain editable to match the user's Allen/JEE Advanced syllabus.

## Verification notes
- ZIP integrity and JavaScript syntax checks passed.
- Startup render and global Phase 1/Phase 2 gate were exercised in a simulated DOM test.
- A saved XP total, task, and a user-edited deadline survived a reload/migration test.
- Coordination Compounds is listed once under Inorganic II, not duplicated under Inorganic I.
- This is not a substitute for a final on-device iPad/browser test; make an Export JSON backup before replacing your existing files.
