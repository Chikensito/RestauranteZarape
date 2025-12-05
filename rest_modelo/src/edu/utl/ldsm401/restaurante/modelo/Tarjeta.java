package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 Declararcion de la clase 
public class Tarjeta {
        //2 Declaracion de atributos
    private String titular;
    private String numero;
    private String yy;
    private String mm;
    private String cvv;
    private String calle;
    private String colonia;
    private String cp;
    int activo;
//3 Constructor
    //3.1 Contructor vacio 
    public Tarjeta() {}
    //3.2 constructor cargado 
    public Tarjeta(String titular, String numero, String yy, String mm, String cvv, String calle, String colonia, String cp, int activo) {
        this.titular = titular;
        this.numero = numero;
        this.yy = yy;
        this.mm = mm;
        this.cvv = cvv;
        this.calle = calle;
        this.colonia = colonia;
        this.cp = cp;
        this.activo = activo;
    }
//4 Metodos get y set 
    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getYy() {
        return yy;
    }

    public void setYy(String yy) {
        this.yy = yy;
    }

    public String getMm() {
        return mm;
    }

    public void setMm(String mm) {
        this.mm = mm;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getColonia() {
        return colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public String getCp() {
        return cp;
    }

    public void setCp(String cp) {
        this.cp = cp;
    }

    public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo = activo;
    }
//5 Metodo toString
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("tarjeta{");
        sb.append("titular=").append(titular);
        sb.append(", numero=").append(numero);
        sb.append(", yy=").append(yy);
        sb.append(", mm=").append(mm);
        sb.append(", cvv=").append(cvv);
        sb.append(", calle=").append(calle);
        sb.append(", colonia=").append(colonia);
        sb.append(", cp=").append(cp);
        sb.append(", activo=").append(activo);
        sb.append('}');
        return sb.toString();
    }
}
