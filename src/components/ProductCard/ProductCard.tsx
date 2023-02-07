import React from 'react';
import './ProductCard.scss';

type ProductCardProps = {
  img?: string;
  size?: 'default'|'small';
  title?: string;
  disabled?: boolean;
}

// export const ProductCard  = ({
//     disabled = false,
//     size = 'default',
//     title,
//     ...props
//   }: ProductCardProps) => {
const ProductCard: React.FunctionComponent<ProductCardProps> = (props: ProductCardProps) => {
  const mode = props.disabled ? 'disabled' : '';
  
  return (
    <div className='card'>
      <div className={`product-card--${props.size} ? product-card : ''`} {...props}>
        <img className={mode} src={props.img} alt={`product pic ${props.img}`} />
        <div className='product-description'>
          <h2 className='product-title'>{props.title}</h2>
          <div className='product-price'>
            Rp 3.550.000
          </div>
          <div className='discount'>
            <span className='discount--value'>Rp 1.000.000</span>
            <span className='discount--percentage'>50%</span>
          </div>

          { props.disabled ? (
              <button className='button disabled'>Out of stock</button>
            ) : (
              <button className='button primary'>Add to bag</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;