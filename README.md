# Weighted Random: algorithms for sampling from discrete probability distributions O(n)
   Compute the discrete cumulative density function (CDF) of the list – or in simple terms the array of cumulative sums of the weights. Then generate a random number in the range between 0 and the sum of all weights, do a linear search to find this random number in your discrete CDF array and get the value corresponding to this entry – this is the weighted random number.

## Install
`npm install weight-random`

## Usage

```javascript
import { random } from 'weight-random';
```

```javascript
const prizes = [
  { title: 'first prize', weight: 0.6 },
  { title: 'second prize', weight: 0.2 },
  { title: 'third prize', weight: 0.15 },
  { title: 'fourth prize', weight: 0.01 },
];
const weightConfigArr = prizes.map((prize) => {
  return prize.weight;
});
const selectedPrize = prizes[random(weightConfigArr)];

console.log('selectedPrize', selectedPrize);
```
