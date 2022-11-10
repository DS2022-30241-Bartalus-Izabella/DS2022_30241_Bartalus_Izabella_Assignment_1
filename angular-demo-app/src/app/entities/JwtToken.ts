import {RoleEnum} from "./RoleEnum";

export interface JwtToken {
  roleType: RoleEnum
  accessToken: string
}
