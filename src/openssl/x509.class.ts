import {commandSync} from 'execa';
import {pki} from 'node-forge';
import {Certificate} from '../interface/certificate.interface';
import {getOsComandBin} from '../utils'

class X509Class {
    public async text(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -text`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async pubkey(cer: string): Promise<{ pubkeyData: string; pubkey: string }> {
        try {
            const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -pubkey`).stdout;
            const pubkey = {
                pubkey: result,
                pubkeyData: '',
            }
            pubkey.pubkeyData = result.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '');
            return pubkey;
        } catch (e) {
            return e.message
        }
    }

    public async modulus(cer: string): Promise<{ modulus: string }> {
        try {
            const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -modulus`).stdout
            const modul = {
                modulus: result.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return modul

        } catch (e) {
            return e.message
        }
    }

    public async serial(cer: string): Promise<{ serial: string }> {
        try {
            const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -serial`).stdout
            const seria = {
                serial: result.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return seria;
        } catch (e) {
            return e.message
        }
    }

    public async subjectHash(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHash(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspid(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocspid`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async hash(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async subjectHashOld(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHashOld(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async subject(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuer(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async email(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -email`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspUri(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocsp_uri`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async startDate(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -startdate`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async endDate(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -enddate`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async Dates(cer: string): Promise<string> {
        try {
            return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -dates`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async checkend(cer: string, seconds: string | number): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -checkend ${seconds}`).stdout
            return check
        } catch (e) {
            return e.message
        }
    }

    public async fingerPrint(cer: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -fingerprint`).stdout
            return check
        } catch (e) {
            return e.message
        }
    }

    public async C(cer: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -C`).stdout
            return check
        } catch (e) {
            return e.message
        }
    }

    public getCerPem(cer: string): Certificate {
        try {
            const pem = commandSync(`${getOsComandBin()} x509 -inform DER -in ${cer} -outform PEM`).stdout

            const cerPem = {
                cerPem: pem,
                certificate: pem.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '')
            }
            return cerPem

        } catch (e) {
            return e.message
        }
    }


    public getNoCer(cer: string): string {
        try {
            const pem = commandSync(`${getOsComandBin()} x509 -inform DER -in ${cer} -outform PEM`).stdout
            // @ts-ignore
            const serialNumber = pki.certificateFromPem(pem).serialNumber.match(/.{1,2}/g).map((v) => {
                return String.fromCharCode(parseInt(v, 16));
            }).join('');
            return serialNumber;
        } catch (e) {
            return e.message
        }
    }

}

export const x509 = new X509Class();
