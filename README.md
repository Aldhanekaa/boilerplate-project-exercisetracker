<h1 align="center">Exercise Tracker REST API
</h1>

<div align="center">
   Solution for a Project from  <a href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp.org</a>.
</div>

<div align="center">
  <h3>
    <a href="https://boilerplate-project-exercisetracker.aldhaneka.repl.co">
      Demo
    </a>
    <span> | </span>
    <a href="#">
      Solution
    </a>
    <span> | </span>
    <a https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](preview.png)

- Where can I see your demo?
  You can see the [demo](https://boilerplate-project-exercisetracker.aldhaneka.repl.co) here!
- What was your experience?
  This is my amazing experience, because my problem solving skills improved and my ExpressJs, mongoose, and Nodejs improved a lot!
- What have you learned/improved? 
  My problem solving skills was improved
<!-- - Your wisdom? :)
     -->

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [ExpressJs](https://expressjs.com/)
- [Sass | Scss](https://sass-lang.com/)


## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- [x] Add User
- [x] Add issue and push itu to log

This application was created as a submission to a [FreeCodeCamp](https://www.freecodecamp.org) project. The [challenge](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker) was to build an application to complete the given user stories.

#### A microservice project, part of Free Code Camp's curriculum

### User Stories

[![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-exercisetracker)](https://repl.it/@aldhaneka/boilerplate-project-exercisetracker)

1. I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.
2. I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
3. I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will be the user object with also with the exercise fields added.
4. I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).
5. I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)


## How To Use

<!-- For example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Aldhanekaa/boilerplate-project-exercisetracker.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

or

![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-exercisetracker)

## Contact

- Website [Aldhaneka's Website](https://aldhan.netlify.app/)
- GitHub [@Aldhanekaa](https://github.com/Aldhanekaa)

Thank You **FreeCodeCamp.org**!
©2020 by Aldhaneka, all rights reserved.

Aldhaneka, Aldhaneka's Website, Aldhaneka Aufa Izzat, Aldhaneka's Project.
