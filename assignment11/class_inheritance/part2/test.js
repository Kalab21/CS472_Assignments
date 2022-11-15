"use strict";

describe("Account", function () {

    describe("check the account information after create", function (){
        const account = new Account(66000000);

        it("check the account number", function () {
            assert.equal("66000000", account.getNumber());
        });
    
        it("check the account balance", function () {
            assert.equal("0", account.getBalance());
        });
    });

    describe("check the account information after deposit 6000", function (){
        const account = new Account(66000000);
        account.deposit(6000);

        it("check the account balance", function () {
            assert.equal("6000", account.getBalance());
        });
    });

    describe("check the account info after withdraw 2500", function (){
        const account = new Account(66000000);
        account.deposit(6000);
        account.withdraw(3000);

        it("check the account balance", function () {
            assert.equal("3000", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 66000000: balance 3000", account.toString());
        });
    });

});

describe("SavingsAccount", function () {

    describe("check the account info after interest is deposited", function (){
        const account = new SavingsAccount(76000000, 10);
        
        account.deposit(10000);
        account.addInterest();

        it("check the account balance", function () {
            assert.equal("11000", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 76000000: balance 11000: interest 10%", account.toString());
        });
    });

});

describe("CheckingAccount", function () {

    describe("check the account info for negative balance", function (){
        const account = new CheckingAccount(86000000, 200);
        
        account.deposit(4500);
        account.withdraw(3600);

        it("check the account balance", function () {
            assert.equal("900", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 86000000: balance 900: overdraft limit 200", account.toString());
        });
    });

});

describe("Bank", function () {

    describe("Add all types of bank and check the account reports", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check account info for all accounts", function () {
            assert.equal("Account 4001: balance 6000\nAccount 4002: balance 8000: interest 10%\nAccount 4003: balance 1000: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and remove the saving account", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        bank.closeAccount(savingAcnr);

        it("check account info for all accounts", function () {
            assert.equal("Account 4004: balance 6000\nAccount 4006: balance 1000: overdraft limit 2000", bank.accountReport());
        });

    });

    describe("Add all types of bank and check end of month report", function (){
        const bank = new Bank();

        const acnr = bank.addAccount();
        const savingAcnr = bank.addSavingsAccount(10);
        const checkingAcnr = bank.addCheckingAccount(2000);

        it("check end of month report", function () {
            assert.equal("Interest added SavingsAccount 4008: balance: 8800 interest: 800\nundefined low balance CheckingAccount 4009: balance: 100 overdraft limit: 2000", bank.endOfMonth());
        });

    });

});