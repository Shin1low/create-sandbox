/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)
// sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

/**
 * map filterを使って配列の処理
 */
// const nameArr = ["大瀬良", "久里", "森下"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newArr = nameArr.map((name) => {
//   if (name === "森下") {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newArr)

/**
 * 三項演算子
 */
// ある条件　？　条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです": "falseです";
// console.log(val1)

// const num = 1300;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 35));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('１か２はtrueになります。')
// }

// if (flag1 && flag2) {
//   console.log('１も２もtrueになります。')
// }

// ||は左側がfalseであれば、右側を返す
// const num = 100;
// const fee = num || '金額が未設定です。'
// console.log(fee)

// &&は左側がtrueであれば、右側を返す
const num2 = 150;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
