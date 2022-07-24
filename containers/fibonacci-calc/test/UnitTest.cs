namespace FibonacciTest;

using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class UnitTest
{
    [TestMethod]
    public void Test1()
    {
        var fibonacci = new Fibonacci.Fibonacci();

        Assert.AreEqual(0, fibonacci.Calculate(0));
        Assert.AreEqual(1, fibonacci.Calculate(1));
        Assert.AreEqual(1, fibonacci.Calculate(2));
        Assert.AreEqual(2, fibonacci.Calculate(3));
        Assert.AreEqual(3, fibonacci.Calculate(4));
        Assert.AreEqual(5, fibonacci.Calculate(5));
        Assert.AreEqual(8, fibonacci.Calculate(6));
        Assert.AreEqual(13, fibonacci.Calculate(7));
        Assert.AreEqual(21, fibonacci.Calculate(8));
        Assert.AreEqual(34, fibonacci.Calculate(9));
        Assert.AreEqual(55, fibonacci.Calculate(10));
        Assert.AreEqual(89, fibonacci.Calculate(11));
        Assert.AreEqual(144, fibonacci.Calculate(12));

        Assert.AreEqual(
            System.Numerics.BigInteger.Parse("43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875"),
            fibonacci.Calculate(1000));
    }
}
