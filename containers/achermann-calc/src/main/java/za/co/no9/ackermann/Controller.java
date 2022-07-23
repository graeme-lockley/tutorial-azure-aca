package za.co.no9.ackermann;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public final class Controller {
    private static final HashMap<BigInteger, HashMap<BigInteger, BigInteger>> cache = new HashMap<>();

    @GetMapping("/api/v1/ackermann/{m}/{n}")
    public BigInteger ackermann(@PathVariable("m") BigInteger m, @PathVariable("n") BigInteger n) {
        if (m.equals(BigInteger.ZERO))
            return n.add(BigInteger.ONE);
        else {
            BigInteger v = get(m, n);

            if (v == null) {
                if (n.equals(BigInteger.ZERO))
                    v = ackermann(m.subtract(BigInteger.ONE), BigInteger.ONE);
                else
                    v = ackermann(m.subtract(BigInteger.ONE), ackermann(m, n.subtract(BigInteger.ONE)));
            }

            put(m, n, v);

            return v;
        }
    }

    private BigInteger get(BigInteger m, BigInteger n) {
        Map<BigInteger, BigInteger> t = cache.get(m);

        return (t == null) ? null : t.get(n);
    }

    private void put(BigInteger m, BigInteger n, BigInteger v) {
        cache.computeIfAbsent(m, k -> new HashMap<>()).put(n, v);
    }
}
