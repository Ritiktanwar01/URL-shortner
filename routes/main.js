const express = require("express")
const router = express.Router()
const crypto = require('crypto');
const URLs = require("../models/urldb")



function generatePassword(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const bytes = crypto.randomBytes(length);
    let password = '';

    for (let i = 0; i < length; i++) {
        const index = bytes[i] % chars.length;
        password += chars[index];
    }

    return password;
}



router.post("/create", async (req, res) => {

    try {
        const { URL } = req.body


        const check = await URLs.findOne({ mainSite: URL })

        if (check) {
            res.status(400).json({messege:"url already exists"})
        }else{

            const createOneURL = new URLs.create({
                mainSite: URL,
                shortenLink:generatePassword(),
                visites : 0
            })

            await createOneURL.save()

            res.status(200).json({messege:"success",newURL : createOneURL.shortenLink})
        }


    } catch (error) {
        console.log({ "err": error })
        res.status(500).json({ messege: "something went wrong" })
    }

})





router.get("/url/:id",async (req,res)=>{
    try {
        const {id} = req.params

        let getLink = await URLs.findOne({shortenLink:id})

        if (getLink){
           let v =  getLink.visites
           await getLink.updateOne({visites:v+1})
            res.redirect(getLink.mainSite)
        }else{
            res.status(400).json({messege:"link not found"})
        }

    } catch (error) {
        
    }
})

module.exports = router