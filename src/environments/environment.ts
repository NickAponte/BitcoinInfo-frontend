// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  bitInfoDBHost : 'https://shrouded-atoll-63514.herokuapp.com',
  newsApiKey : '874a01369695467f872769bf97b6cdb8'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// curl https://newsapi.org/v2/everything -G \  -d q=Bitcoin \ -d from=2021-04-22 \ -d sortBy=popularity \  -d apiKey=874a01369695467f872769bf97b6cdb8