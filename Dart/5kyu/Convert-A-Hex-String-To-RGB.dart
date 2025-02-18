// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

Map<String, int> hexToRGB(String hex) 
{
    return {"r": int.parse(hex[1]+hex[2], radix: 16), "g": int.parse(hex[3]+hex[4], radix: 16), "b": int.parse(hex[5]+hex[6], radix: 16)};
}