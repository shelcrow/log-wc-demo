This is an example of a Vue Web Component.
No installation is required, just open base.html.

To run the source, follow the instructions in vue-regular to install Node, npm, Vue, Vue-CLI.
And uncomment everything in main.js

Building web component:
To build web component, comment out in main.js: "import App from './App.vue'", "import router from './router'", and "router" in "new Vue({})"

Run command:
- vue build --target wc --name suns-log ./src/components/Log.vue