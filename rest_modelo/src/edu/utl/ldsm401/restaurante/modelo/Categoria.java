/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 Declararcion de la clase 
public class Categoria {
    //2 Declaracion de atributos
    int idCategoria;
    String descripcion;
    String tipo;
    int activo;
//3 Constructor
    //3.1 Contructor vacio 
    public Categoria() {
    }
    //3.2 constructor cargado 
    public Categoria(int idCategoria, String descripcion, String tipo, int activo) {
        this.idCategoria = idCategoria;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.activo = activo;
    }
//4 Metodos get y set 
    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
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
        sb.append("Categoria{");
        sb.append("idCategoria=").append(idCategoria);
        sb.append(", descripcion=").append(descripcion);
        sb.append(", tipo=").append(tipo);
        sb.append(", activo=").append(activo);
        sb.append('}');
        return sb.toString();
    }

    

    

    
}
