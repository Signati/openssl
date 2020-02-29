import {pkcs8Class} from './openssl/pkcs8.class';
import {openssl} from './utils/Openssl';
import * as fs from 'fs';

class KeyClass {

    public async getKey(keyfile: string, password: string): Promise<string> {
        return await pkcs8Class.getPrivateKey(keyfile, password).privateKeyPem;
    }

    public async generaKeyPem(filePathKey: string, outputpath: string) {
        return 1;
    }

    public async getKeyPem(keyfile: string, title: boolean = false) {
        try {
            const pem = await fs.readFileSync(keyfile);
            let key = pem.toString('ascii');
            if (title) {
                key = key.replace(/(-+[^-]+-+)/g, '');
                key = key.replace(/\s+/g, '');
            }
            return key;
        } catch (e) {
            return e.message;
        }
    }
}
export const key = new KeyClass()
