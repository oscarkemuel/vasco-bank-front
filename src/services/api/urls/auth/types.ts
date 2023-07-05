export type IUser = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  rules: ['admin']
}

export type IPostLogin = {
  email: string;
  password: string;
}

export type IPostLoginResponse = {
  token: string;
}