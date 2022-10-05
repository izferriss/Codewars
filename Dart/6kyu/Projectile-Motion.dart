// https://www.codewars.com/kata/5af96cea3e9715ec670001dd

// You must create a class, Projectile, which takes in 3 arguments when initialized:

// starting height (0 ≤ h0 < 200)
// starting velocity (0 < v0 < 200)
// angle of the projectile when it is released (0° < a < 90°, measured in degrees).
// All units for distance are feet, and units for time are seconds.

// Note: Some solutions were invalidated because I added tests for situations where the starting height is 0, in which case the equation for height would be in the form h(t) = -16.0t^2 + vt where v represents the initial vertical velocity.

// h=−16t2+vt+h0\large h = -16t^2 + vt + h_0h=−16t 
// 2
//  +vt+h 
// 0
// ​
 
// In the above equation, h represents the height of the projectile after t seconds; v represents the initial vertical velocity; and h0 represents the starting height.

// You need to write the following methods for the Projectile class. In Crystal, the arguments passed when the object is initialized will always be of the type Float64, and in Java/Scala/Kotlin/Dart/C#, they will be int/Ints.

// A height_eq, heightEq, or HeightEq method, which returns the equation for height of the projectile as a function of time. [takes in nothing, returns a String]
// A horiz_eq, horizEq, or HeightEq method, which returns the equation for the horizontal position of the projectile as a function of time. [takes in nothing, returns a String]
// A height or Height method, which takes in an argument t and calculates the height of the projectile in feet. [takes in a double, returns a double]
// A horiz or Horiz method, which also takes in an argument t and calculates the horizontal distance that the projectile has traveled. [takes in a double, returns a double]
// A landing or Landing method which returns the point at which the projectile lands on the ground, in the form [x, y, t]. (y should always be 0). [takes in nothing, returns an array of doubles]
// EVERYTHING, including values in the equations appearing as coefficients, must be rounded to THREE decimal places. However, if the value is whole, only show one decimal place (for example => -16 becomes -16.0, not -16.000). But ensure that you DO NOT use the three-decimal-place rounded values for calculations. Otherwise, you will find yourself getting answers CLOSE to the correct one but slightly off.

// You also need to define instance variables as needed. These will not be tested.

// Examples
// Projectile Motion ExampleThis example shows the initial vertical and horizontal velocity when a projectile is fired at 2 ft/s.

// Projectile p = new Projectile(5, 2, 45); //=> a projectile starting at 5 ft above the ground, traveling initially at 2 ft/s, and at an angle of 45 degrees with the horizontal (shown in the triangle above)
// p.heightEq(); //=> "h(t) = -16.0t^2 + 1.414t + 5.0"
//   # 1.414 = 2sin(45°)
// p.horizEq(); //=> "x(t) = 1.414t"
//   # 1.414 = 2cos(45°)
// p.height(0.2); //=> 4.643 (Calculation: -16(0.2)^2 + (2sin(45°))(0.2) + 5)
// p.horiz(0.2); //=> 0.283 (Calculation: 2cos(45°) * 0.2)
// p.landing(); //=> [0.856, 0, 0.605] (After 0.605 seconds (t = 0.605), the particle has landed on the ground (y = 0), and is 0.856 ft horizontally (x = 0.856) away from the release point.)
// Additionally, note that all coefficients are to be expressed as floats in the string equations, regardless of whether or not they are whole. This means that whole numbers should always be formatted with a ".0" appended.

import 'dart:math';

class Projectile 
{
    int h;
    int v;
    int a;
    double v_sin;
    double v_cos;

    Projectile(int hei, int vel, int ang)
    {
        this.h = hei;
        this.v = vel;
        this.a = ang;
        this.v_sin = this.v * sin(this.a * pi/180);
        this.v_cos = this.v * cos(this.a * pi/180);
    }
    String heightEq()
    {
        var fixed = this.v_sin.toStringAsFixed(3);
        if(fixed[fixed.length - 1] == '0')
        {
            fixed = this.v_sin.toStringAsFixed(2);
        }
        if(fixed[fixed.length - 1] == '0')
        {
            fixed = this.v_sin.toStringAsFixed(1);
        }
        if(this.h != 0)
        {
            return "h(t) = -16.0t^2 + " + fixed + "t + " + this.h.toStringAsFixed(1);
        }
        else
        {
            return "h(t) = -16.0t^2 + " + fixed + "t";
        }   
    }
    String horizEq()
    {
        var fixed = this.v_cos.toStringAsFixed(3);
        if(fixed[fixed.length - 1] == '0')
        {
            fixed = this.v_cos.toStringAsFixed(2);
        }
        if(fixed[fixed.length - 1] == '0')
        {
            fixed = this.v_cos.toStringAsFixed(1);
        }
        return "x(t) = " + fixed + "t";
    }
    double height(double time)
    {
        return double.parse(((-16.0 * (time * time)) + (this.v_sin * time) + this.h).toStringAsFixed(3));
    }
    double horiz(double time)
    {
        return double.parse((this.v_cos * time).toStringAsFixed(3));
    }
    List<double> landing()
    {
        double t = ((-1 * this.v_sin) - sqrt((this.v_sin * this.v_sin) - (4*(-16)*this.h)))/(2 * (-16));
        double x = double.parse((this.v_cos * t).toStringAsFixed(3));
        t = double.parse(t.toStringAsFixed(3));
        double y = 0;
        
        return[x, y, t];
    }
}