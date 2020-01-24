import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { PayPremiumComponent } from './pay-premium/pay-premium.component';
import { AdminAddPolicyComponent } from './admin-add-policy/admin-add-policy.component';
import { AdminManagePolicyComponent } from './admin-manage-policy/admin-manage-policy.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { HistoryofPaidPremiumComponent } from './historyof-paid-premium/historyof-paid-premium.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminCustomerPolicyDetailsComponent } from './admin-customer-policy-details/admin-customer-policy-details.component';
import { AdminService } from './admin.service';
import { AdminPolicyDetailsComponent } from './admin-policy-details/admin-policy-details.component';
import { ClaimTrackerComponent } from './claim-tracker/claim-tracker.component';
import { AdminAddClaimTrackerComponent } from './admin-add-claim-tracker/admin-add-claim-tracker.component';
import { AdminAllClaimTrackersComponent } from './admin-all-claim-trackers/admin-all-claim-trackers.component';
import { AdminEditClaimTrackersComponent } from './admin-edit-claim-trackers/admin-edit-claim-trackers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
    EditProfileComponent,
    AddPolicyComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    PremiumCalulatorComponent,
    PayPremiumComponent,
    AdminAddPolicyComponent,
    AdminManagePolicyComponent,
    PolicyDetailsComponent,
    HistoryofPaidPremiumComponent,
    ForgotPasswordComponent,
    AdminCustomerPolicyDetailsComponent,
    AdminPolicyDetailsComponent,
    ClaimTrackerComponent,
    AdminAddClaimTrackerComponent,
    AdminAllClaimTrackersComponent,
    AdminEditClaimTrackersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : "" , component : HomeComponent, canActivate: [AuthService]},
      {path : "Home" , component : HomeComponent, canActivate: [AuthService]},
      {path : "AboutUs" , component : AboutUsComponent},
      {path : "AddPolicy" , component : AddPolicyComponent, canActivate: [AuthService]},
      {path : "MyProfile" , component : MyProfileComponent, canActivate: [AuthService]},
      {path : "Admin/AddPolicy" , component : AdminAddPolicyComponent, canActivate: [AuthService]},
      {path : "Admin/AddClaimTracker" , component : AdminAddClaimTrackerComponent, canActivate: [AuthService]},
      {path : "Admin/EditClaimTracker/:claimtrackerid" , component : AdminEditClaimTrackersComponent, canActivate: [AuthService]},
      {path : "Admin/AllClaimTrackers" , component : AdminAllClaimTrackersComponent, canActivate: [AuthService]},
      {path : "Admin/ManagePolicy/:policyid" , component : AdminManagePolicyComponent, canActivate: [AuthService]},
      {path : "Admin/CustomerPolicyDetails" , component : AdminCustomerPolicyDetailsComponent, canActivate: [AuthService]},
      {path : "Admin" , component : AdminPolicyDetailsComponent, canActivate: [AuthService]},
      {path : "ChangePassword" , component : ChangePasswordComponent, canActivate: [AuthService]},
      {path : "ClaimTracker" , component : ClaimTrackerComponent, canActivate: [AuthService]},
      {path : "PremiumCalculator/:policyId" , component : PremiumCalulatorComponent, canActivate: [AuthService]},
      {path : "PayPremium/:premiumscheduleid" , component : PayPremiumComponent, canActivate: [AuthService]},
      {path : "HistoryofPaidPremium" , component : HistoryofPaidPremiumComponent, canActivate: [AuthService]},
      {path : "Profile" , component : ProfileComponent },
      {path : "EditProfile" , component : EditProfileComponent, canActivate: [AuthService]},
      {path : "PolicyDetails/:policyid" , component : PolicyDetailsComponent, canActivate: [AuthService]},
      {path : "ContactUs" , component : ContactUsComponent},
      {path : "Login" , component : LoginComponent},
      {path : "ForgotPassword" , component : ForgotPasswordComponent},
      {path : "SignUp" , component : SignUpComponent},
      {path : "**" , component : LoginComponent}
    ]),
    AppRoutingModule
  ],
  providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
