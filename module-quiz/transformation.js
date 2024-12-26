// transformation.js: 사용자 데이터 변환 관련 함수들 // assignUserGrade, formatUserData ....

export function assignUserGrade(user) {
  let grade;
  if (user.age < 19) {
    grade = "JUNIOR";
  } else if (user.age < 40) {
    grade = "ADULT";
  } else {
    grade = "SENIOR";
  }

  return { ...user, grade };
}

export function formatUserData(user) {
  return {
    ...user,
    name: user.name.toUpperCase(),
    createdAt: new Date().toISOString(),
  };
}
