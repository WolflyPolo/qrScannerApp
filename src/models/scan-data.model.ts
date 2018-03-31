export class ScanData {
    info:string;
    tipo:string;

    constructor( texto: string) {
        this.tipo = "No definido";

        if (texto.startsWith("http")) {
            this.tipo = "http";
            this.info = texto;
        }else if (texto.startsWith("geo")) {
            this.tipo = "mapa";
        }else if (texto.startsWith("BEGIN:VCARD")) {
            this.tipo = "contacto";
        }
    }

}