// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'fundacion-crecer-login',
    appId: '1:124068125313:web:f19067ce1ec32a1c060b80',
    storageBucket: 'fundacion-crecer-login.appspot.com',
    apiKey: 'AIzaSyAAV3AkdzsKAHRnEGr_JQlSHb3DoEeC9WQ',
    authDomain: 'fundacion-crecer-login.firebaseapp.com',
    messagingSenderId: '124068125313',
  },
    production: false,
    endpoint: 'http://localhost:3000/'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.