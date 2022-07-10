```shell

 WARN  Issues with peer dependencies found
.
└─┬ @modern-js/runtime
  ├─┬ @modern-js/plugin-router
  │ └─┬ react-router-dom
  │   └─┬ react-router
  │     └─┬ mini-create-react-context
  │       └── ✕ unmet peer react@"^0.14.0 || ^15.0.0 || ^16.0.0 || ^17.0.0": found 18.2.0
  ├─┬ @modern-js/plugin-ssr
  │ ├── ✕ unmet peer react@^17: found 18.2.0
  │ └─┬ react-dom
  │   └── ✕ unmet peer react@17.0.2: found 18.2.0
  └─┬ @modern-js/plugin-state
    ├── ✕ unmet peer react@^17.0.2: found 18.2.0
    └─┬ @modern-js-reduck/react
      └── ✕ unmet peer react@^17.0.2: found 18.2.0
```
