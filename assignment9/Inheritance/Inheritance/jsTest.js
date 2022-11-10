function tester(){
    let T = new Teacher();
    T.initialize("John", 30);
    T.teach("Inheritance");
    
    describe("filter", function(){
        it("removes banned words from a string", function(){
            assert.equal("This house is nice!", "This house is not nice!".filter('not'))
        })
    })

    describe("bubbleSort", function(){
        it("Sorts an array in an ascending order", function(){
            expect([-2, 0, 1, 3, 4, 6]).to.eql([6,4,0, 3,-2,1].bubbleSort());
        })
    })
    describe("teach", function(){
        it("recieves a string called subject and returns the teacher with the subject", function(){
            assert.equal("John is now teaching Inheritance", T.teach("Inheritance"));
        })
    }) 
}

tester();