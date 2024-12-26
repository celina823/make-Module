/*
// 사용자 정보를 검증하는 함수
function validateUser(user) {
  if (!user.name || !user.email || !user.age) {
    throw new Error("필수 정보가 누락되었습니다");
  }

  if (user.age < 0 || user.age > 120) {
    throw new Error("유효하지 않은 나이입니다");
  }

  return user;
}

// 이메일 형식을 검증하는 함수
function validateEmail(user) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(user.email)) {
    throw new Error("유효하지 않은 이메일 형식입니다");
  }

  return user;
}

// 사용자 나이에 따라 등급을 부여하는 함수
function assignUserGrade(user) {
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

// 사용자 정보를 표준 형식으로 변환하는 함수
function formatUserData(user) {
  return {
    ...user,
    name: user.name.toUpperCase(),
    createdAt: new Date().toISOString(),
  };
}

// 사용자 정보를 문자열로 직렬화하는 함수
function serializeUser(user) {
  const { name, email, age, grade, createdAt } = user;
  return `${name},${email},${age},${grade},${createdAt}`;
}
*/


import { validateUser, validateEmail } from "./validation.js"
import { assignUserGrade, formatUserData } from "./transformation.js"
import { serializeUser } from "./serialization.js"

const processUserData = (test) => {
  validateUser(test);
  validateEmail(test);
  let transformResult = assignUserGrade(test);
  transformResult = formatUserData(transformResult);
  transformResult = serializeUser(transformResult);
  return transformResult;
}

// console.log("테스트 케이스 1", testCase1);
// const result1 = processUserData(testCase1);
// console.log(result1);

const testCase1 = {
  name: "강태진",
  email: "taejin@taejin.com",
  age: 25
};
const testCase2 = {
  name: "신진호",
  email: "jinho@jinho.com",
  age: 15
};

const testCase3 = {
  name: "이동혁",
  email: "hyuk@hyuk.com",
  age: 45
};

const result1 = processUserData(testCase1);
console.log(result1);
const result2 = processUserData(testCase2);
console.log(result2);
const result3 = processUserData(testCase3);
console.log(result3);