import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CommandesComponent } from './pages/gestion/commandes/commandes.component';
import { ProductsComponent } from './pages/gestion/products/products.component';
import { ServiceGestionComponent } from './pages/gestion/service-gestion/service-gestion.component';
import { PaiementComponent } from './pages/finance/paiement/paiement.component';
import { RapportComponent } from './pages/finance/rapport/rapport.component';
import { AvisComponent } from './pages/support/avis/avis.component';
import { HistoryComponent } from './pages/support/history/history.component';
import { ProfileComponent } from './pages/config/profile/profile.component';
import { SettingsComponent } from './pages/config/settings/settings.component';
import { ClientListComponent } from './pages/gestion/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'gestion/customers', component: ClientListComponent },
      { path: 'gestion/orders', component: CommandesComponent },
      { path: 'gestion/products', component: ProductsComponent },
      { path: 'gestion/services', component: ServiceGestionComponent },
      { path: 'gestion/services', component: ServiceGestionComponent },
      { path: 'fincance/payments', component: PaiementComponent },
      { path: 'fincance/reports', component: RapportComponent },
      { path: 'support/reviews', component: AvisComponent },
      { path: 'support/history', component: HistoryComponent },
      { path: 'config/profile', component: ProfileComponent },
      { path: 'config/settings', component: SettingsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
