namespace Fibonacci;

using System.Numerics;

public class Fibonacci
{
    public BigInteger Calculate(BigInteger n)
    {
        if (n == 0)
            return 0;

        BigInteger fn = 1;
        BigInteger fn1 = 0;

        while (n > 1)
        {
            var next = fn + fn1;

            fn1 = fn;
            fn = next;
            n -= 1;
        }

        return fn;
    }
}
