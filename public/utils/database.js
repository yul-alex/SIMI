const  mysql  =  require ( "mysql" ) ;
require ( 'dotenv' ) . config ( ) ;

const  database_url  =  proceso . env . BASE DE DATOS_URL .  reconnect = true ;

módulo . exportaciones  =  mysql . createPool (
  {
    usuario : database_url [ 1 ] ,
    contraseña : database_url [ 2 ] ,
    host : database_url [ 3 ] ,
    base de datos : database_url [ 4 ] ,
    depuración : falso
  }
) ;