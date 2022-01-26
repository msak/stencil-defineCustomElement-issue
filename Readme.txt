Setup:
main_project is stencil application.
lib is stencil component library.

main_project renders only app-home component, which depends on my-component from lib.
We are using defineCustomElements from loader to prefix custom element tags.

To link the lib project with main_project we used yarc. npm link is not sufficient.
Install yalc globaly `npm i -g yalc`
Initialize / update the lib package via yalc by using `npm run link` (call on each change of the build).
Please use `yalc link lib` on main_project once to link to local lib package.

Experiments:

State: good (partially)
Commit hash: fc0ebd3f6a4e756c409c8943917c538c81e4fba6
Titel: render component from lib with original tag as well as prefixed.
Description: my-component includes a slot and will be rendered properly on app-home by original as well as prefixed tag name.
Issues: 
* Problem: Stencil generates a definition file on loader folder with wrong definition
  Error message: TypeScript: ./src/global/app.ts:7:34
           Argument of type '{ transformTagName: (tagName: any) => string; }'
           is not assignable to parameter of type
           'CustomElementsDefineOptions'.Object literal may only specify known
           properties, and 'transformTagName' does not exist in type
           'CustomElementsDefineOptions'.
  Reproduction: just start main project without mitigation
  Mitigation: after build job, we delete the file ./loader/index.d.ts
  Reported: https://github.com/ionic-team/stencil/issues/2847

* Problem: sporadically errors can be thrown 
  Error message: TypeError: Cannot read properties of undefined (reading '$instanceValues$')
  Reproduction: on main_project 'npm run start'; open browser inspector (chrome); reload main_project > 1 of 4 reloads results in the error message
  Mitigation: none

-----

State: bad
Commit hash: 800ed183595ba7c3318a4d743b10e71d9aeb10c2 
Titel: render component from lib (original and and prefixed). my-component renders a child component (my-child)
Description: my-component includes my-child. The build process of the lib will create a file called ./dist/my-child_2.entry.js. 
              The build process of main_project on the other hand creates a file ./www/build/my-child.entry.js. Unfortunatelly stencil tries to 
              load my-child_2.entry.js as well as my-child.entry.js.
Issues:
* Problem: main_project tries to load not existing entry file.
  Error message: TypeError: Failed to fetch dynamically imported module: http://localhost:3333/build/my-child_2.entry.js undefined
  Reproduction: allways on start of main_project
  Mitigation: none


-----

State: good
Titel: Mitigation via data-opt
Prepare Lib:
* use custom JSX Factory function h() instead of method of stencil/core
* prefix name of all lib components with '__prefix__'; e.g. '__prefix__-component'
* set data-opt property on corresponding script element on global script, see ./lib/src/global/lib.ts
* set stencil.config property extras.tagNameTransform = true

Prepare Main Project:
* activate data-opt via extras.scriptDataOpts: true inside stencil.config
* activate tag name transformation via extras.tagNameTransform: true inside stencil.config
* define a proper prefix for all lib components (__prefix__ will be replaced by) env.prefix: 'xxxx' inside stencil.config
* mirror the namespace of the main project by setting env.namespace: 'main' inside stencil.config
* set attribute on main project script data-stencil-namespace and mirror the namespace as value; e.g. data-stencil-namespace="main" 
* (optional) extend JSX.IntrinsicElements interface with your transformed component tags and import definition file on index.ts; see ./main_project/src/lib-components.d.ts