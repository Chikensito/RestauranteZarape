package edu.utl.ldsm401.restaurante.modelo;

/**
 *
 * @author mauca
 */
//1 Declararcion de la clase 
public class Sucursal {
    //2 Declaracion de atributos
    int idSucursal;
    String nombre;
    String latitud;
    String longitud;
    String foto;
    String urlWeb;
    String horarios;
    String calle;
    String numCalle;
    String colonia;
    Ciudad ciudad;
    int activo;
    
    //3 Constructor
        //3.1 Contructor vacio
      public Sucursal() {
    }
        //3.2 constructor cargado 
    public Sucursal(int idSucursal, String nombre, String latitud, String longitud, String foto, String urlWeb, String horarios, String calle, String numCalle, String colonia, Ciudad ciudad, int activo) {
        this.idSucursal = idSucursal;
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
        this.foto = foto;
        this.urlWeb = urlWeb;
        this.horarios = horarios;
        this.calle = calle;
        this.numCalle = numCalle;
        this.colonia = colonia;
        this.ciudad = ciudad;
        this.activo = activo;
    }
    //4 Metodos get y set 
    public int getIdSucursal() {
        return idSucursal;
    }

    public void setIdSucursal(int idSucursal) {
        this.idSucursal = idSucursal;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getLatitud() {
        return latitud;
    }

    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getUrlWeb() {
        return urlWeb;
    }

    public void setUrlWeb(String urlWeb) {
        this.urlWeb = urlWeb;
    }

    public String getHorarios() {
        return horarios;
    }

    public void setHorarios(String horarios) {
        this.horarios = horarios;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getNumCalle() {
        return numCalle;
    }

    public void setNumCalle(String numCalle) {
        this.numCalle = numCalle;
    }

    public String getColonia() {
        return colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
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
        sb.append("Sucursal{");
        sb.append("idSucursal=").append(idSucursal);
        sb.append(", nombre=").append(nombre);
        sb.append(", latitud=").append(latitud);
        sb.append(", longitud=").append(longitud);
        sb.append(", foto=").append(foto);
        sb.append(", urlWeb=").append(urlWeb);
        sb.append(", horarios=").append(horarios);
        sb.append(", calle=").append(calle);
        sb.append(", numCalle=").append(numCalle);
        sb.append(", colonia=").append(colonia);
        sb.append(", ciudad=").append(ciudad);
        sb.append(", activo=").append(activo);
        sb.append('}');
        return sb.toString();
    }
}
