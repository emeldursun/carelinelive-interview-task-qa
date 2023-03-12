import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {  baseURL:'http://localhost:4200/login',
          validEmail:'test@carelinelive.com',
          validPassword:'password',
          invalidEmail:'test@com',
          resetPasswordURL:'http://localhost:4200/forgotten-password'},
});
