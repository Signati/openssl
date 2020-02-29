import {commandSync} from 'execa';
import {getOsComandBin} from '../utils';

class Pkcs8Class {

    public getPrivateKey(keyFile: string, password: string): { privateKeyPem: string, privatekey: string } {
        try {
            const keyPem = commandSync(`${getOsComandBin()} pkcs8 -inform DER -in ${keyFile} -outform PEM -passin pass:${password}`).stdout;

            const privateKey = {
                privateKeyPem: keyPem,
                privatekey: keyPem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '')
            }
            return privateKey
        } catch (e) {
            return e.message
        }
    }
}

export const pkcs8Class = new Pkcs8Class();
