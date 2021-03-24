import {commandSync} from 'execa';
import {getOsComandBin} from '../utils';
import {CliShare} from './cliShare';
class Pkcs8 extends CliShare {
    public commandline = '';
    public commandlineArray: string[] = [];
    public opensslBin = '';

    constructor() {
        super();
        this.opensslBin = getOsComandBin();
        this.commandline = this.opensslBin + ' pkcs8';
    }

}
export const pkcs8 = new Pkcs8()