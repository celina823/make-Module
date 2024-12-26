// validation.js: 사용자 데이터 검증 관련 함수들 // validator 관련 함수들
export function validateUser(user) {
  if(!user) {
    console.log("user가 미기입되었습니다.")
  }
  if (!user.name || !user.email || !user.age) {
    throw new Error("필수 정보가 누락되었습니다");
  }

  if (user.age < 0 || user.age > 120) {
    throw new Error("유효하지 않은 나이입니다");
  }

  return user;
}


export function validateEmail(user) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(user.email)) {
    throw new Error("유효하지 않은 이메일 형식입니다");
  }

  return user;
}



