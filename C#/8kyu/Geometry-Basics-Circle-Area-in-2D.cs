// https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0/train/csharp

// This series of katas will introduce you to basics of doing geometry with computers.

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:

// public class Circle
// {
//   public Point Center { get; private set; }
//   public double Radius { get; private set; }
  
//   public Circle(Point center, double radius)
//   {
//     this.Center = center;
//     this.Radius = radius;
//   }
// }
// And the Point class can be seen below:

// public class Point
// {
//   public double X { get; private set; }
//   public double Y { get; private set; }
  
//   public Point(double x, double y)
//   {
//     this.X = x;
//     this.Y = y;
//   }
// }

using System;

public class Circle
{
  public Point Center { get; private set; }
  public double Radius { get; private set; }
  
  public Circle(Point center, double radius)
  {
    this.Center = center;
    this.Radius = radius;
  }
}
public class Point
{
  public double X { get; private set; }
  public double Y { get; private set; }
  
  public Point(double x, double y)
  {
    this.X = x;
    this.Y = y;
  }
}
public static class Kata
{
  public static double CircleArea(Circle circle)
  {
    return System.Math.Pow(circle.Radius,2) * Math.PI;
  }
}