package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 declarar clase
public class Cliente {
    //2 declarar atributos
    private int idCliente;
    private int idPersona;
    private int activo;
    //3constructor   
    //3.1 constructor vacio

    public Cliente() {
    }    
    //3.2 constructor cargado
    public Cliente(int idCliente, int idPersona, int activo) {
        this.idCliente = idCliente;
        this.idPersona = idPersona;
        this.activo = activo;
    }
    //4 metodos get and set
    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo = activo;
    }
    //5 metodo toString

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Cliente{");
        sb.append("idCliente=").append(idCliente);
        sb.append(", idPersona=").append(idPersona);
        sb.append(", activo=").append(activo);
        sb.append('}');
        return sb.toString();
    }    
}
