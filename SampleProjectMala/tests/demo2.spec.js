const {test, expect} = require("@playwright/test")

test("First Assertion Test",()=>{
expect(100).toBe(100);
})

test("Second Assertion Test",()=>{
    expect(12.75).toBeCloseTo(12.75)
})

test("Third Assertion Test",()=>{
    expect(24).toBeGreaterThan(20)
})

test("Fourth Assertion Test",()=>{
    expect(15).toBeLessThanOrEqual(25)
})

test("Fifth Assertion Test",()=>{
    expect("mala shree").toContain("shree");
})

test("Sixth Assertion Test",()=>{
    expect("mala shree").includes("prasad").toBeTruthy()
})

test("Seventh Assertion Test",()=>{
    expect("mala shree"=="mala shree")
    })