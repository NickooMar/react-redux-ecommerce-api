import React from 'react'
import { Grid } from "@material-ui/core";

import Banner from '../../assets/Banner.jpg'

import Product from "./Product/Product";
import useStyles from "./styles";



const Products = ({ products, onAddToCart }) => {

    const classes = useStyles()


    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <img src={Banner} alt="Banner" style={{height: '100%', width: '100%', marginBottom: '5%'}}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
