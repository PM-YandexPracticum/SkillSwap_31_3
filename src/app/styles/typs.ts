export type TUser = {
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
};

export type TSkill = {
  _id: string;
  name: string;
  parent_id: string;
};
