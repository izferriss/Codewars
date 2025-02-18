// https://www.codewars.com/kata/5a58ca28e626c55ae000018a

// Write the following function:

// double areaOfPolygonInsideCircle(double circleRadius, int numberOfSides)
// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

// Input :: Output Examples

// areaOfPolygonInsideCircle(3.0, 3) // returns 11.691

// areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

// areaOfPolygonInsideCircle(4.0, 5) // returns 38.042

import 'dart:math';

double areaOfPolygonInsideCircle(double r, int n)
{
    return double.parse((((r * r * n) * sin((360 / n) * pi / 180)) / 2).toStringAsFixed(3));
}