import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverurl:string="http://13.233.187.155:8080/DacAug2019/";
  // serverurl:string="http://localhost:8080/DacAug2019/"
  constructor(public http: HttpClient) { }

  LoginData(user: any) {
    return this.http.post(this.serverurl+"user/login" , user);
  }
  SignupData(signup_data: any) {
    return this.http.post(this.serverurl+"user/register", signup_data);
  }

  AddPolicyData(policy_data: any) {
    return this.http.post(this.serverurl+"policy/register", policy_data);
  }

  ForgotUserPasswordData(emaildata: any) {
    return this.http.post(this.serverurl+"user/forgotpassword", emaildata);
  }

  UserProfileData(userid: any)
  {
    return this.http.get(this.serverurl+"user/userdetails/" + userid);
  }

  GetAllPolicyData()
  {
    return this.http.get(this.serverurl+"policy/allpolicies");
  }

  GetAllUsersPolicyData()
  {
    return this.http.get(this.serverurl+"user/alluserpolicydetails");
  }

  GetAllPolicyDataById(policyid:any)
  {
    return this.http.get(this.serverurl+"policy/"+policyid);
  }

  BuyPolicy(UserPolicyData:any)
  {
    return this.http.post(this.serverurl+"user/buypolicy",UserPolicyData);
  }

  UpdatePolicy(PolicyData:any)
  {
    return this.http.post(this.serverurl+"policy/update",PolicyData);
  }


  GetCustPolicyData(Userid:any)
  {
    return this.http.get(this.serverurl+"user/userpolicydetails/"+Userid);
  }

  GetCustPolicyDataByPremiumScheduleId(PremiumScheduleId:any)
  {
    return this.http.get(this.serverurl+"custpolicy/getcustpolicydetailsbypremiumschedule/"+PremiumScheduleId);
  }

  GetCustPolicyDataByCustPolicyId(CustPolicyId:any)
  {
    return this.http.get(this.serverurl+"custpolicy/getnextpremiumschedulebycustpolicyid/"+CustPolicyId);
  }
  // GetUserByUserId(uname: any)
  // {
  //   return this.http.get("http://localhost:4000/editprofile/" + uname);
  // }
  UpdateUserData(UserData)
  {
    return this.http.post(this.serverurl+"user/updateuserdetails/" + UserData.userId, UserData);
  }

  UpdateUserPassword(UserData)
  {
    return this.http.post(this.serverurl+"user/userdetails/" + UserData.userId, UserData);
  }

  GetCustPolicyPremiumData(CustPolicyId:any)
  {
    return this.http.get(this.serverurl+"custpolicy/getnextpremiumschedule/"+CustPolicyId);
  }

  PayCustPolicyPremium(CustPolicyId:any)
  {
    return this.http.get(this.serverurl+"custpolicy/paynextpremiumschedule/"+CustPolicyId);
  }

  GetPaidDateByPremiumSchedule(PremiumScheduleId:number)
  {
    return this.http.get(this.serverurl+"custpolicy/gethistoryofpaidpremiumbypremiumscheduleid/"+PremiumScheduleId);
  }

  GetClaimTrackerById(Userid:number)
  {
    return this.http.get(this.serverurl+"user/userclaimtrackerdetails/"+Userid);
  }

  GetClaimTrackerByCTId(CTid:number)
  {
    return this.http.get(this.serverurl+"user/userclaimtrackerdetailsbyid/"+CTid);
  }

  AddClaimTrackerById(Userid:number,ClaimTrackerData:any)
  {
    return this.http.post(this.serverurl+"user/userclaimtrackerdetails/"+ClaimTrackerData.userId,ClaimTrackerData);
  }

  UpdateClaimTrackerById(ClaimTrackerId:number,ClaimTrackerData:any)
  {
    return this.http.post(this.serverurl+"user/userclaimtrackerdetailsbyid/"+ClaimTrackerData.ctid,ClaimTrackerData);
  }

  GetAllClaimTrackers()
  {
    return this.http.get(this.serverurl+"user/userallclaimtrackerdetails");
  }

}
