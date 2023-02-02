# https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

# Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

# Note: no empty arrays will be given.

# Examples
# [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
# [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
# [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

def highest_rank(arr):
    freq = {}
    
    for item in arr:
        if item in freq:
            freq[item] += 1
        else:
            freq[item] = 1
    max = next(iter(freq))
    for key in sorted(freq):
        if freq[key] >= freq[max]:
                max = key
    return max