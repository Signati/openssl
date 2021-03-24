import {getOsComandBin} from '../utils';
import * as execa from "execa";
import {commandSync} from "execa";

export class CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public opensslBin = '';

    constructor() {
        this.opensslBin = getOsComandBin();
        this.commandline = this.opensslBin;
    }
    public inform(options: 'DER' | 'PEM') {
        this.commandline += ` -inform ${options}`;
        this.commandlineArray.push(`-inform ${options}`);
        return this;
    }

    public outform(options: 'DER' | 'PEM') {
        this.commandline += ` -outform  ${options}`;
        this.commandlineArray.push(`-outform ${options}`);
        return this;
    }

    public in(filename: string) {
        this.commandline += ` -in  ${filename}`;
        this.commandlineArray.push(`-in ${filename}`);
        return this;
    }

    public passin(arg: string) {
        this.commandline += ` -passin pass:${arg}`;
        this.commandlineArray.push(`-passin pass:${arg}`);
        return this;
    }

    public run(options?: execa.SyncOptions): string {
        try {
            const saxonProc = commandSync(this.commandline, options).stdout;
            return saxonProc;
        } catch (e) {
            throw new Error(e.message);

        }
    }
}