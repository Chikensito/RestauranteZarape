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
public class Alimento {
   //2 Declaracion de atributos
    int idAlimento;
    int idProducto;
//3 Constructor
    //3.1 Contructor vacio 
    public Alimento() {
    }
    //3.2 constructor cargado 
    public Alimento(int idAlimento, int idProducto) {
        this.idAlimento = idAlimento;
        this.idProducto = idProducto;
    }

//4 Metodos get y set 
    public int getIdAlimento() {
        return idAlimento;
    }

    public void setIdAlimento(int idAlimento) {
        this.idAlimento = idAlimento;
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
        sb.append("Alimento{");
        sb.append("idAlimento=").append(idAlimento);
        sb.append(", idProducto=").append(idProducto);
        sb.append('}');
        return sb.toString();
    }   
}
