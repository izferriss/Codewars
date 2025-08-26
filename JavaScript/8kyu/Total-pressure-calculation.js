// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/javascript

// Given the molecular mass of two molecules 
// M
// 1
// M 
// 1
// ​
//   and 
// M
// 2
// M 
// 2
// ​
//  , their masses present 
// m
// 1
// m 
// 1
// ​
//   and 
// m
// 2
// m 
// 2
// ​
//   in a vessel of volume 
// V
// V at a specific temperature 
// T
// T, find the total pressure 
// P
// t
// o
// t
// a
// l
// P 
// total
// ​
//   exerted by the molecules. Formula to calculate the pressure is:

// P
// t
// o
// t
// a
// l
// =
// (
// m
// 1
// M
// 1
// +
// m
// 2
// M
// 2
// )
// R
// T
// V
// P 
// total
// ​
//  = 
// V
// ( 
// M 
// 1
// ​
 
// m 
// 1
// ​
 
// ​
//  + 
// M 
// 2
// ​
 
// m 
// 2
// ​
 
// ​
//  )RT
// ​
 
// Input
// Six values :

// M
// 1
// M 
// 1
// ​
//  , 
// M
// 2
// M 
// 2
// ​
//  : molar masses of both gases, in 
 
// g
// ⋅
// m
// o
// l
// −
// 1
//  g⋅mol 
// −1
 
// m
// 1
// m 
// 1
// ​
//   and 
// m
// 2
// m 
// 2
// ​
//  : present mass of both gases, in grams (
// g
// g)
// V
// V: volume of the vessel, in 
 
// d
// m
// 3
//  dm 
// 3
 
// T
// T: temperature, in 
 
// °
// C
//  °C
// Output
// One value: 
// P
// t
// o
// t
// a
// l
// P 
// total
// ​
//  , in units of 
// a
// t
// m
// atm.

// Notes
// Remember: Temperature is given in Celsius while SI unit is Kelvin (
// K
// K). 
 
// 0
// °
// C
// =
// 273.15
// K
//  0°C=273.15K

// The gas constant 
 
// R
// =
// 0.082
// d
// m
// 3
// ⋅
// a
// t
// m
// ⋅
// K
// −
// 1
// ⋅
// m
// o
// l
// −
// 1
//  R=0.082dm 
// 3
//  ⋅atm⋅K 
// −1
//  ⋅mol 
// −1

solution = (M1, M2, m1, m2, V, T) => {
	M1 = (m1 * 0.001) / M1;
	M2 = (m2 * 0.001) / M2;
	T = T + 273.15;
	var R = 0.082;

	return (((M1 + M2) * R * T) / V) * 1000;
};