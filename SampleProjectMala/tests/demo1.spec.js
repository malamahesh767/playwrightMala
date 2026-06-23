const {test, expect}=require('@playwright/test')

test("First Playwright Test",function display()
{
console.log("Hello Ganesha 1");
})
//Name of the testcase should be unique
//function => explore javascript

test("Second playwright test",function(){
    console.log("Second Anonymous function:Hello Ganesha 1!!!");
})

test("Third playwright test",()=>{
    console.log("Third Anonymous function:Hello Ganesha 2!!!");
})