// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: {
    wikiURL: 'https://en.wikipedia.org/w/api.php',
    quotes: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=JSONP_CALLBACK'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/**
 * How to run different environments:
 * For production environment
 * ng build --prod
 *
 * For dev environment
 * ng build
 *
 * For qa environment (it has to match angular.json config)
 * ng build --configuration=qa
 *
 */
