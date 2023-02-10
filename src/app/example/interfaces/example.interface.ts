export interface ISelect {
  value: string | number;
  label: string;
}

export interface IResponse {
  error: boolean;
  msg: string;
  data: Array<IUserInfo>
}

export interface IUserInfo {
  name: string;
  last_name?: string;
  document: string;
  email: string;
  gender: string;
  age: string;
  hobby: string;
}