import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

import { calculate } from "./factorial.ts";

Deno.test("factorial 0", () => {
  assertEquals(calculate(0n), 1n);
});

Deno.test("factorial 1", () => {
  assertEquals(calculate(1n), 1n);
});

Deno.test("factorial 2", () => {
  assertEquals(calculate(2n), 2n);
});

Deno.test("factorial 3", () => {
  assertEquals(calculate(3n), 6n);
});

Deno.test("factorial 100", () => {
  assertEquals(
    calculate(100n),
    93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n,
  );
});
