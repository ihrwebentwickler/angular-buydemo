import {bootstrapApplication} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideStore} from "@ngrx/store";

import {AppComponent} from "./app/app.component";
import {APP_ROUTES} from "./app/app.routes";
import {basketReducer} from "./app/stores/basket/basket.reducer";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES,
      withPreloading(PreloadAllModules)
    ),
    provideAnimations(),

    // Setup NGRX:
    provideStore({ basket: basketReducer })
  ]
});
