package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 Declararcion de la clase 
public class Bebida {
   //2 Declaracion de atributos
    int idBebida;
    int idProducto;
//3 Constructor
    //3.1 Contructor vacio 
    public Bebida() {
    }
    //3.2 constructor cargado 
    public Bebida(int idBebida, int idProducto) {
        this.idBebida = idBebida;
        this.idProducto = idProducto;
    }
//4 Metodos get y set 
    public int getIdBebida() {
        return idBebida;
    }

    public void setIdBebida(int idBebida) {
        this.idBebida = idBebida;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }
//5 Metodo toString 
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Bebida{");
        sb.append("idBebida=").append(idBebida);
        sb.append(", idProducto=").append(idProducto);
        sb.append('}');
        return sb.toString();
    }    
}
