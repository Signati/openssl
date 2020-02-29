import * as fs from 'fs';
import * as moment from 'moment';
import {pki} from 'node-forge';
import * as os from 'os';
import {AnyKey, OptionsSsl} from '../interface/certificate.interface';


class Openssl {
    public opensslbin: string = 'openssl';
        /*
    public async getStarDateCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-startdate'];
            // openssl x509 -enddate -noout -in server.crt
            // const opensslpms = ['x509', '-enddate', 'noout', `${cerpempath}`];
            let startDate: string = await terminal(this.opensslbin, opensslpms);
            // console.log(startDate);
            startDate = startDate.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = startDate.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : '';
            const staff = findregex ? findregex[3] : '';
            startDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff;
            return startDate;
        } catch (e) {
            return e;
        }
    }

    public async getEndDateCerPem(cerpempath: string) {

        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-enddate'];
            let endDate: string = await terminal(this.opensslbin, opensslpms);
            endDate = endDate.replace('notBefore=', '').replace('  ', '');
            const pattOne = new RegExp('([A-z]{3}) ([0-9]{1,2}) ([0-2][0-9]:[0-5][0-9]:[0-5][0-9]) ([0-9]{4})');
            const findregex = endDate.match(pattOne);
            const fecha = findregex ? findregex[2] + '/' + findregex[1] + '/' + findregex[4] : ''; // +' '+ findregex[3]
            const staff = findregex ? findregex[3] : '';
            endDate = moment(new Date(fecha)).format('DD/MM/YYYY') + ' ' + staff[3];
            return endDate;
        } catch (e) {
            return e;
        }
    }

    public async getSubjectCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-subject'];
            let text: any = await terminal(this.opensslbin, opensslpms);
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
            return e.message;
        }
    }

    public async getIssuerCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-issuer'];
            let text: string = await terminal(this.opensslbin, opensslpms);
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
            return e.message;
        }
    }

    public async getPubkeyCerPem(cerpempath: string, title: boolean = false) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-pubkey'];
            let pem: string = await terminal(this.opensslbin, opensslpms);
            if (title) {
                pem = pem.replace(/(-+[^-]+-+)/g, '');
                pem = pem.replace(/\s+/g, '');
            }
            return pem;
        } catch (e) {
            return e.message;
        }
    }

    public async getSerialCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-serial'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('serial=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }

    public async getModulesCerPem(cerpempath: string) {
        try {
            const opensslpms = ['x509', '-in', `${cerpempath}`, '-noout', '-modulus'];
            let text: string = await terminal(this.opensslbin, opensslpms);
            text = text.replace('Modulus=', '').replace(/^\s+/g, '').replace(/\s+$/g, '');
            return text;
        } catch (e) {
            return e.message;
        }
    }
    */
}

export const openssl = new Openssl();
