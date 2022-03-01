# Genereal Knowledge

TypeScript is a strongly typed superset programming language built on javascript that gives programmers a better tooling to scale any project.

Special Notes:

-   TypeScript requires translation to javascript using its transpiler (`tsc`)
-   Class _ Accessor _ are only available when targeting ** ECMAScript 5 ** and higher

## Commands

![TypeScript CLI DOC](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
| Commands | Description |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `tsc filename.ts` | transpile to js |
| `node filename` | execute js file |
| `tsc -t es5 script.ts` | invoke transpiler v5 |
| `tsc --build --clean` | Build one or more projects and their dependencies and Delete the outputs of all projects |
| `tsc --init` | auto generate tsconfig.json |
