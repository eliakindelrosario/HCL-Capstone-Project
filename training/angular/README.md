# General Knowledge

Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

-   Requires TypeScript knowledge

## Setup

-   Require Node.js

`npm install -g @angular/cli`

## Commands

| Command                                  | Description |
| ---------------------------------------- | ----------- |
| `ng new <project-name>`                  |             |
| `ng serve --open --port 5200`            |             |
| `ng generate component path/comp_name`   |             |
| `ng generate service services/serv_name` |             |
| `ng build --prod`                        |             |
| `ng generate class model/class_name`     |             |

## Notes

-   `{{ p.class_property }}` - Access class property value in html template
-   `{{ p.class_property | currency: "USD" }}` - Format numeric class property to currency
-   `*ngIf` - Conditional directive
-   `<ng-template #conditional_directive_else_block_name>Value</ng-template>` - Else value for Conditional directive
-   `*ngFor` - Looping directive

[NG DIRECTIVES](https://angular.io/api/common#directives)
