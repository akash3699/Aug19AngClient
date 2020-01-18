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

  UserProfileData(userid: any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/user/userdetails/" + userid);
  }

  GetAllPolicyData()
  {
    return this.http.get("http://localhost:8080/DacAug2019/policy/allpolicies");
  }

  GetAllPolicyDataById(policyid:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/policy/"+policyid);
  }

  BuyPolicy(UserPolicyData:any)
  {
    return this.http.post("http://localhost:8080/DacAug2019/user/buypolicy",UserPolicyData);
  }


  GetCustPolicyData(Userid:any)
  {
    return this.http.get("http://localhost:8080/DacAug2019/user/userpolicydetails/"+Userid);
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
}
