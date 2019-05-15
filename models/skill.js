const skills = [
    {skill: 'Javascript', learned: true},
    {skill: 'CSS', learned: true},
    {skill: 'Python', learned: false},
    {skill: 'Django', learned: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}
  
function getOne(id) {
  return skills[id];
}

  function getAll() {
    return skills;
  }

