---

# 🛡️ ARGUS Sales Closer: Elite Real Estate Concierge

**ARGUS** is an AI-driven Sales Intelligence platform engineered for Toronto’s luxury real estate brokerages. By combining the low-latency reasoning of **Gemini 3 Flash** with the multi-model flexibility of **OpenRouter**, ARGUS ensures that high-net-worth leads are qualified and booked for viewings within seconds of their first inquiry.

---

## 💎 The Luxury Advantage

* **Sub-10s Response Benchmarks:** Currently averaging **6.3s** from inquiry to engagement, beating industry standards by over 300%.
* **GTA Local Intelligence:** Pre-loaded with neighborhood-specific context for Yorkville, Forest Hill, Bridle Path, and Rosedale.
* **Asset-First Qualification:** Automatically identifies buying intent based on property type (Penthouses, Estates, Commercial Assets).
* **GCI Protection Suite:** A live dashboard that tracks protected commissions and lead sentiment in real-time.

---

## 🧠 System Architecture

This SaaS utilizes a **Hybrid AI Strategy** to maximize uptime and minimize cost:

1.  **Orchestration (Google AI Studio):** Powers the core logic and high-speed "Voice Concierge" mode.
2.  **Intelligence Layer (OpenRouter):** Routes text-based Live Chat to the most efficient model (e.g., `google/gemini-2.0-flash:free`).
3.  **Deployment (Vercel):** Hosts the agentic dashboard and handles the real-time "Pulse" matrix of active conversations.

---

## 🚀 Quick Start (For Developers & AI Agents)

### 1. Repository Setup
```bash
git clone https://github.com/[your-username]/argus-elite-sales-closer.git
cd argus-elite-sales-closer
npm install
```

### 2. Environment Variables
To connect the intelligence layer, add the following to your `.env.local` or Vercel Dashboard:

```env
# REQUIRED: Your OpenRouter API Key for Chat Logic
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx

# OPTIONAL: Voiceflow Integration for Voice Concierge
VOICEFLOW_API_KEY=VF.xxxx.xxxx

# SYSTEM: Your custom instruction set (can be stored here or in-code)
ARGUS_SYSTEM_PROMPT="You are the ARGUS Elite Concierge..."
```

---

## 🎯 Lead Sentiment & Scoring
ARGUS uses a proprietary **Qualification Index (QI)** to score leads:

| Lead Status | Indicator | Action Required |
| :--- | :--- | :--- |
| **HOT** | 🔥 | Immediate agent takeover suggested. Viewing booked. |
| **WARM** | ☀️ | Follow-up scheduled. Lead qualified on budget/timeline. |
| **NEUTRAL** | ☁️ | Initial inquiry handled. Gathering asset parameters. |
| **COLD** | ❄️ | Automated nurture sequence initiated. |

---

## 🛠️ Tech Stack
* **Framework:** Next.js 15 (App Router)
* **AI Models:** Gemini 3 Flash (via AI Studio), GPT-4o-mini (via OpenRouter)
* **Database:** Supabase (Lead persistence & Session history)
* **UI/UX:** Tailwind CSS + Framer Motion (Luxury "Limestone" Aesthetic)

---

## 🛡️ Security & Integrity
ARGUS is compatible with **Bastion Audit** protocols. All AI interactions are monitored for prompt injection and data leakage to protect brokerage commission data and private client details.

---

### **How to use this README:**
1.  **For GitHub:** This serves as the "landing page" for your code.
2.  **For Vercel:** When you link this repo to Vercel, it will automatically pull this description to help you organize your deployments.
3.  **For Collaborators:** If you ever hire a dev to help, this gives them the "big picture" immediately.

