import User from "../../models"
import user from "../../models"
import db from "../../../config/db"

export default {
 
    async register(user: User): Promise<any> {
        await db.user.create({
            
        })
    }   

}