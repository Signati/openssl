import {readFileSync} from '../utils';
import {certificate} from './certificate';

class Cer {
    public async generaCerPem(filePathCer: string, outputpath: string) {
        return 1;
    }

    public getCer(cerpath: string): {
        cer: string;
        nocer: string;
    } {
        return {
            cer: certificate.getCerPem(cerpath).certificate,
            nocer: certificate.getNoCer(cerpath)
        };
    }

    public async getCerPem(cerpempath: string, title: boolean = false) {
        try {
            let cerpem = readFileSync(cerpempath);
            if (title) {
                cerpem = cerpem.replace(/(-+[^-]+-+)/g, '');
                cerpem = cerpem.replace(/\s+/g, '');
            }
            return cerpem;
        } catch (e) {
            return e.message;
        }
    }

    public async agetCerPem(cerpempath: string) {
        return 1;
    }

    public async getCerFile(cerfile: string) {
        return 1;
    }

    public async getFechaInicio() {
        return 1;
    }

    public async getSerialCert() {
        return 1;
    }

    public async getFechaVigencia() {
        return 1;
    }

    public async validarCertificado() {
        return 1;
    }

    public async generaPFX() {
        return 1;
    }


    public async pareja() {
        return 1;
    }

    public async certificadoBase64(nombreCer: any) {
        return 1;
    }
}

export const cer = new Cer();
