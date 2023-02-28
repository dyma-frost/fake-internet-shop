import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from 'utils/productsArray'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductsQuantity: (id: number, count: number) => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductsQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price fot one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() => productCount <=1 ? removeProductFromCart(product.id) :
                            changeProductsQuantity(product.id, productCount - 1)
                        }
                        onIncrement={() =>
                            changeProductsQuantity(product.id, productCount + 1)
                        }
                        minCount = {0}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
