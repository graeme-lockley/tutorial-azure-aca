package za.co.no9.ackermann;

import org.junit.jupiter.api.Test;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ControllerTest {
    @Test
    void ackermannTest() {
        Controller greeting = new Controller();

        assertEquals(greeting.ackermann(BigInteger.ZERO, BigInteger.ZERO), BigInteger.ONE);
        assertEquals(greeting.ackermann(BigInteger.valueOf(2), BigInteger.ONE), BigInteger.valueOf(5));
    }
}