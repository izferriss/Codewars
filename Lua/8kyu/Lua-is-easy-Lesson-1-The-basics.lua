-- https://www.codewars.com/kata/59fee4e680171f01f200008a

-- This Kata is part of 6 part series that will get you acquinted with Lua. At the end of lesson 6, you should be able to attempt or translate any Kata to Lua. If you need to test your code before submitting, go to Lua's official demo here and write tests in the editor and hit "RUN".

-- Lua is a dynamically-typed language, and it has eight basic types: nil, Boolean, number, string, userdata, function, thread, and table.

-- Variable declaration in Lua is straight forward. Consider the followng statements:

-- a = 10; b = 20 ; c = "I'm a string"; d = 'another string'; a = true; -- this is a comment
-- Math works the way you would expect it to, and we will cover this in Lesson 3: Numbers.

-- +,/,*, ^(raise to power) , % (remainder),<, >, <=, >=, ==`, etc.
-- Strings have many methods which we will cover in Lesson 4: Strings. For this Kata, we need to know that string concatenation is performed using two dots:

-- print('Hello'..'World') --returns HelloWorld
-- print('Hello '..'World') -- returns "Hello World"
-- Consider the following function:

-- function test (x)
--   f = math.random(10) -- random number between 1 and 10, both inclusive
--   if f % 2 == 0 then return (f*x).." "..x.. " "..f
--   else return "f is odd"
--   end
-- end
-- --The result depends on the value of random number 'f'. It returns something like "32 8 4" if f is even else "f is odd".`
-- --Notice the two 'end' keywords. One to close the if statement and the other to close the function.
-- The Kata for this first lesson is very basic, so please bear with it.

-- You will write a simple function that takes 3 inputs a, b, c and returns a concatenated with a * b concatenated with 'Lua' if b >= c otherwise "Codewars". Seperate them with one space.

-- For example:

-- firstLua(1,2,3) --returns "1 2 Codewars"
-- firstLua(3,2,1) --returns "3 6 Lua"
-- In the next lesson, we will delve deeper into Numbers.

kata = {}
function kata.firstLua(a, b, c)
    if b >= c then
        return a .. ' ' .. a * b .. ' Lua'
    else
        return a .. ' ' .. a * b .. ' Codewars'
    end
end

return kata
