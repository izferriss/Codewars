// https://www.codewars.com/kata/5c44b0b200ce187106452139/java

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

class Arguments
{
    public static int countArgs(Object... args)
    {
        return args.length;
    }
}