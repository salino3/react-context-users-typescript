
export interface All3 {
  avatar: any;
  last_name: any;
  first_name: any;
  email: any;
}
export interface All2 {
  // data?: any;
  avatar: any;
  last_name: any;
  first_name: any;
  email: any;
}

export interface All {

  users: All2[];
  selectedUser: All3[];
  TF: false
}