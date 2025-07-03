export interface TUserCard {
  _id: string;
  name: string;
  city: string;
  age: string;
  gender: string;
  image: string;
  skillName: string;
  skillId: string;
  skillWants: string[];
  like: number;
  cratedAt: string;
}

export type TRegisterData = {
  name: string;
  email: string;
  about: string;
  password: string;
  gender: string;
  city: string;
  birthDay: string;
  image: string;
  skillWantsCategory: string[];
  skillWantsSubCategory: string[];
  skillName: string;
  yourSkillCategory: string;
  yourSkillSubCategory: string;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TUserData = {
  name: string;
  city: string;
  birthDay: string;
  about: string;
  gender: string;
  image: string;
};
