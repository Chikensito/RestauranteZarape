package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 Declararcion de la clase 
public class Estado {
    //2 Declaracion de atributos
    
    private int idEstado;
    private String nombre;
    
    //3 Constructor
    //3.1 Contructor vacio 
    public Estado(){}
    
    //3.2 constructor cargado 
    public Estado(int idEstado,String nombre){
        this.idEstado=idEstado;
        this.nombre=nombre;
    }
    //4 Metodos get y set 
    public void setIdEstado(int idEstado){
        this.idEstado=idEstado;
    }
    
     public int getIdEstado() {
        return idEstado;
    }  
     
    public String getNombre() {
        return nombre;
    }
    
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
    
    //5 Metodo toString

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Estado{");
        sb. append ("idEstado="). append (idEstado) ; 
        sb. append (", nombre="). append (nombre) ;
        sb. append ('}');
        return sb.toString();
    }
    
    
}
