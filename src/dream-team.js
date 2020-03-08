module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let name = [];
    for(let i = 0; i < members.length; i++) {
      if(typeof members[i] === "string") {
        members[i] = members[i].replace(/\s+/g, '');
        name.push(members[i][0].toUpperCase())
      } 
    }
    let DreamTeam = name.sort().join('');  
    if (DreamTeam == "") {
      return false;
    } else {
      return DreamTeam;
    }
  } else {
    return false;
  }
};