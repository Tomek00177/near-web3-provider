const utils = require('../src/utils');

describe('utils', () => {
    describe('#remove0x', () => {
        test('removes 0x from value', () => {
            const value = '0x0000';
            const result = utils.remove0x(value);
            expect(result).toEqual('0000');
        });

        test('returns string', () => {
            const value = '0x0000';
            const result = utils.remove0x(value);
            expect(typeof result).toEqual('string');
        });

        test('errors if arg is not string', () => {
            const value = 10;
            expect(() => utils.remove0x(value)).toThrow();
        });
    });

    describe('#include0x', () => {
        test('adds 0x to value without 0x', () => {
            const value = '0000';
            const result = utils.include0x(value);
            expect(result).toEqual('0x0000');
        });

        test('does not add extra 0x if value already contains 0x', () => {
            const value = '0x0000';
            const result = utils.include0x(value);
            expect(result).toEqual('0x0000');
        });

        test('returns string', () => {
            const value = '0x0000';
            const result = utils.include0x(value);
            expect(typeof result).toEqual('string');
        });

        test('errors if arg is not string', () => {
            const value = 10;
            expect(() => utils.include0x(value)).toThrow();
        });
    });

    describe('#isHex', () => {
        test('returns true if string is hex', () => {
            const value = '0x0000';
            const isHex = utils.isHex(value);
            expect(isHex).toBe(true);
        });

        test('returns false if string is not hex', () => {
            const value = 'HyvTTSooKwerRvo1bv5y16SNNCQivBtYtreHnDwdp4m9';
            const isHex = utils.isHex(value);
            expect(isHex).toBe(false);
        });

        test('errors if arg is not string', () => {
            const value = 12;
            expect(() => utils.isHex(value)).toThrow();
        });
    });

    describe('#decToHex', () => {

    });

    describe('#hexToDec', () => {

    });

    describe('#base58ToHex', () => {

    });

    describe('#hexToBase58', () => {

    });

    describe('#base64ToHex', () => {

    });

    describe('#base64ToString', () => {

    });

    describe('#convertTimestamp', () => {

    });

    describe('#getTxHashAndAccountId', () => {
        test('splits txHash and accountId', () => {
            const base58Hash = 'ByGDjvYxVZDxv69c86tFCFDRnJqK4zvj9uz4QVR4bH4P'
            const txHashAndAccountId = `${base58Hash}:accountid`;
            const result = utils.getTxHashAndAccountId(txHashAndAccountId);
            expect(typeof result).toEqual('object');
            expect(result.txHash).toEqual(base58Hash);
            expect(result.accountId).toEqual('accountid');
        });
    });

    describe('#nearAccountToEvmAddress', () => {
        test('calculates addresses correctly', () => {
            expect(utils.nearAccountToEvmAddress('test.near'))
                .toEqual('0xcbda96b3f2b8eb962f97ae50c3852ca976740e2b');
        });
    });
});
