import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Highlight, Snippet } from 'react-instantsearch/dom';
import Rate from '@iso/components/uielements/rate';
import Button from '@iso/components/uielements/button';
import { GridListViewWrapper } from '@iso/components/Algolia/AlgoliaComponent.style';
import ecommerceActions from '@iso/redux/ecommerce/actions';

const { addToCart, changeViewTopbarCart } = ecommerceActions;

export default function Hit({ hit }) {
  const [addCartLoading, setAddCartLoading] = React.useState(false);
  const { view, productQuantity } = useSelector(state => state.Ecommerce);
  const dispatch = useDispatch();
  const className =
    view === 'gridView' ? 'isoAlgoliaGrid GridView' : 'isoAlgoliaGrid ListView';
  let addedTocart = false;
  productQuantity.forEach(product => {
    if (product.objectID === hit.objectID) {
      addedTocart = true;
    }
  });
  return (
    <GridListViewWrapper className={className}>
      <div className="isoAlGridImage">
        <img alt="#" src={hit.image} />
        {!addedTocart ? (
          <Button
            onClick={() => {
              setAddCartLoading(true);
              const update = () => {
                dispatch(addToCart(hit));
                setAddCartLoading(false);
              };
              setTimeout(update, 1500);
            }}
            type="primary"
            className="isoAlAddToCart"
            loading={addCartLoading}
          >
            <i className="ion-android-cart" />
            Add to cart
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(changeViewTopbarCart(true))}
            type="primary"
            className="isoAlAddToCart"
          >
            View Cart
          </Button>
        )}
      </div>
      <div className="isoAlGridContents">
        <div className="isoAlGridName">
          <Highlight attributeName="name" hit={hit} />
        </div>

        <div className="isoAlGridPriceRating">
          <span className="isoAlGridPrice">${hit.price}</span>

          <div className="isoAlGridRating">
            <Rate disabled count={6} defaultValue={hit.rating} />
          </div>
        </div>

        <div className="isoAlGridDescription">
          <Snippet attributeName="description" hit={hit} />
        </div>
      </div>
    </GridListViewWrapper>
  );
}
