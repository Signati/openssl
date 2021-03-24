import {commandSync} from 'execa';
import moment = require('moment');
import {pki} from 'node-forge';
import {AnyKey} from '../interface/certificate.interface';
import {getOsComandBin} from '../utils';
import {x509} from './x509';

class Certificate {
    public async text(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().text().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -text`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async pubkey(cer: string): Promise<{ pubkeyData: string; pubkey: string }> {
        try {
            const cli = x509.inform('DER').in(cer).noout().pubkey().run()
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -pubkey`).stdout;
            const pubkey = {
                pubkey: cli,
                pubkeyData: '',
            }
            pubkey.pubkeyData = cli.replace(/(-+[^-]+-+)/g, '').replace(/\s+/g, '');
            return pubkey;
        } catch (e) {
            return e.message
        }
    }

    public async modulu(cer: string): Promise<{ modulus: string }> {
        try {
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -modulus`).stdout
            const cli = x509.inform('DER').in(cer).noout().modulus().run()
            const modul = {
                modulus: cli.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return modul

        } catch (e) {
            return e.message
        }
    }

    public async serial(cer: string): Promise<{ serial: string }> {
        try {
            // const result = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -serial`).stdout
            const cli = x509.inform('DER').in(cer).noout().serial().run()
            const seria = {
                serial: cli.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '')
            }
            return seria;
        } catch (e) {
            return e.message
        }
    }

    public async subjectHash(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().subject_hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHash(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().issuer_hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspid(cer: string): Promise<string> {
        try {

            return x509.inform('DER').in(cer).noout().ocspid().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocspid`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async hash(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().hash().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -hash`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async subjectHashOld(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().subject_hash_old().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async issuerHashOld(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().issuer_hash_old().run()
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer_hash_old`).stdout
        } catch (e) {
            return e.message
        }
    }

    public subject(cer: string): AnyKey {
        try {
            let text = x509.inform('DER').in(cer).noout().subject().run()
            // let text = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -subject`).stdout
            text = text.replace('subject=', '');
            const stringArray = text.split(',');
            const obj: AnyKey = {};
            for (const txt of stringArray) {
                const extrac = txt.split('=');
                if (extrac.length === 2) {
                    const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    // console.log(key+val);
                    obj[key] = val;
                }
            }
            return obj;
        } catch (e) {
            return e.message
        }
    }

    public issuer(cer: string): AnyKey {
        try {
            // let text = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -issuer`, {encoding: 'utf8'}).stdout
            let text = x509.inform('DER').in(cer).noout().issuer().run({encoding: 'utf8'})
            text = text.replace('issuer=', '');
            const stringArray = text.split(',');
            // console.log(stringArray)
            const obj: AnyKey = {};
            for (const txt of stringArray) {
                const extrac = txt.split('=');
                if (extrac.length === 2) {
                    const key = extrac[0].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    const val = extrac[1].replace(/^\s+/g, '').replace(/\s+$/g, '');
                    // console.log(key+val);
                    obj[key] = val;
                }
            }
            return obj;
        } catch (e) {
            return e.message
        }
    }

    public async email(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().email().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -email`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async ocspUri(cer: string): Promise<string> {
        try {
            return x509.inform('DER').in(cer).noout().ocsp_uri().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -ocsp_uri`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async startDate(cer: string): Promise<string> {
        try {
            // let startDateCer = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -startdate`).stdout
            let startDateCer = x509.inform('DER').in(cer).noout().startdate().run();
            startDateCer = startDateCer.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = startDateCer.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : ''; // +' '+ findregex[3]
            const staff = findregex ? findregex[3] : '';
            startDateCer = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff;
            return startDateCer;
        } catch (e) {
            return e.message
        }
    }

    public async endDate(cer: string): Promise<string> {
        try {
            // let endDateCer = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -enddate`).stdout
            let endDateCer = x509.inform('DER').in(cer).noout().enddate().run();
            endDateCer = endDateCer.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = endDateCer.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : ''; // +' '+ findregex[3]
            const staff = findregex ? findregex[3] : '';
            endDateCer = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff;
            return endDateCer;
        } catch (e) {
            return e.message
        }
    }

    public async Dates(cer: string): Promise<string> {
        try {
            return  x509.inform('DER').in(cer).noout().dates().run();
            // return commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -dates`).stdout
        } catch (e) {
            return e.message
        }
    }

    public async checkend(cer: string, seconds: string | number): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -checkend ${seconds}`).stdout
            const check = x509.inform('DER').in(cer).noout().checkend(seconds).run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public async fingerPrint(cer: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -fingerprint`).stdout
            const check = x509.inform('DER').in(cer).noout().fingerprint().run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public async C(cer: string): Promise<any> {
        try {
            // Certificate will expire El certificado caducará
            // Certificate will not expire El certificado no caducará
            // const check = commandSync(`${getOsComandBin()} x509 -inform der -in ${cer} -noout -C`).stdout
            const check = x509.inform('DER').in(cer).noout().C().run();
            return check
        } catch (e) {
            return e.message
        }
    }

    public getCerPem(cer: string): { certificate: string; cerPem: string } {
        try {
            // const pem = commandSync(`${getOsComandBin()} x509 -inform DER -in ${cer} -outform PEM`).stdout
            const pem = x509.inform('DER').in(cer).outform('PEM').run();
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
            // const pem = commandSync(`${getOsComandBin()} x509 -inform DER -in ${cer} -outform PEM`).stdout
            const pem = x509.inform('DER').in(cer).outform('PEM').run();
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

export const certificate = new Certificate();