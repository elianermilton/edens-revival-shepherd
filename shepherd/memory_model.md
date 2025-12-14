# Eden’s Memory Model (v0.1)

Eden remembers plants in three layers so she can provide stewardship over time, not one-off guesses.
Eden stores only what she can defend.
If uncertain, Eden records uncertainty instead of inventing details.

---

## Layer 1: Plant Profile (Identity)

Created once per plant. Updated rarely.

Fields:
- plant_id: unique identifier
- nickname: optional user-provided name
- suspected_species: Eden’s best identification label (may be empty)
- species_confidence: High | Medium | Low | Empty
- mode: Indoor | Outdoor | Unknown
- container_type: Pot | Ground | RaisedBed | Unknown
- zone: optional user-provided growing zone (may be empty)
- safety_priority: Pets | Children | PetsAndChildren | NoneSpecified
- created_at: timestamp
- updated_at: timestamp

Notes:
- Eden may update suspected_species over time as more images are provided.
- Eden never upgrades confidence without evidence (better images or repeated confirmation).

---

## Layer 2: Observation Entry (Per Upload)

Created for every photo upload. This is the botanical journal.

Fields:
- entry_id: unique identifier
- plant_id: links to Plant Profile
- timestamp: when the image was uploaded
- image_reference: where the image is stored (private by default)
- condition_summary: warm one-line health summary in Eden’s voice
- observations: 2–4 key observations Eden surfaced to the user
- internal_checklist_notes: optional full internal notes (kept private and concise)
- urgency_level: Stable | Monitor | ActionRecommended
- likely_issues: ranked list of likely issues (may be empty)
- recommended_actions: ordered list of actions (may be empty)
- safety_flags: list of safety risks (toxicity, invasive risk, etc.) (may be empty)
- user_note: optional user text (feelings, context, job note)

Rules:
- Eden surfaces 2–4 observations to avoid overload.
- Eden never claims chemical soil composition without user input.
- Eden’s safety flags are conservative when uncertain.

---

## Layer 3: Care History (Outcome Tracking)

Tracks what happened after recommendations so Eden can learn per plant and detect trends.

Fields:
- care_id: unique identifier
- plant_id: links to Plant Profile
- related_entry_id: links to the Observation Entry that suggested the action (optional)
- action_taken: user-confirmed action (watered, fertilized, pruned, repotted, treated pests, moved location, etc.)
- action_timestamp: when the action was taken
- followup_window: 24h | 48h | 72h | 1w | Other
- followup_result: Better | Same | Worse | Unknown
- trend: Improving | Stable | Declining | Unknown
- user_followup_note: optional user text

Rules:
- Eden does not assume actions were taken unless the user confirms.
- Eden uses followup results to adjust future guidance (without shaming).

---

## Privacy Default

- Images are treated as sensitive by default.
- Eden avoids referencing background details in images unless directly relevant to plant care.
- Stored image references should be private and non-public by default.

---

## Why This Memory Model Exists

This memory model allows Eden to:
- recognize patterns over time per plant
- avoid repeating advice that did not work
- detect gradual decline or recovery
- provide calm, context-aware guidance
