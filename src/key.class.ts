import * as fs from 'fs';
import {pkcs8} from './openssl/pkcs8';
import {openssl} from './utils/Openssl';

class KeyClass {

    public async getKey(keyfile: string, password: string): Promise<string> {
        return await pkcs8.getPrivateKey(keyfile, password).privateKeyPem;
    }

    public async generaKeyPem(filePathKey: string, outputpath: string) {
        return 1;
    }

    public async getKeyPem(keyfile: string, title: boolean = false) {
        try {
            const pem = await fs.readFileSync(keyfile);
            // tslint:disable-next-line:no-shadowed-variable
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
