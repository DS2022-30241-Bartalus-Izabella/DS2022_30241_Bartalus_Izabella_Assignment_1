import {RoleEnum} from "./RoleEnum";

export interface User {
  id: number,
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  roleType: RoleEnum;
}
