const { Op, Sequelize, where } = require("sequelize");
const iAsync = require("async");
const helper = require("../utils/helper.utils");
const model = require("../models");
const config = require("../config/app");

const date = new Date();

module.exports = {
    add: (req, res) => {
        const page = req.headers["page"]; 
        const pub_order = req.headers["pub_order"];
        const admin_identify = req.headers["identify"];
        const file = req.file;
        
        const image_path = file ==null?null: file.fieldname == "pub_image"? file.path:null;
        if(!image_path) return res.json({status:404, success: false, error:"file not found"});
        //console.log("Value xxxxxxxxxxxxxxxxxx",image);
        iAsync.waterfall([
            (done) => {
                model.admins.findOne({
                    where: { identifier: admin_identify, role: "admin_s", adm_enable: 1 }
                }).then((admin) => {
                    done(null, admin);
                }).catch((err) => {
                    return res.json({
                        status: 500,
                        success: false,
                        error: "1 " + err
                    })
                });
            },(admin, done) =>{
                if(admin){
                    
                    model.pub_images.findOrCreate({
                        where:{page:page,order:pub_order},
                        defaults:{  
                            created_at: date.getTime(),
                            page: page,
                            order: pub_order,
                            inline: 1,
                            path: image_path,
                          
                        }
                    }).then(([image_found, created]) =>{
                        if(!created){
                            image_found.path = image_path;  
                            image_found.updated_at = date.getTime();
                            image_found.save();
                        }
                        done(null,admin,image_found);

                    })
                    .catch((error) =>{
                        return res.json({
                            status: 500,
                            success: false,
                            error: "ds "+error
                        })
                    })
                }else{
                    return res.json({
						status: 403,
						success: false,
						error: "Permission problem"
					});
                }
            },(admin, image_found, done) =>{
                model.histories.create({
                    action: "Ajouter de l'image "+image_found.image+" à la page "+image_found.page+" niveau "+image_found.order,
                    admin_id: admin.id,
                    created_at: date.getTime()
                }).then((_) =>{
                    done(admin,image_found);
                }).catch((error) =>{
                    return res.json({
                        status: 500,
                        success: false,
                        error: ""+error
                    })
                })
            }
        ],(admin, image_found) =>{
            if(image_found){
                return res.json({
                    status: 200,
                    success: true,
                    response: "Image added successfully"
                });
            }else {
                return res.json({
                    status: 403,
                    success: false,
                    error: "failed"
                });
            }
        })
    },
    all:(req, res) =>{
        model.pub_images.findAll()
        .then((pubs) =>{
            return res.json({
                status: 200,
                success:true,
                pubs: pubs
            })
        })
        .catch((error) =>{
            return res.json({
                status:500,
                success: false,
                error: ""+error
            })
        })
    }
}