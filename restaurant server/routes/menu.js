const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async(req, res)=>{
    try {
        const menuItems =  await MenuItem.find();
        res.json(menuItems); 
    }catch(err) {
        res.status(500).json({message: "Server error"});
    }
});


// GET a specific menu Item by ID
router.get('/:id', async (req, res)=>{
    try{
          const menuItem= await MenuItem.findById(req.params.id);
          if (menuItem ){
            res.json(menuItem);
        }else {
            res.status(404).json({ message: 'Menu item not found' });
        }
    }catch(err) {
        res.status(500).json({message: "Server error"});
    }
})


// Create a new menu item
router.post('/', async (req, res)=>{
     try{
        const {name,price}=req.body;
        const menuItem=new MenuItem({name, price});
        await menuItem.save();
        res.status(201).json(menuItem);
     }catch(err) {
        res.status(500).json({message: "Server error"});
    }

} )


// Update a menu item by ID
router.put('/:id', async (req,res)=>{
    try{
        const updatedMenuItem=await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if(updatedMenuItem) {
            res.json(updatedMenuItem);
        } else {
            res.status(404).json({message: "Menu item not found"});
        }
    }catch(err) { 
        res.status(500).json({message: "Server error"});
    }

})

// Delete a menu item by ID
router.delete('/:id', async (req, res)=>{

    try{
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if(deletedMenuItem){
            res.json({message: "Menu item deleted successfully"});
        } else {
            res.status(404).json({message: 'Menu item not found'});
        }
    }catch(err) { 
        res.status(500).json({message: "Server error"});
    }
});



module.exports = router;