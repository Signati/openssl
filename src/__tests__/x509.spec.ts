import {x509} from '../openssl/x509.class';

describe('Create x509', () => {

    /*test('Return this text .cer', () => {
        const useX509 = async () => {
            const text = await x509.text('src/certificados/LAN7008173R5.cer')
            console.log(text)
        }
        expect(useX509());
    })
   test('Return this pubKey .cer', () => {
        const useX509 = async () => {
            const pubKey = await x509.pubkey('src/certificados/LAN7008173R5.cer')
            console.log(pubKey)
        }
        expect(useX509());
    })
    test('Return this modulus .cer', () => {
        const useX509 = async () => {
            const modulus = await x509.modulus('src/certificados/LAN7008173R5.cer')
            console.log(modulus)
        }
        expect(useX509());
    })

    test('Return this serial .cer', () => {
        const useX509 = async () => {
            const serial = await x509.serial('src/certificados/LAN7008173R5.cer')
            console.log(serial)
        }
        expect(useX509());
    })

    test('Return this subject_hash .cer', () => {
        const useX509 = async () => {
            const subjectHash = await x509.subjectHash('src/certificados/LAN7008173R5.cer')
            console.log(subjectHash)
        }
        expect(useX509());
    })

    test('Return this issuer_hash .cer', () => {
        const useX509 = async () => {
            const issuerHash = await x509.issuerHash('src/certificados/LAN7008173R5.cer')
            console.log(issuerHash)
        }
        expect(useX509());
    })

    test('Return this ocspid .cer', () => {
        const useX509 = async () => {
            const ocspid = await x509.ocspid('src/certificados/LAN7008173R5.cer')
            console.log(ocspid)
        }
        expect(useX509());
    })
*/
    /*
        test('Return this hash .cer', () => {
            const useX509 = async () => {
                const hash = await x509.hash('src/certificados/LAN7008173R5.cer')
                console.log(hash)
            }
            expect(useX509());
        })

        test('Return this subject_hash_old .cer', () => {
            const useX509 = async () => {
                const subjectHashOld = await x509.subjectHashOld('src/certificados/LAN7008173R5.cer')
                console.log(subjectHashOld)
            }
            expect(useX509());
        })

        test('Return this issuer_hash_old .cer', () => {
            const useX509 = async () => {
                const issuerHashOld = await x509.issuerHashOld('src/certificados/LAN7008173R5.cer')
                console.log(issuerHashOld)
            }
            expect(useX509());
        })

        test('Return this subject .cer', () => {
            const useX509 = async () => {
                const subject = await x509.subject('src/certificados/LAN7008173R5.cer')
                console.log(subject)
            }
            expect(useX509());
        })

        test('Return this issuer .cer', () => {
            const useX509 = async () => {
                const issuer = await x509.issuer('src/certificados/LAN7008173R5.cer')
                console.log(issuer)
            }
            expect(useX509());
        })

        test('Return this email .cer', () => {
            const useX509 = async () => {
                const email = await x509.email('src/certificados/LAN7008173R5.cer')
                console.log(email)
            }
            expect(useX509());
        })

        test('Return this ocspUri .cer', () => {
            const useX509 = async () => {
                const ocspUri = await x509.ocspUri('src/certificados/LAN7008173R5.cer')
                console.log(ocspUri)
            }
            expect(useX509());
        })

        test('Return this startDate .cer', () => {
            const useX509 = async () => {
                const startDate = await x509.startDate('src/certificados/LAN7008173R5.cer')
                console.log(startDate)
            }
            expect(useX509());
        })

        test('Return this endDate .cer', () => {
            const useX509 = async () => {
                const endDate = await x509.endDate('src/certificados/LAN7008173R5.cer')
                console.log(endDate)
            }
            expect(useX509());
        })

        test('Return this Dates .cer', () => {
            const useX509 = async () => {
                const Dates = await x509.Dates('src/certificados/LAN7008173R5.cer')
                console.log(Dates)
            }
            expect(useX509());
        })


        test('Return this cheked .cer', () => {
            const useX509 = async () => {
                const checkend = await x509.checkend('src/certificados/LAN7008173R5.cer', 800000)
                console.log(checkend)
            }
            expect(useX509());
        })

        test('Return this fingerprint .cer', () => {
            const useX509 = async () => {
                const fingerprint = await x509.fingerPrint('src/certificados/LAN7008173R5.cer')
                console.log(fingerprint)
            }
            expect(useX509());
        })

        test('Return this c .cer', () => {
            const useX509 = async () => {
                const c = await x509.C('src/certificados/LAN7008173R5.cer')
                console.log(c)
            }
            expect(useX509());
        })

    */
        test('Return this pem .cer', () => {
            const useX509 = async () => {
                const pem = await x509.getCerPem('src/certificados/maca961017759.cer')
                console.log(pem)
            }
            expect(useX509());
        })

        test('Return this No Cer .cer', () => {
            const useX509 = async () => {
                const noCer = await x509.getNoCer('src/certificados/maca961017759.cer')
                console.log(noCer)
            }
            expect(useX509());
        })

});
