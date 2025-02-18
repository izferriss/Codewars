# https://www.codewars.com/kata/54ff3102c1bad923760001f3

# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    freq = {}
    for i in sentence:
        if(i.lower() == 'a' or i.lower() == 'e' or i.lower() == 'i' or i.lower() == 'o' or i.lower() == 'u'):
            if i in freq:
                freq[i] += 1
            else:
                freq[i] = 1
    sum = 0
    for i in freq:
        sum += freq[i]
    return sum