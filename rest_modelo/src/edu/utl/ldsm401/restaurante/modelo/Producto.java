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
public class Producto {
//2 Declaracion de atributos
    int idProducto;
    String nombre;
    String descripcion;
    String foto;
    double precio;
    int categoria;
    int activo;
//3 Constructor
    //3.1 Contructor vacio 
    public Producto() {
    }
    //3.2 constructor cargado 
    public Producto(int idProducto, String nombre, String descripcion, String foto, double precio, int categoria, int activo) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
        this.precio = precio;
        this.categoria = categoria;
        this.activo = activo;
    }
//4 Metodos get y set 
    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getCategoria() {
        return categoria;
    }

    public void setCategoria(int categoria) {
        this.categoria = categoria;
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
        sb.append("Producto{");
        sb.append("idProducto=").append(idProducto);
        sb.append(", nombre=").append(nombre);
        sb.append(", descripcion=").append(descripcion);
        sb.append(", foto=").append(foto);
        sb.append(", precio=").append(precio);
        sb.append(", categoria=").append(categoria);
        sb.append(", activo=").append(activo);
        sb.append('}');
        return sb.toString();
    }

    

    

    

}
