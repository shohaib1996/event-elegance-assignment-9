<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>1st line declares a variable named greeting using the let keyword. However, at this point, it has not been assigned any value, so its value is undefined by default.</i>
<i>2nd line assigns an empty object {} to the greeting variable. In JavaScript, curly braces {} are used to create objects. So, greeting is now an object.</i>
<i> So , if i console log it will return an empty object {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>sum function have two parameter a and b when it called it has one number type parameter a = 1 and a string type parameter b= "2" so it add up like 1 + "2" and result would be like 12</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Firstly info is an object and it has a key called favoriteFood and its value is the 0 index of food. In the 3rd line of it reassign the value of favoriteFood key to a new value. if i console the food it remain same because we don't change any value of food we only change the info key value</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>name is not defined or given a value so if I called the sayHi function it will only return "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here, using the forEach method to iterate over each element in the nums array. and takes a parameter called num .num, representing each element in the nums array during iteration.There's an if statement that checks whether num is truthy. If num is truthy, it increments the count variable by 1. In JavaScript, numbers like 1, 2, and 3 are considered truthy, while 0 is considered falsy. Therefore, the if statement will be true for all elements except 0.For 0, the if condition is false, so nothing happens.For 1, 2, and 3, the if condition is true, so count is incremented by 1 each time.As a result, after the iteration is completed, count contains the value 3, because its the last element of the array which is logged in</i>

</p>
</details>
