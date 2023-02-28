import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductsQuantity: (id: number, count:number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductsQuantity,
}: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{ marginBottom: '30px' }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductsQuantity={changeProductsQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
