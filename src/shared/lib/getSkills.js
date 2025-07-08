export const getSkills = (data) => {
  const skills = [];

  data.map((item) => {
    if (item.parent_id === '0') {
      skills.push({
        parent_id: item._id,
        category: item.name,
        subcategories: []
      });
    }
  });

  data.map((sub) => {
    skills.map((item) => {
      if (sub.parent_id === item.parent_id) {
        item.subcategories.push(sub.name);
      }
    });
  });

  return skills;
};

export const getSkillsDict = (data) =>
  data
    .map((item) => ({ [item.name]: item._id }))
    .reduce((acc, item) => Object.assign(acc, item), {});
