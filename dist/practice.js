"use strict";
// let ImNumber = 10;
// // ImNumber = '10'; // error!
// const message: string = 'solmi'; // string 타입
// const truely: boolean = true; // boolean 타입
// const numArr: number[] = [1, 2, 3]; // number 타입으로 된 array
// const strArr: string[] = ['a', 'b', 'c']; // string 타입으로 된 array
// let list: Array<number> = [1, 2, 3];
// // strArr.push(1);
// let test: string | number = 'hello'; // string 또는 number 타입
// test = 20; // 그래서 숫자를 넣어도 200 OK!
// let tupleArr: [number, string, boolean]; // 이렇게 튜플 타입을 먼저 선언하고
// tupleArr = [1, 'abc', true]; // 선언한 tupleArr 에 값을 넣는다.
// // console.log(tupleArr[0].substring(1));
// console.log(tupleArr[1].substring(1)); // 성공
// enum Language { // enum은 이렇게 작성하고..
// 	korean = 'ko',
// 	english = 'en',
// 	japanese = 'ja',
// 	chinese = 'zh',
// 	spanish = 'es',
// 	lalala = 23,
// }
// enum Color {
// 	Red = 2,
// 	Green,
// 	Blue,
// }
// let colorName: string = Color[3];
// console.log(colorName); // 값이 2인 'Green'이 출력됩니다.
// let anyList: any[] = [1, true, 'free'];
// anyList[1] = 100;
// console.log(anyList);
// let unusable: void = undefined;
// // unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
// let numnum: any = undefined;
// function warnUser(): void {
// 	console.log('난 그냥 console만 출력하는 함수...');
// }
// const message: void = warnUser(); // '난 그냥 console만 출력하는 함수...'
// console.log('message :', message); // undefined
function error(message) {
    throw new Error(message);
}
var never = [];
never.push(3);
