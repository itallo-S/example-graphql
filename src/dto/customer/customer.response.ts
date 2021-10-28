export interface CustomerResponse {
    id:string   
    cpf:string
    branchStoreSourceId:number
    lastUpdateSource:string
    name:string
    dateOfBirth:string
    emailStore:string
    logo:string
    genderType:string
    telephones:Telephones []
    addresses:Addresses []
    cardValues:CardValues []
    lgpd:Lgpd
    rg:Rg
}

interface Telephones {
    id:string
    ddd:string
    number:string
    type:string
}

interface Addresses {
    id: string
    streetName: string
    number: number
    neighborhood: string
    zipCode: number
    city: string
    state: string
    addressType: string
}

interface CardValues {
    legacyId: number,
    groupId: number,
    cardNumber: number,
    cardType: string,
    cardTypeCode: number,
    cardTypeDescription: string,
    cdCustomer: number,
    dgCustomer: number
}


interface Lgpd {
    legacyId: number
    logo: string
    consentMap:ConsentMap
    actionTypeDescription: string
    actionTypeCode: number
}

interface ConsentMap {
    1: string
    2:string
    3: string
    4:string
    5: string
    6: string
    7:string
}

interface Rg {
    number:string
}