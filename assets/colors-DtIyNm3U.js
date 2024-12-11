import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as a}from"./index-BrnU7xv7.js";import{an as l}from"./index-BN-z0CZ4.js";/* empty css               */import"./index-DJO9vBfz.js";import"./iframe-C1HkC7ra.js";import"../sb-preview/runtime.js";import"./index-CZLSbxvl.js";import"./index-DJdX7xnk.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";function c(r,s=0){return`var(--color-${r}-${s})`}function o(r,s,n){const t=`var(--${r}-${s}`;return n?`${t}-${n})`:`${t})`}const d=["neutral","blue","green","yellow","orange","red","purple","pink","coral","mauve","gray","slate","sage","olive","sand","tomato","crimson","plum","violet","indigo","sky","mint","cyan","teal","grass","lime","amber","brown","bronze","gold"],h=[0,1,2,3,4,5,6,7,8,9,10,11,12,13],u=["default","disabled","muted","primary","secondary","accent","success","warning","error","info"],p=["text","backgroundColor","borderColor"];function i(r){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Foundations/Colors"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx(s.h1,{id:"colors",children:"Colors"}),e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Watercolor UI"})," colors are categorized into three groups:"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Base color"})," tokens are the lowest level tokens and map directly to a raw value. They are only to be used as a reference for semantic and component tokens. Base color tokens should never be used directly in code."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Semantic color"})," tokens represent UI patterns such as text, borders, shadows, and backgrounds. Semantic color tokens reference base color tokens."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Component color"})," tokens are used for values that are more specific or unique than semantic color tokens. These tokens are limited to component scope. Component color tokens may reference both base and functional tokens."]}),`
`]}),`
`]}),e.jsx(s.h2,{id:"base-colors",children:"Base Colors"}),e.jsx(s.p,{children:"Base colors principles:"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"The light and dark scale directions are inverted. By inverting the scales, light and dark themes are able to share many of the same functional color tokens without custom overrides."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"The first six steps of scales (0-6) are typically used for background colors."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"For background control components with state, the scale accommodates rest (1), hover (2), and active (3)."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Steps 7 and 8 are typically used for borders and dividers in the themes. Step 8 is considered the minimum contrast value for interactive control borders against ",e.jsx(s.strong,{children:"muted"}),"."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Steps 9 and 10 are typically used for text and icons. Step 9 is considered the minimum contrast value for text against steps 0 through 4, while 10 meets the minimum against 5 and 6."}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Contrast levels can be adjusted by moving up or down the scale. For example, the light high contrast theme utilizes steps 2 through 7 for backgrounds, 10 for borders, and 11 to 13 for text. For high contrast themes, the goal is to hit a minimum of 7:1 for most text and interactive elements. If a softer background color must be used, make use of borders around elements to increase contrast."}),`
`]}),`
`]}),d.map(n=>e.jsxs(s.div,{children:[e.jsx(s.div,{style:{display:"inline-block",width:80},children:e.jsx(s.p,{children:n})}),h.map(t=>e.jsx(s.div,{style:{backgroundColor:c(n,t),width:60,height:40,display:"inline-block"}},`light-${n}-${t}`))]},`base-${n}`)),e.jsx(s.h2,{id:"semantic-colors",children:"Semantic Colors"}),e.jsx(s.p,{children:"Semantic colors are typically used to communicate status, action, or emphasis. Each semantic color is tied to a role with a specific meaning. The tokens are named using a consistent convention to make it easier to understand what they do and how they should be used at a glance."}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`  --prefix-namespace-pattern-property-variant-scale

  /* Examples of Base colors */
  --color-green-5
  --color-gold-6

  /* Examples of Semantic colors */
  --borderColor-muted
  --borderWidth-thin
  --boxShadow-inset-thick

  /* Examples of Component colors */
  --button-primary-bgColor-hover
  --text-codeInline-fontSize
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Prefix"})," provides top-level encapsulation of a particular flavor. It can be used for protected base tokens like Brand color scales, or value overrides in order to avoid collisions."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"brand"}),": used for marketing/brand specific tokens."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Namespace"})," creates a scope used to identify how a token may be used. For example, base tokens are the lowest level and are generally used as a reference for functional tokens (the next step above)."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"base"}),": represents global, constant values. These are the lowest level tokens and map directly to a raw value."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Pattern"})," represents a group of design decisions, or a specific component. Whenever possible, aim to use a name that is generic enough to influence related components. For example, the pattern control can be used for multiple types of controls like buttons, inputs, or interactive action list items. For pattern and component names that are multi-word, use camelCase to separate each word."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Variant"})," can be used to either modify the pattern or property. Only one variant is allowed per token. It typically represents a stylistic variant of a token such as color or size."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Property"})," is used to represent an item's style. It usually matches a CSS property, but it can also store other conceptual definitions such as size. Use camelCase for multi-word properties."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scale"})," represents ordinals to describe things like state, density, thickness, range, and speed. Scale names strive to follow our size naming convention standards."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Individual name blocks for each token should be separated with a single character that is relevant to each framework. For example, use the ",e.jsx(s.code,{children:"-"})," dash character for CSS variables and ",e.jsx(s.code,{children:"."})," dot character for JavaScript."]}),`
`]}),`
`]}),e.jsx(s.h3,{id:"color-modifiers",children:"Color modifiers"}),e.jsx(s.p,{children:"We use the following values to modify the color:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Semantic"}),e.jsx("th",{children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"muted"}),e.jsx("td",{children:"Muted can be used for text and other auxiliary elements on the screen, such as lines, shadows and backgrounds."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"primary"}),e.jsxs("td",{children:["Primary is the ",e.jsx(s.strong,{children:"brand"})," and main color which is used across all interactive elements such as buttons, links, inputs, etc. It can define the overall feel and can elicit emotion."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"secondary"}),e.jsxs("td",{children:["These act as ",e.jsx(s.strong,{children:"supporting colors"})," to your primary color palette. These are useful for grabbing attention or supporting your primary color. They're also useful for components such as labels and badges."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"accent"}),e.jsx("td",{children:"It is a high priority color, however, it appears punctually on the screen to create a highlight. It can also be used for interactive elements. Links, selected, active, and focus states, and neutral information."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:"Success colors communicate a positive action, a positive trend, or a successful confirmation. It is used to convey the perception that an action occurred as expected. It can be used for primary success buttons, positive messaging and successful states. "})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"warning"}),e.jsxs("td",{children:["Warning colors can communicate that an action is potentially destructive or ",e.jsx(s.strong,{children:"on-hold"}),". These colors are commonly used in confirmations to grab the users' attention. It is also used to notify the user of something that has happened or to draw their attention. It can be used for warning states, system status, banners, active processes and in progress states."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error"}),e.jsxs("td",{children:["Error colors are used across error states and in ",e.jsx(s.strong,{children:"critical or destructive"})," actions. They communicate a destructive/negative action. Buttons and error messages are some examples."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"info"}),e.jsx("td",{children:"Informative is used to inform the user about a topic, such as a tip or new feature. It is used for static elements."})]})]})]})]}),`
`,p.map(n=>e.jsxs(s.div,{children:[e.jsx(s.div,{style:{display:"inline-block",width:150},children:e.jsx(s.p,{children:n})}),u.map(t=>e.jsx(s.div,{style:{backgroundColor:o(n,t),width:80,height:40,display:"inline-block"},children:e.jsx(s.p,{children:t})},`variant-${n}-${t}`))]},`pattern-${n}`)),`
`,e.jsxs("div",{style:{paddingBottom:14},children:[e.jsx("div",{style:{display:"inline-block",width:150}}),e.jsx("div",{style:{backgroundColor:o("text","link"),width:70,height:40,display:"inline-block"},children:e.jsx("p",{children:"text-link"})}),e.jsx("div",{style:{backgroundColor:o("focus","outlineColor"),width:140,height:40,display:"inline-block"},children:e.jsx("p",{children:"focus-outlineColor"})}),e.jsx("div",{style:{backgroundColor:o("overlay","backgroundColor"),width:180,height:40,display:"inline-block"},children:e.jsx("p",{children:"overlay-backgroundColor"})}),e.jsx("div",{style:{backgroundColor:o("overlay","borderColor"),width:140,height:40,display:"inline-block"},children:e.jsx("p",{children:"overlay-borderColor"})}),e.jsx("div",{style:{backgroundColor:o("overlay","backdrop","backgroundColor"),width:270,height:40,display:"inline-block"},children:e.jsx("p",{children:"overlay-backdrop-backgroundColor"})})]}),`
`,e.jsx(s.h2,{id:"color-theme",children:"Color theme"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Watercolor UI"})," has 3 themes:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Light theme"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Dark theme"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Watercolor theme"}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:["The theme is defined by using the data-light-theme and data-dark-theme attributes with the class ",e.jsx(s.code,{children:"light"}),", ",e.jsx(s.code,{children:"dark"})," or ",e.jsx(s.code,{children:"watercolor"}),". The value of the attribute should be the name of the theme file."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<body data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="light">
`})}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(s.h3,{id:"assure-adequate-color-contrast",children:"Assure adequate color contrast"}),`
`,e.jsxs(s.p,{children:["Color contrast between text and its background must meet required ",e.jsx(s.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG standards"}),"."]}),`
`,e.jsx(s.p,{children:"The contrast requirements are:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"4.5:1 for normal text"}),`
`,e.jsx(s.li,{children:"3:1 for large text (>24px)"}),`
`,e.jsx(s.li,{children:"3:1 for UI elements and graphics"}),`
`,e.jsx(s.li,{children:"No contrast requirement for decorative and disabled elements"}),`
`]}),`
`,e.jsxs(s.p,{children:["Use an online ",e.jsx(s.a,{href:"https://webaim.org/resources/contrastchecker/",rel:"nofollow",children:"contrast checker"}),"."]}),`
`,e.jsx(s.h3,{id:"dont-rely-on-color-alone",children:"Don't rely on color alone"}),`
`,e.jsx(s.h4,{id:"show-state-with-more-than-color",children:"Show state with more than color"}),`
`,e.jsx(s.p,{children:'Color vision deficiency is different for different people. To make sure everyone can understand and use your UI you should show state with more than a change in color. Unless color is only used as a visual "flourish", the information that the color conveys must be present either in the text (e.g. in the case of buttons, the actual wording of the button label), or through some additional visual cue (such as an icon).'}),`
`,e.jsx(s.h4,{id:"connect-labels-to-graphs-with-lines-or-patterns",children:"Connect labels to graphs with lines or patterns"}),`
`,e.jsx(s.p,{children:"For charts and graphs you can position the labels on top or close to each section. You can also use patterns to distinguish different parts."})]})}function I(r={}){const{wrapper:s}={...a(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{d as colorNames,I as default,p as patterns,h as scales,u as variants};
