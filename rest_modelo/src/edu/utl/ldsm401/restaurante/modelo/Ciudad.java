/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//clase
public class Ciudad {
    //atributos
    int idCiudad;
    String nombre;
    Estado estado;
    
    //contructores 
    public Ciudad() {
    }

    public Ciudad(int idCiudad, String nombre, Estado estado) {
        this.idCiudad = idCiudad;
        this.nombre = nombre;
        this.estado = estado;
    }

    //get y set 

    public void setIdCiudad(int idCiudad) {
        this.idCiudad = idCiudad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
    
    public int getIdCiudad() {
        return idCiudad;
    }

    public String getNombre() {
        return nombre;
    }

    public Estado getEstado() {
        return estado;
    }
    
    //toString
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Ciudad{");
        sb.append("idCiudad=").append(idCiudad);
        sb.append(", nombre=").append(nombre);
        sb.append(", estado=").append(estado);
        sb.append('}');
        return sb.toString();
    }
    
    
    
    
}
