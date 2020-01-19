import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  LoginData(user: any) {
    return this.http.post("http://localhost:8080/DacAug2019/user/login" , user);
  }
  SignupData(signup_data: any) {
    return this.http.post("http://localhost:8080/DacAug2019/user/register", signup_data);
  }

  AddPolicyData(policy_data: any) {
    return this.http.post("http://localhost:8080/DacAug2019/policy/register", policy_data);
  }

  ForgotUserPasswordData(emaildata: any) {
    return this.http.post("http://localhost:8080/DacAug2019/user/forgotpassword", emaildata);
  }

  UserProfileData(userid: any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/user/userdetails/" + userid);
  }

  GetAllPolicyData()
  {
    return this.http.get("http://localhost:8080/DacAug2019/policy/allpolicies");
  }

  GetAllUsersPolicyData()
  {
    return this.http.get("http://localhost:8080/DacAug2019/user/alluserpolicydetails");
  }

  GetAllPolicyDataById(policyid:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/policy/"+policyid);
  }

  BuyPolicy(UserPolicyData:any)
  {
    return this.http.post("http://localhost:8080/DacAug2019/user/buypolicy",UserPolicyData);
  }

  UpdatePolicy(PolicyData:any)
  {
    return this.http.put("http://localhost:8080/DacAug2019/policy/update",PolicyData);
  }


  GetCustPolicyData(Userid:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/user/userpolicydetails/"+Userid);
  }

  GetCustPolicyDataByPremiumScheduleId(PremiumScheduleId:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/custpolicy/getcustpolicydetailsbypremiumschedule/"+PremiumScheduleId);
  }

  GetCustPolicyDataByCustPolicyId(CustPolicyId:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/custpolicy/getnextpremiumschedulebycustpolicyid/"+CustPolicyId);
  }
  // GetUserByUserId(uname: any)
  // {
  //   return this.http.get("http://localhost:4000/editprofile/" + uname);
  // }
  UpdateUserData(UserData)
  {
    return this.http.put("http://localhost:8080/DacAug2019/user/userdetails/" + UserData.userId, UserData);
  }

  UpdateUserPassword(UserData)
  {
    return this.http.put("http://localhost:8080/DacAug2019/user/userdetails/" + UserData.userId, UserData);
  }

  GetCustPolicyPremiumData(CustPolicyId:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/custpolicy/getnextpremiumschedule/"+CustPolicyId);
  }

  PayCustPolicyPremium(CustPolicyId:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/custpolicy/paynextpremiumschedule/"+CustPolicyId);
  }

  GetPaidDateByPremiumSchedule(PremiumScheduleId:number)
  {
    return this.http.get("http://localhost:8080/DacAug2019/custpolicy/gethistoryofpaidpremiumbypremiumscheduleid/"+PremiumScheduleId);
  }

}
