# Thoughts

The code contained within this project turned out to be an interesting exercise due to the specific characteristics of the solution.  The solution itself is a little pathological in that it is an Azure container application composed of 4 components with each component written in a different language which each language supported by a different runtime environment.  The reason for this is I wanted to:

- Build an illustrative container application to have something I could play with, and
- Illustrate how a multi-language solutions can work in harmony together

The utility of the project was not important at all to me.

Having got it all working the following items emerged as areas for further consideration:

- Layout of the code base, in-spite of my best efforts, is really cryptic
- Testing is really hard.  Too often I found myself deploying stuff so that, at that point, I could know whether or not everything would work.  Further to that I would use ad-hoc commands to validate and verify.
- Developer experience is average and needs to be improved.  Moving between machines resulted in a variable and an inconsistent experience.
- There are no real "standard" ways of doing shift-left activities.  Not limited to this code base however I remain surprised how trying to wire in linting and dependency analysis proved to be really difficult.

I think some of the challenges that I encountered were probably exacerbated by each component being so small.  Wrapping it all in boilerplate would have looked a little silly.  Nonetheless I would like to take each of these 4 items and attack them collectively in a singular and coherent way.

## Considerations

In reshaping this solution I think there are a number of considerations.

- The solution is composed of 4 applications with each application running in a container with its own unique characteristics.
- A developer should be able to test each application, in its entirety, in isolation, on their workstation.
- A developer should be able to test the contracts between applications on their workstation.
- Each developer should have an environment in Azure which they can spin up and deploy into to perform end-to-end testing.  This needs to be controlled from there workstation.
- Every check-in results in a non-production environment being setup and used for end-to-end testing.  These environments must be destroyed once the testing has been completed.
- Once all tests have passed then the production environment is updated.

## Layout of Code Base

Something needs to sit at the top-level of a code base.  In a single container application the container would be at the top-level however, in a multi-container solution, the top-level is the system.  Therefore, the top-level here would start off with

```text
...
containers/
    ackermann-calc
    api
    factorial-calc
    fibonacci-calc
...
```

Added to this would be the odds-and-sods that are present in every solution - a collection of dotfiles, readme and license.  Updating we then get

```text
...
.devcontainer/
.github/
.vscode/
...
containers/
    ackermann-calc
    api
    factorial-calc
    fibonacci-calc
...
.gitignore
LICENSE
README.md
...
```

Given the above there are still a handful of capabilities that still need to be added:

- There exists source code that applies to the entire system.  This code will have one of two purposes: a bespoke task used by a task in building or testing the system, or a shared library that is used in more than one container.
- Tasks or scripts that a developer can use or are called by the pipeline
- The system's infrastructure setup in its various guises.
- Documentation that is pertinent to the entire system.

```text
.devcontainer/
.github/
.vscode/
containers/
    ackermann-calc
    api
    factorial-calc
    fibonacci-calc
docs/
    ...
src/
    ...
tasks/
    ...
.gitignore
LICENSE
README.md
```

The following conventions are helpful:

- The environment is controlled through a collection of environment variables.  Values that apply to all are configured in `.env` and, where specific variables needs to be setup, this script will abort if those variables are not present.
- Each system has a unique 3 letter code and each container has a 3 letter code.  These codes are case insensitive and are usually represented in lowercase.  The purpose of these codes is to generate resource names.
- Each developer has a unique   3 letter code.  This code is case insensitive and usually represented in lowercase.
- `src/infra` is where the system infrastructure definition is placed.  This code is sequenced scripts and triggered only through tasks.
- `tasks/dev-...` are the tasks that are pertinent to a developer on their workstation
- `tasks/dev-all` is a task that builds the entire system from scratch following a clean checkout.  This includes downloading all dependencies, performing all lint and shift-left tasks, performing all automated unit and functional tests, and setting up a running instance of the system on their workstation.  This task will call similar tasks in each of the container's tasks directory to build each container.
- `tasks/dev-clean-all` removes all build assets
- `tasks/dev-purge-all` removes all build assets and downloaded dependencies
- `tasks/dev-environment` allows a developer to run the scripts in `src/infra` against their dedicated environment
- `tasks/dev-environment-delete` deletes a developer's dedicated environment
- `tasks/dev-show-all` displays all of the settings related to a developer's dedicated environment

Final comments:

- All tasks will accept commands and, specifically, help.
- Tasks at the top-level will not take over the responsibility of tasks within a container.
- The structure of a container's code base is the same at the top-level system structure.
