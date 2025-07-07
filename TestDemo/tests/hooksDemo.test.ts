
import {test,expect} from '@playwright/test';

test.beforeAll('before all',async()=>{
;
    console.log('Run befoer all')
})

test.beforeEach('before each ',async()=>{

    console.log('Run before each test case')
})

test('test 1',async()=>{
    console.log('Test case 1');

})

test('test 2',async()=>{
    console.log('Test case 2');
    
})

test.afterEach('after each',async()=>{

    console.log('Run after each test case');
})

test.afterAll('after all',async()=>{

    console.log('Run after all');

})