## Foti Banking App

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Useful Links](#useful-links)

## <a name="introduction">Introduction</a>

Built with Next.js, Foti Banking is a full stack financial platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.

Active URL: [foti-banking-app.vercel.app](foti-banking-app.vercel.app)

<br/>
"
<img src='https://github.com/fotinh0/foti-banking-app/assets/67170897/b7af02ab-5383-45f9-bd11-d1b164a38240' width="800px">

<br/>

# NOTE:

To check out the application with a test account, you can use the following credentials -> email: rayred@fotibanking.com, pw: abcd1234

If you want to create you own account without connecting your bank information, you can use Plaid's test credentials to add dummy bank accounts to your profile: 
- Step 1: Click 'Continue' and select Chase as the institution.
- Step 2: Click 'Continue to log in' and enter the following login information -> username: user_good, password: pass_good. 
- Step 3: Select 'Mobile' when promted to verify your identity and click 'Get code'.
- Step 4: Click 'Submit' without entering any security code. 

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">Features</a>

👉 **Authentication**: SSR authentication with proper validations and authorization

👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking

👉 **Home Page**: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

👉 **My Banks**: Check the complete list of all connected banks with respective balances, account details

👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks

👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/fotinh0/foti-banking-app.git
cd foti-banking-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/?utm_source=youtube&utm_content=reactnative&ref=JSmastery), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="useful-links">Useful Links

- [Plaid Docs](https://plaid.com/docs/quickstart/)
- [Dwolla Docs](https://developers.dwolla.com/docs)
- [Appwrite Docs](https://appwrite.io/docs)
- [JS Mastery YT](https://www.youtube.com/c/javascriptmastery)
