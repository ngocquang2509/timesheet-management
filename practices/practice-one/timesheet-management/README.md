# React Practice One - Timesheet management

## Overview

- This document provides information about React Practice.
- Buld a Timesheet management application using React
- [Documentation detail](https://docs.google.com/document/d/1JiVp0QuiaAOfwwxdXu_12-T8X8nTMmBqSaDs1I5R3fM/edit#heading=h.ar0k1bmftkqn)

## Main app features

- User can view the list of timesheet
- User can create a new timesheet
  - Hours (number that describes the time for the task and must be in the range from 0 to 16)
  - Record (select menu)
  - Comment (text area that has length larger than 50 but smaller than 500. And does not have some special characters: "!@#$%^&\*()+\_")
- User can delete timesheet item
- User can sort timesheet by hours, by createdAt (default)

## Targets

- Get familiar and understand fundamental of React
- Build a simple application using React
- Apply React render list
- Apply Lifting State Up and Thinking in React practice

## Timeline

- Estimate time: 5 days of working (06/12/2022 - 12/12/2022)
- Actual time: TBD

## Technical

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [React](https://reactjs.org/): A powerful JavaScript library for building user interfaces.
- [Tailwindcss](https://tailwindcss.com/): Tailwind CSS makes it quicker to write and maintain the code of your application
- [Vite](https://vitejs.dev/): Next Generation Frontend Tooling. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Design of application

- Check in the [documentation](https://docs.google.com/document/d/1JiVp0QuiaAOfwwxdXu_12-T8X8nTMmBqSaDs1I5R3fM/edit#heading=h.8712ie1wzqll)

## Getting Started

- Step 1: Clone repository with SSH

```
git clone git@gitlab.asoft-python.com:ngoc.nguyenquang/react-training.git
```

- Step 2: Go to folder react-training

```
cd react-training
```

- Step 3: Checkout branch

```
git checkout practice-01
```

- Step 4: Go to folder practice-one

```
cd practices/pracitice-one
```

- Step 5: Install packages

```
pnpm install
```

- Step 6: Run project

```
pnpm run dev
```
