# 📢 SahiDawa — Official GSSoC 2026 Discussion Board Templates

These templates are designed to be published in the [SahiDawa Discussions Tab](https://github.com/RatLoopz/sahidawa-india/discussions) to organize the community and prevent issue/PR tracking pollution.

---

## Notice 1: Official GSSoC 2026 Guidelines & Assignment Rules 🏁

**Category:** Announcements (or General)
**Title:** 📢 GSSoC 2026 Guidelines & Rules: How to Claim Issues & Contribute Successfully

### Content:

```markdown
# 🩺 SahiDawa — Official GSSoC 2026 Guidelines & Rules

Welcome, GSSoC 2026 contributors! 🚀 SahiDawa is proud to participate in this year's program. To make this event a high-quality, professional, and fair experience for everyone, we enforce a strict set of repository rules.

Please read this notice carefully before commenting on any issues or opening PRs!

---

### 🙋 1. Issue Assignment Rules (Strict Policy)

- **First-Come, First-Served:** Issues are assigned to the first person who requests them **properly** via our official forms.
- **1 Active Issue Limit:** A contributor can be assigned to only **one active issue at a time**. Do not ask to claim a second issue if you already have one open.
- **Format to Claim:** Do NOT comment "Assign me" or "Can I work on this?". Such comments will be ignored to prevent spam. Instead, click on **New Issue** and select the **🙋 Claim an Issue (GSSoC 2026)** form! Fill out your implementation approach and submit.
- **48-Hour Coding Deadline:** Once assigned, you have **48 hours** to submit a draft PR or request an extension. If there is zero activity after 48 hours, the issue will be automatically unassigned and given to the next person.

---

### 🛡️ 2. Pull Request & Code Quality Guard

- **No Blind PRs:** Never open a Pull Request without being assigned to the issue first. Unassigned PRs will be closed immediately.
- **Issue Linking:** Your PR description must include a closing keyword linked to your assigned issue (e.g. `Closes #123`). If you miss this, our automated PR check will fail!
- **Template Compliance:** Follow the PR template. If you submit empty checklists, our automated **PR Quality Check** bot will mark it as failed (Red Cross ❌).
- **Failing Checks:** Maintainers **will not review** any PR that has a failing check (Red Cross ❌). You are responsible for ensuring your build passes.

---

### 💬 3. Spam & Discord Communication

- **No Author Pinging:** Do not tag or ping maintainers in PR comments asking for reviews. We review PRs within 24-48 hours. Pinging may result in issue unassignment.
- **Join Discord:** [Click here to join SahiDawa Discord](https://discord.gg/dvbDuJVwNa) for instant community support, chat, and live Q&A.

Let's maintain high engineering standards and build something beautiful for 1.4 billion Indians! ❤️🩺
```

---

## Notice 2: Monorepo Scaffolding & Quick Start Local Setup Guide 🛠️

**Category:** Q&A (or General)
**Title:** 🛠️ Contributor Quick Start: Monorepo Scaffolding & Local Environment Setup

### Content:

````markdown
# 🛠️ Contributor Quick Start: SahiDawa Local Setup

If you are new to the repository or setting up your development environment for the first time, this quick start guide will help you set up all modular applications successfully.

SahiDawa is configured as a monorepo containing three core applications under `apps/`:

---

### 📂 Directory Scaffolding & Stacks

1. **`apps/web` (Next.js PWA):** The rural-facing web client.
2. **`apps/api` (Express Node.js Server):** The central database router and controller API.
3. **`apps/ml` (FastAPI Python Service):** Handles machine learning scripts, Whisper ASR translation, and OpenCV classifiers.

---

### ⚡ 1. Prerequisites

Ensure you have the following installed on your machine:

- Node.js >= 20.0.0
- Python >= 3.10
- pip & venv (for Python environments)
- Git

---

### 🖥️ 2. Frontend Setup (Next.js)

```bash
# Navigate to web application directory
cd apps/web

# Install package dependencies (use peer-deps if legacy packages conflict)
npm install --legacy-peer-deps

# Create env file and add Supabase local credentials
cp .env.example .env.local

# Run the local server
npm run dev
# Live at http://localhost:3000
```
````

---

### ⚙️ 3. Backend Setup (Express API)

```bash
# Navigate to the API application
cd apps/api

# Install dependencies
npm install

# Run the Express API
npm run dev
# Live at http://localhost:4000
```

---

### 🤖 4. ML Python Service Setup (FastAPI)

```bash
# Navigate to the ML folder
cd apps/ml

# Create Python virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --port 8000
# Live at http://localhost:8000
```

---

### ❓ Troubleshooting `npm install` Failures

If you encounter version mismatches or dependency clashes, always run:
`npm install --legacy-peer-deps` or `npm install --force`.

Do not commit any modified root `package-lock.json` unless requested!

Happy Hacking! 🙌🚀

````

---

## Notice 3: Dedicated Community Q&A & Support Thread 🙋
**Category:** Q&A
**Title:** 🙋 Community Support & Help Thread: Ask Your Setup Queries Here!

### Content:
```markdown
# 🙋 SahiDawa Support & Q&A Board

Hey contributors! Are you facing issues while setting up the project locally? Is something failing during `npm install` or Python dependencies?

**Please ask all your setup questions, general doubts, and architectural queries right here on this thread instead of opening new GitHub Issues!**

### 📋 How to Ask for Help:
To help maintainers and other developers debug your issue quickly, please provide:
1. **Application:** Which folder is failing (`apps/web`, `apps/api`, or `apps/ml`)?
2. **Error Message:** Copy-paste the exact console error logs.
3. **Environment:** Your OS (Windows, Linux, macOS) and Node/Python versions.
4. **Visuals:** Add screenshots of the terminal error.

### 💡 Pro-Tip:
* Check our [**Discussions Q&A**](https://github.com/RatLoopz/sahidawa-india/discussions) to see if another developer has already resolved the exact same error before posting!
* You can also join our `#help` channel on our official [Discord Server](https://discord.gg/dvbDuJVwNa) for real-time collaboration.

Let's support each other and build a beautiful community! 🩺💙
````
