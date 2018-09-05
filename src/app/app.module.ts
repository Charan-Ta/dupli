import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxNavbarComponent } from './Components/inbox-navbar/inbox-navbar.component';
import { StoresNavbarComponent } from './Components/stores-navbar/stores-navbar.component';
import { AppComponent } from './app.component';
import { MechandiseNavbarComponent } from './Components/mechandise-navbar/mechandise-navbar.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { HomeNavbarComponent } from './Components/home-navbar/home-navbar.component';
import { AllstoresComponent } from './Components/stores-navbar/allstores/allstores.component';
import { FavoritesComponent } from './Components/stores-navbar/favorites/favorites.component';
import { TemplatesComponent } from './Components/stores-navbar/templates/templates.component';
import { SavedSearchResultsComponent } from './Components/stores-navbar/saved-search-results/saved-search-results.component';
import { SavedResultsComponent } from './Components/stores-navbar/saved-results/saved-results.component';
import { PendingActionsComponent } from './Components/inbox-navbar/pending-actions/pending-actions.component';
import { PendingNotificationsComponent } from './Components/inbox-navbar/pending-notifications/pending-notifications.component';
import { CompletedActionsComponent } from './Components/inbox-navbar/completed-actions/completed-actions.component';
import { TwoDElementsComponent } from './Components/mechandise-navbar/two-d-elements/two-d-elements.component';
import { ThreeDElementsComponent } from './Components/mechandise-navbar/three-d-elements/three-d-elements.component';
import { AnciliaryElementsComponent } from './Components/mechandise-navbar/anciliary-elements/anciliary-elements.component';
import { DemoElementsComponent } from './Components/mechandise-navbar/demo-elements/demo-elements.component';
import { FixtureElementsComponent } from './Components/mechandise-navbar/fixture-elements/fixture-elements.component';
import { KitsComponent } from './Components/mechandise-navbar/kits/kits.component';
import { MasterDataComponent } from './Components/mechandise-navbar/master-data/master-data.component';
import { UsersComponent } from './Components/admin-navbar/users/users.component';
import { AuditTrailComponent } from './Components/admin-navbar/audit-trail/audit-trail.component';
import { WorkflowComponent } from './Components/admin-navbar/workflow/workflow.component';
import { HttpClientModule } from '@angular/common/http';
import { TableGridComponent } from './Components/reusable-components/table-grid/table-grid.component';
import { FilterComponent } from './Components/reusable-components/filter/filter.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdvanceFilterComponent } from './Components/reusable-components/advance-filter/advance-filter.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeNavbarComponent
  },
  {
    path: 'inbox',
    component: InboxNavbarComponent,
    children: [
      {
        path: 'pending-actions',
        component: PendingActionsComponent
      },
      {
        path: 'pending-notifications',
        component: PendingNotificationsComponent
      },
      {
        path: 'completed-actions',
        component: CompletedActionsComponent
      }
    ]
  },
  {
    path: 'stores',
    component: StoresNavbarComponent,
    children: [
      {
        path: 'allstores',
        component: AllstoresComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'templates',
        component: TemplatesComponent
      },
      {
        path: 'saved-search-results',
        component: SavedSearchResultsComponent
      },
      {
        path: 'saved-results',
        component: SavedResultsComponent
      }
    ]
  },
  {
    path: 'merchandise',
    component: MechandiseNavbarComponent,
    children: [
      {
        path: '2D-elements',
        component: TwoDElementsComponent
      },
      {
        path: '3D-elements',
        component: ThreeDElementsComponent
      },
      {
        path: 'anciliary-elements',
        component: AnciliaryElementsComponent
      },
      {
        path: 'demo-elements',
        component: DemoElementsComponent
      },
      {
        path: 'fixture-library',
        component: FixtureElementsComponent
      },
      {
        path: 'kits',
        component: KitsComponent
      },
      {
        path: 'master-data',
        component: MasterDataComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminNavbarComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'audit-trail',
        component: AuditTrailComponent
      },
      {
        path: 'workflow',
        component: WorkflowComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    InboxNavbarComponent,
    StoresNavbarComponent,
    MechandiseNavbarComponent,
    AdminNavbarComponent,
    HomeNavbarComponent,
    AllstoresComponent,
    FavoritesComponent,
    TemplatesComponent,
    SavedSearchResultsComponent,
    SavedResultsComponent,
    PendingActionsComponent,
    PendingNotificationsComponent,
    CompletedActionsComponent,
    TwoDElementsComponent,
    ThreeDElementsComponent,
    AnciliaryElementsComponent,
    DemoElementsComponent,
    FixtureElementsComponent,
    KitsComponent,
    MasterDataComponent,
    UsersComponent,
    AuditTrailComponent,
    WorkflowComponent,
    TableGridComponent,
    FilterComponent,
    AdvanceFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
