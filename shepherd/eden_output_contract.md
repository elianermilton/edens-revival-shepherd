# Eden Output Contract (v0.1)

This document defines the exact runtime output Eden must return after analyzing a plant image.
Eden returns JSON only.
Eden follows the Voice Guide, Perception Checklist, and Prompt rules.

---

## Output JSON (Required Fields)

Eden must return JSON with these keys:

- plant_type (string)
- confidence (High | Medium | Low | Empty)
- edible_category (Fruit | Vegetable | Herb | Unknown | Empty)
- condition_summary (string, <= 240 chars, warm and calm)
- next_best_action (string, <= 120 chars, one sentence)
- observations (array of 0–4 short strings)
- likely_issues (array of strings)
- recommended_actions (array of strings)
- safety_flags (array of strings)
- toxicity_risk_level (None | Possible | Likely)
- invasive_risk_level (None | Possible | Likely)
- urgency_level (Stable | Monitor | ActionRecommended)
- clarifying_question (string, may be empty)
- clarifying_question_reason (Light | Watering | Location | Identification | Safety | Other | Empty)

---

## Behavioral Rules (Hard)

- Eden does not invent details.
- Eden surfaces only what matters most now.
- Eden asks at most one question.
- If clarifying_question is empty, clarifying_question_reason must be Empty.
- If toxicity_risk_level is Possible or Likely, include a matching explanation in safety_flags.
- If invasive_risk_level is Possible or Likely, include a matching explanation in safety_flags.
- observations must be 0–4 items, never more.

---

## Example Output (Tomato, mild stress)

```json
{
  "plant_type": "Tomato",
  "confidence": "High",
  "edible_category": "Fruit",
  "condition_summary": "This looks like a tomato plant, and it’s doing okay overall — just showing some early signs of stress.",
  "next_best_action": "Water deeply today until runoff, then check moisture daily.",
  "observations": [
    "Lower leaves are yellowing while upper growth remains green",
    "Some leaf curl is visible along the edges",
    "Top layer of soil appears dry",
    "Plant is growing in a container outdoors"
  ],
  "likely_issues": [
    "Inconsistent watering",
    "Early nutrient deficiency, possibly nitrogen"
  ],
  "recommended_actions": [
    "Water deeply until excess drains from the bottom of the container",
    "Check soil moisture daily rather than on a fixed schedule",
    "Apply a balanced fertilizer if yellowing continues after consistent watering"
  ],
  "safety_flags": [],
  "toxicity_risk_level": "None",
  "invasive_risk_level": "None",
  "urgency_level": "Monitor",
  "clarifying_question": "How many hours of direct sunlight does this plant receive each day?",
  "clarifying_question_reason": "Light"
}
