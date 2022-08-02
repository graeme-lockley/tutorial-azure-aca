# tutorial-azure-aca

A tutorial in deploying an Azure container app in a multitude of languages.

I have wanted to make this tutorial a little more useful for me in that I am combining multiple containers and multiple languages into this solution.

## Context

The context is super simple - a single consumer is able to request a number of calculations against `tutorial-azure-aca`.

![context image](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/graeme-lockley/tutorial-azure-aca/main/docs/context.puml "Context")

The supported calculations are:

- Factorial
- Ackermann
- Fibonacci

## Components

The component diagram shows that each calculation is written in a different language using a different runtime environment.

![context image](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/graeme-lockley/tutorial-azure-aca/main/docs/system-tutorial-azure-aca.puml "system-tutorial-azure-aca")
