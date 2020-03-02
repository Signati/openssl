import {cer, key} from '../index'
import {pkcs8Class} from '../openssl/pkcs8.class';
import {x509} from '../openssl/x509.class';

describe('Create x509', () => {
    test('Return this text .cer', () => {
        const useX509 = async () => {
            const keyCertificates = await pkcs8Class.getPrivateKey('src/certificados/LAN7008173R5.key', '12345678a');
            // console.log(keyCertificates)
        }
        expect(useX509());
    })
});
