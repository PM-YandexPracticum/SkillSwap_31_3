export type TUser = {
  _id: string;
  name: string;
  city: string;
  age: string;
  gender: string;
  avatar: string;
  skillName: string;
  skillId: string;
  skillWants: string[];
  like: number;
  cratedAt: string;
  about?: string;
  text?: string;
  photos?: string[]
};

export type TSkill = {
  _id: string;
  name: string;
  parent_id: string;
};
