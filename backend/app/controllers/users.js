const CustomError = require("../config/helpers/error");

async function getdatos_user(params) {
    const query = await mysqlConnection({U: "PORTAL_USER"})
    
    if("user_id" in params) {
        query.where("user_id", params.user_id);
    }
    if("email" in params) {
        query.where("email", params.email);
    }

    const lista = await query.select(
        "USER_NAME AS NAME", 
        "USER_LASTNAME AS LASTNAME", 
        "USER_EMAIL AS EMAIL", 
        "USER_PASSWORD AS PASSWORD", 
        "USER_ROLE AS ROLE",
    )

    return lista;
}

async function insert_user(params) {
    if(("email" in params) && ("password" in params) && ("name" in params) && ("lastname" in params) && ("role" in params)) {
        
        const query = await mysqlConnection({U: "PORTAL_USER"})
        .where("USER_EMAIL", params.email)
        .first();

        if(!query){
            await mysqlConnection("PORTAL_USER")
            .insert({
                USER_NAME: params.name,
                USER_LASTNAME: params.lastname,
                USER_EMAIL: params.email,
                USER_PASSWORD: params.password,
                USER_ROLE: params.role
            })
            .catch((err) => {
                console_log({ err });
                throw new CustomError("Error al insertar el usuario", "DatabaseError");
            });
            return {
                message: "Usuario creado correctamente",
            };
        } else {
            throw new CustomError("Ya existe un usuario con ese correo", "ValidationError");
        }
    } else {
        throw new CustomError("Faltan parametros requeridos", "ValidationError");
    }
}

async function update_user(params) {
    if(("email" in params) && ("password" in params) && ("name" in params) && ("lastname" in params) && ("role" in params) && ("user_id" in params)) {
        
        const query = await mysqlConnection({U: "PORTAL_USER"})
        .where("USER_EMAIL", params.email)
        .whereNot("USER_ID", params.user_id)
        .first();

        if(!query){
            await mysqlConnection("PORTAL_USER")
            .where("USER_ID", params.user_id)
            .update({
                USER_NAME: params.name,
                USER_LASTNAME: params.lastname,
                USER_EMAIL: params.email,
                USER_PASSWORD: params.password,
                USER_ROLE: params.role
            })
            .catch((err) => {
                console_log({ err });
                throw new CustomError("Error al actualizar el usuario", "DatabaseError");
            });
            return {
                message: "Usuario actualizado correctamente",
            };
        } else {
            throw new CustomError("Existe un usuario con ese correo", "ValidationError");
        }
    } else {
        throw new CustomError("Faltan parametros requeridos", "ValidationError");
    }
}

module.exports = {
    getdatos_user, insert_user, update_user
}