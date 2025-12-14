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

Created for every

