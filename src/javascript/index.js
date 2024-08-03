import * as Sentry from "../../node_modules/@sentry/browser";

Sentry.init({
  dsn: "https://c94b8d99f611fd26d1131dc8279d7a4e@o4507709593878528.ingest.de.sentry.io/4507709599973456",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  // Set profilesSampleRate to 1.0 to profile every transaction.
  // Since profilesSampleRate is relative to tracesSampleRate,
  // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
  // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
  // results in 25% of transactions being profiled (0.5*0.5=0.25)
  profilesSampleRate: 1.0,
});

let wrong = "wrong" + 42;
console.log(wrong);
// eslint проверит и исправит ошибку в коде
// npx eslint --fix ./src/javascript/index.js

// senty отобразит на сайте с проектом ошибку
//myUndefinedFunction();

// для форматирования кода
// npx prettier --write ./src/javascript/index.js

//Для анализа производительности вашего проекта
// Запускаем скрипт, написанные в package.json
// npm run analys_performance    