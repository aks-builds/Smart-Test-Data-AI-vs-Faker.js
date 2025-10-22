# Smart Test Data: AI vs Faker Data Generation

This repository demonstrates two distinct approaches to generating user data for end-to-end testing with [Playwright](https://playwright.dev/):

- **AI-powered data generation** using OpenAI APIs
- **Randomized data generation** using the popular [Faker.js](https://fakerjs.dev/) library

The project is organized into two directories:

## Directory Structure

```
playwright-with-AI/
playwright-with-faker/
```

---

## playwright-with-AI

This directory contains Playwright test scripts that leverage OpenAI's API to generate realistic, context-aware user profiles and test data.  
**Features:**
- Uses OpenAI (e.g., GPT-4) to create diverse, human-like test inputs
- Example use case: simulating banking user registration with natural language prompts
- Requires an OpenAI API key (see setup instructions)

## playwright-with-faker

This directory contains Playwright test scripts that use the Faker.js library to generate random, but valid, test data.
**Features:**
- Fully local and free to use
- Fast generation of names, emails, addresses, phone numbers, etc.
- No external API calls or credentials required

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Adii-Nasher/Smart-Test-Data-AI-vs-Faker.js.git
cd Smart-Test-Data-AI-vs-Faker.js
```

### 2. Install Dependencies

Each directory has its own dependencies.  
Navigate into either directory and install:

```bash
cd playwright-with-AI
npm install
# or
cd ../playwright-with-faker
npm install
```

### 3. Configure Secrets (for AI)

For `playwright-with-AI`, create a `.env` file in the root of the directory:

```
OPENAI_API_KEY=your-openai-api-key
```

---

## Running Tests

### Using Faker

```bash
cd playwright-with-faker
npx playwright test
```

### Using OpenAI

```bash
cd playwright-with-AI
npx playwright test
```

---

## Notes

- The **AI approach** may incur costs; ensure you have OpenAI credits or billing enabled.
- The **Faker approach** works fully offline and is suitable for rapid, cost-free test runs.
- Both approaches provide realistic test coverage for user registration and similar flows.