// serialization.js: 데이터 직렬화 관련 함수들 // serializeUser...

export function serializeUser(user) {
  const { name, email, age, grade, createdAt } = user;
  return `${name},${email},${age},${grade},${createdAt}`;
}

