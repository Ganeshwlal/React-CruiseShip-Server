import express from 'express'
import { CreateTour, deleteTour, getAllTour, getSingleTour, updateTour,getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'




const router = express.Router()

//CREATE NEW TOUR
    router.post('/',verifyAdmin, CreateTour)
   


//update  TOUR
router.put('/:id',verifyAdmin, updateTour)

//delete  TOUR
router.delete('/:id',verifyAdmin,  deleteTour)

//get single  TOUR
router.get('/:id',getSingleTour)

//get all TOUR
router.get('/',getAllTour)


//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

router.get('/search/getFeaturedTours', getFeaturedTour)


router.get('/search/getTourCount', getTourCount)



export default router
